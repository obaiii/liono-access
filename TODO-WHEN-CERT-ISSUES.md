# When the HTTPS certificate is issued

GitHub had not issued a certificate for this custom domain when the link
previews were set up, so every URL in `index.html` and `404.html` uses `http://`.
An `https://` og:image cannot be fetched by a preview crawler while the
certificate is missing, which is what made WhatsApp previews come back empty.

Once **Settings → Pages** shows the certificate as issued:

1. Tick **Enforce HTTPS**.
2. In `index.html` and `404.html`, change `og:url`, `og:image`,
   `twitter:image` and `rel=canonical` from `http://` back to `https://`.
3. Re-share the link in WhatsApp to confirm the preview still renders.
   WhatsApp caches previews per URL, so test in a new chat or with a
   cache-busting query string.
