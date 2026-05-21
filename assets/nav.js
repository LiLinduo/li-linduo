const navItems = [
  { label: "News", href: "news.html" },
  { label: "Publications", href: "publications.html" },
  { label: "Fun", href: "fun.html" },
  { label: "Contact", href: "contact.html" },
  {
    label: "CV",
    href: "assets/cv_li-linduo.pdf",
    external: true
  }
];

const currentPage = window.location.pathname.split("/").pop() || "index.html";

const navHtml = `
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="index.html">Linduo Li</a>

      <nav class="nav-links" aria-label="Main navigation">
        ${navItems
          .map((item) => {
            const isActive = item.href === currentPage;
            const activeClass = isActive ? ' class="active"' : "";
            const externalAttrs = item.external
              ? ' target="_blank" rel="noreferrer"'
              : "";

            return `<a${activeClass} href="${item.href}"${externalAttrs}>${item.label}</a>`;
          })
          .join("")}
      </nav>
    </div>
  </header>
`;

document.getElementById("site-header").innerHTML = navHtml;