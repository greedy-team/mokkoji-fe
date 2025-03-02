import { useEffect, useRef, useState } from "react";

interface UseLazyImgProps {
    src: string;
}

export function useLazyImg({ src }: UseLazyImgProps) {
    const [imgSrc, setImgSrc] = useState<string | undefined>(undefined);
    const imgRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
        let observer: IntersectionObserver | null = null;

        observer = new IntersectionObserver(
            async ([entry], observer) => {
                if (!entry.isIntersecting) {
                    return;
                }
                setImgSrc(src);
                observer.unobserve(entry.target);
            }, { threshold: [0.1] }
        );

        observer.observe(imgRef.current!);

        return () => {
            if (observer && imgRef.current) {
              observer.disconnect();
            }
        };
    }, [src]);

    return { imgSrc, imgRef };
}