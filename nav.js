// ======================================
// 共通ナビゲーション & ユーティリティ JS
// ======================================

document.addEventListener('DOMContentLoaded', function () {

  // ハンバーガーメニュー
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', function () {
      navMenu.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // 現在ページをアクティブ表示
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // IntersectionObserver でフェードイン (observe-fade クラス)
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.07, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.observe-fade').forEach(el => {
    fadeObserver.observe(el);
  });

  // ページヒーロー背景パララックス（軽量版）
  const heroBg = document.querySelector('.page-hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      heroBg.style.transform = `scale(1.05) translateY(${scrolled * 0.2}px)`;
    }, { passive: true });
  }

});
