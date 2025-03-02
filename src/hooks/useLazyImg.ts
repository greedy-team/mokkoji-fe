import { useEffect, useRef, useState } from "react";

interface UseLazyImgProps {
  src: string | undefined;
}

export function useLazyImg({ src }: UseLazyImgProps) {
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    if (imgRef.current && !imgSrc) {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            observer?.unobserve(imgRef.current!);
          }
        },
        { threshold: [0.25] }
      );

      if (imgRef.current) {
        observer.observe(imgRef.current);
      }
    }

    return () => {
      if (observer && imgRef.current) {
        observer.disconnect();
      }
    };
  }, [imgRef, imgSrc, src]);

  return { imgSrc, imgRef };
}
