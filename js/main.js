// Hide all pages immediately
document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

window.addEventListener('DOMContentLoaded', () => {
  renderSoilGrid();
  const session = getSession();
  if (session) {
    document.getElementById('nav-avatar').textContent = session.name.charAt(0).toUpperCase();
    document.getElementById('main-nav').classList.add('visible');
    showPage('home');
  } else {
    showPage('auth');
  }
});