import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcRippleComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import MovieAppService from '../service/movie-app-service';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcTabsComponent, IgcIconComponent, IgcCardComponent, IgcIconButtonComponent);

@customElement('app-movies')
export default class Movies extends LitElement {
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
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .row-layout {
      display: flex;
    }
    .group_1 {
      background-image: url("https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1400&q=80");
      background-size: cover;
      background-repeat: no-repeat;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      margin: 0 0 24px;
      min-width: 50px;
      min-height: 320px;
      max-height: 320px;
    }
    .group_2 {
      background-color: rgb(25, 9, 27, 0.3);
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .group_3 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .tabs {
      min-width: 0;
      min-height: 0;
      flex-grow: 1;
      flex-shrink: 0;
    }
    .group_4 {
      flex-wrap: wrap;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      position: relative;
      min-width: 50px;
      min-height: 50px;
    }
    .card {
      width: 320px;
      height: max-content;
      min-width: 320px;
      flex-shrink: 0;
    }
    .group_5 {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 370px;
      min-height: 50px;
      max-width: 370px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .content {
      height: max-content;
      min-width: min-content;
    }
    .h5_1 {
      text-align: center;
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .image {
      height: 100%;
    }
    .tab-item-content {
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: absolute;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .media-content {
      height: 180px;
    }
    .body-content {
      min-width: 50px;
      min-height: 50px;
    }
    .actions-content {
      min-width: 50px;
      min-height: 40px;
    }
    .icon-button::part(base) {
      color: hsla(var(--ig-primary-400));
    }
    .button {
      height: max-content;
      min-width: min-content;
    }
    .button_1::part(base) {
      color: white;
      background-color: hsla(var(--ig-primary-500));
    }
    .button_2::part(base) {
      color: hsla(var(--ig-primary-400));
    }
  `;

  constructor() {
    super();
    const movieAppService: MovieAppService = new MovieAppService();
      movieAppService.getNowPlaying().then(data => {
        this.movieAppNowPlaying = data;
        }, err => console.log(err));
  }

  @property()
  private movieAppNowPlaying?: any[];

  render() {
    return html`
      <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet'>
      <link href='https://fonts.googleapis.com/css?family=Titillium+Web' rel='stylesheet'>
      <link rel='stylesheet' href='../../ig-theme.css'>
      <div class="column-layout group">
        <h5 class="content">
          Movie Premieres
        </h5>
        <div class="row-layout group_1">
          <div class="column-layout group_2">
            <div class="column-layout group_3">
              <h5 class="h5_1">
                MoviePlex Metropolis
              </h5>
              <igc-button class="button button_1">
                SHOW SCHEDULE
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
        </div>
        <igc-tabs class="tabs">
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab ?selected="${true}">
            <span class="material-icons">info</span>
            Label
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content"></igc-tab-panel>
          <igc-tab>
            <span class="material-icons">info</span>
            Label
          </igc-tab>
        </igc-tabs>
        <div class="row-layout group_4">
          ${this.movieAppNowPlaying?.map((item: any) => html`
            <igc-card class="card">
              <igc-card-media class="media-content">
                <img src="${item.MoviePoster}" class="image" />
              </igc-card-media>
              <igc-card-header>
                <h3 slot="title">
                  ${item.Name}
                </h3>
                <h5 slot="subtitle">
                  ${item.Genre}
                </h5>
              </igc-card-header>
              <igc-card-content class="body-content">
                <p class="typography__body-1 content">
                  ${item.Description}
                </p>
              </igc-card-content>
              <igc-card-actions class="actions-content">
                <igc-button variant="flat" class="button button_2">
                  Button
                  <igc-ripple></igc-ripple>
                </igc-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    favorite
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    bookmark
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
                <igc-icon-button variant="flat" class="icon-button">
                  <span class="material-icons">
                    share
                  </span>
                  <igc-ripple></igc-ripple>
                </igc-icon-button>
              </igc-card-actions>
            </igc-card>
          `)}
        </div>
      </div>
      <div class="column-layout group_5"></div>
    `;
  }
}
