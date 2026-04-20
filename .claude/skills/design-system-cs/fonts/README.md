# Fonts

Fonts are loaded from CDN inside `colors_and_type.css` for simplicity:

- **Pretendard Variable** — `https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.css` (OFL)
- **JetBrains Mono** — Google Fonts (Apache 2.0)

For offline/production use, drop `.woff2` files here and replace the `@import` statements in `colors_and_type.css` with local `@font-face` declarations.

No custom brand fonts yet — both are open-source substitutes chosen to match the audience (Korean + English balance) and tone (friendly, precise edutech). Swap them out anytime via the CSS vars `--font-sans` / `--font-mono`.
