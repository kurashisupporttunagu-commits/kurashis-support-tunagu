(function () {
  "use strict";

  const config = window.TSUNAGU_CONFIG || {};
  const navButton = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (navButton && nav) {
    navButton.addEventListener("click", function () {
      const isOpen = navButton.getAttribute("aria-expanded") === "true";
      navButton.setAttribute("aria-expanded", String(!isOpen));
      nav.hidden = isOpen;
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth < 900) {
          navButton.setAttribute("aria-expanded", "false");
          nav.hidden = true;
        }
      });
    });
  }

  document.querySelectorAll("[data-year]").forEach(function (node) {
    node.textContent = String(new Date().getFullYear());
  });

  document.querySelectorAll("[data-line-link]").forEach(function (link) {
    if (config.lineUrl) {
      link.href = config.lineUrl;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      return;
    }

    link.href = "contact.html#line-setup";
    link.addEventListener("click", function (event) {
      if (location.pathname.endsWith("contact.html")) {
        event.preventDefault();
        document.querySelector("#line-setup")?.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const form = document.querySelector("[data-contact-form]");
  const formNotice = document.querySelector("[data-form-notice]");

  if (form) {
    if (config.formProvider === "netlify") {
      if (formNotice) {
        formNotice.textContent = "入力内容と添付ファイルはNetlify Formsを通じて送信されます。添付は合計8MB以内にしてください。";
      }
    } else if (config.formEndpoint) {
      form.action = config.formEndpoint;
      form.method = "POST";
      form.enctype = "multipart/form-data";
      if (formNotice) {
        formNotice.textContent = "送信内容は問い合わせ受付に届けられます。";
      }
    } else {
      if (formNotice) {
        formNotice.textContent = "現在はメール作成画面を開く方式です。写真はメール画面で添付してください。";
      }

      form.addEventListener("submit", function (event) {
        event.preventDefault();
        if (!form.reportValidity()) return;

        const data = new FormData(form);
        const subject = "【Web相談】" + (data.get("consultation_type") || "住まいの相談");
        const lines = [
          "暮らしサポート・つなぐ Web相談",
          "",
          "相談種類: " + (data.get("consultation_type") || ""),
          "お名前: " + (data.get("name") || ""),
          "市区町村: " + (data.get("city") || ""),
          "住所詳細: " + (data.get("address") || ""),
          "築年数: " + (data.get("building_age") || ""),
          "希望時期: " + (data.get("timing") || ""),
          "希望連絡方法: " + (data.get("contact_method") || ""),
          "電話番号: " + (data.get("phone") || ""),
          "メール: " + (data.get("email") || ""),
          "",
          "相談内容:",
          String(data.get("message") || ""),
          "",
          "※写真がある場合は、このメール作成画面で添付してください。"
        ];

        const email = config.contactEmail || "kurashisupport.tunagu@gmail.com";
        location.href = "mailto:" + email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(lines.join("\n"));
      });
    }
  }
})();
