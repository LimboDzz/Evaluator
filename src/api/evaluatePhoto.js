
import { Image } from "image-js";
export const evaluatePhoto = async (img) => {
    const image=await Image.load(img.webPath);
    const greyImg = image.grey({
        algorithm: 'average'
    });
    const num=avr(await greyImg.toBuffer());
    return [greyImg.toDataURL('image/png'),num];
}

const avr=(arr)=>{
    let sum=0;
    arr.forEach(i=>sum+=i);
    return (sum/arr.length);
}