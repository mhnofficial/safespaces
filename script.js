// 👍 Like button toggle
document.getElementById('likeBtn').addEventListener('click', function () {
  this.classList.toggle('liked');
  this.textContent = this.classList.contains('liked') ? '✅ Liked' : '👍 Like';
});

// ⛶ Fullscreen function
function goFullscreen(id) {
  const element = document.getElementById(id);
  if (!element) {
    console.error(`Element with id "${id}" not found.`);
    return;
  }
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullScreen) {
    element.mozRequestFullScreen();
  } else if (element.msRequestFullscreen) {
    element.msRequestFullscreen();
  }
}

// 🌙 / ☀️ Dark Mode + Hide
const toggle = document.getElementById('darkModeToggle');
const hideBtn = document.getElementById('hideToggle');
const container = document.querySelector('.toggle-container');

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  toggle.textContent = '☀️';
} else {
  toggle.textContent = '🌙';
}

// Load saved hide state
if (localStorage.getItem('toggleHidden') === 'true') {
  container.style.display = 'none';
}

// Toggle dark mode
toggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  if (document.body.classList.contains('dark')) {
    toggle.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    toggle.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
});

// Hide toggle container (persists)
hideBtn.addEventListener('click', () => {
  container.style.display = 'none';
  localStorage.setItem('toggleHidden', 'true');
});

const openBtn = document.getElementById('openBlankBtn');

if (localStorage.getItem('openBlankClicked') === 'true') {
    openBtn.style.display = 'none';
}

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const newWindow = window.open('about:blank', '_blank'); // opens a blank page
    if (newWindow) {
        newWindow.document.write('<h1>Welcome!</h1><p>You can load your site here manually or via JS.</p>');
        newWindow.document.close();
    }
    openBtn.style.display = 'none';
    localStorage.setItem('openBlankClicked', 'true');
});
