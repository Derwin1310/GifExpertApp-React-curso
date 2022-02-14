import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

//el snippet rafc ya hace todo el functional component por nosotros.
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Attack on Titan', 'Demon Slayer', 'Naruto']);
    // const handleAdd = () => setCategories(['HxH',...categories]);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Aqui le estamos enviando a AddCategory un parametro que es setCategories que es un hook de GEA */}
            <AddCategory setCategories={setCategories} />
            <hr />
            

            <ol>
                {
                    categories.map(category => {
                        
                        return <li key={category}>{category}</li>
                    })
                }
            </ol>
        </>
    );
};


