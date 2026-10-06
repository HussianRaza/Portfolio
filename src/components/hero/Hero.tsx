'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  FileDown,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';
import { ParticleNetwork } from './ParticleNetwork';
import { getBasePath } from '@/lib/utils';

export function Hero() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [personal.rotatingRoles.length]);

  const cvHref = getBasePath(personal.cvUrl);

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Interactive Particle Network Canvas */}
      <ParticleNetwork />

      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-cyan-400/15 blur-3xl -z-10 rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-200/80 dark:border-indigo-900/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-sm mb-6 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            <span>Available for Software Engineering Roles</span>
          </span>
          <span className="text-slate-300 dark:text-slate-700">|</span>
          <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
            <MapPin className="w-3 h-3" />
            Karachi, PK
          </span>
        </motion.div>

        {/* Main Name Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white"
        >
          Hi, I&apos;m{' '}
          <span className="bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 dark:from-indigo-400 dark:via-cyan-300 dark:to-cyan-400 bg-clip-text text-transparent">
            {personal.name}
          </span>
        </motion.h1>

        {/* Dynamic Rotating Roles */}
        <div className="h-10 sm:h-12 mt-3 sm:mt-4 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="text-xl sm:text-2xl lg:text-3xl font-mono font-medium text-indigo-600 dark:text-cyan-400 flex items-center gap-2"
            >
              <span className="text-slate-400 dark:text-slate-600">&gt;</span>
              <span>{personal.rotatingRoles[roleIndex]}</span>
              <span className="w-2 h-6 sm:h-7 bg-indigo-500 dark:bg-cyan-400 animate-pulse ml-0.5 inline-block" />
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
        >
          {personal.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white font-medium text-sm sm:text-base shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href={cvHref}
            download="Syed_Hussain_Raza_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
          >
            <FileDown className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
            <span>Download CV</span>
          </a>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-indigo-200 dark:border-indigo-900/50 bg-indigo-50/60 dark:bg-indigo-950/40 hover:bg-indigo-100 dark:hover:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 font-medium text-sm sm:text-base hover:-translate-y-0.5 transition-all duration-200"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </Link>
        </motion.div>

        {/* Social Link Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-4 text-slate-500 dark:text-slate-400"
        >
          <a
            href={personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-all hover:scale-110"
            aria-label="GitHub Profile"
            title="Syed Hussain Raza on GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-all hover:scale-110"
            aria-label="LinkedIn Profile"
            title="Syed Hussain Raza on LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personal.contact.email}`}
            className="p-2 rounded-xl hover:text-red-500 dark:hover:text-red-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/60 transition-all hover:scale-110"
            aria-label="Send Email"
            title="Send an email to Syed Hussain Raza"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-12 hidden sm:flex flex-col items-center text-slate-400 dark:text-slate-500 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors"
        >
          <Link href="#about" aria-label="Scroll to About section" className="flex flex-col items-center">
            <span className="text-[11px] font-mono tracking-wider uppercase mb-1">Explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
