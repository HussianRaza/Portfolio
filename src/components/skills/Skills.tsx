'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Layers,
  Cpu,
  Sparkles,
  Zap,
} from 'lucide-react';
import { portfolioData, SkillCategory, SkillItem } from '@/data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-indigo-500 dark:text-cyan-400" />,
  Brain: <Brain className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
  Layers: <Layers className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
  Cpu: <Cpu className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
};

export function Skills() {
  const { skillCategories } = portfolioData;

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-xs font-mono text-indigo-700 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SKILLS &amp; TECH STACK</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Technical Proficiency
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Languages, frameworks, and platforms I work with to build scalable software
          </p>
        </div>

        {/* 4 Grouped Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category: SkillCategory, catIdx: number) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: catIdx * 0.1 }}
              className="p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:border-indigo-300 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60">
                  {iconMap[category.icon] || <Zap className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Badges */}
              <div className="flex flex-wrap gap-2 mt-5">
                {category.skills.map((skill: SkillItem) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                      skill.highlight
                        ? 'bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800/60'
                        : 'bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

