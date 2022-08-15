export const getGifs = async (category, amount) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=UY1snf4K3F3D4KqkvxDjiStgVkgnQsDt&q=${category}&limit=${amount}`;
    const resp = await fetch(url);
    const {
        data
    } = await resp.json();
    
    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }))
    console.log(url);
    return gifs;
}