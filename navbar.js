class AppNavbar extends HTMLElement {
    connectedCallback() {
        const currentPath = window.location.pathname.split('/').pop() || 'index.html';
        
        // Ambil tema dari localStorage atau preferensi sistem
        const savedTheme = localStorage.getItem('theme') || 
            (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        
        document.documentElement.setAttribute('data-theme', savedTheme);

        this.innerHTML = `
        <style>
            :host {
                position: sticky;
                top: 0;
                z-index: 1000;
                display: block;
            }

            .navbar {
                background: var(--navbar-bg);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-bottom: 1px solid var(--border-color);
                padding: 0 24px;
                transition: background-color 0.3s ease, border-color 0.3s ease;
            }

            .nav-container {
                max-width: 1000px;
                margin: 0 auto;
                height: 64px;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }

            .brand {
                font-weight: 700;
                font-size: 16px;
                color: var(--text-primary);
                text-decoration: none;
                display: flex;
                align-items: center;
                gap: 12px;
                letter-spacing: -0.3px;
            }

            /* Container Icon Sesuai Gambar */
            .logo-icon {
                width: 40px;
                height: 40px;
                background-color: #e0f2fe;
                border-radius: 12px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: #0284c7;
                flex-shrink: 0;
                transition: background-color 0.3s ease, color 0.3s ease;
            }

            [data-theme="dark"] .logo-icon {
                background-color: rgba(56, 189, 248, 0.15);
                color: #38bdf8;
            }

            .nav-right {
                display: flex;
                align-items: center;
                gap: 16px;
            }

            .nav-links {
                display: flex;
                gap: 6px;
                list-style: none;
                margin: 0;
                padding: 0;
            }

            .nav-links a {
                text-decoration: none;
                color: var(--text-secondary);
                font-weight: 500;
                font-size: 13.5px;
                padding: 8px 14px;
                border-radius: 8px;
                transition: all 0.2s ease;
            }

            .nav-links a:hover {
                color: var(--text-primary);
                background-color: var(--border-color);
            }

            .nav-links a.active {
                color: var(--accent-blue);
                background-color: rgba(2, 132, 199, 0.12);
                font-weight: 600;
            }

            .theme-btn {
                background: transparent;
                border: 1px solid var(--border-color);
                color: var(--text-primary);
                width: 38px;
                height: 38px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                transition: all 0.2s ease;
            }

            .theme-btn:hover {
                background-color: var(--border-color);
                color: var(--accent-blue);
            }
        </style>

        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="brand">
                    <!-- Icon 4 Kotak Presisi Sesuai Gambar -->
                    <div class="logo-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                            <rect x="3" y="3" width="7" height="7" rx="2"></rect>
                            <rect x="14" y="3" width="7" height="7" rx="2"></rect>
                            <rect x="14" y="14" width="7" height="7" rx="2"></rect>
                            <rect x="3" y="14" width="7" height="7" rx="2"></rect>
                        </svg>
                    </div>
                    <span>Modul MikroTik</span>
                </a>
                
                <div class="nav-right">
                    <ul class="nav-links">
                        <li><a href="index.html" class="${currentPath === 'index.html' ? 'active' : ''}">Beranda</a></li>
                        <li><a href="modul1.html" class="${currentPath === 'modul1.html' ? 'active' : ''}">Modul 1</a></li>
                        <li><a href="modul2.html" class="${currentPath === 'modul2.html' ? 'active' : ''}">Modul 2</a></li>
                        <li><a href="modul3.html" class="${currentPath === 'modul3.html' ? 'active' : ''}">Modul 3</a></li>
                        <li><a href="modul4.html" class="${currentPath === 'modul4.html' ? 'active' : ''}">Modul 4</a></li>
                    </ul>

                    <button class="theme-btn" id="theme-toggle" title="Ubah Mode Tampilan">
                        <span id="theme-icon"></span>
                    </button>
                </div>
            </div>
        </nav>
        `;

        this.initThemeToggle();
    }

    initThemeToggle() {
        const toggleBtn = this.querySelector('#theme-toggle');
        const iconSpan = this.querySelector('#theme-icon');

        const sunIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2=[...]`;
        const moonIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg[...]`;

        const updateIcon = (theme) => {
            iconSpan.innerHTML = theme === 'dark' ? sunIcon : moonIcon;
        };

        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        updateIcon(currentTheme);

        toggleBtn.addEventListener('click', () => {
            const activeTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = activeTheme === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateIcon(newTheme);
        });
    }
}

customElements.define('app-navbar', AppNavbar);
