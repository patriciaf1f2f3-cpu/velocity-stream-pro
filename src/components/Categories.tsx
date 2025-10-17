import categoryMovies from "@/assets/category-movies.jpg";
import categorySeries from "@/assets/category-series.jpg";
import categoryAnime from "@/assets/category-anime.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Filmes Incríveis",
      description: "Assista a clássicos, lançamentos e grandes produções vencedoras de prêmios, tudo em alta definição e com uma seleção que agrada a todos os gostos.",
      image: categoryMovies,
    },
    {
      title: "Séries Imperdíveis",
      description: "Descubra séries aclamadas e sucessos do momento, com temporadas completas disponíveis para você maratonar sem limites.",
      image: categorySeries,
      highlight: true,
    },
    {
      title: "Animes Crunchyroll",
      description: "Possuímos uma lista enorme com todos os animes do momento atualizados e em qualidade HD para você maratonar.",
      image: categoryAnime,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-4">
          Conteúdo de <span className="text-primary">qualidade</span>
        </h2>
        <p className="text-xl text-center text-muted-foreground mb-16">
          sem antenas e sem decodificadores
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group cursor-pointer transition-smooth ${
                category.highlight ? "md:scale-105" : ""
              }`}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
              </div>

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-3 text-primary">
                  {category.title}
                </h3>
                <p className="text-sm text-foreground/90">
                  {category.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary transition-smooth rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
