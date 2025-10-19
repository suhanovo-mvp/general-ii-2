import { motion } from "framer-motion";
import { Bot, Brain, MessageSquare, FileText, BarChart, Users, Zap, Shield, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface Agent {
  id: number;
  name: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  useCases: string[];
  color: string;
}

const agents: Agent[] = [
  {
    id: 1,
    name: "Аналитический агент",
    icon: <BarChart className="w-8 h-8" />,
    description: "Автоматический анализ данных и генерация инсайтов для принятия решений",
    features: [
      "Обработка больших объемов данных",
      "Выявление трендов и аномалий",
      "Автоматическая генерация отчетов",
      "Предиктивная аналитика"
    ],
    useCases: [
      "Анализ эффективности госпрограмм",
      "Мониторинг KPI департаментов",
      "Прогнозирование бюджетных расходов"
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Документооборотный агент",
    icon: <FileText className="w-8 h-8" />,
    description: "Автоматизация работы с документами: классификация, извлечение данных, маршрутизация",
    features: [
      "Распознавание и классификация документов",
      "Извлечение ключевой информации",
      "Автоматическая маршрутизация",
      "Контроль сроков исполнения"
    ],
    useCases: [
      "Обработка обращений граждан",
      "Автоматизация согласования документов",
      "Архивирование и поиск документов"
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Консультационный агент",
    icon: <MessageSquare className="w-8 h-8" />,
    description: "Интеллектуальный помощник для консультирования граждан и сотрудников",
    features: [
      "Ответы на вопросы 24/7",
      "Понимание естественного языка",
      "Персонализированные рекомендации",
      "Интеграция с базами знаний"
    ],
    useCases: [
      "Горячая линия для граждан",
      "Помощь сотрудникам по регламентам",
      "Консультации по госуслугам"
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 4,
    name: "Агент мониторинга",
    icon: <Brain className="w-8 h-8" />,
    description: "Непрерывный мониторинг процессов и автоматическое выявление проблем",
    features: [
      "Мониторинг в режиме реального времени",
      "Раннее обнаружение аномалий",
      "Автоматические уведомления",
      "Рекомендации по устранению проблем"
    ],
    useCases: [
      "Контроль качества госуслуг",
      "Мониторинг инфраструктуры",
      "Отслеживание выполнения поручений"
    ],
    color: "from-orange-500 to-red-500"
  },
  {
    id: 5,
    name: "Агент планирования",
    icon: <Users className="w-8 h-8" />,
    description: "Оптимизация планирования ресурсов и распределения задач",
    features: [
      "Оптимальное распределение ресурсов",
      "Автоматическое составление расписаний",
      "Учет приоритетов и ограничений",
      "Адаптация к изменениям"
    ],
    useCases: [
      "Планирование загрузки специалистов",
      "Оптимизация графиков работы",
      "Распределение бюджета"
    ],
    color: "from-indigo-500 to-purple-500"
  },
  {
    id: 6,
    name: "Агент безопасности",
    icon: <Shield className="w-8 h-8" />,
    description: "Обеспечение информационной безопасности и выявление угроз",
    features: [
      "Обнаружение аномальной активности",
      "Анализ угроз безопасности",
      "Автоматическое реагирование",
      "Аудит доступа к данным"
    ],
    useCases: [
      "Защита персональных данных",
      "Мониторинг кибербезопасности",
      "Контроль соблюдения политик"
    ],
    color: "from-red-500 to-pink-500"
  }
];

const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Автоматизация рутины",
    description: "Освобождение сотрудников от повторяющихся задач"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Работа 24/7",
    description: "Непрерывная работа без выходных и перерывов"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6" />,
    title: "Высокая точность",
    description: "Минимизация человеческих ошибок"
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: "Масштабируемость",
    description: "Обработка любых объемов данных"
  }
];

export default function AIAgents() {
  const scrollToContact = () => {
    window.location.href = "/#contact";
  };

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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-6">
              <Bot className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-300 text-sm font-medium">Искусственный интеллект нового поколения</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ИИ-Агенты
              </span>
              <br />
              <span className="text-white">для автоматизации госсектора</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8">
              Интеллектуальные помощники, которые автоматизируют рутинные процессы, 
              анализируют данные и помогают принимать обоснованные решения
            </p>

            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8"
              onClick={scrollToContact}
            >
              Получить консультацию
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          >
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-slate-900/50 backdrop-blur-sm border-slate-800">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-sm text-slate-400">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>

          {/* Agents Grid */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-white mb-4">Наши ИИ-агенты</h2>
              <p className="text-xl text-slate-400">
                Специализированные решения для различных задач госсектора
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {agents.map((agent, index) => (
                <motion.div
                  key={agent.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                >
                  <Card className="bg-slate-900/50 backdrop-blur-sm border-slate-800 hover:border-indigo-500/50 transition-all duration-300 h-full flex flex-col">
                    <CardHeader>
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${agent.color} flex items-center justify-center mb-4 text-white`}>
                        {agent.icon}
                      </div>
                      <CardTitle className="text-white text-xl mb-2">{agent.name}</CardTitle>
                      <CardDescription className="text-slate-300">
                        {agent.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1 space-y-6">
                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                          Возможности
                        </h4>
                        <ul className="space-y-2">
                          {agent.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                              <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-slate-400 mb-3 uppercase tracking-wide">
                          Примеры использования
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {agent.useCases.map((useCase, idx) => (
                            <Badge
                              key={idx}
                              variant="outline"
                              className="bg-indigo-500/10 text-indigo-300 border-indigo-500/30"
                            >
                              {useCase}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Готовы внедрить ИИ-агентов?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
              Получите бесплатную консультацию и узнайте, как наши ИИ-агенты могут 
              оптимизировать работу вашей организации
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-indigo-600 hover:bg-slate-100 px-8"
                onClick={scrollToContact}
              >
                Получить консультацию
              </Button>
              <Link href="/experts">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10 px-8"
                >
                  Посмотреть экспертов
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

