import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const menuItems = [
    { label: "О нас", id: "about" },
    { label: "Услуги", id: "services" },
    { label: "Эксперты", id: "experts" },
    { label: "Кейсы", id: "cases" },
    { label: "Тарифы", id: "pricing" },
    { label: "Контакты", id: "contact" },
  ];

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 bg-card border-l border-border z-40 p-6"
            >
              <nav className="flex flex-col space-y-4 mt-16">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg hover:text-primary transition-colors py-2 text-left"
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="pt-4 space-y-3"
                >
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setIsOpen(false);
                      alert('ИИ-Агенты - функция в разработке');
                    }}
                  >
                    ИИ-Агенты
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary to-accent"
                    onClick={() => scrollToSection('contact')}
                  >
                    Получить консультацию
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

