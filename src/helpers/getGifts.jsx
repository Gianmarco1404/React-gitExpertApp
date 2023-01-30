export const getGifts=async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=IUvs0JyGiCGGYWXdishGONCW8VjBoOeF`;
    //Primera Forma
     /*const resp=await fetch(url)
     const {data}=await resp.json();*/
     //Segunda forma
     const resp=await fetch(url).then(data=>data.json());
     const {data}=resp;
     const gifts=data.map(img=>{
         return {
             id:img.id,
             title:img.title,
             url:img.images?.downsized_medium.url
         }
     });
     return gifts;
 }