import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { defineComponents, IgcAvatarComponent, IgcButtonComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcListComponent, IgcListItemComponent, IgcRippleComponent, IgcSelectComponent, IgcTabsComponent } from 'igniteui-webcomponents';
import MovieAppService from '../service/movie-app-service';

defineComponents(IgcButtonComponent, IgcRippleComponent, IgcTabsComponent, IgcCardComponent, IgcIconButtonComponent, IgcIconComponent, IgcSelectComponent, IgcListComponent, IgcListItemComponent, IgcAvatarComponent);

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
      background-color: #0E050F;
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
      min-width: auto;
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
      padding: 24px 0 0;
      min-width: auto;
      min-height: auto;
      flex-grow: 1;
      flex-basis: 0;
    }
    .card {
      height: max-content;
      min-width: 320px;
      flex-grow: 1;
      flex-basis: 0;
    }
    .demo-content {
      border-color: hsla(var(--ig-secondary-200));
      border-width: 2px;
      border-style: dashed;
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      position: relative;
      margin: 32px;
      padding: 48px;
      min-width: 50px;
      min-height: 50px;
    }
    .group_5 {
      background-color: #0E050F;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      overflow: auto;
      position: relative;
      padding: 32px;
      min-width: 370px;
      min-height: 50px;
      max-width: 370px;
      flex-shrink: 0;
    }
    .buy-tickets {
      background-color: #19091B;
      border-color: #361439;
      border-width: 4px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 16px;
      margin: 0.0px 0.0px 32px;
      padding: 24px;
      flex-shrink: 0;
    }
    .theatres-near-you {
      background-color: #19091B;
      border-color: #361439;
      border-width: 4px 0px 0px;
      border-style: solid;
      justify-content: flex-start;
      align-items: stretch;
      align-content: flex-start;
      gap: 24px;
      margin: 0.0px;
      padding: 24.0px 0.0px;
      flex-shrink: 0;
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
    .image_1 {
      object-fit: cover;
      margin: 0 32px 0 0;
      min-width: 0;
      min-height: 0;
      max-width: 160px;
      flex-shrink: 0;
    }
    .text {
      color: hsla(var(--ig-gray-500));
      height: max-content;
      min-width: min-content;
      max-width: 280px;
    }
    .title {
      margin: 0.0px 0.0px 16px;
      padding: 0.0px;
      width: max-content;
      height: max-content;
    }
    .icon {
      font-size: 24px;
      width: 24px;
      height: 24px;
    }
    .text_1 {
      margin: 0 0 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .avatar {
      --background: none;
    }
    .avatar::part(base) {
      background-color: hsla(var(--ig-success-500));
    }
    .tab-item-content {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
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
    .tab-item-content_1 {
      justify-content: center;
      align-items: center;
      align-content: flex-start;
      overflow: auto;
      position: absolute;
      height: 100%;
      min-width: 100%;
      min-height: 50px;
    }
    .user-input {
      height: max-content;
      min-width: min-content;
    }
    .date-picker {
      height: max-content;
      min-width: 120px;
    }
    .select {
      margin: 0 0 16px;
      height: max-content;
      min-width: min-content;
    }
    .button {
      margin: 0 24px;
      height: max-content;
      min-width: min-content;
    }
    .user-input_1::part(base) {
      color: white;
      background-color: hsla(var(--ig-primary-500));
    }
    .user-input_2::part(base) {
      color: hsla(var(--ig-primary-400));
    }
    .user-input_3::part(base) {
      color: white;
      background-color: hsla(var(--ig-primary-500));
    }
    .button::part(base) {
      color: white;
      background-color: hsla(var(--ig-primary-500));
    }
    .list {
      height: max-content;
    }
  `;

  constructor() {
    super();
    const movieAppService: MovieAppService = new MovieAppService();
      movieAppService.getNowPlaying().then(data => {
        this.movieAppNowPlaying = data;
        }, err => console.log(err));
      movieAppService.getMovieList().then(data => {
        this.movieAppMovieList = data;
        }, err => console.log(err));
      movieAppService.getTheatres().then(data => {
        this.movieAppTheatres = data;
        }, err => console.log(err));
      movieAppService.getShowtimes().then(data => {
        this.movieAppShowtimes = data;
        }, err => console.log(err));
      movieAppService.getTheatresNearYou().then(data => {
        this.movieAppTheatresNearYou = data;
        }, err => console.log(err));
  }

  @property()
  private movieAppNowPlaying?: any[];

  @property()
  private movieAppMovieList?: any[];

  @property()
  private movieAppTheatres?: any[];

  @property()
  private movieAppShowtimes?: any[];

  @property()
  private movieAppTheatresNearYou?: any[];

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
              <igc-button class="user-input user-input_1">
                SHOW SCHEDULE
                <igc-ripple></igc-ripple>
              </igc-button>
            </div>
          </div>
        </div>
        <igc-tabs class="tabs">
          <igc-tab-panel class="row-layout tab-item-content">
            <div class="row-layout group_4">
              ${this.movieAppNowPlaying?.map((item: any) => html`
                <igc-card ?elevated="${true}" class="card">
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
                    <igc-button variant="flat" class="user-input user-input_2">
                      More
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
          </igc-tab-panel>
          <igc-tab ?selected="${true}">
            <span class="material-icons">info</span>
            Now Playing
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content_1">
            <div class="row-layout demo-content">
              <img src="/src/assets/start-building-dark.svg" class="image_1" />
              <p class="typography__body-2 text">
                Remove the "demo-content" container, and add your own content.
              </p>
            </div>
          </igc-tab-panel>
          <igc-tab ?disabled="${true}">
            <span class="material-icons">info</span>
            Opening This Week
          </igc-tab>
          <igc-tab-panel class="row-layout tab-item-content_1">
            <div class="row-layout demo-content">
              <img src="/src/assets/start-building-dark.svg" class="image_1" />
              <p class="typography__body-2 text">
                Remove the "demo-content" container, and add your own content.
              </p>
            </div>
          </igc-tab-panel>
          <igc-tab ?disabled="${true}">
            <span class="material-icons">info</span>
            Coming Soon
          </igc-tab>
        </igc-tabs>
      </div>
      <div class="column-layout group_5">
        <div class="column-layout buy-tickets">
          <p class="typography__subtitle-2 title">
            BUY TICKETS
          </p>
          <igc-select ?outlined="${false}" label="Pick a Movie" placeholder="Select Movie Title" value="1" class="user-input">
            <span slot="prefix">
              <span class="material-icons icon">
                movie
              </span>
            </span>
            ${this.movieAppMovieList?.map((item: any) => html`
              <igc-select-item value="1" ?selected="${true}">
                ${item.Name}
              </igc-select-item>
            `)}
          </igc-select>
          <igc-select ?outlined="${false}" label="Theatres" placeholder="Select a Movie Complex" value="1" class="user-input">
            <span slot="prefix">
              <span class="material-icons icon">
                location_on
              </span>
            </span>
            ${this.movieAppTheatres?.map((item: any) => html`
              <igc-select-item value="1" ?selected="${true}">
                ${item.Theatres}
              </igc-select-item>
            `)}
          </igc-select>
          <span class="date-picker">DatePicker not yet available in WebComponents</span>
          <igc-select ?outlined="${false}" label="Show Time" value="1" class="select">
            <span slot="prefix">
              <span class="material-icons icon">
                access_time
              </span>
            </span>
            ${this.movieAppShowtimes?.map((item: any) => html`
              <igc-select-item value="1" ?selected="${true}">
                ${item.Showtimes}
              </igc-select-item>
            `)}
          </igc-select>
          <igc-button class="user-input user-input_3">
            GET TICKETS NOW
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
        <div class="column-layout theatres-near-you">
          <p class="typography__subtitle-2 text_1">
            THEATRES NEAR YOU
          </p>
          <igc-list class="list">
            ${this.movieAppTheatresNearYou?.map((item: any) => html`
              <igc-list-item>
                <div slot="start">
                  <igc-avatar initials="${item.Initials}" size="small" shape="circle" class="avatar"></igc-avatar>
                </div>
                <div slot="title">${item.Theatre}</div>
                <div slot="subtitle">${item.Address}</div>
              </igc-list-item>
            `)}
          </igc-list>
          <igc-button class="button">
            Change Location
            <igc-ripple></igc-ripple>
          </igc-button>
        </div>
      </div>
    `;
  }
}
