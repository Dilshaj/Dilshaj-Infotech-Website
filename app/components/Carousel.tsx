"use client";

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { Layers, FileText, Circle, Layout, Code } from 'lucide-react';
import Image from 'next/image';
import './Carousel.css';

const DEFAULT_ITEMS = [
    {
        title: 'Text Animations',
        description: 'Cool text animations for your projects.',
        id: 1,
        image: '/home/service_app_web_dev.png',
        icon: <FileText className="carousel-icon" />
    },
    {
        title: 'Animations',
        description: 'Smooth animations for your projects.',
        id: 2,
        image: '/home/service_ui_ux_design.png',
        icon: <Circle className="carousel-icon" />
    },
    {
        title: 'Components',
        description: 'Reusable components for your projects.',
        id: 3,
        image: '/home/service_digital_marketing.png',
        icon: <Layers className="carousel-icon" />
    },
    {
        title: 'Backgrounds',
        description: 'Beautiful backgrounds and patterns for your projects.',
        id: 4,
        image: '/home/service_banking_software.png',
        icon: <Layout className="carousel-icon" />
    },
    {
        title: 'Common UI',
        description: 'Common UI components are coming soon!',
        id: 5,
        image: '/home/service_data_analyst.png',
        icon: <Code className="carousel-icon" />
    }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 40, damping: 14, restDelta: 0.1 };

