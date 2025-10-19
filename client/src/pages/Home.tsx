import { Button } from "@/components/ui/button";
import MobileMenu from "@/components/MobileMenu";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  Brain, 
  Rocket, 
  Users, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  Shield,
  Zap,
  TrendingUp,
  Github,
  Linkedin,
  Mail
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle hash links on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        scrollToSection(id);
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <Brain className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold gradient-text">ГенералИИ</span>
            </motion.div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-colors">О нас</button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-primary transition-colors">Услуги</button>
              <Link href="/experts"><button className="text-sm hover:text-primary transition-colors">Эксперты</button></Link>
              <button onClick={() => scrollToSection('cases')} className="text-sm hover:text-primary transition-colors">Кейсы</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-primary transition-colors">Тарифы</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-colors">Контакты</button>
            </div>

            <div className="flex items-center space-x-4">
              <Link href="/ai-agents">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="hidden md:inline-flex"
                >
                  ИИ-Агенты
                </Button>
              </Link>
              <Button 
                size="sm" 
                className="hidden sm:inline-flex bg-gradient-to-r from-primary to-accent hover:opacity-90"
                onClick={() => scrollToSection('contact')}
              >
                Получить консультацию
              </Button>
              <MobileMenu />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden gradient-bg min-h-screen flex items-center">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm">Передовые AI-технологии для госсектора</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="gradient-text">ГенералИИ</span>
              <br />
              <span className="text-foreground/90">раскрываем ваш</span>
              <br />
              <span className="gradient-text">ИИ-потенциал</span>
            </h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4"
            >
              Внедряем передовые ИИ-технологии в органы исполнительной власти города Москвы 
              для повышения эффективности государственного управления
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base sm:text-lg px-6 sm:px-8"
                onClick={() => scrollToSection('contact')}
              >
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Link href="/experts">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 glass-card"
                >
                  Посмотреть каталог экспертов
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection('stats')}
        >
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
            <motion.div 
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {[
              { value: "50+", label: "Госпроектов реализовано", icon: Target },
              { value: "200+", label: "Экспертов в базе", icon: Users },
              { value: "98%", label: "Довольных заказчиков", icon: TrendingUp },
              { value: "5 лет", label: "Работы с госсектором", icon: Shield }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="text-center glass-card p-4 sm:p-6 rounded-xl cursor-pointer"
              >
                <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-3" />
                <div className="text-2xl sm:text-4xl font-bold gradient-text mb-1 sm:mb-2">{stat.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="about" className="py-16 sm:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="gradient-text">преимущества</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              Мы объединяем глубокую экспертизу в ИИ с профессиональным управлением проектами
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Rocket,
                title: "Опыт внедрения ИИ в госсектор",
                description: "Более 50+ успешно реализованных проектов внедрения ИИ-решений в органы исполнительной власти Москвы"
              },
              {
                icon: Users,
                title: "Собственная сеть проверенных IT-экспертов",
                description: "База из 200+ квалифицированных специалистов с опытом работы с государственными структурами"
              },
              {
                icon: Shield,
                title: "Соответствие требованиям госсектора",
                description: "Знание специфики работы с органами власти, соблюдение всех регламентов и стандартов безопасности"
              }
            ].map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 sm:p-8 rounded-2xl border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 sm:mb-6">
                  <advantage.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{advantage.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{advantage.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Что мы <span className="gradient-text">делаем</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Полный цикл работ с ИИ-проектами
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                icon: Brain,
                title: "Консалтинг по ИИ",
                description: "Стратегическое планирование внедрения AI в бизнес"
              },
              {
                icon: Target,
                title: "Управление проектами",
                description: "Контроль сроков, качества и коммуникаций"
              },
              {
                icon: Users,
                title: "Координация команд",
                description: "Эффективная работа разработчиков и аналитиков"
              },
              {
                icon: Zap,
                title: "Подбор экспертов",
                description: "Быстрый поиск нужных IT-специалистов"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-5 sm:p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all cursor-pointer"
              >
                <service.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-card"
              onClick={() => scrollToSection('services')}
            >
              Подробнее об услугах
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experts Section (placeholder) */}
      <section id="experts" className="py-16 sm:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="gradient-text">эксперты</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              База из 200+ квалифицированных специалистов готовых к работе над вашим проектом
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => alert('Каталог экспертов - функция в разработке')}
            >
              Посмотреть каталог
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Cases Section (placeholder) */}
      <section id="cases" className="py-16 sm:py-20 bg-card/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Наши <span className="gradient-text">кейсы</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              Более 50 успешно реализованных проектов для госсектора
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="glass-card"
              onClick={() => alert('Кейсы - функция в разработке')}
            >
              Смотреть кейсы
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section (placeholder) */}
      <section id="pricing" className="py-16 sm:py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Тарифы</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto px-4">
              Гибкие тарифные планы для проектов любого масштаба
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              onClick={() => scrollToSection('contact')}
            >
              Обсудить проект
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 relative overflow-hidden gradient-bg">
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-10 right-10 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute bottom-10 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Готовы начать ваш <span className="gradient-text">ИИ-проект?</span>
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
              Получите бесплатную консультацию и узнайте, как ИИ может трансформировать ваш бизнес
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button 
                size="lg" 
                className="w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-base sm:text-lg px-6 sm:px-8"
                onClick={() => window.open('mailto:info@generalii.ru', '_blank')}
              >
                Получить консультацию
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 glass-card"
                onClick={() => scrollToSection('cases')}
              >
                Смотреть кейсы
              </Button>
            </div>

            <div className="glass-card p-6 rounded-xl max-w-md mx-auto">
              <h3 className="font-semibold mb-4">Контактная информация</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@generalii.ru" className="hover:text-primary transition-colors">
                    info@generalii.ru
                  </a>
                </p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/50 bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Brain className="w-6 h-6 text-primary" />
                <span className="font-bold gradient-text">ГенералИИ</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Передовые AI-технологии для государственного сектора
              </p>
              <div className="flex items-center space-x-3">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="mailto:info@generalii.ru"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center hover:border-primary/50 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <button onClick={() => scrollToSection('about')} className="block hover:text-primary transition-colors">О нас</button>
                <button onClick={() => scrollToSection('services')} className="block hover:text-primary transition-colors">Услуги</button>
                <button onClick={() => scrollToSection('experts')} className="block hover:text-primary transition-colors">Эксперты</button>
                <button onClick={() => scrollToSection('cases')} className="block hover:text-primary transition-colors">Кейсы</button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <a href="mailto:info@generalii.ru" className="hover:text-primary transition-colors">
                    Email: info@generalii.ru
                  </a>
                </p>
                <p>Телефон: +7 (495) 123-45-67</p>
                <p>Москва, Россия</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
            © 2025 ГенералИИ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

