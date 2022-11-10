import { expect } from '@open-wc/testing';
import MoviesOld from './movies-old.js';

describe('MoviesOld', () => {
  it('<app-movies-old> is an instance of MoviesOld', async () => {
    const element = document.createElement('app-movies-old');
    expect(element).to.be.instanceOf(MoviesOld);
  });
});
