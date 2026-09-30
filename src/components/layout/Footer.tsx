'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUp, Github, Linkedin, Mail, Heart, Terminal } from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

export function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand & Monogram */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 p-[1.5px]">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[7px] flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
              </div>
            </div>
            <div>
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                {personal.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                AI Engineer &amp; Full-Stack Developer
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href={personal.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personal.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personal.contact.email}`}
              className="hover:text-red-500 dark:hover:text-red-400 transition-colors"
              aria-label="Send an Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-mono font-medium border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-cyan-500 transition-all shadow-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-indigo-600 dark:text-cyan-400" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-2 font-mono">
          <p>
            &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js, TypeScript, Tailwind CSS &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
