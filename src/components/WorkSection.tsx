import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import olaNzThumbnail from "@/assets/work/ola-nz-thumbnail.png";
import diataalThumbnail from "@/assets/work/diataal-thumbnail.png";
import linkedinThumbnail from "@/assets/work/linkedin-thumbnail.png";
import utecThumbnail from "@/assets/work/utec-thumbnail.png";
import utecAntiTermiteThumbnail from "@/assets/work/utec-anti-termite-thumbnail.png";
import tideThumbnail from "@/assets/work/tide-thumbnail.png";
import tideBanterThumbnail from "@/assets/work/tide-banter-thumbnail.png";
import arielThumbnail from "@/assets/work/ariel-thumbnail.png";
import ceatThumbnail from "@/assets/work/ceat-thumbnail.png";
import ceatIndependenceThumbnail from "@/assets/work/ceat-independence-thumbnail.png";
import flipkartMinutesThumbnail from "@/assets/work/flipkart-minutes-thumbnail.png";
import flipkartGaneshThumbnail from "@/assets/work/flipkart-ganesh-thumbnail.png";
import asianPaintsThumbnail from "@/assets/work/asian-paints-thumbnail.png";
import tooYummThumbnail from "@/assets/work/too-yumm-thumbnail.png";
import milanStambhThumbnail from "@/assets/work/milan-stambh-thumbnail.png";
import dream11Thumbnail from "@/assets/work/dream11-thumbnail.png";
import valentinesBagThumbnail from "@/assets/work/valentines-bag-thumbnail.png";
import monumentalSaleThumbnail from "@/assets/work/monumental-sale-thumbnail.png";
import newYearsFilmThumbnail from "@/assets/work/new-years-film-thumbnail.png";
import bigSaleSmallThingsThumbnail from "@/assets/work/big-sale-small-things-thumbnail.png";

type WorkItem = {
  id: number;
  brand: string;
  title: string;
  category: string[];
  hook?: string;
  thumbnail: string;
  url: string;
};

