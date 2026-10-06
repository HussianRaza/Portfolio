'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Filter, Github, ExternalLink } from 'lucide-react';
import { portfolioData, Project } from '@/data/portfolio';
import { ProjectCard } from './ProjectCard';

type FilterCategory = 'All' | 'AI & ML' | 'Full-Stack' | 'Systems' | 'Automation';

const categories: FilterCategory[] = [
  'All',
  'AI & ML',
  'Full-Stack',
  'Systems',
  'Automation',
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('All');
  const { projects } = portfolioData;

  const filteredProjects = projects.filter((project: Project) => {
    if (activeCategory === 'All') return true;
    return project.category.includes(activeCategory);
  });

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-xs font-mono text-indigo-700 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Software engineering applications, local AI systems, and automated pipelines
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex items-center gap-1 p-1.5 rounded-2xl bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md shadow-xs">
            <div className="px-2 hidden sm:flex items-center gap-1 text-slate-400 text-xs font-mono">
              <Filter className="w-3.5 h-3.5" />
              <span>Filter:</span>
            </div>
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`relative px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-colors duration-200 focus:outline-none ${
                    isActive
                      ? 'text-white'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 shadow-sm"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repos CTA */}
        <div className="mt-12 text-center">
          <a
            href={portfolioData.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-cyan-500 transition-all text-sm font-medium shadow-sm hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4" />
            <span>Explore all repositories on GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
          </a>
        </div>
      </div>
    </section>
  );
}

