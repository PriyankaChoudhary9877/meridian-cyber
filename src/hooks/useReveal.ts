import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useReveal(amount: number = 0.2) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount });
  return { ref, inView };
}
