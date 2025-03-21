import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  position: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Sarah completely transformed our brand image. Her strategic approach and creative ideas helped us connect with our target audience in ways we never thought possible. The ROI on our campaigns has been exceptional.",
    author: "Michael Thompson",
    position: "CEO, TechVision Inc.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    rating: 5
  },
  {
    id: 2,
    content: "Working with Sarah was a game-changer for our e-commerce business. Her digital marketing expertise helped us increase online sales by 60% in just six months. She's professional, creative, and results-driven.",
    author: "Jennifer Lee",
    position: "Founder, StyleHouse Boutique",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    rating: 5
  },
  {
    id: 3,
    content: "Sarah's campaign for our product launch exceeded all expectations. Her attention to detail, creative direction, and strategic planning made all the difference. We'll definitely be working with her again on future projects.",
    author: "David Wilson",
    position: "Marketing Director, InnovatePro",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    rating: 4.5
  },
  {
    id: 4,
    content: "Sarah's social media strategy completely revitalized our online presence. We've seen a 300% increase in engagement and our follower count has doubled. Her creative content ideas and data-driven approach are exactly what we needed.",
    author: "Emma Rodriguez",
    position: "CMO, Urban Eats Co.",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
    rating: 5
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  const maxIndex = isMobile ? testimonials.length - 1 : testimonials.length - 3;
  
  const handleNext = () => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  };
  
  const handlePrev = () => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  };
  
  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };
  
  useEffect(() => {
    if (trackRef.current) {
      const translateValue = isMobile
        ? -currentIndex * 100
        : -currentIndex * (100 / 3);
        
      trackRef.current.style.transform = `translateX(${translateValue}%)`;
    }
  }, [currentIndex, isMobile]);
  
  // AutoPlay
  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);
  
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take my word for it. Here's what some of my clients have to say about working with me.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="testimonials-slider relative">
          <div className="overflow-hidden">
            <div 
              ref={trackRef} 
              className="flex transition-all duration-300"
              style={{ transform: 'translateX(0%)' }}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className={cn(
                    "min-w-full md:min-w-[33.333%] p-4",
                    "transition-opacity duration-300"
                  )}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="text-primary flex">
                        {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                          <Star key={i} className="fill-primary text-primary h-5 w-5" />
                        ))}
                        {testimonial.rating % 1 > 0 && (
                          <Star className="fill-primary text-primary h-5 w-5 fill-[50%]" />
                        )}
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 overflow-hidden">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{testimonial.author}</h4>
                        <p className="text-sm text-gray-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-white shadow-md text-primary hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          
          {/* Dots Navigation */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-3 h-3 rounded-full mx-1 transition-colors",
                  currentIndex === index ? "bg-primary" : "bg-gray-300"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
