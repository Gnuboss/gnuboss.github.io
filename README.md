# Bronson Harrington — Personal Site

Built with [Astro](https://astro.build), hosted on GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub as `gnuboss/YOUR-REPO-NAME`
2. Go to **Settings → Pages → Source → GitHub Actions**
3. Push to `main` — the workflow auto-builds and deploys

Site will be live at: `https://gnuboss.github.io`

### Using a custom domain (e.g. bronsonharrington.com)

1. Add a `CNAME` file to `/public/` containing your domain
2. Point your DNS registrar to GitHub's IPs:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. Remove the `base` option from `astro.config.mjs` if using a root domain

## Project structure

```
src/
  components/   Nav, Footer
  layouts/      Base layout
  pages/        index.astro, 404.astro
  styles/       global.css
public/
  favicon.svg
.github/
  workflows/    deploy.yml
```
