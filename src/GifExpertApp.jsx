import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp=()=>{
    const [categories,setCategories]=useState(['luffy']);
    
    const onAddCategory=(newCategory)=>{

        // Primera letra en mayuscula
        newCategory=firstCapitalize(newCategory);

        // Valida que no este en la lista
        if(categories.includes(newCategory)) return;
        
        // Lo guarda en la lista en caso de que no esté
        setCategories([newCategory,...categories]);
    }

    const firstCapitalize=(word="")=>{
        // Separa el string por espacios y pone cada primer letra en mayuscula
        const newWord=word.split(" ").map(el=>{
            return el.charAt(0).toUpperCase() + el.slice(1);
        }).join(" ");
        return newWord;
    }
    return(
        <>
            <h1>GifExpertApp</h1>
            <AddCategory 
                onNewCategory={(value)=>onAddCategory(value)}
            />

            {categories.map((category)=>{
                return( 
                    <GifGrid key={category} category={category}/>
                );
            })}
        </>
    );
} 