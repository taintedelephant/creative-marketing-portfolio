import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="w-full md:w-1/2 mb-10 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Creative Marketing Freelancer
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Ideas into{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-amber-500">
                Captivating
              </span>{' '}
              Marketing Campaigns
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Helping brands stand out with creative and strategic marketing solutions that drive engagement and boost conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="shadow-lg hover:shadow-primary/20"
                onClick={() => {
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get in Touch
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary to-amber-500 blur-md opacity-50"></div>
              <div className="relative">
                <img 
                  src="/attached_assets/Screenshot_20250321-105431.png" 
                  alt="Sarah Johnson - Marketing Freelancer" 
                  className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-white shadow-xl" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
