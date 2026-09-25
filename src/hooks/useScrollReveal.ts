import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to animate elements
 * with class `reveal-fade`, `reveal-left`, `reveal-right`, or `reveal-scale`
 * into visibility by adding `.is-visible` when they enter the viewport.
 *
 * Call once at the App level or per-section.
 */
export function useScrollReveal(deps: unknown[] = []) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current?.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll(
      '.reveal-fade, .reveal-left, .reveal-right, .reveal-scale'
    );
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
