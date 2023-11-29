import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterAll, afterEach, beforeAll } from 'vitest';
import server from '../mocks/node';

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

    console.log('Setup sessionStorage');

    return {
        getItem(key: string) {
            console.log('getItem');
            console.log(store);
            return store[key];
        },

        setItem(key: string, value: string) {
            console.log('setItem');
            console.log(store);
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
