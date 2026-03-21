"use client";

import React, { useLayoutEffect, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollStack.css';

gsap.registerPlugin(ScrollTrigger);

export const ScrollStackItem = ({ children, itemClassName = '' }: { children: React.ReactNode, itemClassName?: string }) => (
    <div className={`scroll-stack-card shadow-2xl ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
    children: React.ReactNode;
    className?: string;
    onActiveIndexChange?: (index: number) => void;
    pinTrigger?: string;
}

const ScrollStack = ({
    children,
    className = '',
    onActiveIndexChange,
    pinTrigger
}: ScrollStackProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastIdxRef = useRef<number>(-1);
    const onActiveIndexChangeRef = useRef(onActiveIndexChange);
    useEffect(() => {
        onActiveIndexChangeRef.current = onActiveIndexChange;
    }, [onActiveIndexChange]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const container = containerRef.current;
            if (!container) return;

            const cards = gsap.utils.toArray<HTMLElement>('.scroll-stack-card');
            if (!cards.length) return;

            // Set initial states for cards to stack
            cards.forEach((card, i) => {
                gsap.set(card, {
                    zIndex: i + 1,
                    transformOrigin: "center top",
                });
            });

            const trigger = pinTrigger ? (document.querySelector(pinTrigger) as HTMLElement) || container : container;

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: trigger,
                    start: "top 10%+=80px", // Accommodate navbar offset
                    end: `+=${cards.length * 80}%`, // Balanced scroll distance for tighter feel
                    pin: true,
                    pinType: "fixed", // Force fixed pinning for reliability
                    pinSpacing: true,
                    anticipatePin: 1,
                    scrub: 0.5, // Faster response for "clean" feel
                    invalidateOnRefresh: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        // Map progress 0-1 to index 0 - (cards.length - 1)
                        const index = Math.min(
                            Math.floor(progress * cards.length),
                            cards.length - 1
                        );
                        if (index !== lastIdxRef.current) {
                            lastIdxRef.current = index;
                            if (onActiveIndexChangeRef.current) {
                                onActiveIndexChangeRef.current(index);
                            }
                        }
                    },
                }
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                // The stacking animation: slide up, fade in, and subtle 3D tilt
                tl.fromTo(card,
                    {
                        yPercent: 100,
                        scale: 1.05, // Slightly larger entry
                        opacity: 0,
                        rotateX: -15,
                    },
                    {
                        yPercent: 0,
                        scale: 1,
                        opacity: 1,
                        rotateX: 0,
                        ease: "power2.out",
                        duration: 1
                    },
                    i - 1
                );

                // Slightly push back the card underneath with a "depth" effect
                if (i > 0) {
                    tl.to(cards[i - 1], {
                        scale: 0.88, // More pronounced push-back
                        opacity: 0.3, // Fade out more for focus
                        filter: "blur(12px)", // Stronger blur
                        yPercent: -10, // Move up slightly
                        rotateX: 10,
                        ease: "power2.inOut",
                        duration: 1
                    }, i - 1);
                }
            });

            // Ensure ScrollTrigger refreshes after initial layout
            setTimeout(() => {
                ScrollTrigger.refresh();
            }, 100);
        }, containerRef);

        return () => ctx.revert();
    }, [onActiveIndexChange, pinTrigger]);

    return (
        <div className={`scroll-stack-container bg-transparent ${className}`.trim()} ref={containerRef}>
            <div className="scroll-stack-inner-wrapper relative w-full h-[550px] md:h-[650px]" style={{ perspective: '1200px' }}>
                {children}
            </div>
        </div>
    );
};

export default ScrollStack;
