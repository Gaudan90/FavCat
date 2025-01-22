type Listener = (...args: any[]) => void;

class CustomEventEmitter {
  private listeners: { [event: string]: Listener[] } = {};

  on(event: string, listener: Listener): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(listener);
  }

  emit(event: string, ...args: any[]): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      eventListeners.forEach(listener => listener(...args));
    }
  }

  removeListener(event: string, listenerToRemove: Listener): void {
    const eventListeners = this.listeners[event];
    if (eventListeners) {
      this.listeners[event] = eventListeners.filter(
        listener => listener !== listenerToRemove
      );
    }
  }
}

const favoritesEventEmitter = new CustomEventEmitter();
export const FAVORITES_UPDATED = 'favoritesUpdated';

export default favoritesEventEmitter;