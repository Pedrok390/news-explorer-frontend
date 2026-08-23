const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export function searchNews(search){

    const today = new Date();
    const sevenDaysAgo = new Date();

    sevenDaysAgo.setDate(today.getDate() - 7);

    const from = sevenDaysAgo.toISOString().split("T")[0];


    return fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(search)}&from=${from}&language=pt&sortBy=publishedAt&apiKey=${apiKey}`
    )
    .then((res) => {
        if(!res.ok){
            return Promise.reject(`Erro: ${res.status}`);
        }
        return res.json()
    })
    .then((data) => data.articles);
}
