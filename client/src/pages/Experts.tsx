import { motion } from "framer-motion";
import { useState } from "react";
import { Search, Filter, Mail, Linkedin, Github, Star, Briefcase, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Expert {
  id: number;
  name: string;
  role: string;
  specialization: string[];
  experience: number;
  location: string;
  rating: number;
  projects: number;
  avatar: string;
  bio: string;
  email: string;
  linkedin?: string;
  github?: string;
  available: boolean;
}

const experts: Expert[] = [
  {
    id: 1,
    name: "Александр Петров",
    role: "AI/ML Engineer",
    specialization: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
    experience: 8,
    location: "Москва",
    rating: 4.9,
    projects: 45,
    avatar: "AP",
    bio: "Специалист по разработке и внедрению ML-моделей для госсектора. Опыт работы с крупными датасетами и оптимизацией моделей.",
    email: "a.petrov@generalii.ru",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    available: true
  },
  {
    id: 2,
    name: "Мария Иванова",
    role: "Data Scientist",
    specialization: ["Data Analysis", "Statistical Modeling", "Python", "R"],
    experience: 6,
    location: "Москва",
    rating: 4.8,
    projects: 38,
    avatar: "МИ",
    bio: "Эксперт по анализу данных и построению предиктивных моделей. Специализация на проектах для государственных организаций.",
    email: "m.ivanova@generalii.ru",
    linkedin: "https://linkedin.com",
    available: true
  },
  {
    id: 3,
    name: "Дмитрий Соколов",
    role: "AI Solutions Architect",
    specialization: ["System Design", "Cloud AI", "MLOps", "Architecture"],
    experience: 10,
    location: "Санкт-Петербург",
    rating: 5.0,
    projects: 52,
    avatar: "ДС",
    bio: "Архитектор AI-решений с опытом проектирования масштабируемых систем. Эксперт по интеграции AI в существующую инфраструктуру.",
    email: "d.sokolov@generalii.ru",
    linkedin: "https://linkedin.com",
    available: false
  },
  {
    id: 4,
    name: "Елена Смирнова",
    role: "NLP Specialist",
    specialization: ["NLP", "Text Mining", "Chatbots", "LLM"],
    experience: 5,
    location: "Москва",
    rating: 4.7,
    projects: 31,
    avatar: "ЕС",
    bio: "Специалист по обработке естественного языка и разработке чат-ботов. Опыт работы с большими языковыми моделями.",
    email: "e.smirnova@generalii.ru",
    available: true
  },
  {
    id: 5,
    name: "Игорь Волков",
    role: "Computer Vision Engineer",
    specialization: ["Computer Vision", "Image Processing", "Object Detection", "OCR"],
    experience: 7,
    location: "Казань",
    rating: 4.9,
    projects: 42,
    avatar: "ИВ",
    bio: "Эксперт по компьютерному зрению и распознаванию образов. Специализация на системах видеоаналитики для госсектора.",
    email: "i.volkov@generalii.ru",
    github: "https://github.com",
    available: true
  },
  {
    id: 6,
    name: "Ольга Новикова",
    role: "ML Engineer",
    specialization: ["Machine Learning", "Feature Engineering", "Model Optimization", "AutoML"],
    experience: 4,
    location: "Москва",
    rating: 4.6,
    projects: 28,
    avatar: "ОН",
    bio: "Инженер машинного обучения с фокусом на оптимизацию моделей и автоматизацию ML-пайплайнов.",
    email: "o.novikova@generalii.ru",
    available: true
  }
];

const specializations = [
  "Все специализации",
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Computer Vision",
  "Data Analysis",
  "MLOps",
  "Cloud AI"
];

export default function Experts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("Все специализации");
  const [showAvailableOnly, setShowAvailableOnly] = useState(false);

  const filteredExperts = experts.filter(expert => {
    const matchesSearch = expert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         expert.bio.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpec = selectedSpec === "Все специализации" || 
                       expert.specialization.includes(selectedSpec);
    
    const matchesAvailability = !showAvailableOnly || expert.available;
    
    return matchesSearch && matchesSpec && matchesAvailability;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/">
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Г</span>
              </div>
              <span className="text-xl font-bold text-white">ГенералИИ</span>
            </button>
          </Link>
          
          <Link href="/">
            <Button variant="outline" className="bg-transparent border-slate-700 text-white hover:bg-slate-800">
              Назад на главную
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Каталог экспертов
              </span>
            </h1>
            <p className="text-xl text-slate-300">
              Более 200+ квалифицированных специалистов готовых к работе над вашим проектом
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <Input
                  type="text"
                  placeholder="Поиск по имени, роли..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
                />
              </div>

              {/* Specialization Filter */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  value={selectedSpec}
                  onChange={(e) => setSelectedSpec(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white appearance-none cursor-pointer"
                >
                  {specializations.map(spec => (
                    <option key={spec} value={spec}>{spec}</option>
                  ))}
                </select>
              </div>

              {/* Availability Toggle */}
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={showAvailableOnly}
                  onChange={(e) => setShowAvailableOnly(e.target.checked)}
                  className="w-5 h-5 rounded border-slate-700 bg-slate-800 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-slate-300">Только доступные</span>
              </label>
            </div>

            <div className="mt-4 text-sm text-slate-400">
              Найдено экспертов: <span className="text-white font-semibold">{filteredExperts.length}</span>
            </div>
          </motion.div>

          {/* Experts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredExperts.map((expert, index) => (
              <motion.div
                key={expert.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg">
                          {expert.avatar}
                        </div>
                        <div>
                          <CardTitle className="text-white text-lg">{expert.name}</CardTitle>
                          <CardDescription className="text-slate-400">{expert.role}</CardDescription>
                        </div>
                      </div>
                      {expert.available ? (
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                          Доступен
                        </Badge>
                      ) : (
                        <Badge variant="secondary" className="bg-slate-800 text-slate-400">
                          Занят
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 line-clamp-2">{expert.bio}</p>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <MapPin className="w-4 h-4" />
                        {expert.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-slate-400">
                        <Briefcase className="w-4 h-4" />
                        {expert.experience} лет опыта • {expert.projects} проектов
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-white font-semibold">{expert.rating}</span>
                        <span className="text-slate-400">рейтинг</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {expert.specialization.slice(0, 3).map(spec => (
                        <Badge key={spec} variant="outline" className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30">
                          {spec}
                        </Badge>
                      ))}
                      {expert.specialization.length > 3 && (
                        <Badge variant="outline" className="bg-slate-800 text-slate-400 border-slate-700">
                          +{expert.specialization.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-2">
                    <Button
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
                      onClick={() => window.location.href = `mailto:${expert.email}`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Связаться
                    </Button>
                    <div className="flex gap-2">
                      {expert.linkedin && (
                        <Button
                          size="icon"
                          variant="outline"
                          className="bg-slate-800 border-slate-700 hover:bg-slate-700"
                          onClick={() => window.open(expert.linkedin, '_blank')}
                        >
                          <Linkedin className="w-4 h-4" />
                        </Button>
                      )}
                      {expert.github && (
                        <Button
                          size="icon"
                          variant="outline"
                          className="bg-slate-800 border-slate-700 hover:bg-slate-700"
                          onClick={() => window.open(expert.github, '_blank')}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredExperts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-xl text-slate-400">
                Эксперты не найдены. Попробуйте изменить фильтры.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}

