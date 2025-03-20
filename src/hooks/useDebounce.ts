import { useEffect, useState } from "react";

interface useDebounceProps {
  setSearchText: (text: string) => void;
}

export default function useDebounce({ setSearchText }: useDebounceProps) {
  const [debouncedValue, setDebouncedValue] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchText(debouncedValue);
    }, 1000);
    return () => clearTimeout(timer);
  }, [debouncedValue, setSearchText]);

  return { debouncedValue, setDebouncedValue };
}
