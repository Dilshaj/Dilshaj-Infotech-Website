"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * HomeScrollAnimations
 * Mounts GSAP ScrollTrigger animations for every home-page section.
 * Targets section wrapper elements by their `data-section` attribute
 * (added to each section in page.tsx) and animates their children
 * using structural selectors — no extra class names needed on children.
 */
export default function HomeScrollAnimations() {
    useEffect(() => {
        // ─── Helper ────────────────────────────────────────────────────────
        const from = (
            targets: string | Element | Element[],
            fromVars: gsap.TweenVars,
            toVars: gsap.TweenVars,
            trigger: string | Element,
            start = "top 82%"
        ) => {
            const els =
                typeof targets === "string"
                    ? gsap.utils.toArray<Element>(targets)
                    : Array.isArray(targets)
                        ? targets
                        : [targets];
            if (!els.length) return;
            gsap.fromTo(els, fromVars, {
                ...toVars,
                scrollTrigger: {
                    trigger,
                    start,
                    toggleActions: "play none none none",
                },
            });
        };

        // ─── 1. DARK STATS / IMPACT CARD SECTION ───────────────────────────
        const statsSection = document.querySelector('[data-section="stats"]');
        if (statsSection) {
            // Ribbon banner
            const ribbon = statsSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, statsSection);

            // Impact card — the big white card
            const impactCard = statsSection.querySelector(".impact-card");
            if (impactCard) from(impactCard, { y: 60, opacity: 0, scale: 0.97 }, { y: 0, opacity: 1, scale: 1, duration: 0.85, ease: "power3.out" }, statsSection);

            // Stat number items in the grid
            const statItems = gsap.utils.toArray<Element>(statsSection.querySelectorAll(".stat-number-item"));
            if (statItems.length) {
                gsap.fromTo(statItems, { y: 40, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: statsSection, start: "top 78%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 2. SERVICES SECTION ───────────────────────────────────────────
        const servicesSection = document.querySelector('[data-section="services"]');
        if (servicesSection) {
            const ribbon = servicesSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, servicesSection);

            const h2 = servicesSection.querySelector("h2");
            if (h2) from(h2, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, ease: "power3.out" }, servicesSection);

            const imageCard = servicesSection.querySelector(".services-image-card");
            if (imageCard) from(imageCard, { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" }, servicesSection, "top 78%");

            const listItems = gsap.utils.toArray<Element>(servicesSection.querySelectorAll(".service-list-item"));
            if (listItems.length) {
                gsap.fromTo(listItems, { x: 50, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: "power3.out",
                    scrollTrigger: { trigger: servicesSection, start: "top 78%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 3. PRODUCTS SECTION ───────────────────────────────────────────
        const productsSection = document.querySelector('[data-section="products"]');
        if (productsSection) {
            const badge = productsSection.querySelector(".products-badge-row");
            if (badge) from(badge, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, productsSection);

            const h2 = productsSection.querySelector("h2");
            if (h2) from(h2, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, delay: 0.1, ease: "power3.out" }, productsSection);

            const sidebar = productsSection.querySelector(".products-sidebar");
            if (sidebar) from(sidebar, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, productsSection, "top 78%");

            const detailCard = productsSection.querySelector(".product-detail-card");
            if (detailCard) from(detailCard, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" }, productsSection, "top 78%");
        }

        // ─── 4. TECHNOLOGIES SECTION ───────────────────────────────────────
        const techSection = document.querySelector('[data-section="technologies"]');
        if (techSection) {
            const ribbon = techSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, techSection);

            const h2 = techSection.querySelector("h2");
            if (h2) from(h2, { y: 70, opacity: 0 }, { y: 0, opacity: 1, duration: 0.85, ease: "power3.out" }, techSection);

            const tabs = gsap.utils.toArray<Element>(techSection.querySelectorAll(".tech-tab-item"));
            if (tabs.length) {
                gsap.fromTo(tabs, { x: -45, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.09, ease: "power3.out",
                    scrollTrigger: { trigger: techSection, start: "top 78%", toggleActions: "play none none none" }
                });
            }

            const detailCard = techSection.querySelector(".tech-detail-card");
            if (detailCard) from(detailCard, { scale: 0.93, y: 30, opacity: 0 }, { scale: 1, y: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, techSection, "top 72%");
        }

        // ─── 5. WHY DILSHAJ / ACCELERATION SECTION ─────────────────────────
        const accelSection = document.querySelector('[data-section="acceleration"]');
        if (accelSection) {
            const label = accelSection.querySelector(".section-label");
            if (label) from(label, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, accelSection);

            const h2 = accelSection.querySelector("h2");
            if (h2) from(h2, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, delay: 0.1, ease: "power3.out" }, accelSection);

            const cards = gsap.utils.toArray<Element>(accelSection.querySelectorAll(".accel-card"));
            if (cards.length) {
                gsap.fromTo(cards, { y: 70, opacity: 0, scale: 0.96 }, {
                    y: 0, opacity: 1, scale: 1, duration: 0.7, stagger: { amount: 0.5, from: "start" }, ease: "power3.out",
                    scrollTrigger: { trigger: accelSection, start: "top 78%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 6. CAREERS SECTION ────────────────────────────────────────────
        const careersSection = document.querySelector('[data-section="careers"]');
        if (careersSection) {
            const label = careersSection.querySelector(".section-label");
            if (label) from(label, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, careersSection);

            const h2 = careersSection.querySelector("h2");
            if (h2) from(h2, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power3.out" }, careersSection);

            const cards = gsap.utils.toArray<Element>(careersSection.querySelectorAll(".career-card"));
            if (cards.length) {
                gsap.fromTo(cards, { y: 60, opacity: 0, scale: 0.95 }, {
                    y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.07, ease: "back.out(1.2)",
                    scrollTrigger: { trigger: careersSection, start: "top 80%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 7. BLOG SECTION ───────────────────────────────────────────────
        const blogSection = document.querySelector('[data-section="blog"]');
        if (blogSection) {
            const ribbon = blogSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, blogSection);

            const h2 = blogSection.querySelector("h2");
            if (h2) from(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.15, ease: "power3.out" }, blogSection);

            const cta = blogSection.querySelector(".blog-cta");
            if (cta) from(cta, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.65, delay: 0.25, ease: "back.out(1.4)" }, blogSection);

            const cards = gsap.utils.toArray<Element>(blogSection.querySelectorAll(".blog-card"));
            if (cards.length) {
                gsap.fromTo(cards, { y: 70, opacity: 0 }, {
                    y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out",
                    scrollTrigger: { trigger: blogSection, start: "top 78%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 8. TESTIMONIALS SECTION ───────────────────────────────────────
        const testimonialsSection = document.querySelector('[data-section="testimonials"]');
        if (testimonialsSection) {
            const ribbon = testimonialsSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, testimonialsSection);

            const h2 = testimonialsSection.querySelector("h2");
            if (h2) from(h2, { y: 55, opacity: 0 }, { y: 0, opacity: 1, duration: 0.75, delay: 0.15, ease: "power3.out" }, testimonialsSection);

            const cards = gsap.utils.toArray<Element>(testimonialsSection.querySelectorAll(".testimonial-card"));
            if (cards.length) {
                gsap.fromTo(cards, { y: 60, opacity: 0, scale: 0.95 }, {
                    y: 0, opacity: 1, scale: 1, duration: 0.65, stagger: 0.1, ease: "power3.out",
                    scrollTrigger: { trigger: testimonialsSection, start: "top 80%", toggleActions: "play none none none" }
                });
            }
        }

        // ─── 9. FAQ SECTION ────────────────────────────────────────────────
        const faqSection = document.querySelector('[data-section="faq"]');
        if (faqSection) {
            const ribbon = faqSection.querySelector(".ribbon-banner");
            if (ribbon) from(ribbon, { x: -70, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: "power3.out" }, faqSection);

            const h2 = faqSection.querySelector("h2");
            if (h2) from(h2, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, delay: 0.1, ease: "power3.out" }, faqSection);

            const items = gsap.utils.toArray<Element>(faqSection.querySelectorAll(".faq-item"));
            if (items.length) {
                gsap.fromTo(items, { x: -40, opacity: 0 }, {
                    x: 0, opacity: 1, duration: 0.6, stagger: 0.07, ease: "power3.out",
                    scrollTrigger: { trigger: faqSection, start: "top 82%", toggleActions: "play none none none" }
                });
            }
        }

        // Cleanup
        return () => {
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

    return null; // no DOM output
}
