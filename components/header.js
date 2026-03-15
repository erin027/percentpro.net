// ── Shared Header ──
// Edit this file to update the header across ALL pages instantly.

document.addEventListener('DOMContentLoaded', function () {
  const header = `
    <header>
      <div class="header-inner">
        <a href="/" class="logo">Percent<span>Pro</span></a>
        <span class="tagline-badge">Free · No Signup · Instant</span>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', header);
});
