export enum Endpoint {
    CAT = 'https://api.thecatapi.com/v1/images/search?limit=4',
    DOG = 'https://dog.ceo/api/breeds/image/random/4',
    FOX = 'https://randomfox.ca/floof/',
}

function generateImage(url: string) {
    const img = new Image();
    return (img.src = url);
}

async function api(endpoint: Endpoint) {
    let data;
    try {
        const response = await fetch(endpoint, {
            method: 'GET',
        });

        data = await response.json();

        if (response.ok) {
            return data;
        }

        throw new Error(response.statusText);
    } catch (err) {
        return Promise.reject(err.message ? err.message : data);
    }
}

export async function getCats() {
    const catImages = await api(Endpoint.CAT);
    return catImages.slice(0, 4).map(({ url }) => ({
        image: generateImage(url),
        type: 'cat',
    }));
}

export async function getDogs() {
    const dogImages = await api(Endpoint.DOG);
    return dogImages.message.map(url => ({
        image: generateImage(url),
        type: 'dog',
    }));
}

export async function getFox() {
    const foxImage = await api(Endpoint.FOX);
    return [
        {
            image: generateImage(foxImage.image),
            type: 'fox',
        },
    ];
}

export async function getAllAnimalImages() {
    return Promise.all([getDogs(), getCats(), getFox()]).then(value => value.flat());
}
