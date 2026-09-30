'use client';

import React, { useState, useEffect } from 'react';
import {
  Github,
  Star,
  GitBranch,
  ExternalLink,
  AlertCircle,
  RefreshCw,
  FolderGit2,
} from 'lucide-react';
import { portfolioData } from '@/data/portfolio';

interface GithubRepo {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  fork: boolean;
  stargazers_count: number;
  language: string | null;
  updated_at: string;
}

export function GitHubMoreRepos() {
  const [repos, setRepos] = useState<GithubRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const excluded = portfolioData.githubExcludedRepos.map((name) => name.toLowerCase());

  useEffect(() => {
    let isMounted = true;

    async function fetchRepos() {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://api.github.com/users/HussianRaza/repos?sort=updated&per_page=100'
        );

        if (!response.ok) {
          if (response.status === 403) {
            throw new Error('API_RATE_LIMIT');
          }
          throw new Error(`HTTP_${response.status}`);
        }

        const data: GithubRepo[] = await response.json();

        if (isMounted) {
          const filtered = data
            .filter((repo) => !repo.fork)
            .filter((repo) => !excluded.includes(repo.name.toLowerCase()));

          setRepos(filtered);
          setLoading(false);
        }
      } catch (err: unknown) {
        if (isMounted) {
          const message = err instanceof Error ? err.message : 'Unknown error';
          setError(message);
          setLoading(false);
        }
      }
    }

    fetchRepos();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-indigo-600 dark:text-cyan-400 font-mono text-xs mb-1">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>OPEN SOURCE &amp; EXPERIMENTS</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
            More on GitHub
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Public repositories dynamically synced from GitHub
          </p>
        </div>

        <a
          href="https://github.com/HussianRaza?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 hover:border-indigo-400 dark:hover:border-cyan-500 transition-all shadow-xs w-fit"
        >
          <Github className="w-4 h-4" />
          <span>View all on GitHub</span>
          <ExternalLink className="w-3 h-3 text-slate-400" />
        </a>
      </div>

      {/* Loading Skeletons */}
      {loading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm animate-pulse space-y-3"
            >
              <div className="flex justify-between items-center">
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/2" />
                <div className="h-4 bg-slate-200 dark:bg-slate-800 rounded w-1/6" />
              </div>
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-full" />
              <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-4/5" />
              <div className="pt-2 flex gap-3">
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-16" />
                <div className="h-3 bg-slate-200 dark:bg-slate-800 rounded w-12" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Error / Rate Limit State */}
      {error && !loading && (
        <div className="p-6 rounded-2xl border border-amber-300/60 dark:border-amber-900/40 bg-amber-50/50 dark:bg-amber-950/20 text-center flex flex-col items-center">
          <AlertCircle className="w-8 h-8 text-amber-500 mb-2" />
          <h4 className="text-base font-bold text-slate-900 dark:text-white">
            {error === 'API_RATE_LIMIT'
              ? 'GitHub API Rate Limit Reached'
              : 'Unable to Load Live GitHub Repositories'}
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-lg">
            GitHub limits unauthenticated API requests to 60 per hour per IP. You can still explore
            all public repos directly on Syed Hussain Raza&apos;s GitHub profile.
          </p>
          <a
            href="https://github.com/HussianRaza?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:opacity-90 transition-opacity"
          >
            <Github className="w-4 h-4" />
            <span>Open GitHub Repositories</span>
          </a>
        </div>
      )}

      {/* Repos Grid */}
      {!loading && !error && repos.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/60 backdrop-blur-md hover:border-indigo-300 dark:hover:border-cyan-500/40 hover:-translate-y-1 hover:shadow-md transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                    {repo.name}
                  </h4>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-500 dark:group-hover:text-cyan-400 shrink-0 transition-colors" />
                </div>

                <p className="mt-2 text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                  {repo.description || 'No description provided.'}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  {repo.language || 'Code'}
                </span>

                <span className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-amber-500" />
                  <span>{repo.stargazers_count}</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      )}

      {/* No Repos Found (Empty) */}
      {!loading && !error && repos.length === 0 && (
        <div className="text-center py-8 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          No additional non-featured repositories found.
        </div>
      )}
    </div>
  );
}
