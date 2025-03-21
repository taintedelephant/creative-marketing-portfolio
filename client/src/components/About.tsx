import { motion } from "framer-motion";
import { 
  GraduationCap, 
  Award, 
  Briefcase,
  Download
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Creative Strategy", percentage: 95 },
  { name: "Digital Marketing", percentage: 90 },
  { name: "Content Creation", percentage: 88 },
  { name: "Brand Development", percentage: 92 },
  { name: "Social Media Marketing", percentage: 85 },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Creativity Meets Strategy
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg mb-6 text-gray-600">
              Hello! I'm Sarah Johnson, a passionate marketing professional with over 7 years of experience creating impactful campaigns for brands across various industries.
            </p>
            <p className="text-lg mb-6 text-gray-600">
              My approach combines data-driven insights with creative storytelling to develop marketing strategies that not only look stunning but deliver real results for my clients.
            </p>
            <p className="text-lg mb-8 text-gray-600">
              Whether you're looking to launch a new product, refresh your brand identity, or improve your digital presence, I provide tailored solutions that align with your business goals.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <GraduationCap className="mt-1 text-primary mr-2" />
                    <span>MBA in Marketing, Boston University</span>
                  </li>
                  <li className="flex items-start">
                    <Award className="mt-1 text-primary mr-2" />
                    <span>Digital Marketing Certification, Google</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Experience</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Briefcase className="mt-1 text-primary mr-2" />
                    <span>Marketing Director, Creative Agency XYZ</span>
                  </li>
                  <li className="flex items-start">
                    <Briefcase className="mt-1 text-primary mr-2" />
                    <span>Brand Strategist, Global Brands Inc.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <a 
              href="#" 
              className="inline-flex items-center text-primary font-medium hover:text-amber-500 transition-all"
            >
              <span>Download Resume</span>
              <Download className="ml-2 h-4 w-4" />
            </a>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Skills & Expertise</h3>
              
              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.percentage}%</span>
                    </div>
                    <Progress value={skill.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
