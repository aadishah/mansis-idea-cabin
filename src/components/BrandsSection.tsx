type Brand = {
  id: number;
  name: string;
  logo?: string;
};

const brands: Brand[] = [
  { id: 1, name: "Nike" },
  { id: 2, name: "Coca-Cola" },
  { id: 3, name: "Apple" },
  { id: 4, name: "Amazon" },
  { id: 5, name: "Google" },
  { id: 6, name: "Microsoft" },
  { id: 7, name: "Samsung" },
  { id: 8, name: "Netflix" },
  { id: 9, name: "Spotify" },
  { id: 10, name: "Adobe" },
  { id: 11, name: "Tesla" },
  { id: 12, name: "McDonald's" },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="section-padding bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Brands I've Worked With
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proud to have contributed ideas and campaigns for these incredible brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-8 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-warm group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center w-full">
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={`${brand.name} logo`}
                    className="w-full h-auto max-h-16 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span className="text-2xl font-heading font-bold text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                    {brand.name}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
