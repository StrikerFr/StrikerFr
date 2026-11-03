# Setup and verification checklist

This folder is prepared as the special public profile repository `StrikerFr/StrikerFr`. GitHub displays its README on `github.com/StrikerFr` once it is pushed as a public repository owned by `StrikerFr`.

## Before publishing

- [ ] Confirm each project repository and replace its row in `README.md` with a verified link and a short description supported by its README/source:
  - MediKiosk: **repository URL needed**
  - Sahaara: **repository URL needed**
  - AgroPilot AI: **repository URL needed**
  - LegalLens AI: **repository URL needed**
- [ ] Add only technologies you have used or are actively learning. Use the [Skill Icons catalogue](https://github.com/tandpfun/skill-icons) names and syntax if you want to display its icons.
- [ ] Confirm the exact wording/context for “Top 20 — Hackathon” and “Top 7 — Hypnexis Hackathon” if you want event names or dates shown. No dates or award titles have been added.
- [ ] If needed, verify the LinkedIn URL and portfolio URL are the public pages you want visitors to use.

## Publish

1. Create a **public** GitHub repository named exactly `StrikerFr` under the `StrikerFr` account. The repository name must match the username for GitHub to show the profile README.
2. From this directory, initialize Git and push the files to the repository's default branch:

   ```powershell
   git init
   git add README.md README-SETUP.md assets .github
   git commit -m "Build profile README"
   git branch -M main
   git remote add origin https://github.com/StrikerFr/StrikerFr.git
   git push -u origin main
   ```

3. In the repository settings, ensure Actions are enabled. The workflow requests only `contents: write`, uses the repository `GITHUB_TOKEN`, runs daily and supports manual dispatch. Run **Actions → Generate contribution snake → Run workflow** once. It publishes the two generated SVGs to the `output` branch.
4. Once the `output` branch exists, the contribution image paths in `README.md` resolve from `raw.githubusercontent.com`.

## Components and sources reviewed

| Source | Technique used or considered |
| --- | --- |
| [DenverCoder1/DenverCoder1](https://github.com/DenverCoder1/DenverCoder1) | Project-forward profile sections and compact content hierarchy. |
| [anuraghazra/anuraghazra](https://github.com/anuraghazra/anuraghazra) | Concise first-person intro and selective project emphasis. |
| [Platane/snk](https://github.com/Platane/snk) | Contribution graph rendered as generated animated SVGs. |
| [anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) | Live statistics and language cards, themed to match the palette. |
| [DenverCoder1/readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) | Animated role line. |
| [tandpfun/skill-icons](https://github.com/tandpfun/skill-icons) | Candidate technology icon source; technologies remain blank until verified. |
| [lowlighter/metrics](https://github.com/lowlighter/metrics) | Reviewed as a richer GitHub metrics option; not added to avoid a second workflow and extra token/configuration. |
| [GitHub profile README guide](https://docs.github.com/en/account-and-profile/concepts/personal-profile) | Special-repository behavior and GitHub Flavored Markdown support. |

Other profile gallery references: [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme) and [awesome-github-profile](https://github.com/beydemirfurkan/awesome-github-profile).

## External image services

- `readme-typing-svg.demolab.com`: animated title line.
- `github-readme-stats.vercel.app`: stats and language cards.
- `streak-stats.demolab.com`: contribution streak card.
- `raw.githubusercontent.com/StrikerFr/StrikerFr/output/...`: workflow-generated snake SVGs.

These services are third-party and can rate-limit, change behavior, or be unavailable. Generated snake assets are published by this repository's workflow. Stats and streak figures are computed externally and may lag GitHub.