// @ts-ignore
function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
    const range = [
        -(index + 1) * trackItemOffset,
        -index * trackItemOffset,
        -(index - 1) * trackItemOffset
    ];

    // 3D Transformations (Optimized for mobile)
    const rotateY = useTransform(x, range, [30, 0, -30], { clamp: false });
    const z = useTransform(x, range, [-400, 0, -400], { clamp: false });
    const scale = useTransform(x, range, [0.88, 1, 0.88], { clamp: false });
    const opacity = useTransform(x, range, [0.55, 1, 0.55], { clamp: false });

    return (
        <motion.div
            key={`${item?.id ?? index}-${index}`}
            className={`carousel-item ${round ? 'round' : ''}`}
            style={{
                width: itemWidth,
                height: '100%',
                rotateY,
                z,
                scale,
                opacity,
                ...(round && { borderRadius: '50%' }),
                transformStyle: 'preserve-3d'
            }}
            transition={transition}
        >
            {item.image && (
                <div className="carousel-item-image">
                    <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="carousel-item-overlay" />

            <div className={`carousel-item-header ${round ? 'round' : ''}`}>
                <span className="carousel-icon-container">{item.icon}</span>
            </div>
            <div className="carousel-item-content">
                <div className="carousel-item-title">{item.title}</div>
                <p className="carousel-item-description">{item.description}</p>
            </div>
        </motion.div>
    );
}

export default function Carousel({
    items = DEFAULT_ITEMS as any,
    baseWidth = 300,
    height = '500px',
    autoplay = false,
    autoplayDelay = 3000,
    pauseOnHover = false,
    loop = false,
    round = false,
    externalIndex = null,
    onChange = null,
}: {
    items?: any[];
    baseWidth?: number;
    height?: string;
    autoplay?: boolean;
    autoplayDelay?: number;
    pauseOnHover?: boolean;
    loop?: boolean;
    round?: boolean;
    externalIndex?: number | null;
    onChange?: ((index: number) => void) | null;
}) {
    const containerPadding = 0;
    const finalWidth = baseWidth || 300;
    const itemWidth = finalWidth - containerPadding * 2;
    const trackItemOffset = itemWidth + GAP;
    const itemsForRender = useMemo(() => {
        if (!loop) return items;
        if (items.length === 0) return [];
        return [items[items.length - 1], ...items, items[0]];
    }, [items, loop]);

    const [position, setPosition] = useState(loop ? 1 : 0);
    const x = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isJumping, setIsJumping] = useState(false);

    // Using refs to prevent feedback loops and infinite re-renders
    const isInternalUpdate = useRef(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // 1. Sync internal state to externalIndex (Triggered by parent)
    useEffect(() => {
        if (externalIndex !== null && externalIndex !== undefined) {
            if (!loop) {
                if (externalIndex !== position) {
                    isInternalUpdate.current = true;
                    setPosition(externalIndex);
                }
                return;
            }

            // --- INFINITE LOOP SHORTEST PATH LOGIC ---
            // 0-based target in the original array
            const targetBase = externalIndex + 1;

            // We have 3 possible visual matches in an infinite track [cloneLast, ...items, cloneFirst]
            // We want to pick the one closest to the current position to ensure the "shortest path"
            const options = [
                targetBase - items.length, // Match in a preceding conceptual set
                targetBase,                // Match in the current set
                targetBase + items.length  // Match in a succeeding conceptual set
            ];

            // Filter out options that are too far out of bounds (keep it simple)
            const validOptions = options.filter(opt => opt >= -1 && opt <= items.length + 2);

            // Find the option with the smallest absolute distance to CURRENT position
            let bestTarget = targetBase;
            let minDistance = Math.abs(position - targetBase);

            validOptions.forEach(opt => {
                const dist = Math.abs(position - opt);
                if (dist < minDistance) {
                    minDistance = dist;
                    bestTarget = opt;
                }
            });

            if (bestTarget !== position) {
                isInternalUpdate.current = true;
                setPosition(bestTarget);
            }
        }
    }, [externalIndex, loop, items.length]);

    // 2. Initial positioning and tracking trackItemOffset changes
    useEffect(() => {
        const currentPos = loop ? (externalIndex !== null ? externalIndex + 1 : 1) : (externalIndex !== null ? externalIndex : 0);
        // Important: Only set the value, don't trigger a new render if position is already correct
        x.set(-currentPos * trackItemOffset);
    }, [trackItemOffset, items.length, loop]);

    // 3. Sync external state to internal position (Triggered by internal move)
    useEffect(() => {
        if (onChange) {
            // Only report if it wasn't triggered by an external update
            if (!isInternalUpdate.current) {
                const internalIndex = items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);
                onChange(internalIndex);
            }
        }
        // Reset the flag for the next cycle
        isInternalUpdate.current = false;
    }, [position, onChange, loop, items.length]);

    // Hover detection
    useEffect(() => {
        if (pauseOnHover && containerRef.current) {
            const container = containerRef.current;
            const handleMouseEnter = () => setIsHovered(true);
            const handleMouseLeave = () => setIsHovered(false);
            container.addEventListener('mouseenter', handleMouseEnter);
            container.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                container.removeEventListener('mouseenter', handleMouseEnter);
                container.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, [pauseOnHover]);

    // Autoplay logic
    useEffect(() => {
        if (!autoplay || itemsForRender.length <= 1) return undefined;
        if (pauseOnHover && isHovered) return undefined;

        const timer = setInterval(() => {
            setPosition((prev: any) => {
                const next = prev + 1;
                return loop ? next : next % items.length;
            });
        }, autoplayDelay);

        return () => clearInterval(timer);
    }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length, loop, items.length]);

    const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

    const handleAnimationComplete = () => {
        if (!loop || itemsForRender.length <= 1) return;

        const lastCloneIndex = itemsForRender.length - 1;

        if (position >= lastCloneIndex) {
            setIsJumping(true);
            const target = 1;
            setPosition(target);
            x.set(-target * trackItemOffset);
            setTimeout(() => setIsJumping(false), 50);
        } else if (position <= 0) {
            setIsJumping(true);
            const target = items.length;
            setPosition(target);
            x.set(-target * trackItemOffset);
            setTimeout(() => setIsJumping(false), 50);
        }
    };

    const handleDragEnd = (_: any, info: any) => {
        const { offset, velocity } = info;
        const direction =
            offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
                ? 1
                : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
                    ? -1
                    : 0;

        if (direction === 0) return;

        setPosition((prev: any) => {
            const next = prev + direction;
            const max = itemsForRender.length - 1;
            return Math.max(0, Math.min(next, max));
        });
    };

    const dragProps = loop
        ? {}
        : {
            dragConstraints: {
                left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
                right: 0
            }
        };

    const activeIndex =
        items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

    return (
        <div
            ref={containerRef}
            className={`carousel-container ${round ? 'round' : ''}`}
            style={{
                width: `${baseWidth}px`,
                height: height,
                ...(round && { borderRadius: '50%' })
            }}
        >
            <motion.div
                className="carousel-track"
                drag="x"
                {...dragProps}
                style={{
                    width: itemWidth,
                    height: '100%',
                    gap: `${GAP}px`,
                    perspective: 2000,
                    perspectiveOrigin: "50% 50%",
                    x
                }}
                onDragEnd={handleDragEnd}
                animate={{ x: -(position * trackItemOffset) }}
                transition={effectiveTransition}
                onAnimationComplete={handleAnimationComplete}
            >
                {itemsForRender.map((item: any, index: any) => (
                    <CarouselItem
                        key={`${item?.id ?? index}-${index}`}
                        item={item}
                        index={index}
                        itemWidth={itemWidth}
                        round={round}
                        trackItemOffset={trackItemOffset}
                        x={x}
                        transition={effectiveTransition}
                    />
                ))}
            </motion.div>
        </div>
    );
}
