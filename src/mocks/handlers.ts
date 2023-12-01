import { http, HttpResponse } from 'msw';
import data from './data';

const handlers = [
    http.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/*',
        ({ params }) =>
            params['0'] === 'test'
                ? HttpResponse.json(data)
                : new Response('Not found', { status: 404 })
    ),
];

export default handlers;
