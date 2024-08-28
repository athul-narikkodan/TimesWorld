const getUrl = 'https://restcountries.com/v2/all?fields=name,region,flag'
export function getData() {
    return fetch(getUrl, {
        method: 'GET',
    })
        .then((data) => data.json())
        .then((res) => res)
}