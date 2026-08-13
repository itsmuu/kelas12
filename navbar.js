class AppNavbar extends HTMLElement {
    connectedCallback() {
        // Ambil nama file halaman saat ini
        const path = window.location.pathname;
        const page = path.split("/").pop() || "index.html";

        this.innerHTML = `
        <header>
            <div class="logo-icon" title="Dashboard MikroTik" onclick="window.location.href='index.html'">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                </svg>
            </div>

            <nav>
                <a href="index.html" class="${page === 'index.html' || page === '' ? 'active' : ''}">Home</a>
                <a href="modul1.html" class="${page === 'modul1.html' ? 'active' : ''}">Modul 1</a>
                <a href="modul2.html" class="${page === 'modul2.html' ? 'active' : ''}">Modul 2</a>
                <a href="modul3.html" class="${page === 'modul3.html' ? 'active' : ''}">Modul 3</a>
                <a href="modul4.html" class="${page === 'modul4.html' ? 'active' : ''}">Modul 4</a>
                <button class="theme-toggle" title="Toggle Mode">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
                </button>
            </nav>
        </header>
        `;
    }
}

customElements.define('app-navbar', AppNavbar);