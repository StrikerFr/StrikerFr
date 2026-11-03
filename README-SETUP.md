# Profile README — setup and sources

This is the special public profile repository for **[StrikerFr](https://github.com/StrikerFr)**. Its `main` branch contains the README and locally hosted artwork. GitHub Actions builds fresh GitHub metrics and contribution animations, then publishes the generated contribution files to the `output` branch.

## What runs automatically

- On every push to `main`, the workflow fetches the public profile data, refreshes `assets/profile-metrics.svg`, generates light and dark contribution snakes plus an animated GIF, commits fresh assets beside the README, and also publishes a copy to `output`.
- It runs daily at 00:17 UTC and can also be started manually from **Actions → Refresh profile visuals → Run workflow**.
- The workflow requests only `contents: write` and uses the repository-provided `GITHUB_TOKEN`. No personal access token, API key, or external image service is needed.
- Ensure Actions are enabled and the repository’s Actions settings allow the workflow’s `GITHUB_TOKEN` to write repository contents. After the first push, check the workflow run if the snake images do not appear.

## Push changes

From this repository folder, run `git push -u origin main`. The repository is already configured with `https://github.com/StrikerFr/StrikerFr.git` as `origin`.

## Verified project links used in the profile

These repositories were found in the public `StrikerFr` account and their README/source metadata was inspected:

| Profile entry | Public source | Description basis |
| --- | --- | --- |
| MediKiosk | [Brijwasi-Medikiosk](https://github.com/StrikerFr/Brijwasi-Medikiosk) | Its README describes a voice-first multilingual clinical intake and medication safety suite. |
| Sahaara | [sahaara-info](https://github.com/StrikerFr/sahaara-info) | Its README describes coordinator-first wellbeing intelligence and care coordination for older adults living at home. |
| Camply | [Camply](https://github.com/StrikerFr/Camply) | Its README describes campus opportunity discovery, AI assistance, team formation, and participation recognition. |
| PricePilot | [Price-Pilot-AI](https://github.com/StrikerFr/Price-Pilot-AI) | Its README describes Indian store price comparison, product research, review analysis, price history, and alerts. |
| RocketRide | [rocketride-server](https://github.com/StrikerFr/rocketride-server) | The repository description and README describe an AI development environment with a C++ core and Python/TypeScript integrations. |

**AgroPilot AI** and **LegalLens AI** were not found in the public repository list for `StrikerFr`, so they are not linked or represented as verified projects. Add their exact public repository URLs if they are published elsewhere or under different names.

## Research notes

The profile’s composition is original. These real profile and component repositories were reviewed for their source Markdown, SVG/animation patterns, and automation:

| Source | Reviewed approach |
| --- | --- |
| [DenverCoder1/DenverCoder1](https://github.com/DenverCoder1/DenverCoder1) | Clear project-led sections, useful media, and concise profile content. |
| [anuraghazra/anuraghazra](https://github.com/anuraghazra/anuraghazra) | Short first-person positioning and emphasis on real work. |
| [Platane/snk](https://github.com/Platane/snk) | Generates SVG and GIF animations from actual GitHub contribution history; used by the workflow. |
| [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) | Reviewed for dynamic stat card patterns. The public Vercel endpoint returned HTTP 503 during verification, so the profile now generates its own metrics SVG from the GitHub REST API. |
| [DenverCoder1/readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) | Reviewed for animated role text. A local custom role graphic is used to avoid another runtime image dependency. |
| [tandpfun/skill-icons](https://github.com/tandpfun/skill-icons) | Reviewed as the icon source. The stack is currently rendered as lightweight text so technology icons cannot become broken remote images. |
| [lowlighter/metrics](https://github.com/lowlighter/metrics) | Reviewed as a flexible metrics generator; replaced with a small local SVG generator to keep the data source explicit and configuration minimal. |
| [GitHub profile README guide](https://docs.github.com/en/account-and-profile/concepts/personal-profile) | Special repository and supported README content. |
| [GitHub profile gallery](https://github.com/abhisheknaiidu/awesome-github-profile-readme) | Explored real profile layouts across animation, dynamic data, images, and minimalist styles. |

The visual direction takes inspiration from the measured hierarchy, project focus, and contribution animation techniques above. No other profile’s text or layout has been copied.

## Files

- `README.md` — profile content, verified project links, and graphics.
- `assets/profile-banner.svg` — original animated neon terminal/orbit header.
- `assets/profile-roles.svg` — local SVG role strip.
- `assets/profile-footer.svg` — original animated closing graphic.
- `assets/profile-metrics.svg` — live metrics SVG generated by the workflow; the committed copy is a real API snapshot.
- `assets/github-contribution-grid-snake.svg`, `assets/github-contribution-grid-snake-dark.svg`, and `assets/github-contribution-snake.gif` — real contribution animations, currently seeded from a successful `snk` run and refreshed by Actions.
- `.github/workflows/snake.yml` — daily, push-triggered, and manual generation/publish workflow.
- `scripts/generate-profile-metrics.mjs` — dependency-free GitHub API to SVG generator.
