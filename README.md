# Danish Siddiqui DevOps Portfolio and Blog

Static portfolio plus blog site for `danishsiddiqui.in`, designed for deployment on Vercel.

## Project Structure

- `index.html`: main portfolio page (experience, projects, certifications, mentorship, blog preview)
- `styles.css`: main site visual design and responsive layout
- `script.js`: reveal animations and footer year script
- `blog/index.html`: blog home page
- `blog/posts/*.html`: individual blog posts
- `blog/styles.css`: blog and blog post styling
- `assets/cert-badges/*.png`: PNG certificate-style badges (CKAD, KCNA, LFX Mentee)
- `vercel.json`: Vercel routing and `www` to apex redirect

## Blog Publishing

To add a new post:

1. Create a new file in `blog/posts/`.
2. Use one of the existing post files as a template.
3. Add a card link for that post in `blog/index.html`.
4. Optionally add the new post card in the portfolio blog preview section (`index.html`).

## Custom Domain Setup

Target production domain:

- `danishsiddiqui.in`
- Optional redirect domain: `www.danishsiddiqui.in`

Recommended DNS records for Vercel:

- `A` record for `@` -> `76.76.21.21`
- `CNAME` record for `www` -> `cname.vercel-dns.com`

After DNS is added, bind both domains in Vercel and set the apex domain as primary.

## Deploy

When authenticated with Vercel:

```bash
vercel deploy --prod -y
```

If this directory is linked to a Vercel project, the command will publish the production site.
