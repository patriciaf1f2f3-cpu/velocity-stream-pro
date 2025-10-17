import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import movie1 from "@/assets/movie1.jpg";
import movie2 from "@/assets/movie2.jpg";
import movie3 from "@/assets/movie3.jpg";
import movie4 from "@/assets/movie4.jpg";
import movie5 from "@/assets/movie5.jpg";
import movie6 from "@/assets/movie6.jpg";
import movie7 from "@/assets/movie7.jpg";
import movie8 from "@/assets/movie8.jpg";

interface InfiniteCarouselProps {
  direction?: "left" | "right";
  showControls?: boolean;
}

const InfiniteCarousel = ({ direction = "left", showControls = true }: InfiniteCarouselProps) => {
  const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];
  // Build a larger base set (>=24 items) to feel like a full catalog
  const minItems = 24;
  const baseExpanded: string[] = [];
  while (baseExpanded.length < minItems) {
    baseExpanded.push(...movies);
  }
  const baseSet = baseExpanded.slice(0, minItems);
  // Duplicate the base set once to enable seamless looping (A + A)
  const duplicatedMovies = [...baseSet, ...baseSet];

  const scrollRef = useRef<HTMLDivElement>(null);
  const singleSetWidthRef = useRef(0);
  const positionRef = useRef(0);
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const measure = () => {
      // Width of one full set (half the total since we render A + A)
      singleSetWidthRef.current = container.scrollWidth / 2;
      positionRef.current = direction === "left" ? 0 : singleSetWidthRef.current;
      container.style.transform = `translateX(${-positionRef.current}px)`;
    };

    // Measure immediately and also shortly after images load
    const tId = window.setTimeout(measure, 50);
    measure();

    let rafId: number;
    const pxPerFrame = 0.6; // smooth speed
    const delta = direction === "left" ? pxPerFrame : -pxPerFrame;

    const loop = () => {
      positionRef.current += delta;

      if (direction === "left") {
        if (positionRef.current >= singleSetWidthRef.current) {
          positionRef.current = 0;
        }
      } else {
        if (positionRef.current <= 0) {
          positionRef.current = singleSetWidthRef.current;
        }
      }

      container.style.transform = `translateX(${-positionRef.current}px)`;
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);

    const onResize = () => requestAnimationFrame(measure);
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
      clearTimeout(tId);
    };
  }, [direction]);

  // duplicatedMovies já construído acima para loop perfeito


  return (
    <div className="relative overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex gap-4"
        style={{ width: "max-content", willChange: "transform" }}
      >
        {duplicatedMovies.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-72 rounded-lg overflow-hidden hover:scale-105 transition-smooth shadow-lg"
          >
            <img
              src={movie}
              alt={`Capa ${(index % baseSet.length) + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            type="button"
            aria-label="Rolar para a esquerda"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border bg-card/70 text-foreground backdrop-blur px-2 py-2 hover:bg-card transition-smooth"
            onClick={() => {
              if (!scrollRef.current) return;
              positionRef.current = Math.max(0, positionRef.current - 300);
              scrollRef.current.style.transform = `translateX(${-positionRef.current}px)`;
            }}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            aria-label="Rolar para a direita"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 rounded-full border border-border bg-card/70 text-foreground backdrop-blur px-2 py-2 hover:bg-card transition-smooth"
            onClick={() => {
              if (!scrollRef.current) return;
              const max = singleSetWidthRef.current || 0;
              positionRef.current = Math.min(max, positionRef.current + 300);
              scrollRef.current.style.transform = `translateX(${-positionRef.current}px)`;
            }}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default InfiniteCarousel;
