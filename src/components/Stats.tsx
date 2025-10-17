const Stats = () => {
  const stats = [
    { number: "+4.000", label: "canais abertos e fechados" },
    { number: "+47.000", label: "filmes e séries" },
    { number: "+500", label: "novelas" },
  ];

  return (
    <section className="py-12 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-4xl md:text-5xl font-black text-primary-foreground mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-primary-foreground/90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
