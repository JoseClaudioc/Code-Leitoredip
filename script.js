/* =========================================================
   LINKPRO V2 — STYLE.CSS
========================================================= */

:root {
  --primary: #2563eb;
  --primary-hover: #1d4ed8;

  --background: #f1f5f9;
  --surface: #ffffff;

  --text: #0f172a;
  --text-secondary: #64748b;
  --text-muted: #94a3b8;

  --border: #e2e8f0;

  --sidebar: #0f172a;
  --sidebar-hover: #1e293b;

  --success: #22c55e;
  --warning: #f59e0b;

  --radius: 10px;
}


/* =========================================================
   RESET
========================================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}


html {
  scroll-behavior: smooth;
}


body {
  font-family: Arial, sans-serif;
  background: var(--background);
  color: var(--text);
}


button,
input,
textarea {
  font: inherit;
}


button {
  cursor: pointer;
}


/* =========================================================
   APP
========================================================= */

.app {
  min-height: 100vh;

  display: grid;

  grid-template-columns:
    240px
    minmax(0, 1fr)
    360px;
}


/* =========================================================
   SIDEBAR
========================================================= */

.sidebar {
  background: var(--sidebar);
  color: white;

  padding: 24px 16px;

  display: flex;
  flex-direction: column;

  min-height: 100vh;
}


.brand {
  display: flex;
  align-items: center;

  gap: 12px;

  padding: 8px;

  margin-bottom: 35px;
}


.brand-icon {
  width: 42px;
  height: 42px;

  border-radius: 12px;

  background: var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 21px;

  transition:
    background 0.2s ease,
    transform 0.2s ease;
}


.brand-icon:hover {
  transform: translateY(-1px);
}


.brand strong {
  display: block;

  font-size: 18px;
}


.brand span {
  display: block;

  margin-top: 3px;

  font-size: 12px;

  color: #94a3b8;
}


/* =========================================================
   NAVEGAÇÃO
========================================================= */

nav {
  display: flex;
  flex-direction: column;

  gap: 7px;
}


.nav-item {
  width: 100%;

  border: 0;

  background: transparent;

  color: #cbd5e1;

  text-align: left;

  padding: 13px 14px;

  border-radius: 9px;

  transition:
    background 0.2s ease,
    color 0.2s ease,
    transform 0.15s ease;
}


.nav-item:hover {
  background: var(--sidebar-hover);

  color: white;
}


.nav-item:active {
  transform: scale(0.98);
}


.nav-item.active {
  background: var(--sidebar-hover);

  color: white;

  box-shadow:
    inset 3px 0 0 var(--primary);
}


/* =========================================================
   BOTÕES DA SIDEBAR
========================================================= */

.sidebar-bottom {
  margin-top: auto;

  display: flex;
  flex-direction: column;

  gap: 8px;
}


.save-btn,
.reset-btn {
  border: 0;

  padding: 12px;

  border-radius: 9px;

  transition:
    background 0.2s ease,
    transform 0.15s ease;
}


.save-btn {
  background: var(--primary);

  color: white;

  font-weight: bold;
}


.save-btn:hover {
  background: var(--primary-hover);
}


.save-btn:active,
.reset-btn:active {
  transform: scale(0.98);
}


.reset-btn {
  background: #1e293b;

  color: #cbd5e1;
}


.reset-btn:hover {
  background: #334155;

  color: white;
}


/* =========================================================
   CONTEÚDO
========================================================= */

.content {
  padding: 30px;

  overflow-y: auto;

  max-height: 100vh;
}


.topbar {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 25px;
}


.topbar h1 {
  font-size: 28px;

  margin-bottom: 5px;
}


.topbar p {
  color: var(--text-secondary);
}


/* =========================================================
   STATUS
========================================================= */

.status {
  color: var(--text-secondary);

  font-size: 13px;

  display: flex;

  align-items: center;

  gap: 7px;

  white-space: nowrap;
}


.status span {
  width: 8px;
  height: 8px;

  background: var(--success);

  border-radius: 50%;

  flex-shrink: 0;

  transition:
    background 0.2s ease;
}


/* =========================================================
   SEÇÕES
========================================================= */

.editor-section {
  display: none;

  animation: sectionIn 0.18s ease;
}


