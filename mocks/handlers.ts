import { http, HttpResponse } from 'msw';

export const handlers = [
    // Cat API
    http.get('https://api.thecatapi.com/v1/images/search?limit=4', () => {
        return Response.json([
            { id: 'st', url: 'https://cdn2.thecatapi.com/images/st.jpg', width: 3264, height: 2448 },
            { id: '5b5', url: 'https://cdn2.thecatapi.com/images/5b5.jpg', width: 500, height: 375 },
            { id: '9i3', url: 'https://cdn2.thecatapi.com/images/9i3.jpg', width: 600, height: 425 },
            { id: 'a3b', url: 'https://cdn2.thecatapi.com/images/a3b.jpg', width: 510, height: 383 },
        ]);
    }),

    http.get('https://cdn2.thecatapi.com/images/*', async () => {
        const buffer = await fetch('/images/cat.jpg').then(response => response.arrayBuffer());
        return HttpResponse.arrayBuffer(buffer, {
            headers: {
                'Content-Type': 'image/jpeg',
            },
        });
    }),

    // Dog API
    http.get('https://dog.ceo/api/breeds/image/random/4', () => {
        return Response.json({
            message: [
                'https://images.dog.ceo/breeds/schnauzer-giant/n02097130_344.jpg',
                'https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg',
                'https://images.dog.ceo/breeds/terrier-scottish/n02097298_4701.jpg',
                'https://images.dog.ceo/breeds/newfoundland/n02111277_1818.jpg',
            ],
            status: 'success',
        });
    }),

    http.get('https://images.dog.ceo/breeds/*', async () => {
        const buffer = await fetch('/images/dog.jpg').then(response => response.arrayBuffer());
        return HttpResponse.arrayBuffer(buffer, {
            headers: {
                'Content-Type': 'image/jpeg',
            },
        });
    }),

    // Fox API
    http.get('https://randomfox.ca/floof/', () => {
        return Response.json({
            image: 'https://randomfox.ca/images/48.jpg',
            link: 'https://randomfox.ca/?i=48',
        });
    }),

    http.get('https://randomfox.ca/images/*', async () => {
        const buffer = await fetch('/images/fox.jpg').then(response => response.arrayBuffer());
        return HttpResponse.arrayBuffer(buffer, {
            headers: {
                'Content-Type': 'image/jpeg',
            },
        });
    }),
];
