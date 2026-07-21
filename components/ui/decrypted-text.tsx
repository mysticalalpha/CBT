"use client";

import { useEffect, useState, useRef, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface DecryptedTextProps extends HTMLMotionProps<"span"> {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: "start" | "end" | "center";
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  encryptedClassName?: string;
  parentClassName?: string;
  animateOn?: "view" | "hover" | "inViewHover" | "click";
  clickMode?: "once" | "toggle";
}

type Direction = "forward" | "reverse";

export default function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = "start",
  useOriginalCharsOnly = false,
  characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
  className = "",
  parentClassName = "",
  encryptedClassName = "",
  animateOn = "hover",
  clickMode = "once",
  ...props
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState<string>(text);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);

  const containerRef = useRef<HTMLSpanElement>(null);
  const orderRef = useRef<number[]>([]);
  const pointerRef = useRef<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const availableChars = useMemo<string[]>(() => {
    return useOriginalCharsOnly
      ? Array.from(new Set(text.split(""))).filter((char) => char !== " ")
      : characters.split("");
  }, [useOriginalCharsOnly, text, characters]);

  const shuffleText = useCallback(
    (originalText: string, currentRevealed: Set<number>) => {
      return originalText
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (currentRevealed.has(i)) return originalText[i];
          return availableChars[Math.floor(Math.random() * availableChars.length)];
        })
        .join("");
    },
    [availableChars]
  );

  const computeOrder = useCallback(
    (len: number): number[] => {
      const order: number[] = [];
      if (len <= 0) return order;
      if (revealDirection === "start") {
        for (let i = 0; i < len; i++) order.push(i);
        return order;
      }
      if (revealDirection === "end") {
        for (let i = len - 1; i >= 0; i--) order.push(i);
        return order;
      }
      // center
      const middle = Math.floor(len / 2);
      let offset = 0;
      while (order.length < len) {
        if (offset % 2 === 0) {
          const idx = middle + offset / 2;
          if (idx >= 0 && idx < len) order.push(idx);
        } else {
          const idx = middle - Math.ceil(offset / 2);
          if (idx >= 0 && idx < len) order.push(idx);
        }
        offset++;
      }
      return order;
    },
    [revealDirection]
  );

  const startAnimation = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setHasAnimated(true);

    const len = text.length;
    orderRef.current = computeOrder(len);
    pointerRef.current = 0;

    const run = () => {
      const currentRevealed = new Set<number>();
      let iterations = 0;

      if (intervalRef.current) clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
        if (sequential) {
          const numToReveal = pointerRef.current + 1;
          for (let i = 0; i < numToReveal; i++) {
            currentRevealed.add(orderRef.current[i]);
          }

          setDisplayText(shuffleText(text, currentRevealed));

          if (pointerRef.current < len) {
            pointerRef.current++;
          } else {
            clearInterval(intervalRef.current!);
            setDisplayText(text);
            setIsAnimating(false);
          }
        } else {
          setDisplayText(shuffleText(text, currentRevealed));
          iterations++;

          if (iterations >= maxIterations) {
            clearInterval(intervalRef.current!);
            setDisplayText(text);
            setIsAnimating(false);
          }
        }
      }, speed);
    };

    run();
  }, [text, speed, maxIterations, sequential, computeOrder, shuffleText, isAnimating]);

  useEffect(() => {
    if (animateOn === "view") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, hasAnimated, startAnimation]);

  useEffect(() => {
    if (animateOn === "inViewHover") {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !hasAnimated) {
            startAnimation();
          }
        },
        { threshold: 0.1 }
      );

      if (containerRef.current) observer.observe(containerRef.current);
      return () => observer.disconnect();
    }
  }, [animateOn, hasAnimated, startAnimation]);

  const handleMouseEnter = () => {
    if (animateOn === "hover" || animateOn === "inViewHover") {
      startAnimation();
    }
  };

  const handleClick = () => {
    if (animateOn === "click") {
      startAnimation();
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <motion.span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onClick={handleClick}
      className={`inline-block whitespace-pre-wrap cursor-default ${parentClassName}`}
      {...props}
    >
      <span className={className}>
        {displayText}
      </span>
    </motion.span>
  );
}
