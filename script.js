const trigger = document.getElementById('js-menu-trigger');
const overlay = document.getElementById('js-nav-overlay');
const body = document.body;

trigger.addEventListener('click', () => {
    trigger.classList.toggle('is-active');
    overlay.classList.toggle('is-open');
    
    // 開いている時はスクロール不可
    if (overlay.classList.contains('is-open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// メニュー内のリンクをクリックしたら閉じる
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        trigger.classList.remove('is-active');
        overlay.classList.remove('is-open');
        body.style.overflow = 'auto';
    });
});