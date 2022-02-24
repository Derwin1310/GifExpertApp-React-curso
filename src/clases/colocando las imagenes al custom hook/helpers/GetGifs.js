//Aqui donde tenemos la funcion que enviamos a GifGrid solo tenemos quie colocarle el category que utilizamos en el archivo anterior para tenerlo como parametro y no de error la url
export const getGifs = async (category) => {
    //El encodeURI (category) lo utilizamos para reemplazar el nombre de la imagen que vamos a buscar por un nombre sin espacios y mejor escrito en el link
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
    // console.log(gif);
    //Aqui es donde le colocamos los gif al setImages para que al momento de ejecutar la funcion se muestren las imagenes
    return gif
};