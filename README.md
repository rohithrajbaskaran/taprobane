# Taprobane — Website Setup Guide

This is a single-page site: `index.html`, `styles.css`, `script.js`. No build step — just open `index.html` in a browser, or upload the folder to any static host (Netlify, Vercel, GitHub Pages, cPanel, etc).

## 1. Contact/quote form — how it sends you email

The form does **not** use Formspree or any third-party service. When a visitor submits it, JavaScript opens their own email app with a message pre-filled and addressed to your business email — they just hit send from there. No account, no API key, no backend.

To set it up:
1. Open `script.js` and set your real email at the top:
   ```js
   const RECIPIENT_EMAIL = "info@taprobane.lk";
   ```
2. Update the same address everywhere it appears in `index.html` (top bar, contact card, footer) — search for `info@taprobane.lk` and replace all instances.

**Trade-off to know:** this only works if the visitor has an email client configured on their device/browser (Mail, Outlook, Gmail desktop app, etc). It won't silently send from a phone with no mail app set up. If you later want submissions to arrive in your inbox even when visitors don't have a mail client, you'd need a backend or a service like Formspree/EmailJS — happy to wire that up instead if this becomes a problem.

## 2. Logo

Two logo files are in `assets/`:
- `logo-mark.svg` — icon only (the amber "T" riveted beam on navy), square. Use for favicons, app icons, social profile pictures, watermarks.
- `logo-horizontal.svg` — icon + "TAPROBANE / HARDWARE SUPPLIES" wordmark, on a transparent background. Use for letterhead, invoices, email signatures, the top of quotations.

The same mark is also built directly into `index.html` (nav bar, footer, and browser tab favicon) as inline SVG — so the header logo will always match these files exactly. If you get a professionally designed logo later, just swap these two SVG files and update the inline `<svg>` blocks in `index.html` (search for `class="logo-mark"`) and the `<link rel="icon">` line in the `<head>`.

## 3. Replace placeholder content

Search `index.html` for bracketed placeholders and swap in your real details:

| Placeholder | Where | Replace with |
|---|---|---|
| `+94 XX XXX XXXX` | index.html (multiple spots) | Your phone number |
| `info@taprobane.lk` | index.html + script.js `RECIPIENT_EMAIL` | Your business email |
| `[Your Address]`, `Colombo [XX]` | index.html (About + Contact) | Your street address / district |
| `Mon–Sat: 8.30 AM – 6.00 PM` | index.html | Your actual hours |
| `94XXXXXXXXX` in `wa.me/...` links | index.html (top bar, contact, floating button) | Your WhatsApp number, no `+` or spaces |
| `[X]+` stats (years, products, clients) | index.html Stats Strip | Real numbers |
| `[Year Founded]` | index.html About section | Founding year |
| `#` social links (Facebook/Instagram) | index.html top bar + footer | Your real profile URLs |

## 4. Optional polish

- Replace the icon-based "About" visual card with an actual photo of your store/warehouse.
- Update product category cards under `#products` if your categories differ from the defaults (Hand Tools, Power Tools, Fasteners, Electrical, Plumbing, Building Materials, Paints, Safety/PPE).

## 5. Deploy

Easiest options for a static site like this:
- **Netlify / Vercel**: drag-and-drop the folder, get a live URL in seconds.
- **GitHub Pages**: push to a repo, enable Pages in settings.
- Any regular web host: upload the files via FTP/cPanel.