const workItems: WorkItem[] = [
  {
    id: 1,
    brand: "Ola NZ",
    title: "Ready Before Your Are",
    category: ["Digital"],
    thumbnail: olaNzThumbnail,
    url: "https://www.youtube.com/watch?v=I3hqYrm1xTo",
  },
  {
    id: 2,
    brand: "Diataal",
    title: "Health Ka Daily Investment",
    category: ["Digital"],
    thumbnail: diataalThumbnail,
    url: "https://www.youtube.com/watch?v=MVpdGg32IPg",
  },
  {
    id: 3,
    brand: "LinkedIn",
    title: "Job Search and Professional Network",
    category: ["Digital"],
    thumbnail: linkedinThumbnail,
    url: "https://www.behance.net/gallery/144906827/LinkedIn-2022?tracking_source=search_projects%7Csatyajeet%20more",
  },
  {
    id: 4,
    brand: "Utec",
    title: "Mamaji Ke Bhi Mamaji",
    category: ["Digital"],
    thumbnail: utecThumbnail,
    url: "https://www.youtube.com/watch?v=tuO7DM6dvlI",
  },
  {
    id: 5,
    brand: "Utec",
    title: "Mamaji Ke Bhi Mamaji: Anti Termite Treatment",
    category: ["Digital"],
    thumbnail: utecAntiTermiteThumbnail,
    url: "https://www.youtube.com/watch?v=07cyTw-8vSE",
  },
  {
    id: 6,
    brand: "Tide",
    title: "International Day of Happiness",
    category: ["Social"],
    thumbnail: tideThumbnail,
    url: "https://www.instagram.com/p/CqArjApoG6W/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 7,
    brand: "Tide",
    title: "Contextual Brand Banter",
    category: ["Social"],
    thumbnail: tideBanterThumbnail,
    url: "https://www.instagram.com/p/Cm_yjvNhbYa/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 8,
    brand: "Ariel",
    title: "Moment Marketing",
    category: ["Social"],
    thumbnail: arielThumbnail,
    url: "https://www.instagram.com/p/Cjhla3pBGti/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 9,
    brand: "Ceat",
    title: "Topical",
    category: ["Social"],
    thumbnail: ceatThumbnail,
    url: "https://www.instagram.com/p/CuOBzb-B8M1/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 10,
    brand: "Ceat",
    title: "Independence Day Film",
    category: ["Digital"],
    thumbnail: ceatIndependenceThumbnail,
    url: "https://www.instagram.com/reel/Cv8mXrnoxAS/?igshid=MzRlODBiNWFlZA%3D%3D",
  },
  {
    id: 11,
    brand: "Flipkart Minutes",
    title: "iPhone 17 Launch Hijack",
    category: ["Experiential"],
    thumbnail: flipkartMinutesThumbnail,
    url: "https://www.linkedin.com/posts/pratikshetty_ordered-delivered-shot-outdoor-up-outside-activity-7374667010489774082-hH-_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 12,
    brand: "Flipkart Minutes",
    title: "Ganesh Chaturthi Film",
    category: ["Digital"],
    thumbnail: flipkartGaneshThumbnail,
    url: "https://www.youtube.com/watch?v=tv_oV6l3iU4",
  },
  {
    id: 13,
    brand: "Asian Paints",
    title: "Damp Proof Cricket Pitch",
    category: ["Brand Placement"],
    thumbnail: asianPaintsThumbnail,
    url: "https://www.linkedin.com/posts/fcbind_fcb-fcbindia-growthgloryguts-ugcPost-7355851163520438273-viaU?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 14,
    brand: "Too Yumm!",
    title: "Too Yumm To Cheer",
    category: ["Experiential", "Award Winning"],
    thumbnail: tooYummThumbnail,
    url: "https://www.linkedin.com/posts/parth-chhatrapati-912622200_too-yumm-to-cheer-ugcPost-7318654833433989122-FSM8?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 15,
    brand: "Dream11",
    title: "Iss Hafte Naya Kya?",
    category: ["Digital"],
    thumbnail: dream11Thumbnail,
    url: "https://www.linkedin.com/posts/wearekinnect_dream-11-x-fcb-kinnect-isshaftenayakya-activity-7313146909404098560-x_o8?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 16,
    brand: "Asian Paints",
    title: "Milan Stambh Maha Kumbh Mela",
    category: ["Experiential"],
    thumbnail: milanStambhThumbnail,
    url: "https://www.linkedin.com/posts/wearekinnect_mahakumbh-milanstambh-divineintersections-activity-7302191110238429184-kDtg?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 17,
    brand: "Flipkart Minutes",
    title: "Valentines Day Bag",
    category: ["Experiential"],
    thumbnail: valentinesBagThumbnail,
    url: "https://www.linkedin.com/posts/nidhi-netravalkar-022398155_newwork-activity-7294742379205419009-v4_X?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 18,
    brand: "Flipkart",
    title: "Monumental Sale",
    category: ["TVC"],
    thumbnail: monumentalSaleThumbnail,
    url: "https://www.linkedin.com/posts/upasana-naithani-35618614_flipkartmonumentalsale-fcbkinnect-kinnectimpact-ugcPost-7285569348776202242-NrQt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 19,
    brand: "Flipkart Minutes",
    title: "New Years Film",
    category: ["TVC"],
    thumbnail: newYearsFilmThumbnail,
    url: "https://www.linkedin.com/posts/pratikshetty_our-rock-completing-one-more-circle-around-ugcPost-7279772348730236929-RmP-/?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
  {
    id: 20,
    brand: "Flipkart",
    title: "Big Sale of Small Things",
    category: ["Digital", "Award Winning"],
    thumbnail: bigSaleSmallThingsThumbnail,
    url: "https://www.linkedin.com/posts/wearekinnect_flipkart-bigsaleofsmallthings-activity-7242872602396946432-Wcy-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAwLWnEBQ5Vfs3waPznpLhR4CrXOWfxAyF4",
  },
];

const WorkSection = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const categories = ["All", "Digital", "Social", "TVC", "Experiential", "Brand Placement", "Award Winning"];

  const filteredWork =
    activeFilter === "All" ? workItems : workItems.filter((item) => item.category.includes(activeFilter));

  return (
    <section id="work" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Selected Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Work that kept the deadlines and broke a few rules
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-primary text-primary-foreground shadow-warm"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Work Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredWork.map((item, index) => (
            <div
              key={item.id}
              className="card-work animate-scale-in overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-video mb-4 overflow-hidden rounded-lg bg-muted block group"
              >
                <img
                  src={item.thumbnail}
                  alt={`${item.brand} - ${item.title}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex items-center gap-2 text-primary-foreground font-semibold text-lg">
                    View Work
                    <ExternalLink className="h-5 w-5" />
                  </div>
                </div>
              </a>
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">{item.brand}</h3>
                <h4 className="text-2xl font-heading font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground italic">{item.hook}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {item.category.map((cat) => (
                  <Badge key={cat} variant="secondary" className="rounded-full">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
