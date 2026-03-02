# Danish Siddiqui DevOps Portfolio

Static DevOps portfolio site for `danishsiddiqui.in`, designed for deployment on Vercel.

## Files

- `index.html`: main portfolio page
- `styles.css`: visual design and responsive layout
- `script.js`: section reveal animation
- `vercel.json`: Vercel routing and `www` to apex redirect

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