.editor-section.active {
  display: block;
}


@keyframes sectionIn {

  from {
    opacity: 0;

    transform: translateY(4px);
  }

  to {
    opacity: 1;

    transform: translateY(0);
  }

}


/* =========================================================
   CARDS
========================================================= */

.card {
  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: 15px;

  padding: 24px;

  margin-bottom: 18px;

  box-shadow:
    0 5px 20px rgba(15, 23, 42, 0.04);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.card:hover {
  border-color: #d7dee8;
}


.card-title {
  margin-bottom: 24px;
}


.card-title h2,
.section-heading h2 {
  font-size: 21px;

  margin-bottom: 6px;
}


.card-title p,
.section-heading p {
  color: var(--text-secondary);

  font-size: 14px;
}


/* =========================================================
   FORMULÁRIOS
========================================================= */

.form-grid {
  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 18px;
}


.form-group {
  margin-bottom: 18px;
}


.form-group label,
.custom-colors label {
  display: block;

  font-size: 13px;

  font-weight: bold;

  margin-bottom: 7px;

  color: #334155;
}


.form-group input,
.form-group textarea {
  width: 100%;

  border: 1px solid #cbd5e1;

  border-radius: 9px;

  padding: 12px;

  outline: none;

  background: white;

  color: var(--text);

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease;
}


.form-group input:hover,
.form-group textarea:hover {
  border-color: #94a3b8;
}


.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary);

  box-shadow:
    0 0 0 3px
    color-mix(
      in srgb,
      var(--primary) 12%,
      transparent
    );
}


.form-group textarea {
  resize: vertical;

  min-height: 100px;
}


.form-group input::placeholder,
.form-group textarea::placeholder {
  color: #94a3b8;
}


/* =========================================================
   AVATAR
========================================================= */

.avatar-editor {
  display: flex;

  align-items: center;

  gap: 18px;

  margin-bottom: 25px;
}


.big-avatar {
  width: 80px;
  height: 80px;

  border-radius: 50%;

  background: #dbeafe;

  color: var(--primary);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 30px;

  font-weight: bold;

  overflow: hidden;

  flex-shrink: 0;
}


.big-avatar img,
.profile-avatar img {
  width: 100%;
  height: 100%;

  object-fit: cover;

  border-radius: 50%;
}


.avatar-editor p {
  color: var(--text-secondary);

  font-size: 13px;

  margin: 5px 0 10px;
}


.avatar-editor input[type="file"] {
  max-width: 100%;

  font-size: 12px;

  color: var(--text-secondary);
}


/* =========================================================
   BOTÕES PRINCIPAIS
========================================================= */

.primary-btn,
.secondary-btn {
  border: 0;

  border-radius: 9px;

  padding: 12px 17px;

  font-weight: bold;

  transition:
    background 0.2s ease,
    transform 0.15s ease,
    box-shadow 0.2s ease;
}


.primary-btn {
  background: var(--primary);

  color: white;
}


.primary-btn:hover {
  background: var(--primary-hover);

  box-shadow:
    0 4px 12px
    color-mix(
      in srgb,
      var(--primary) 25%,
      transparent
    );
}


.secondary-btn {
  background: #e2e8f0;

  color: #334155;
}


.secondary-btn:hover {
  background: #cbd5e1;
}


.primary-btn:active,
.secondary-btn:active {
  transform: scale(0.98);
}


.full {
  width: 100%;

  margin-top: 10px;
}


/* =========================================================
   LINKS
========================================================= */

.section-heading {
  display: flex;

  align-items: center;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 20px;
}


#linksContainer .card {
  margin-bottom: 14px;
}


#linksContainer .card:last-child {
  margin-bottom: 0;
}


.link-title,
.link-url {
  transition:
    border-color 0.2s ease;
}


/* =========================================================
   APARÊNCIA
========================================================= */

.theme-grid {
  display: grid;

  grid-template-columns:
    repeat(5, 1fr);

  gap: 12px;

  margin-bottom: 28px;
}


.theme-card {
  position: relative;

  border: 2px solid var(--border);

  background: white;

  padding: 14px 8px;

  border-radius: 10px;

  color: #334155;

  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    transform 0.15s ease;
}


.theme-card:hover {
  border-color: var(--primary);

  transform: translateY(-1px);
}


