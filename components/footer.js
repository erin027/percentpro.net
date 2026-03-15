// ── Shared Footer ──
// Edit this file to update the footer across ALL pages instantly.

document.addEventListener('DOMContentLoaded', function () {
  const footer = `
    <footer>
      <div class="wrap footer-inner">
        <div class="footer-logo">Percent<span style="color:var(--accent)">Pro</span></div>
        <nav class="footer-links" aria-label="Footer navigation">
          <a href="/">Percentage Calculator</a>
          <a href="/tip-calculator">Tip Calculator</a>
          <a href="/discount-calculator">Discount Calculator</a>
          <a href="/gpa-calculator">GPA Calculator</a>
          <a href="/tax-calculator">Tax Calculator</a>
          <a href="/privacy">Privacy Policy</a>
        </nav>
        <div class="footer-note">© ${new Date().getFullYear()} PercentPro. Free to use.</div>
      </div>
    </footer>
  `;
  document.body.insertAdjacentHTML('beforeend', footer);
});
