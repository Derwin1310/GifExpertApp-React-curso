import { useState } from "react";

//el snippet rafc ya hace todo el functional component por nosotros.
export const GifExpertApp = () => {

    //Recordando que categories es el argumento(parametro) de la funcion mientras que setCategories es la funcioon
    const [categories, setcategories] = useState(['Attack on Titan', 'Demon Slayer', 'Naruto']);

    //Esta es una tarea que no pude realizar por mi mismo, y trataba de agregar un nuevo elemento al array del hook useState
    //La mejor forma para a;adir elementos sin mutar las constantes siempre suele ser con el operador spread de esta forma

    // const handleAdd = () => setcategories([...categories, 'HxH']);
    //Esta es en caso de que queramos al elemento nuevo por delante
    const handleAdd = () => setcategories(['HxH',...categories]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />
            <button onClick={handleAdd}>Add</button>

            <ol>
                {
                    //El .map lo que hace es recorrer el array y devolver un array nuevo con los elementos que cumplan la funcion, en este caso devuelve una li con los elementosd que se encuentren en el array de categories.
                    categories.map(category => {
                        //Es siempre buena practica y colocar los key que son un id para el elemento que se esta usando, en caso de que se tengan que cambiar solo se renderize ese elemento y no el resto, los id son unicos y no pueden ser el indice del elemento
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
};


