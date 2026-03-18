'use client'

import { motion } from 'framer-motion'
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaGitAlt,
} from 'react-icons/fa'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiScrapy,
  SiSelenium,
  SiPandas,
  SiNumpy,
  SiPolars,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiOpenai,
  SiLangchain,
  SiFastapi,
  SiAmazonwebservices,
  SiAmazons3,
  SiAwslambda,
} from 'react-icons/si'
import { TbSoup, TbRobot, TbBrain, TbChartBar, TbChartDots, TbNetwork, TbEye, TbMessageChatbot, TbCloudComputing } from 'react-icons/tb'

const skillCategories = [
  {
    title: 'Lenguajes y Fundamentos',
    color: 'from-primary-pink to-primary-purple',
    skills: [
      { name: 'Python', icon: FaPython, level: 90 },
      { name: 'JavaScript', icon: FaJs, level: 88 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'Git', icon: FaGitAlt, level: 90 },
    ],
  },
  {
    title: 'Frontend',
    color: 'from-primary-purple to-primary-pink',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 95 },
      { name: 'CSS3', icon: FaCss3Alt, level: 90 },
      { name: 'React', icon: FaReact, level: 85 },
      { name: 'Next.js', icon: SiNextdotjs, level: 82 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    title: 'Machine Learning & Data',
    color: 'from-primary-cyan to-primary-purple',
    skills: [
      { name: 'Pandas', icon: SiPandas, level: 88 },
      { name: 'NumPy', icon: SiNumpy, level: 85 },
      { name: 'Polars', icon: SiPolars, level: 80 },
      { name: 'Matplotlib', icon: TbChartBar, level: 88 },
      { name: 'Seaborn', icon: TbChartDots, level: 85 },
      { name: 'Scikit-learn', icon: SiScikitlearn, level: 82 },
    ],
  },
  {
    title: 'Deep Learning & Redes Neuronales',
    color: 'from-primary-pink to-primary-cyan',
    skills: [
      { name: 'PyTorch', icon: SiPytorch, level: 80 },
      { name: 'TensorFlow / Keras', icon: SiTensorflow, level: 78 },
      { name: 'CNN (Visión)', icon: TbEye, level: 80 },
      { name: 'RNN / LSTM', icon: TbNetwork, level: 75 },
      { name: 'Transformers / LLMs', icon: TbMessageChatbot, level: 82 },
    ],
  },
  {
    title: 'Web Scraping',
    color: 'from-primary-purple to-primary-cyan',
    skills: [
      { name: 'Beautiful Soup', icon: TbSoup, level: 92 },
      { name: 'Selenium', icon: SiSelenium, level: 88 },
      { name: 'Scrapy', icon: SiScrapy, level: 85 },
    ],
  },
  {
    title: 'Automatización & Agentes IA',
    color: 'from-primary-cyan to-primary-pink',
    skills: [
      { name: 'FastAPI', icon: SiFastapi, level: 85 },
      { name: 'Agentes de IA', icon: TbRobot, level: 88 },
      { name: 'Flujos Automatizados', icon: TbBrain, level: 85 },
      { name: 'OpenAI API', icon: SiOpenai, level: 90 },
      { name: 'LangChain', icon: SiLangchain, level: 82 },
    ],
  },
  {
    title: 'AWS Cloud (en aprendizaje)',
    color: 'from-primary-pink to-primary-purple',
    skills: [
      { name: 'S3', icon: SiAmazons3, level: 65 },
      { name: 'Lambda', icon: SiAwslambda, level: 60 },
      { name: 'SageMaker', icon: TbCloudComputing, level: 58 },
      { name: 'Bedrock (LLMs)', icon: SiAmazonwebservices, level: 55 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary-purple/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-pink/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-cyan font-medium">Mi Stack</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mt-2">
            Skills & <span className="text-gradient">Tecnologías</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Herramientas y tecnologías que domino para crear soluciones innovadoras
          </p>
        </motion.div>

        {/* Categorías de skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass rounded-3xl p-6 hover:bg-white/5 transition-all duration-300"
            >
              <h3 className={`text-lg font-display font-semibold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.05 + skillIndex * 0.05,
                    }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <skill.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-pink transition-colors" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>

                    {/* Barra de progreso */}
                    <div className="h-1.5 bg-dark-lighter rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.05 + skillIndex * 0.05 + 0.2,
                          ease: 'easeOut',
                        }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills adicionales en formato de chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 mb-4">También trabajo con:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['GitHub', 'VS Code', 'API REST', 'SQL', 'MongoDB', 'Docker', 'Linux', 'n8n', 'Make', 'POO', 'Estructuras de Datos'].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-300"
                >
                  {skill}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
