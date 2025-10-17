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

    let scrollAmount = 0;
    const speed = direction === "left" ? 1 : -1;

    const scroll = () => {
      scrollAmount += speed;
      
      if (direction === "left") {
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      } else {
        if (scrollAmount <= -scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      
      scrollContainer.style.transform = `translateX(${-scrollAmount}px)`;
    };

    const intervalId = setInterval(scroll, 20);

    return () => clearInterval(intervalId);
  }, [direction]);

  // Duplicar os itens para criar o efeito infinito
  const duplicatedMovies = [...movies, ...movies, ...movies];

  return (
    <div className="overflow-hidden py-8">
      <div
        ref={scrollRef}
        className="flex gap-4"
        style={{ width: "max-content" }}
      >
        {duplicatedMovies.map((movie, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-72 rounded-lg overflow-hidden hover:scale-105 transition-smooth"
          >
            <img
              src={movie}
              alt={`Movie ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
