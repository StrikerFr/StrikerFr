import { mkdir, writeFile } from "node:fs/promises";

const username = "StrikerFr";
const token = process.env.GITHUB_TOKEN;
const headers = {
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
  "User-Agent": "StrikerFr-profile-metrics",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
};

async function github(path) {
  const response = await fetch(`https://api.github.com${path}`, { headers });
  if (!response.ok) throw new Error(`GitHub API ${path}: ${response.status} ${response.statusText}`);
  return response.json();
}

function escapeXml(value) {
  return String(value).replace(/[<>&"']/g, (char) => ({
    "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;",
  })[char]);
}

const [profile, repositories] = await Promise.all([
  github(`/users/${username}`),
  github(`/users/${username}/repos?per_page=100&sort=updated`),
]);

const stars = repositories.reduce((total, repository) => total + repository.stargazers_count, 0);
const languages = new Map();
for (const repository of repositories) {
  if (repository.language) languages.set(repository.language, (languages.get(repository.language) ?? 0) + 1);
}
const topLanguages = [...languages.entries()].sort((a, b) => b[1] - a[1]).slice(0, 4);
const maxCount = Math.max(1, ...topLanguages.map(([, count]) => count));
const number = (value) => new Intl.NumberFormat("en-US").format(value);
const metric = (x, label, value, color) => `
  <g>
    <text x="${x}" y="83" fill="#818da5" font-family="Arial,sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">${label}</text>
    <text x="${x}" y="143" fill="#f1f5fb" font-family="Arial,sans-serif" font-size="50" font-weight="700">${number(value)}</text>
    <rect x="${x}" y="164" width="4" height="36" rx="2" fill="${color}" />
  </g>`;

const languageRows = topLanguages.map(([language, count], index) => {
  const y = 96 + index * 39;
  const width = Math.round((count / maxCount) * 170);
  return `
    <text x="650" y="${y}" fill="#d8dfeb" font-family="Arial,sans-serif" font-size="14">${escapeXml(language)}</text>
    <rect x="752" y="${y - 12}" width="170" height="7" rx="3.5" fill="#252b3a" />
    <rect x="752" y="${y - 12}" width="${width}" height="7" rx="3.5" fill="url(#spectrum)" />
    <text x="945" y="${y}" fill="#8190a9" font-family="Consolas,monospace" font-size="12">${count} repos</text>`;
}).join("");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 250" role="img" aria-labelledby="title desc">
  <title id="title">Live GitHub profile metrics for ${username}</title>
  <desc id="desc">Public repository, star, and follower counts fetched directly from the GitHub API. Language bars count public repositories by their primary language.</desc>
  <defs><linearGradient id="spectrum"><stop stop-color="#b9ff66"/><stop offset=".55" stop-color="#56ead0"/><stop offset="1" stop-color="#b58aff"/></linearGradient><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#101520"/><stop offset="1" stop-color="#171324"/></linearGradient></defs>
  <rect x="1" y="1" width="1098" height="248" rx="22" fill="url(#bg)" stroke="#343d50" />
  <text x="34" y="42" fill="#9aa8c0" font-family="Consolas,monospace" font-size="12" font-weight="700" letter-spacing="2">LIVE GITHUB SIGNAL　/　${username.toUpperCase()}</text>
  <path d="M34 57H1066" stroke="#293244" />
  ${metric(38, "PUBLIC REPOSITORIES", profile.public_repos, "#b9ff66")}
  ${metric(260, "STARS EARNED", stars, "#56ead0")}
  ${metric(480, "FOLLOWERS", profile.followers, "#b58aff")}
  <path d="M620 73V218" stroke="#30394b" />
  <text x="650" y="72" fill="#818da5" font-family="Arial,sans-serif" font-size="12" font-weight="700" letter-spacing="1.5">PRIMARY LANGUAGES　/　REPOSITORY COUNT</text>
  ${languageRows || '<text x="650" y="110" fill="#aab5c8" font-family="Arial,sans-serif" font-size="14">No public language data yet</text>'}
  <text x="1064" y="229" text-anchor="end" fill="#65728a" font-family="Consolas,monospace" font-size="10">SOURCE: GITHUB REST API · AUTO-REFRESHED DAILY</text>
</svg>`;

await mkdir("dist", { recursive: true });
const cleanSvg = svg.replace(/^[ \t]+$/gm, "");
await writeFile("dist/profile-metrics.svg", cleanSvg);
await mkdir("assets", { recursive: true });
await writeFile("assets/profile-metrics.svg", cleanSvg);
