import { EventEmitter } from 'events';

const favoritesEventEmitter = new EventEmitter();
export const FAVORITES_UPDATED = 'favoritesUpdated';

export default favoritesEventEmitter;