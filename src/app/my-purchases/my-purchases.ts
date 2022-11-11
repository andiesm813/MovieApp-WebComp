import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent } from 'igniteui-webcomponents';
import MovieAppService from '../service/movie-app-service';

defineComponents(IgcListComponent, IgcListItemComponent, IgcButtonComponent, IgcIconComponent, IgcRippleComponent);

@customElement('app-my-purchases')
export default class MyPurchases extends LitElement {
  static styles = css`
    :host {
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
    }
    .column-layout {
      display: flex;
      flex-direction: column;
    }
    .group {
      background-color: #0E050F;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: max-content;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      justify-content: space-between;
      align-items: center;
      align-content: flex-start;
      gap: 24px;
      position: relative;
    }
    .group_2 {
      justify-content: flex-start;
      align-items: center;
      align-content: flex-start;
      gap: 32px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_3 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: flex-start;
      align-content: center;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .group_4 {
      justify-content: flex-start;
      align-items: flex-start;
      align-content: flex-start;
      position: relative;
    }
    .h4 {
      margin: 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      object-fit: cover;
      width: 90px;
      height: 120px;
      min-width: 0;
      min-height: 0;
      flex-shrink: 0;
    }
    .text {
      height: max-content;
      min-width: 300px;
      max-width: 300px;
    }
    .hyperlink {
      color: hsla(var(--ig-primary-400));
      height: max-content;
      min-width: min-content;
    }
    .text_1 {
      color: hsla(var(--ig-gray-500));
      height: max-content;
      min-width: min-content;
    }
    .text_2 {
      height: max-content;
      min-width: min-content;
    }
    .list {
      height: max-content;
    }
    .button {
      height: max-content;
      min-width: min-content;
      flex-shrink: 0;
    }
  `;

  constructor() {
    super();
    const movieAppService: MovieAppService = new MovieAppService();
      movieAppService.getMyPurchases().then(data => {
        this.movieAppMyPurchases = data;
        }, err => console.log(err));
  }

  @property()
  private movieAppMyPurchases?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h4 class="h4">
          My Purchases
        </h4>
        <igc-list class="list">
          ${this.movieAppMyPurchases?.map((item: any) => html`
            <igc-list-item>
              <div>
                <div class="row-layout group_1">
                  <div class="row-layout group_2">
                    <img src="${item.MoviePoster}" class="image" />
                    <div class="column-layout group_3">
                      <p class="typography__subtitle-1 text">
                        ${item.Name}
                      </p>
                      <a href class="typography__body-1 hyperlink">
                        ${item.Theatre}
                      </a>
                    </div>
                    <div class="column-layout group_4">
                      <p class="typography__body-1 text_1">
                        Purchased
                      </p>
                      <p class="typography__body-1 text_2">
                        ${item.Purchased}
                      </p>
                    </div>
                  </div>
                  <igc-button class="button">
                    <span class="material-icons">
                      cloud_download
                    </span>
                    <span>Get Tickets</span>
                    <igc-ripple></igc-ripple>
                  </igc-button>
                </div>
              </div>
            </igc-list-item>
          `)}
          <igc-list-item></igc-list-item>
        </igc-list>
      </div>
    `;
  }
}
