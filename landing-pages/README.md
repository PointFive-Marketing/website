# PointFive Landing Pages — v3

## Files to push to GitHub (`landing-pages/` folder)

| File | What it does |
|------|-------------|
| `shared.css` | Design system (Plus Jakarta Sans, dark hero, premium cards) |
| `aws.html` | AWS Efficiency Assessment page content |
| `eks.html` | Kubernetes/EKS Assessment page content |
| `nubank.html` | Nubank Case Study page content |

## Embed files (paste into Webflow)

| File | Webflow page |
|------|-------------|
| `embeds/embed-aws.html` | `/lp/aws-efficiency` |
| `embeds/embed-eks.html` | `/lp/eks-kubernetes` |
| `embeds/embed-nubank.html` | `/lp/nubank-case-study` |

## What changed in v3

**HubSpot form fix:** Embed loader now loads HubSpot SDK *first*, waits for it to initialize, then fetches page HTML and creates forms via `data-hs-*` attributes. Guarantees `hbspt.forms.create()` never runs before SDK is ready.

**Design upgrade:** Complete CSS overhaul — Plus Jakarta Sans, dramatic dark hero with gradients/dot grid, elevated form card, refined color tokens, hover states, and micro-interactions.

## Deployment steps

1. Push `shared.css`, `aws.html`, `eks.html`, `nubank.html` to `landing-pages/` in GitHub
2. In Webflow, re-paste each embed file into the corresponding page's embed block
3. Publish the Webflow site
4. If jsDelivr caches old files, purge: `https://purge.jsdelivr.net/gh/daveandersonpointfive/website@main/landing-pages/shared.css`
