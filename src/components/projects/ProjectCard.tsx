'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  Lock,
  Briefcase,
  GitFork,
  ArrowRight,
  Workflow,
  Sparkles,
} from 'lucide-react';
import { Project } from '@/data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35 }}
      className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/75 dark:bg-slate-900/65 backdrop-blur-md hover:border-indigo-300 dark:hover:border-cyan-500/40 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div>
        {/* Card Header: Category Pills & Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {project.category.map((cat) => (
              <span
                key={cat}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-indigo-600 dark:text-cyan-300 border border-slate-200/60 dark:border-slate-700/60"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Badges for Internship or Private Case Study */}
          {project.badge === 'Internship Project' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
              <Briefcase className="w-3 h-3" />
              <span>Internship Project</span>
            </span>
          )}

          {project.badge === 'Private / Case Study' && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30">
              <Lock className="w-3 h-3" />
              <span>Private / Case Study</span>
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-xs font-mono text-indigo-600 dark:text-cyan-400 font-medium mt-0.5 mb-2">
            // {project.subtitle}
          </p>
        )}

        {/* Summary */}
        <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
          {project.summary}
        </p>

        {/* Inline Flow Diagram for n8n Metatalent Project */}
        {project.hasFlowchart && project.flowchartSteps && (
          <div className="my-5 p-4 rounded-xl border border-amber-500/30 bg-amber-50/40 dark:bg-slate-950/60 shadow-inner">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-700 dark:text-amber-400 font-mono mb-3">
              <Workflow className="w-3.5 h-3.5" />
              <span>n8n Pipeline Architecture</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 relative">
              {project.flowchartSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="flex flex-col p-2.5 rounded-lg bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 text-center relative"
                >
                  <span className="text-[10px] font-mono text-indigo-600 dark:text-cyan-400 font-semibold mb-0.5">
                    Step 0{step.step}
                  </span>
                  <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                    {step.title}
                  </span>
                  <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-tight">
                    {step.desc}
                  </span>

                  {/* Flow arrow for desktop */}
                  {idx < project.flowchartSteps!.length - 1 && (
                    <div className="hidden sm:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-amber-500">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div>
        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-xs font-mono rounded-md bg-slate-100/90 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 mt-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:border-slate-400 dark:hover:border-slate-600 transition-all shadow-xs"
              title="View source code on GitHub"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          {project.relatedGithubUrl && (
            <a
              href={project.relatedGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 transition-all"
              title="View related capstone repository"
            >
              <GitFork className="w-3.5 h-3.5" />
              <span>FYP Repo</span>
            </a>
          )}

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-xs"
              title="Open Live Application"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>
          )}

          {!project.githubUrl && !project.demoUrl && (
            <div className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-400 dark:text-slate-500 py-1">
              <Lock className="w-3 h-3" />
              <span>Proprietary / Enterprise Architecture</span>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
