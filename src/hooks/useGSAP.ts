import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export const useGSAP = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-title', 
        { 
          opacity: 0, 
          y: 50,
          scale: 0.9
        },
        { 
          opacity: 1, 
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3
        }
      );

      gsap.fromTo('.hero-subtitle', 
        { 
          opacity: 0, 
          y: 30
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.6
        }
      );

      gsap.fromTo('.hero-description', 
        { 
          opacity: 0, 
          y: 30
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 0.9
        }
      );

      gsap.fromTo('.hero-buttons', 
        { 
          opacity: 0, 
          y: 30
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 1,
          ease: "power2.out",
          delay: 1.2
        }
      );

      // Floating stars animation
      gsap.to('.floating-star', {
        y: -20,
        rotation: 360,
        duration: 4,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Section animations with ScrollTrigger
      gsap.utils.toArray('.animate-section').forEach((section: any) => {
        gsap.fromTo(section, 
          { 
            opacity: 0, 
            y: 80
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Card hover animations
      gsap.utils.toArray('.feature-card').forEach((card: any) => {
        const tl = gsap.timeline({ paused: true });
        
        tl.to(card, {
          scale: 1.05,
          y: -10,
          duration: 0.3,
          ease: "power2.out"
        });

        card.addEventListener('mouseenter', () => tl.play());
        card.addEventListener('mouseleave', () => tl.reverse());
      });

      // Prompt cards scroll animation
      gsap.utils.toArray('.prompt-row').forEach((row: any, index: number) => {
        gsap.to(row, {
          x: index % 2 === 0 ? -100 : 100,
          duration: 20,
          ease: "none",
          repeat: -1,
          scrollTrigger: {
            trigger: row,
            start: "top bottom",
            end: "bottom top",
            scrub: 1
          }
        });
      });

      // Image gallery animations
      gsap.utils.toArray('.gallery-image').forEach((img: any, index: number) => {
        gsap.fromTo(img,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: index * 0.1,
            scrollTrigger: {
              trigger: img,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });

      // Audio section play button pulse
      gsap.to('.play-button', {
        scale: 1.1,
        duration: 2,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true
      });

      // Navigation fade in
      gsap.fromTo('.nav-item', 
        { 
          opacity: 0, 
          y: -20
        },
        { 
          opacity: 1, 
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          delay: 0.2
        }
      );

      // Logo animation
      gsap.fromTo('.logo', 
        { 
          opacity: 0, 
          scale: 0.8
        },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.1
        }
      );

      // CTA section background animation
      gsap.to('.cta-bg-element', {
        rotation: 360,
        duration: 20,
        ease: "none",
        repeat: -1
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
};