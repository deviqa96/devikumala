import { useState, useEffect } from 'react'

export function useIntersectionObserver(
  elementRef: any,
  { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) {
  const [entry, setEntry] = useState<any>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry: any = ([entry]: any) => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen]);

  return entry;
}

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<any>({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export function getDateString(date_at: string) {
  const monthName = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"]

  var date = new Date(date_at);
  var year = date.getFullYear();
  var month = date.getMonth();
  var dateNumber = date.getDate();
  return `${dateNumber} ${monthName[month].slice(0, 3)}, ${year}`
}

export function getCategoryTitle(cat:string) {
  const title : any = {
    pernikahan: "Pernikahan",
    karir: "Karir",
    'ibu-dan-bayi': "Ibu & Bayi",
    hampers: "Hampers",
    'budget-planner' : "Budget Planner",
    'graphic-design' : "Graphic Design",
    'template' : "Template"
  }
  return title[cat];
}