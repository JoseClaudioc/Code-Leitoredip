document.addEventListener("DOMContentLoaded", () => {

  const profileName = document.getElementById("profileName");
  const profileJob = document.getElementById("profileJob");
  const profileBio = document.getElementById("profileBio");

  const previewName = document.getElementById("previewName");
  const previewJob = document.getElementById("previewJob");
  const previewBio = document.getElementById("previewBio");

  const linksContainer = document.getElementById("linksContainer");
  const previewLinks = document.getElementById("previewLinks");

  const addLinkBtn = document.getElementById("addLinkBtn");
  const saveBtn = document.getElementById("saveBtn");
  const resetBtn = document.getElementById("resetBtn");

  const avatarInput = document.getElementById("avatarInput");
  const editorAvatar = document.getElementById("editorAvatar");
  const previewAvatar = document.getElementById("previewAvatar");

  const buttonColor = document.getElementById("buttonColor");
  const backgroundColor = document.getElementById("backgroundColor");

  const generatePageBtn = document.getElementById("generatePageBtn");
  const generateButtonBtn = document.getElementById("generateButtonBtn");

  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const generatedCode = document.getElementById("generatedCode");
  const copyCodeBtn = document.getElementById("copyCodeBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  const toast = document.getElementById("toast");

  let links = [];
  let avatarData = "";

  let settings = {
    theme: "blue",
    buttonColor: "#2563eb",
    backgroundColor: "#f8fafc"
  };

  const themes = {
    blue: {
      button: "#2563eb",
      background: "#f8fafc"
    },

    purple: {
      button: "#7c3aed",
      background: "#faf5ff"
    },

    green: {
      button: "#059669",
      background: "#ecfdf5"
    },

    orange: {
      button: "#ea580c",
      background: "#fff7ed"
    },

    black: {
      button: "#111827",
      background: "#f3f4f6"
    }
  };

  /* NAVEGAÇÃO */

  const navItems = document.querySelectorAll(".nav-item");
  const sections = document.querySelectorAll(".editor-section");

  const sectionTitles = {
    perfil: {
      title: "Meu perfil",
      description: "Configure as informações do seu cartão digital."
    },

    links: {
      title: "Meus links",
      description: "Adicione os links que deseja divulgar."
    },

    aparencia: {
      title: "Aparência",
      description: "Personalize as cores do seu cartão."
    },

    publicar: {
      title: "Publicar",
      description: "Gere sua página pronta para divulgação."
    }
  };

  navItems.forEach(item => {

    item.addEventListener("click", () => {

      const section = item.dataset.section;

      navItems.forEach(nav => {
        nav.classList.remove("active");
      });

      sections.forEach(sec => {
        sec.classList.remove("active");
      });

      item.classList.add("active");

      const target = document.getElementById(section);

      if (target) {
        target.classList.add("active");
      }

      const title = document.getElementById("sectionTitle");
      const description = document.getElementById("sectionDescription");

      if (sectionTitles[section]) {
        title.textContent = sectionTitles[section].title;
        description.textContent = sectionTitles[section].description;
      }

    });

  });

  /* PERFIL */

  function updateProfile() {

    previewName.textContent =
      profileName.value.trim() || "Seu Nome";

    previewJob.textContent =
      profileJob.value.trim() || "Sua profissão";

    previewBio.textContent =
      profileBio.value.trim() ||
      "Sua descrição aparecerá aqui.";

  }

  profileName.addEventListener("input", updateProfile);
  profileJob.addEventListener("input", updateProfile);
  profileBio.addEventListener("input", updateProfile);

  /* ADICIONAR LINK */

  addLinkBtn.addEventListener("click", () => {

    const newLink = {
      id: Date.now(),
      title: "Meu link",
      url: "https://",
      color: settings.buttonColor
    };

    links.push(newLink);

    renderLinks();

    showToast("Link adicionado!");

  });

  /* RENDERIZAR LINKS */

  function renderLinks() {

    linksContainer.innerHTML = "";
    previewLinks.innerHTML = "";

    links.forEach(link => {

      const card = document.createElement("div");

      card.className = "card";
      card.style.marginBottom = "16px";

      card.innerHTML = `
        <div class="form-group">
          <label>Nome do botão</label>

          <input
            type="text"
            class="link-title"
            value="${escapeHtml(link.title)}"
            placeholder="Ex: Meu Instagram"
          >
        </div>

        <div class="form-group">
          <label>Link de destino</label>

          <input
            type="url"
            class="link-url"
            value="${escapeHtml(link.url)}"
            placeholder="https://seu-link.com"
          >
        </div>

        <div style="
          display:flex;
          gap:10px;
          margin-top:10px;
        ">

          <button
            class="primary-btn save-link"
            type="button"
          >
            ✓ Atualizar
          </button>

          <button
            class="secondary-btn delete-link"
            type="button"
          >
            🗑 Excluir
          </button>

        </div>
      `;

      const titleInput = card.querySelector(".link-title");
      const urlInput = card.querySelector(".link-url");
      const saveLink = card.querySelector(".save-link");
      const deleteLink = card.querySelector(".delete-link");

      saveLink.addEventListener("click", () => {

        link.title =
          titleInput.value.trim() || "Meu link";

        link.url =
          urlInput.value.trim() || "https://";

        link.color = settings.buttonColor;

        renderLinks();

        showToast("Link atualizado!");

      });

      deleteLink.addEventListener("click", () => {

        links = links.filter(item => item.id !== link.id);

        renderLinks();

        showToast("Link excluído!");

      });

      linksContainer.appendChild(card);

      const previewButton = document.createElement("a");

      previewButton.href = normalizeUrl(link.url);
      previewButton.target = "_blank";
      previewButton.rel = "noopener noreferrer";

      previewButton.textContent =
        link.title || "Meu link";

      previewButton.style.display = "block";
      previewButton.style.padding = "14px 20px";
      previewButton.style.marginBottom = "12px";
      previewButton.style.background =
        link.color || settings.buttonColor;

      previewButton.style.color = "#fff";
      previewButton.style.textDecoration = "none";
      previewButton.style.borderRadius = "10px";
      previewButton.style.fontFamily = "Arial, sans-serif";
      previewButton.style.fontWeight = "bold";
      previewButton.style.textAlign = "center";

      previewLinks.appendChild(previewButton);

    });

  }

  /* CORES */

  document.querySelectorAll(".theme-card").forEach(button => {

    button.addEventListener("click", () => {

      const theme = button.dataset.theme;

      if (!themes[theme]) {
        return;
      }

      settings.theme = theme;
      settings.buttonColor = themes[theme].button;
      settings.backgroundColor = themes[theme].background;

      buttonColor.value = settings.buttonColor;
      backgroundColor.value = settings.backgroundColor;

      applyColors();
      renderLinks();

    });

  });

  buttonColor.addEventListener("input", () => {

    settings.buttonColor = buttonColor.value;

    applyColors();
    renderLinks();

  });

  backgroundColor.addEventListener("input", () => {

    settings.backgroundColor =
      backgroundColor.value;

    applyColors();

  });

  function applyColors() {

    const phoneScreen =
      document.getElementById("phoneScreen");

    if (phoneScreen) {
      phoneScreen.style.background =
        settings.backgroundColor;
    }

  }

  /* FOTO */

  avatarInput.addEventListener("change", event => {

    const file = event.target.files[0];

    if (!file) {
      return;
    }

    const reader = new FileReader();

    reader.onload = function(e) {

      avatarData = e.target.result;

      editorAvatar.innerHTML = `
        <img
          src="${avatarData}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:50%;
          "
        >
      `;

      previewAvatar.innerHTML = `
        <img
          src="${avatarData}"
          style="
            width:100%;
            height:100%;
            object-fit:cover;
            border-radius:50%;
          "
        >
      `;

    };

    reader.readAsDataURL(file);

  });

  /* SALVAR */

  saveBtn.addEventListener("click", saveData);

  function saveData() {

    const data = {

      profile: {
        name: profileName.value,
        job: profileJob.value,
        bio: profileBio.value
      },

      links: links,

      avatar: avatarData,

      settings: settings

    };

    localStorage.setItem(
      "linkpro_data",
      JSON.stringify(data)
    );

    showToast("Salvo com sucesso!");

  }

  /* CARREGAR */

  function loadData() {

    const saved =
      localStorage.getItem("linkpro_data");

    if (!saved) {

      buttonColor.value =
        settings.buttonColor;

      backgroundColor.value =
        settings.backgroundColor;

      updateProfile();
      applyColors();
      renderLinks();

      return;
    }

    try {

      const data = JSON.parse(saved);

      if (data.profile) {

        profileName.value =
          data.profile.name || "";

        profileJob.value =
          data.profile.job || "";

        profileBio.value =
          data.profile.bio || "";

      }

      if (Array.isArray(data.links)) {
        links = data.links;
      }

      if (data.avatar) {

        avatarData = data.avatar;

        editorAvatar.innerHTML = `
          <img
            src="${avatarData}"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              border-radius:50%;
            "
          >
        `;

        previewAvatar.innerHTML = `
          <img
            src="${avatarData}"
            style="
              width:100%;
              height:100%;
              object-fit:cover;
              border-radius:50%;
            "
          >
        `;

      }

      if (data.settings) {
        settings = {
          ...settings,
          ...data.settings
        };
      }

      buttonColor.value =
        settings.buttonColor;

      backgroundColor.value =
        settings.backgroundColor;

      updateProfile();
      applyColors();
      renderLinks();

    } catch (error) {

      console.error(
        "Erro ao carregar os dados:",
        error
      );

    }

  }

  /* RESTAURAR */

  resetBtn.addEventListener("click", () => {

    const confirmed = confirm(
      "Tem certeza que deseja restaurar o projeto? Todos os dados salvos neste navegador serão apagados."
    );

    if (!confirmed) {
      return;
    }

    localStorage.removeItem("linkpro_data");

    profileName.value = "";
    profileJob.value = "";
    profileBio.value = "";

    links = [];
    avatarData = "";

    settings = {
      theme: "blue",
      buttonColor: "#2563eb",
      backgroundColor: "#f8fafc"
    };

    buttonColor.value =
      settings.buttonColor;

    backgroundColor.value =
      settings.backgroundColor;

    editorAvatar.textContent = "?";
    previewAvatar.textContent = "?";

    updateProfile();
    applyColors();
    renderLinks();

    showToast("Projeto restaurado!");

  });

  /* GERAR PÁGINA */

  generatePageBtn.addEventListener(
    "click",
    generatePage
  );

  function generatePage() {

    const name =
      profileName.value.trim() || "Seu Nome";

    const job =
      profileJob.value.trim() || "Sua profissão";

    const bio =
      profileBio.value.trim() ||
      "Confira meus links.";

    const buttons = links.map(link => {

      return `
        <a
          href="${escapeAttribute(normalizeUrl(link.url))}"
          target="_blank"
          rel="noopener noreferrer"
          style="
            display:block;
            width:100%;
            box-sizing:border-box;
            padding:15px 20px;
            margin:12px 0;
            background:${escapeAttribute(link.color || settings.buttonColor)};
            color:#fff;
            text-decoration:none;
            border-radius:10px;
            font-family:Arial,sans-serif;
            font-weight:bold;
            text-align:center;
          "
        >
          ${escapeHtml(link.title)}
        </a>
      `;

    }).join("");

    const avatar = avatarData
      ? `
        <img
          src="${avatarData}"
          style="
            width:100px;
            height:100px;
            object-fit:cover;
            border-radius:50%;
          "
        >
      `
      : `
        <div style="
          width:100px;
          height:100px;
          border-radius:50%;
          background:#2563eb;
          color:white;
          display:flex;
          align-items:center;
          justify-content:center;
          font-size:36px;
          font-weight:bold;
        ">
          ?
        </div>
      `;

    const page = `<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0"
>

<title>${escapeHtml(name)} — LinkPro</title>

</head>

<body style="
  margin:0;
  min-height:100vh;
  background:${escapeAttribute(settings.backgroundColor)};
  font-family:Arial,sans-serif;
">

<div style="
  width:100%;
  max-width:500px;
  margin:auto;
  padding:40px 20px;
  box-sizing:border-box;
  text-align:center;
">

  ${avatar}

  <h1 style="
    margin:20px 0 5px;
  ">
    ${escapeHtml(name)}
  </h1>

  <div style="
    color:#64748b;
    margin-bottom:15px;
  ">
    ${escapeHtml(job)}
  </div>

  <p style="
    color:#475569;
    line-height:1.6;
  ">
    ${escapeHtml(bio)}
  </p>

  <div>
    ${buttons}
  </div>

  <div style="
    margin-top:30px;
    color:#94a3b8;
    font-size:12px;
  ">
    Criado com LinkPro
  </div>

</div>

</body>
</html>`;

    showGeneratedCode(
      "Página HTML gerada",
      "Copie o código abaixo ou baixe o arquivo HTML.",
      page,
      true
    );

  }

  /* GERAR BOTÃO */

  generateButtonBtn.addEventListener(
    "click",
    generateButton
  );

  function generateButton() {

    if (links.length === 0) {

      alert(
        "Adicione pelo menos um link antes de gerar o botão."
      );

      return;

    }

    const link = links[0];

    const buttonCode = `
<a
  href="${escapeAttribute(normalizeUrl(link.url))}"
  target="_blank"
  rel="noopener noreferrer"
  style="
    display:inline-block;
    padding:14px 24px;
    background:${escapeAttribute(link.color || settings.buttonColor)};
    color:#fff;
    text-decoration:none;
    border-radius:10px;
    font-family:Arial,sans-serif;
    font-weight:bold;
  "
>
  ${escapeHtml(link.title)}
</a>`.trim();

    showGeneratedCode(
      "Botão gerado",
      "Esse código pode ser colocado em uma página HTML.",
      buttonCode,
      false
    );

  }

  /* MODAL */

  function showGeneratedCode(
    title,
    description,
    code,
    canDownload
  ) {

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    generatedCode.value = code;

    downloadBtn.style.display =
      canDownload ? "block" : "none";

    modal.classList.add("active");

  }

  closeModal.addEventListener(
    "click",
    () => {
      modal.classList.remove("active");
    }
  );

  modal.addEventListener("click", event => {

    if (event.target === modal) {
      modal.classList.remove("active");
    }

  });

  /* COPIAR */

  copyCodeBtn.addEventListener(
    "click",
    async () => {

      try {

        await navigator.clipboard.writeText(
          generatedCode.value
        );

        showToast("Código copiado!");

      } catch (error) {

        generatedCode.select();

        document.execCommand("copy");

        showToast("Código copiado!");

      }

    }
  );

  /* BAIXAR HTML */

  downloadBtn.addEventListener(
    "click",
    () => {

      const code = generatedCode.value;

      const blob = new Blob(
        [code],
        {
          type: "text/html;charset=utf-8"
        }
      );

      const url =
        URL.createObjectURL(blob);

      const a =
        document.createElement("a");

      a.href = url;
      a.download = "linkpro.html";

      document.body.appendChild(a);

      a.click();

      a.remove();

      URL.revokeObjectURL(url);

      showToast("Arquivo HTML baixado!");

    }
  );

  /* TOAST */

  function showToast(message) {

    if (!toast) {
      return;
    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

      toast.classList.remove("show");

    }, 2500);

  }

  /* SEGURANÇA */

  function escapeHtml(value) {

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }

  function escapeAttribute(value) {

    return escapeHtml(value);

  }

  function normalizeUrl(url) {

    const value = String(url || "").trim();

    if (!value) {
      return "https://";
    }

    if (
      value.startsWith("http://") ||
      value.startsWith("https://")
    ) {
      return value;
    }

    return "https://" + value;

  }

  /* INICIAR */

  loadData();

});
