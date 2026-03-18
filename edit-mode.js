/**
 * edit-mode.js
 * URLに ?edit を付けると編集モードになる共通スクリプト
 * - テキストノードをクリックしてインライン編集
 * - 変更は LocalStorage に保存・自動復元
 * - 保存ボタンで確定 / リセットボタンで初期化
 */

(function () {
  'use strict';

  const PAGE_KEY = 'edit_' + location.pathname.replace(/\//g, '_').replace(/\.html$/, '');
  const isEditMode = new URLSearchParams(location.search).has('edit');

  /* ========== LocalStorage ユーティリティ ========== */
  function loadEdits() {
    try { return JSON.parse(localStorage.getItem(PAGE_KEY) || '{}'); } catch { return {}; }
  }
  function saveEdits(data) {
    localStorage.setItem(PAGE_KEY, JSON.stringify(data));
  }

  /* ========== 保存済み内容を復元（通常モードでも実行） ========== */
  function applyStoredEdits() {
    const edits = loadEdits();
    Object.entries(edits).forEach(([selector, value]) => {
      try {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = value;
      } catch (_) {}
    });
  }

  /* ========== 編集モード本体 ========== */
  function initEditMode() {

    /* ----- ツールバー作成 ----- */
    const toolbar = document.createElement('div');
    toolbar.id = 'edit-toolbar';
    toolbar.innerHTML = `
      <div class="et-left">
        <span class="et-badge">✏️ 編集モード</span>
        <span class="et-hint">テキストをクリックして編集できます</span>
      </div>
      <div class="et-right">
        <button id="et-save" class="et-btn et-btn-save"><i class="fas fa-save"></i> 保存</button>
        <button id="et-reset" class="et-btn et-btn-reset"><i class="fas fa-undo"></i> リセット</button>
        <a href="${location.pathname}" class="et-btn et-btn-exit"><i class="fas fa-times"></i> 終了</a>
      </div>
    `;
    document.body.prepend(toolbar);

    /* ツールバー分だけ body を下げる */
    document.body.style.paddingTop = '54px';

    /* ----- 編集可能な要素を特定 ----- */
    const EDITABLE_SELECTORS = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'p', 'li', 'td', 'th', 'span', 'a',
      'div.ci-value', 'div.em-number', 'div.em-name',
      'div.staff-name', 'div.footer-logo',
      '.page-hero-content h1',
      '.page-hero-content p',
      '.logo-sub',
    ];

    /* ナビ・ツールバー・フッターの一部はスキップ */
    const SKIP_SELECTORS = ['#edit-toolbar', '.nav-header', 'script', 'style'];

    function isSkipped(el) {
      return SKIP_SELECTORS.some(s => el.closest(s));
    }

    /* 対象要素を収集 */
    const editables = [];
    EDITABLE_SELECTORS.forEach(sel => {
      document.querySelectorAll(sel).forEach(el => {
        if (!isSkipped(el) && el.innerText.trim().length > 0) {
          editables.push(el);
        }
      });
    });

    /* ----- 各要素に編集機能を付与 ----- */
    const edits = loadEdits();
    // セレクタ生成ユーティリティ
    function getSelector(el) {
      if (el.id) return '#' + el.id;
      // ユニークなセレクタをパスで生成
      const path = [];
      let cur = el;
      while (cur && cur !== document.body) {
        let seg = cur.tagName.toLowerCase();
        if (cur.id) { seg = '#' + cur.id; path.unshift(seg); break; }
        if (cur.className) {
          const cls = [...cur.classList]
            .filter(c => !['active','loaded','visible','checked'].includes(c))
            .slice(0, 2).join('.');
          if (cls) seg += '.' + cls;
        }
        const siblings = cur.parentNode ? [...cur.parentNode.children].filter(s => s.tagName === cur.tagName) : [];
        if (siblings.length > 1) seg += `:nth-child(${[...cur.parentNode.children].indexOf(cur) + 1})`;
        path.unshift(seg);
        cur = cur.parentNode;
      }
      return path.join(' > ');
    }

    editables.forEach(el => {
      const sel = getSelector(el);
      el.dataset.editSel = sel;

      // ホバーエフェクト
      el.classList.add('edit-hover');

      el.addEventListener('click', function (e) {
        if (el.isContentEditable) return; // 既に編集中
        e.stopPropagation();

        // contenteditable に切り替え
        el.contentEditable = 'true';
        el.classList.add('edit-active');
        el.focus();

        // カーソルを末尾に
        const range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        const sel2 = window.getSelection();
        sel2.removeAllRanges();
        sel2.addRange(range);

        // フォーカスが外れたら確定
        el.addEventListener('blur', function onBlur() {
          el.contentEditable = 'false';
          el.classList.remove('edit-active');
          // 変更を記録
          const key = el.dataset.editSel;
          edits[key] = el.innerHTML;
          el.removeEventListener('blur', onBlur);
          showToast('変更を記録しました（未保存）');
        }, { once: true });
      });
    });

    /* ----- 保存ボタン ----- */
    document.getElementById('et-save').addEventListener('click', () => {
      saveEdits(edits);
      showToast('✅ 保存しました！', 'success');
    });

    /* ----- リセットボタン ----- */
    document.getElementById('et-reset').addEventListener('click', () => {
      if (!confirm('このページの編集内容をすべてリセットしますか？')) return;
      localStorage.removeItem(PAGE_KEY);
      location.reload();
    });
  }

  /* ========== トースト通知 ========== */
  function showToast(msg, type = 'info') {
    let toast = document.getElementById('edit-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'edit-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.className = 'edit-toast-show ' + (type === 'success' ? 'et-toast-success' : '');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.className = '', 2500);
  }

  /* ========== スタイル注入 ========== */
  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = `
      /* ===== 編集モード共通スタイル ===== */
      #edit-toolbar {
        position: fixed;
        top: 0; left: 0; right: 0;
        z-index: 99999;
        background: linear-gradient(135deg, #1e3a5f, #2a5298);
        color: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1.25rem;
        height: 54px;
        box-shadow: 0 2px 16px rgba(0,0,0,0.35);
        font-family: -apple-system, 'Hiragino Sans', sans-serif;
        font-size: 0.85rem;
        gap: 1rem;
      }
      .et-left { display: flex; align-items: center; gap: 0.85rem; }
      .et-right { display: flex; align-items: center; gap: 0.6rem; }
      .et-badge {
        background: rgba(232,184,75,0.9);
        color: #1e3a5f;
        font-weight: 700;
        font-size: 0.78rem;
        padding: 0.28rem 0.75rem;
        border-radius: 999px;
        white-space: nowrap;
      }
      .et-hint {
        font-size: 0.78rem;
        opacity: 0.75;
        white-space: nowrap;
      }
      @media (max-width: 600px) { .et-hint { display: none; } }
      .et-btn {
        display: inline-flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.38rem 0.9rem;
        border-radius: 6px;
        font-size: 0.8rem;
        font-weight: 600;
        cursor: pointer;
        border: none;
        text-decoration: none;
        transition: all 0.2s;
        white-space: nowrap;
      }
      .et-btn-save  { background: #22c55e; color: white; }
      .et-btn-save:hover  { background: #16a34a; transform: translateY(-1px); }
      .et-btn-reset { background: rgba(255,255,255,0.15); color: white; }
      .et-btn-reset:hover { background: rgba(255,255,255,0.28); }
      .et-btn-exit  { background: rgba(239,68,68,0.85); color: white; }
      .et-btn-exit:hover  { background: #dc2626; color: white; transform: translateY(-1px); }

      /* 編集対象ホバー */
      .edit-hover {
        cursor: pointer;
        transition: outline 0.15s, background 0.15s;
        border-radius: 3px;
      }
      .edit-hover:hover {
        outline: 2px dashed rgba(232,184,75,0.8);
        outline-offset: 2px;
        background: rgba(232,184,75,0.06);
      }
      /* 編集中 */
      [contenteditable="true"].edit-active {
        outline: 2px solid #e8b84b !important;
        outline-offset: 2px;
        background: rgba(232,184,75,0.12) !important;
        border-radius: 3px;
        min-width: 40px;
        cursor: text;
      }

      /* トースト */
      #edit-toast {
        position: fixed;
        bottom: 1.5rem;
        right: 1.5rem;
        background: rgba(30,58,95,0.92);
        color: white;
        padding: 0.6rem 1.2rem;
        border-radius: 8px;
        font-size: 0.84rem;
        font-family: -apple-system, 'Hiragino Sans', sans-serif;
        z-index: 100000;
        opacity: 0;
        transform: translateY(12px);
        transition: opacity 0.3s, transform 0.3s;
        pointer-events: none;
        box-shadow: 0 4px 20px rgba(0,0,0,0.25);
      }
      #edit-toast.edit-toast-show {
        opacity: 1;
        transform: translateY(0);
      }
      #edit-toast.et-toast-success {
        background: linear-gradient(135deg, #166534, #16a34a);
      }
    `;
    document.head.appendChild(style);
  }

  /* ========== エントリポイント ========== */
  document.addEventListener('DOMContentLoaded', () => {
    // 保存済み編集を常に復元
    applyStoredEdits();

    // ?edit がある場合のみ編集モード起動
    if (isEditMode) {
      injectStyles();
      initEditMode();
    }
  });

})();
