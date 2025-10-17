import { useEffect, useRef } from "react";
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
}

const InfiniteCarousel = ({ direction = "left" }: InfiniteCarouselProps) => {
  const movies = [movie1, movie2, movie3, movie4, movie5, movie6, movie7, movie8];
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const speed = direction === "left" ? 0.5 : -0.5;

    const animate = () => {
      scrollPosition += speed;
      
      const itemWidth = 208; // 192px (w-48) + 16px (gap-4)
      const totalWidth = itemWidth * movies.length;
      
      if (direction === "left") {
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
      } else {
        if (scrollPosition <= -totalWidth) {
          scrollPosition = 0;
        }
      }
      
      scrollContainer.style.transform = `translateX(${-scrollPosition}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction, movies.length]);

  // Duplicar 4 vezes para garantir continuidade (32 capas)
  const duplicatedMovies = [...movies, ...movies, ...movies, ...movies];

  return (
    <div className="overflow-hidden py-8">
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
              alt={`Movie ${(index % movies.length) + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
