'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Sparkles,
  BookOpenCheck,
  Calendar,
  Building,
  ArrowUpRight,
  TrendingUp,
  FileSpreadsheet,
} from 'lucide-react';
import { portfolioData, SeminarItem } from '@/data/portfolio';

export function Research() {
  const { research } = portfolioData;

  return (
    <section id="research" className="py-20 sm:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-xs font-mono text-indigo-700 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. RESEARCH &amp; SEMINARS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic Research &amp; Presentations
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Deep mathematical explorations of multi-agent reinforcement learning and financial modeling
          </p>
        </div>

        {/* Seminar Card */}
        <div className="space-y-6">
          {research.map((item: SeminarItem, idx: number) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl border border-indigo-200/80 dark:border-indigo-900/60 bg-gradient-to-br from-white/80 via-white/60 to-indigo-50/30 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-indigo-950/20 backdrop-blur-md shadow-sm hover:border-indigo-300 dark:hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-xl bg-indigo-500/10 dark:bg-cyan-500/10 text-indigo-600 dark:text-cyan-400 shrink-0">
                    <BookOpenCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-cyan-300 border border-indigo-200 dark:border-indigo-800">
                      {item.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mt-1.5 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    {item.date}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 font-medium mb-4">
                <Building className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                <span>{item.institution}</span>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {item.description}
              </p>

              {/* Research Tags */}
              <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200 dark:border-slate-800">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link to Crypto RL Trading Bot */}
              {item.relatedProjectTitle && (
                <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400">
                    Hands-on practical implementation:
                  </span>
                  <Link
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-cyan-400 hover:underline"
                  >
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>See {item.relatedProjectTitle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
