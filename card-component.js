class CardComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    border: 1px solid #ccc;
                    padding: 16px;
                    margin: 8px;
                    border-radius: 8px;
                    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
                    max-width: 300px;
                    box-sizing: border-box;
                    overflow: hidden;
                }
                .card-header {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 8px;
                    color: #333;
                    text-align: center;
                }
                .card-content {
                    font-size: 1em;
                    color: #555;
                    text-align: center;
                }
                .card-content img {
                    width: 100%; /* Изменил для адаптивности */
                    height: auto;
                }
            </style>
            <div class="card">
                <div class="card-header">
                    <slot name="header">Заголовок</slot>
                </div>
                <div class="card-content">
                    <slot name="content">Содержание</slot>
                </div>
            </div>
        `;
        shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('card-component', CardComponent);

