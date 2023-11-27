import { http, HttpResponse } from 'msw'

const handlers = [
    http.get(
        new RegExp('https://api.dictionaryapi.dev/api/v2/entries/en/.*'),
        () => HttpResponse.json({ message: 'Hello, World!' })
    ),
]

export default handlers
