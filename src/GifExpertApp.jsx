import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GifExpertApp=()=>{
    const [categories,setCategories]=useState([{name:'Jupiter',cantidad:10}]);

    const onAddCategory=(newCategory,cantidad)=>{
        // Primera letra en mayuscula
        newCategory=firstCapitalize(newCategory);

        // Valida que no este en la lista
        if(categories.filter(item=>item.name==newCategory).length>0) return;
        
        // Lo guarda en la lista en caso de que no esté
        setCategories([{name:newCategory,cantidad:cantidad},...categories]);
        console.log(categories);
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
            <div className="header">
                <h1>GifExpertApp</h1>
                <AddCategory 
                    onNewCategory={(category,cantidad)=>onAddCategory(category,cantidad)}
                />
            </div>
            {categories.map((category)=>{
                return( 
                    <GifGrid key={category.name} category={category.name} amount={category.cantidad}/>
                );
            })}
        </>
    );
} 