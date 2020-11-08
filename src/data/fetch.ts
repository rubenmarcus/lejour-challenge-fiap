import { QueryParams } from "../interfaces/data.interface";



export default function dataFetch(endpoint: string, queryParams?: URLSearchParams) {

    const BASE_URL = 'https://sheet2api.com/v1/ByR2h1huRjyQ/fiap/';

    return fetch(BASE_URL + endpoint + '?' + queryParams)
        .then(response => response.json())
        .then(data => {
            // console.log('Success:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });

}

  