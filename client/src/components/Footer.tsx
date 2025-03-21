import { Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-bold">
              <span className="text-primary">Coco</span>
              <span className="text-amber-500">B.</span>
            </a>
            <p className="text-gray-400 mt-2">Creative Marketing Freelancer</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all" aria-label="Dribbble">
                <Dribbble className="h-5 w-5" />
              </a>
            </div>
            <p className="text-gray-500 text-sm">&copy; {new Date().getFullYear()} Coco B. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
