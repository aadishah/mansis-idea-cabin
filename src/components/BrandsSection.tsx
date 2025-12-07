import flipkartLogo from "@/assets/brands/flipkart.avif";
import flipkartMinutesLogo from "@/assets/brands/flipkart-minutes.webp";
import asianPaintsLogo from "@/assets/brands/asian-paints.jpg";
import bajajAllianzLogo from "@/assets/brands/bajaj-allianz.png";
import olaLogo from "@/assets/brands/ola.png";
import linkedinLogo from "@/assets/brands/linkedin.png";
import ultratechLogo from "@/assets/brands/ultratech.png";
import dream11Logo from "@/assets/brands/dream11.png";
import lenovoLogo from "@/assets/brands/lenovo.png";
import diataalLogo from "@/assets/brands/diataal.png";
import ceatLogo from "@/assets/brands/ceat.svg";
import hdfcLogo from "@/assets/brands/hdfc.png";
import tideLogo from "@/assets/brands/tide.jpeg";
import arielLogo from "@/assets/brands/ariel.jpg";
import tooYummLogo from "@/assets/brands/too-yumm.webp";

type Brand = {
  id: number;
  name: string;
  logo: string;
};

const brands: Brand[] = [
  { id: 1, name: "Flipkart", logo: flipkartLogo },
  { id: 2, name: "Flipkart Minutes", logo: flipkartMinutesLogo },
  { id: 3, name: "Asian Paints", logo: asianPaintsLogo },
  { id: 4, name: "Bajaj Allianz", logo: bajajAllianzLogo },
  { id: 5, name: "Ola", logo: olaLogo },
  { id: 6, name: "LinkedIn", logo: linkedinLogo },
  { id: 7, name: "Ultratech", logo: ultratechLogo },
  { id: 8, name: "Dream11", logo: dream11Logo },
  { id: 9, name: "Lenovo", logo: lenovoLogo },
  { id: 10, name: "Diataal", logo: diataalLogo },
  { id: 11, name: "CEAT", logo: ceatLogo },
  { id: 12, name: "HDFC Bank", logo: hdfcLogo },
  { id: 13, name: "Tide", logo: tideLogo },
  { id: 14, name: "Ariel", logo: arielLogo },
  { id: 15, name: "Too Yumm!", logo: tooYummLogo },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-10">
          {brands.map((brand, index) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-6 bg-card rounded-2xl border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-warm group animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="text-center w-full h-20 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="w-full h-full object-contain transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
