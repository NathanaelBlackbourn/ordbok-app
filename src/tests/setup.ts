import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll, vi } from 'vitest';
import server from '../mocks/node';
import { mocks } from './utils';

beforeAll(() => server.listen());
afterEach(() => {
    cleanup();
    server.resetHandlers();
});
afterAll(() => server.close());

// Mock sessionStorage

interface iStore {
    [key: string]: string;
}

const sessionStorageMock = (function () {
    let store: iStore = {};

    return {
        getItem(key: string) {
            return store[key];
        },

        setItem(key: string, value: string) {
            store[key] = value;
        },

        clear() {
            store = {};
        },

        removeItem(key: string) {
            delete store[key];
        },

        getAll() {
            return store;
        },
    };
})();

Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });

// Mock global Audio

global.Audio = vi.fn().mockImplementation(() => ({
    play: mocks.Audio.play,
    pause: mocks.Audio.pause,
    addEventListener: mocks.Audio.addEventListener,
    removeEventListener: mocks.Audio.removeEventListener,
}));
