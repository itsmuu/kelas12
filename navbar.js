class AppNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <div class="logo-icon" title="MikroTik Dashboard">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="3" width="7" height="7" rx="1"></rect>
                    <rect x="14" y="14" width="7" height="7" rx="1"></rect>
                    <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                </svg>
            </div>

            <nav>
                <a href="index.html">Home</a>
                <a href="modul1.html">Modul 1</a>
                <div class="nav-dropdown">
                    <span>Modul Praktikum</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
                <a href="siswa.html">Data Siswa</a>
                <a href="ketuntasan.html">Ketuntasan</a>
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