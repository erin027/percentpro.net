// ── Shared Header ──
// Edit this file to update the header across ALL pages instantly.

document.addEventListener('DOMContentLoaded', function () {
  const header = `
    <header>
      <div class="header-inner">
        <a href="/" class="logo">Percent<span>Pro</span></a>
        <nav class="header-nav" aria-label="Main navigation">
          <a href="/">Percentage</a>
          <a href="/tip-calculator">Tip</a>
          <a href="/discount-calculator">Discount</a>
          <a href="/gpa-calculator">GPA</a>
          <a href="/tax-calculator">Tax</a>
        </nav>
      </div>
    </header>
  `;
  document.body.insertAdjacentHTML('afterbegin', header);
});
