import { useState } from "react"

export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue]=useState("");

    const onInputChange=(event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        const newInputValue=inputValue.trim();
        if(newInputValue.length<=1) return;
        setInputValue('')
        onNewCategory(newInputValue)
    }
    /**
     * OBSERVACIONES:

     * El evento onChange, en el input es basicamente para poder editar 
     * el estado del componente.
     */
    
    return(
        <>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Buscar gifs"
                    value={inputValue}
                    onChange={onInputChange}
                    />
            </form>
        </>
    )

}