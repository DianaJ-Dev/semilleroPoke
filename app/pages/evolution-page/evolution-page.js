import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';

import '@semillero/evolution-pokemones/evolution-pokemones.js';

class EvolutionPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'evolution-page';
  }

  static get properties() {
    return {
      pokemonId: { type: Number },
      params: { type: Object }
    };
  }

  constructor() {
    super();
    this.pokemonId = null;
    this.params = {};
  }

  onPageEnter() {
    this.pokemonId = parseInt(this.params.id);
  }

  render() {
    return html`
      <cells-template-paper-drawer-panel mode="seamed" id="paperHeaderPanel" disable-swipe>
        <div slot="app_main">
          <evolution-pokemones .pokemonId="${this.pokemonId}"></evolution-pokemones>
        </div>
      </cells-template-paper-drawer-panel>
    `;
  }
}

window.customElements.define(EvolutionPage.is, EvolutionPage);
