
export const getGifs = async (category) => {

    const page = 'https://api.giphy.com/v1/gifs/search?q=';
    const pageLimit = 12;
    const API_KEY = '46Sat15Rc1PEzzKY0bFdQs2ly07cuhtk';
    const url = `${page}${encodeURI(category)}&limit=${pageLimit}&api_key=${API_KEY}`;
    const res = await fetch(url);
    const { data } = await res.json();
    const gif = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        };
    });
    return gif
};