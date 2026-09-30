/** @type {import('next').NextConfig} */
function resolveBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    const raw = process.env.NEXT_PUBLIC_BASE_PATH.trim();
    if (!raw) return '';
    return raw.startsWith('/') ? raw : `/${raw}`;
  }

  // Automatically detect GitHub Pages repository name in GitHub Actions
  if (process.env.GITHUB_REPOSITORY) {
    const parts = process.env.GITHUB_REPOSITORY.split('/');
    if (parts.length === 2) {
      const [owner, repo] = parts;
      if (repo && repo.toLowerCase() !== `${owner.toLowerCase()}.github.io`) {
        return `/${repo}`;
      }
    }
  }

  return '';
}

const basePath = resolveBasePath();

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
};

export default nextConfig;
