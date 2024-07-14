import { useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  const setElement = (element) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (element) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          setIsIntersecting(entry.isIntersecting);
        },
        { ...options }
      );

      observerRef.current.observe(element);
    }
  };

  return [isIntersecting, setElement];
};

export default useIntersectionObserver;
