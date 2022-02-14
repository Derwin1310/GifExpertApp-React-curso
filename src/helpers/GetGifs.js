
export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=46Sat15Rc1PEzzKY0bFdQs2ly07cuhtk`;

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