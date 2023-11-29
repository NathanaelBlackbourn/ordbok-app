import { vi } from 'vitest';

export const mocks = {
    Audio: {
        play: vi.fn(),
        pause: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
    },
};
