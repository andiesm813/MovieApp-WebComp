import { Route } from '@vaadin/router';
import './not-found/not-found.js';
import './movies/movies';
import './movie-complex/movie-complex';
import './my-purchases/my-purchases';

export const routes: Route[] = [
  { path: '', component: 'app-movies', name: 'Movies' },
  { path: 'movies', component: 'app-movies', name: 'Movies' },
  { path: 'movie-complex', component: 'app-movie-complex', name: 'Movie Complex' },
  { path: 'my-purchases', component: 'app-my-purchases', name: 'My Purchases' },
  // The fallback route should always be after other alternatives.
  { path: '(.*)', component: 'app-not-found' }
];
