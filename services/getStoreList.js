export const getStoreList = (valid) => {
    let varValid = valid.toLowerCase().trim();
    const URL = 'https://localhost:1009/api/values/${enable}';
    return fetch(URL)
        .then((res) => res.json());
}