.theme-card.active {
  border-color: var(--primary);

  box-shadow:
    0 0 0 3px
    color-mix(
      in srgb,
      var(--primary) 12%,
      transparent
    );
}


.theme-card span {
  display: block;

  width: 30px;
  height: 30px;

  border-radius: 50%;

  margin: 0 auto 8px;
}


.custom-colors {
  display: grid;

  grid-template-columns:
    1fr
    1fr;

  gap: 20px;
}


.custom-colors input[type="color"] {
  width: 100%;

  height: 45px;

  border: 1px solid var(--border);

  border-radius: 9px;

  padding: 4px;

  background: white;

  cursor: pointer;
}


/* =========================================================
   PUBLICAR
========================================================= */

.publish-card {
  text-align: center;

  padding: 45px 25px;
}


.publish-icon {
  font-size: 45px;

  margin-bottom: 15px;
}


.publish-card h2 {
  margin-bottom: 10px;
}


.publish-card > p {
  max-width: 550px;

  margin: 0 auto 25px;

  color: var(--text-secondary);

  line-height: 1.6;
}


.publish-actions {
  display: flex;

  justify-content: center;

  gap: 10px;

  flex-wrap: wrap;
}


.publish-info {
  margin-top: 35px;

  padding-top: 25px;

  border-top: 1px solid var(--border);

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 15px;
}


.publish-info div {
  display: flex;

  flex-direction: column;

  gap: 5px;
}


.publish-info strong {
  font-size: 14px;
}


.publish-info span {
  color: var(--text-secondary);

  font-size: 13px;
}


/* =========================================================
   PREVIEW
========================================================= */

.preview-area {
  background: #e2e8f0;

  padding: 30px 20px;

  display: flex;

  flex-direction: column;

  align-items: center;

  min-height: 100vh;
}


.preview-label {
  color: var(--text-secondary);

  font-size: 11px;

  font-weight: bold;

  letter-spacing: 1px;

  margin-bottom: 15px;
}


.phone {
  width: 300px;

  height: 600px;

  background: #111827;

  padding: 9px;

  border-radius: 32px;

  box-shadow:
    0 20px 50px
    rgba(15, 23, 42, 0.25);

  position: sticky;

  top: 30px;
}


.phone-screen {
  width: 100%;

  height: 100%;

  border-radius: 24px;

  background: #f8fafc;

  padding: 35px 20px 20px;

  text-align: center;

  overflow-y: auto;

  transition:
    background 0.25s ease;
}


.profile-avatar {
  width: 80px;
  height: 80px;

  margin: 0 auto 15px;

  border-radius: 50%;

  background: #dbeafe;

  color: var(--primary);

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 30px;

  font-weight: bold;

  overflow: hidden;
}


.phone-screen h2 {
  font-size: 20px;

  margin-bottom: 5px;
}


.preview-job {
  color: var(--text-secondary);

  font-size: 13px;
}


.preview-bio {
  color: #475569;

  font-size: 13px;

  line-height: 1.5;

  margin: 15px 0 20px;

  word-break: break-word;
}


.preview-brand {
  color: var(--text-muted);

  font-size: 11px;

  margin-top: 25px;
}


/* =========================================================
   MODAL
========================================================= */

.modal {
  display: none;

  position: fixed;

  inset: 0;

  background:
    rgba(15, 23, 42, 0.65);

  align-items: center;

  justify-content: center;

  padding: 20px;

  z-index: 1000;
}


.modal.active {
  display: flex;
}


.modal-box {
  width: min(700px, 100%);

  max-height: 90vh;

  overflow-y: auto;

  background: white;

  border-radius: 15px;

  padding: 25px;

  position: relative;

  box-shadow:
    0 25px 70px
    rgba(15, 23, 42, 0.25);
}


.modal-close {
  position: absolute;

  top: 12px;

  right: 15px;

  border: 0;

  background: transparent;

  font-size: 28px;

  color: var(--text-secondary);

  transition:
    color 0.2s ease;
}


.modal-close:hover {
  color: var(--text);
}


.modal-box h2 {
  margin-bottom: 8px;
}


.modal-box p {
  color: var(--text-secondary);

  margin-bottom: 15px;
}


