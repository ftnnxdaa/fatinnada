// ─── THEME TOGGLE ───
const themeBtn = document.getElementById('themeBtn');

const saved = localStorage.getItem('theme');
if (saved === 'light') {
    document.body.classList.add('light');
    if (themeBtn) themeBtn.textContent = '🌙 Dark';
} else {
    document.body.classList.remove('light');
    if (themeBtn) themeBtn.textContent = '☀️ Light';
}

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        const isLight = document.body.classList.contains('light');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeBtn.textContent = isLight ? '🌙 Dark' : '☀️ Light';
    });
}

// ─── ACTIVE NAVBAR LINK ───
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.navbar a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// ─── BACK TO TOP ───
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ─── WELCOME ALERT (hanya di index) ───
if (currentPage === 'index.html' || currentPage === '') {
    window.addEventListener('load', () => {
        setTimeout(() => {
            alert('Selamat Datang di Website Resmi Kelurahan Bareng');
        }, 500);
    });
}
