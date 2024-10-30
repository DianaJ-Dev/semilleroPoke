import { CellsPage } from '@cells/cells-page';
import { html } from 'lit-element';
import '@semillero/evolution-pokemones/evolution-pokemones.js';

class EvolutionPage extends CellsPage {
  static get is() {
    return 'evolution-page';
  }

  static get properties() {
    return {
      pokemonId: { type: Number },
      params: {type: Object}
    };
  }

  constructor() {
    super();
    this.pokemonId = null;
    this.params = {};
  }


  onPageEnter() {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1]);
    this.pokemonId = urlParams.get('pokemonId');
    console.log('pokemonId en onPageEnter:', this.pokemonId);
  }

  get headerId() {
    const customerId = this.params['pokemon-id'];
    return decodeURI(customerId);
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
