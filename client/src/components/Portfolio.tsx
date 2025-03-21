import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Category = "all" | "branding" | "digital" | "campaign";

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, "all">;
  description: string;
  imageUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Tech Startup Rebrand",
    category: "branding",
    description: "Complete brand refresh for a growing tech startup, including logo, visual identity, and brand guidelines.",
    imageUrl: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c"
  },
  {
    id: 2,
    title: "Fashion E-commerce Strategy",
    category: "digital",
    description: "Comprehensive digital marketing strategy that increased online sales by 45% for a luxury fashion brand.",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978"
  },
  {
    id: 3,
    title: "Product Launch Campaign",
    category: "campaign",
    description: "Integrated marketing campaign for a new product launch that reached over 2 million potential customers.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3"
  },
  {
    id: 4,
    title: "Restaurant Chain Rebrand",
    category: "branding",
    description: "Complete rebranding for a regional restaurant chain that modernized their image and increased customer visits.",
    imageUrl: "https://images.unsplash.com/photo-1559028012-481c04fa702d"
  },
  {
    id: 5,
    title: "Social Media Strategy",
    category: "digital",
    description: "Social media revamp that increased engagement by 78% and followers by 10K within three months.",
    imageUrl: "https://images.unsplash.com/photo-1560472355-536de3962603"
  },
  {
    id: 6,
    title: "Holiday Campaign Series",
    category: "campaign",
    description: "Multi-channel holiday marketing campaign that increased Q4 sales by 35% year-over-year.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5"
  }
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");
  
  const handleFilterClick = (category: Category) => {
    setActiveFilter(category);
  };
  
  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);
  
  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Here's a selection of my recent work that demonstrates my creative approach and marketing expertise.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </motion.div>
        
        {/* Portfolio Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {(["all", "branding", "digital", "campaign"] as const).map((category) => (
            <Button
              key={category}
              variant={activeFilter === category ? "default" : "outline"}
              onClick={() => handleFilterClick(category)}
              className="rounded-full"
            >
              {category === "all" ? "All Projects" : 
               category === "branding" ? "Branding" : 
               category === "digital" ? "Digital Marketing" : 
               "Campaigns"}
            </Button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div 
              key={item.id}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
              />
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent",
                "opacity-0 group-hover:opacity-100 transition-all duration-300",
                "flex flex-col justify-end p-6"
              )}>
                <span className="text-white/80 text-sm font-medium mb-2">
                  {item.category === "branding" ? "Branding" : 
                   item.category === "digital" ? "Digital Marketing" : 
                   "Campaign"}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/90 mb-4">{item.description}</p>
                <a href="#" className="text-white font-medium hover:text-amber-400 transition-all inline-flex items-center">
                  <span>View Project</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
