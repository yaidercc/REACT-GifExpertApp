import { useEffect, useState } from "react";
import {getGifs} from "../helpers/getGifs.js";

export const useFetchGifs = (category,amount) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async()=>{
        const newImages = await getGifs(category,amount);
        setImages(newImages);
        setIsLoading(false);
    }

    // useEffect no debe ser asincrono
    useEffect( ()=>{
        getImages();
    },[] );

    return{
        images,
        isLoading
    };
}
