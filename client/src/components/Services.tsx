import { motion } from "framer-motion";
import { 
  Megaphone, 
  Laptop, 
  Paintbrush, 
  Rocket, 
  LineChart, 
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  index: number;
}

const ServiceCard = ({ icon, title, description, features, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        <CardContent className="p-8">
          <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">
            {description}
          </p>
          <ul className="space-y-2 mb-6">
            {features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default function Services() {
  const services = [
    {
      icon: <Megaphone className="h-7 w-7 text-primary" />,
      title: "Brand Strategy",
      description: "Develop a comprehensive brand strategy that defines your unique positioning, voice, and visual identity to stand out in the market.",
      features: [
        "Market research & analysis",
        "Competitor benchmarking",
        "Brand positioning & voice"
      ]
    },
    {
      icon: <Laptop className="h-7 w-7 text-primary" />,
      title: "Digital Marketing",
      description: "Create and implement effective digital marketing campaigns that drive traffic, engagement, and conversions across channels.",
      features: [
        "SEO & content marketing",
        "Social media strategy",
        "PPC & email campaigns"
      ]
    },
    {
      icon: <Paintbrush className="h-7 w-7 text-primary" />,
      title: "Creative Design",
      description: "Deliver eye-catching visual content that communicates your brand message effectively and creates a lasting impression.",
      features: [
        "Visual identity development",
        "Marketing collateral design",
        "Social media graphics"
      ]
    },
    {
      icon: <Rocket className="h-7 w-7 text-primary" />,
      title: "Campaign Management",
      description: "Plan, execute, and optimize integrated marketing campaigns that align with your business objectives and target audience.",
      features: [
        "Campaign strategy & planning",
        "Implementation & coordination",
        "Performance tracking & reporting"
      ]
    },
    {
      icon: <LineChart className="h-7 w-7 text-primary" />,
      title: "Analytics & Optimization",
      description: "Leverage data and insights to measure campaign performance and continuously improve your marketing efforts.",
      features: [
        "Performance benchmarking",
        "Data analysis & reporting",
        "Optimization recommendations"
      ]
    },
    {
      icon: <MessageSquare className="h-7 w-7 text-primary" />,
      title: "Content Strategy",
      description: "Develop engaging content that resonates with your audience and drives them through the customer journey.",
      features: [
        "Content planning & calendars",
        "Copywriting & editing",
        "Content distribution strategy"
      ]
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How I Can Help Your Business
          </h2>
          <p className="text-lg text-gray-600">
            I offer a range of marketing services tailored to help your business grow and succeed in today's competitive landscape.
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-6"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
