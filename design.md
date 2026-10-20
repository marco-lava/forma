# FORMA — Edilizia & Costruzioni

Frontend-only Italian demonstration landing. No API calls, database, real submissions or real calls.
Architectural editorial direction: precise 50/50 grids, square corners, large real photographs, generous whitespace.
Palette: white, warm off-white #f7f7f2, charcoal #242925, orange #f36b2f, grey #747871.
Typography: Poppins display and body; medium-weight tightly tracked oversized headlines, spaced uppercase labels.
Sticky white navbar with geometric F logo; full-bleed construction hero with 40% black overlay, left-aligned title, outlined and dark CTAs.
Two alternating service rows; photographic statistics with four white cards; edge-to-edge zero-gap project gallery with accessible lightbox.
Dark contact section with minimal form and demo confirmation; mobile menu; privacy/contact modal. Reduced motion respected.
Local WebP photos from web search; hero eager, gallery lazy. Demo details and fictitious statistics explicitly disclosed.
Page implementation lives in components/landing-page.tsx; pages/index.tsx composes it. No backend changes.

Navbar motion: continuous scroll-linked translation and fade for the entire bar. 240px of downward travel moves from fully visible to fully hidden; upward travel reverses it proportionally, preserving intermediate positions when scrolling stops. No timed transition or binary visibility trigger. Mobile open menu remains visible; keyboard focus reveals navigation. Document and containing-element scrolling supported.

Navbar fallback: scroll handler now writes translate3d and opacity directly inline, eliminating stale CSS-variable rules as a dependency.

White-strip fix: navbar is fixed and removed from flow; hero photograph extends beneath its initial footprint with internal top padding. No white spacer or duplicate navbar.

User-requested removal: header and header-inner have no white background at any scroll position. Only logo, links and CTA move/fade; expanded mobile menu retains its readable white surface. Inline transparent background prevents stale styles reintroducing the block.

Final navbar background: one white surface on the animated header only. Header-inner stays transparent. Existing translation/fade algorithm untouched.

Preview refresh investigation: user video shows white surface/content disalignment. Exact external cause unverified. Navbar classes now namespaced forma-navbar / forma-navbar-inner to avoid generic .header overrides, pseudo-backgrounds disabled. Tested real Vite CSS hot update and reload on desktop/mobile with injected conflicting generic header styles; one animated white surface remains. Motion handler unchanged.

Content refinements: removed service labels and raised copy; removed hero/stat indices and project footer strip; Scopri Forma right aligned. Minimal local-only form uses permanent demo notice, no consent checkbox, exact demo success copy. Footer simplified as requested. Dialog backdrop pointer clicks close without closing on content clicks. Desktop/mobile tests passed. Navbar motion untouched.

Navbar CTA: Richiedi un preventivo, no phone icon, direct smooth anchor to #contatti. Contact popup implementation removed; fictitious footer phone is noninteractive. Project modals preserved. Navbar scroll motion unchanged.

Social preview: photo-free 1200×630 PNG, centered original geometric F and FORMA wordmark with EDILIZIA & COSTRUZIONI subtitle, charcoal #242925 background, off-white lettering and orange accent. Open Graph and Twitter metadata use the permanent public asset URL. Site UI unchanged.

OG asset synchronization: replaced the untouched template image at packages/web/public/og-image.png with the FORMA cover. This is the canonical project OG asset; images/forma-og.png and images/forma-social-v2.jpg remain matching compatibility copies. scripts/create-og.py regenerates all three together. HTML OG, secure_url, Twitter and image_src point to the uploaded canonical PNG, with PNG MIME metadata. Dashboard state itself is outside the workspace and has not been verified.
