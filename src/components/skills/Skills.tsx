'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  Brain,
  Layers,
  Cpu,
  Sparkles,
  Info,
  Workflow,
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
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  return (
    <section id="skills" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-xs font-mono text-indigo-700 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02. TECHNICAL PROFICIENCY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills &amp; Technology Stack
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            From low-level systems programming and offline AI models to reactive frontends and workflow automation
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
              className="group p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:border-indigo-300 dark:hover:border-cyan-500/40 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-1"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/60 dark:border-slate-700/60 group-hover:scale-105 transition-transform">
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
                {category.skills.map((skill: SkillItem) => {
                  const hasTooltip = Boolean(skill.tooltip);
                  const isTooltipOpen = activeTooltip === skill.name;

                  return (
                    <div key={skill.name} className="relative inline-block">
                      <div
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all ${
                          skill.highlight
                            ? 'bg-indigo-50/80 dark:bg-indigo-950/40 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800/60 shadow-xs'
                            : 'bg-slate-100/80 dark:bg-slate-800/60 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600'
                        }`}
                        onMouseEnter={() => hasTooltip && setActiveTooltip(skill.name)}
                        onMouseLeave={() => hasTooltip && setActiveTooltip(null)}
                        tabIndex={hasTooltip ? 0 : undefined}
                        onFocus={() => hasTooltip && setActiveTooltip(skill.name)}
                        onBlur={() => hasTooltip && setActiveTooltip(null)}
                        aria-describedby={hasTooltip ? `tooltip-${skill.name}` : undefined}
                      >
                        <span>{skill.name}</span>

                        {/* Special Badge (e.g., n8n "Automation") */}
                        {skill.badge && (
                          <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-md text-[10px] font-sans font-semibold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-xs">
                            <Workflow className="w-2.5 h-2.5" />
                            {skill.badge}
                          </span>
                        )}

                        {hasTooltip && (
                          <Info className="w-3 h-3 text-amber-500 dark:text-amber-400 cursor-help ml-0.5" />
                        )}
                      </div>

                      {/* Tooltip for n8n */}
                      {hasTooltip && isTooltipOpen && (
                        <div
                          id={`tooltip-${skill.name}`}
                          role="tooltip"
                          className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 sm:w-64 p-2.5 bg-slate-900 dark:bg-slate-800 text-white text-xs rounded-xl shadow-xl border border-slate-700 dark:border-slate-600 pointer-events-none transition-opacity duration-200 text-center"
                        >
                          <div className="font-semibold text-amber-400 mb-0.5 flex items-center justify-center gap-1">
                            <Workflow className="w-3 h-3" />
                            <span>Enterprise Automation</span>
                          </div>
                          <p className="text-slate-300 text-[11px] font-sans leading-snug">
                            {skill.tooltip}
                          </p>
                          <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-900 dark:border-t-slate-800" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
