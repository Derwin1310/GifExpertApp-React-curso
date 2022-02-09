import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

//el snippet rafc ya hace todo el functional component por nosotros.
export const GifExpertApp = () => {

    const [categories, setcategories] = useState(['Attack on Titan', 'Demon Slayer', 'Naruto']);
    // const handleAdd = () => setcategories(['HxH',...categories]);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
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


