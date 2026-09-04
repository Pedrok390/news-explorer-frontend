export function searchNews(search){

    const today = new Date();
    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(today.getDate() - 7);

    const from = sevenDaysAgo.toISOString().split("T")[0];


    return fetch(
        `https://nomoreparties.co/news/v2/everything?q=${encodeURIComponent(search)}&from=${from}&language=pt&sortBy=publishedAt&apiKey=4eaaa6008f734ad4b2eefb5c8e88342b`
    )
    .then((res) => {
        if(!res.ok){
            return Promise.reject(`Erro: ${res.status}`);
        }
        return res.json()
    })
    .then((data) => data.articles);
}
