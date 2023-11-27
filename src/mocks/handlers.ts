import { http, HttpResponse } from 'msw';
import data from './data';

const handlers = [
    http.get('https://api.dictionaryapi.dev/api/v2/entries/en/*', () =>
        HttpResponse.json(data)
    ),
];

export default handlers;
