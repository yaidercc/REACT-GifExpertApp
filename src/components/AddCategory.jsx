import { useState } from "react";

export const AddCategory=({onNewCategory})=>{
    const [inputValue,setInputValue]=useState({categoria:"",cantidad:10});

    const onInputChange=(event)=>{
        setInputValue(prevState =>({...prevState, categoria: event.target.value }));
    }
    const onSelectChange=(event)=>{
        setInputValue(prevState =>({...prevState, cantidad: event.target.value }));
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        const newInputValue=inputValue.categoria.trim();
        if(newInputValue.length<=1) return;
        onNewCategory(newInputValue,inputValue.cantidad);
        setInputValue({categoria:"",cantidad:10});
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
                    value={inputValue.categoria}
                    onChange={onInputChange}
                    />
                <select value={inputValue.cantidad} onChange={onSelectChange}>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </form>
        </>
    )

}