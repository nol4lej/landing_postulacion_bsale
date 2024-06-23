import { ScrollHandler, WidthResize } from "../../utils/index.js";

export default class NavbarComponent extends HTMLElement {

    connectedCallback() {
        this.render();
        this.setupEventListeners();
        this.setupResizeHandlers();
        this.injectStyles();
    }

    render() {
        this.innerHTML = `
            <nav class="nav-principal" id="nav-principal">
                <div class="nav-content">
                    <div class="nav_hamburger_button" id="nav_hamburger_button">
                        <svg fill="#fff" height="24px" width="24px" viewBox="0 0 297 297">
                            <path d="M280.214,39.211H16.786C7.531,39.211,0,46.742,0,55.997v24.335c0,9.256,7.531,16.787,16.786,16.787h263.428 c9.255,0,16.786-7.531,16.786-16.787V55.997C297,46.742,289.469,39.211,280.214,39.211z"></path>
                            <path d="M280.214,119.546H16.786C7.531,119.546,0,127.077,0,136.332v24.336c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.336C297,127.077,289.469,119.546,280.214,119.546z"></path>
                            <path d="M280.214,199.881H16.786C7.531,199.881,0,207.411,0,216.668v24.335c0,9.255,7.531,16.786,16.786,16.786h263.428 c9.255,0,16.786-7.531,16.786-16.786v-24.335C297,207.411,289.469,199.881,280.214,199.881z"></path>
                        </svg>
                    </div>
                    <div class="nav_cont_logo">
                        <h1>GrowthConnect</h1>
                    </div>
                </div>
                <div class="nav-content-menu" id="nav-content-menu">
                    <ul class="nav_lista">
                        <li class="nav_lista_item"><a href="#header">Inicio</a></li>
                        <li class="nav_lista_item"><a href="#emprende">Nosotros</a></li>
                        <li class="nav_lista_item"><a href="#contact">Contacto</a></li>
                    </ul>
                    <div class="login_container">
                        <button><i class="material-icons">login</i>Iniciar sesión</button>
                        <button><i class="material-icons">person_add</i>Regístrate</button>
                    </div>
                </div>
            </nav>
        `;
    }

    setupEventListeners() {
        const button = this.querySelector("#nav_hamburger_button");
        const menu = this.querySelector("#nav-content-menu");

        button.addEventListener("click", () => {
            menu.classList.toggle('active');
        });
    }

    setupResizeHandlers() {
        const widthResize = new WidthResize();
        const scrollHandler = new ScrollHandler();
        const nav = this.querySelector("#nav-principal");
        const menu = this.querySelector("#nav-content-menu");

        widthResize.onResize = () => {
            if (widthResize.width) {
                menu.classList.remove("active");
            }
        };

        scrollHandler.onScroll = () => {
            scrollHandler.scrollY > 100 ? nav.classList.add("active") : nav.classList.remove("active");
        };
    }

    injectStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .nav-principal {
                color: #fff;
                background-color: var(--bg-color-primario);
                display: flex;
                flex-direction: column;
                position: fixed;
                z-index: 50;
                width: 100%;
                padding: 2em;
                box-shadow: 0 25px 50px -12px rgb(0 0 0 / 1);
                transition: padding .3s ease;
            }

            .nav-principal.active {
                padding: 1em;
            }

            .nav-content {
                display: flex;
                flex-wrap: wrap;
                gap: 5px;
                justify-content: space-between;
                align-items: center;
            }

            .nav_cont_logo {
                color: var(--color-secundario);
            }

            .nav_hamburger_button > svg {
                width: 24px;
                height: 24px;
            }

            .nav-content-menu {
                display: flex;
                flex-direction: column;
                gap: 1em;
                overflow: hidden;
                height: 0;
                transition: height 0.3s ease;
            }

            .nav-content-menu.active {
                height: 230px;
            }

            .nav_lista {
                display: flex;
                flex-direction: column;
                padding-top: 1em;
                gap: 1em;
                list-style: none;
            }

            .nav_lista_item {
                position: relative;
                width: max-content;
            }

            .nav_lista_item:before {
                content: "";
                position: absolute;
                bottom: 0;
                width: 0;
                height: 2px;
                background-color: var(--color-secundario);
                transition: width 0.3s ease-in-out;
            }

            .nav_lista_item:hover:before {
                width: 100%;
            }

            .login_container {
                display: flex;
                flex-direction: column;
                gap: 1em;
            }

            .login_container button {
                background-color: var(--color-primario);
                font-weight: 700;
                border-radius: 10px;
                padding: 0.5em;
                color: #fff;
                transition: background 0.3s ease-in-out;
                display: flex;
                gap: 0.5em;
                align-items: center;
                white-space: nowrap;
                width: max-content;
            }

            .login_container button:hover {
                background-color: var(--color-secundario);
            }

            @media screen and (min-width: 1024px) {
                .nav-principal {
                    flex-direction: row;
                    justify-content: space-around;
                    padding: 2.2em;
                }

                .nav_hamburger_button {
                    display: none;
                }

                .nav-content {
                    justify-content: center;
                }

                .nav-content-menu {
                    flex-wrap: nowrap;
                    flex-direction: row;
                    align-items: center;
                    height: 100%;
                    justify-content: space-around;
                    width: 100%;
                }

                .nav_lista {
                    flex-direction: row;
                    padding: 0;
                }

                .login_container {
                    flex-direction: row;
                }
            }
        `;
        this.appendChild(style);
    }
}

customElements.define('nav-bar', NavbarComponent);