#generatedCode {
  width: 100%;

  min-height: 300px;

  resize: vertical;

  padding: 14px;

  border: 1px solid #cbd5e1;

  border-radius: 9px;

  font-family: monospace;

  font-size: 12px;

  line-height: 1.5;

  background: #0f172a;

  color: #e2e8f0;

  outline: none;
}


#generatedCode:focus {
  border-color: var(--primary);

  box-shadow:
    0 0 0 3px
    color-mix(
      in srgb,
      var(--primary) 12%,
      transparent
    );
}


/* =========================================================
   TOAST
========================================================= */

.toast {
  position: fixed;

  right: 20px;

  bottom: 20px;

  background: #0f172a;

  color: white;

  padding: 13px 18px;

  border-radius: 9px;

  font-size: 14px;

  opacity: 0;

  pointer-events: none;

  transform: translateY(15px);

  transition:
    opacity 0.25s ease,
    transform 0.25s ease;

  z-index: 2000;

  box-shadow:
    0 10px 30px
    rgba(15, 23, 42, 0.25);
}


.toast.show {
  opacity: 1;

  transform: translateY(0);
}


/* =========================================================
   SCROLLBARS
========================================================= */

.content::-webkit-scrollbar,
.phone-screen::-webkit-scrollbar,
.modal-box::-webkit-scrollbar {
  width: 7px;
}


.content::-webkit-scrollbar-track,
.phone-screen::-webkit-scrollbar-track,
.modal-box::-webkit-scrollbar-track {
  background: transparent;
}


.content::-webkit-scrollbar-thumb,
.phone-screen::-webkit-scrollbar-thumb,
.modal-box::-webkit-scrollbar-thumb {
  background: #cbd5e1;

  border-radius: 20px;
}


.content::-webkit-scrollbar-thumb:hover,
.phone-screen::-webkit-scrollbar-thumb:hover,
.modal-box::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}


/* =========================================================
   RESPONSIVO — TABLET
========================================================= */

@media (max-width: 1100px) {

  .app {
    grid-template-columns:
      210px
      minmax(0, 1fr);
  }


  .preview-area {
    display: none;
  }

}


/* =========================================================
   RESPONSIVO — MOBILE
========================================================= */

@media (max-width: 750px) {

  .app {
    display: block;
  }


  .sidebar {
    min-height: auto;

    padding: 15px;
  }


  .brand {
    margin-bottom: 15px;
  }


  nav {
    flex-direction: row;

    overflow-x: auto;

    padding-bottom: 4px;
  }


  .nav-item {
    white-space: nowrap;

    width: auto;

    flex-shrink: 0;
  }


  .nav-item.active {
    box-shadow:
      inset 0 -3px 0 var(--primary);
  }


  .sidebar-bottom {
    margin-top: 15px;

    flex-direction: row;
  }


  .save-btn,
  .reset-btn {
    flex: 1;
  }


  .content {
    padding: 20px;

    max-height: none;
  }


  .topbar {
    align-items: flex-start;

    flex-direction: column;
  }


  .topbar h1 {
    font-size: 24px;
  }


  .status {
    font-size: 12px;
  }


  .form-grid {
    grid-template-columns: 1fr;
  }


  .theme-grid {
    grid-template-columns:
      repeat(2, 1fr);
  }


  .custom-colors {
    grid-template-columns: 1fr;
  }


  .publish-info {
    grid-template-columns: 1fr;
  }


  .section-heading {
    align-items: flex-start;

    flex-direction: column;
  }


  .section-heading .primary-btn {
    width: 100%;
  }


  .card {
    padding: 18px;
  }


  .avatar-editor {
    align-items: flex-start;

    flex-direction: column;
  }


  .publish-card {
    padding: 35px 18px;
  }


  .publish-actions {
    flex-direction: column;
  }


  .publish-actions button {
    width: 100%;
  }


  .modal {
    padding: 12px;
  }


  .modal-box {
    padding: 20px;

    border-radius: 12px;
  }


  #generatedCode {
    min-height: 240px;
  }


  .toast {
    left: 15px;

    right: 15px;

    bottom: 15px;

    text-align: center;
  }

}


/* =========================================================
   REDUÇÃO DE MOVIMENTO
========================================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;

    transition: none !important;

    animation: none !important;
  }

}
