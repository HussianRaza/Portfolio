'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  BookOpen,
  Award,
  Globe2,
  Calendar,
  Layers,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function About() {
  const { personal } = portfolioData;
  const { education } = personal;

  return (
    <section id="about" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-900/60 bg-indigo-50/60 dark:bg-indigo-950/40 text-xs font-mono text-indigo-700 dark:text-cyan-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Background &amp; Academic Foundation
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Bridging foundational AI research with scalable real-world software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio & Philosophy (Left 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
                <span>Who I Am</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personal.bio}
              </p>

              <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Specialization</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    Offline AI &amp; Full-Stack
                  </p>
                </div>
                <div className="space-y-1">
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">Workflow Focus</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    n8n Automation &amp; Microservices
                  </p>
                </div>
              </div>

              {/* Core Strengths */}
              <div className="mt-6 space-y-2.5">
                {[
                  'Offline-first edge AI with quantized local LLMs and Whisper',
                  'Asynchronous backends in FastAPI, Rust sidecars & microservices',
                  'Automated enterprise pipelines with n8n, webhooks & vector search',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Education Card & Coursework (Right 6 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            {/* Education Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-indigo-200/70 dark:border-indigo-900/60 bg-gradient-to-br from-white/80 via-white/60 to-indigo-50/40 dark:from-slate-900/80 dark:via-slate-900/60 dark:to-indigo-950/20 backdrop-blur-md shadow-sm">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-500/10 dark:bg-cyan-500/10 text-indigo-600 dark:text-cyan-400">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      {education.institution}
                    </h4>
                    <p className="text-sm font-medium text-indigo-600 dark:text-cyan-400">
                      {education.degree}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-500" />
                    CGPA
                  </span>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {education.cgpa}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Award className="w-3 h-3 text-cyan-500" />
                    Final Year GPA
                  </span>
                  <p className="text-base font-bold text-slate-900 dark:text-white mt-0.5">
                    {education.finalYearGpa}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-700/50 col-span-2 sm:col-span-1">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                    <Layers className="w-3 h-3 text-indigo-500" />
                    Curriculum
                  </span>
                  <p className="text-xs font-semibold text-slate-900 dark:text-white mt-1">
                    {education.creditHours}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {education.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <Globe2 className="w-3.5 h-3.5 text-slate-400" />
                  {education.languageMedium}
                </span>
              </div>
            </div>

            {/* Coursework Tags */}
            <div className="p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md shadow-sm">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300 font-mono flex items-center gap-2 mb-3">
                <BookOpen className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                <span>Relevant Coursework</span>
              </h4>

              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs rounded-lg font-mono bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 hover:border-indigo-400 dark:hover:border-cyan-500/50 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
