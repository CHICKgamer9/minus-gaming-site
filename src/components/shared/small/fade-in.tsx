'use client'
import { useEffect, useRef, useState } from "react";

export default function FadeInOnView({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // stop observing after fade-in triggered
        }
      },
      {
        threshold: 0.1, // Trigger when 10% visible
      }
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className={isVisible ? "fade-in" : ""}>
      {children}
    </div>
  );
}
