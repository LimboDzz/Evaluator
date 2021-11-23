import { Share } from "@capacitor/share";
import { Geolocation } from "@capacitor/geolocation";

const printCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition();

    return "Current position:" + coordinates;
};
export const sharePhoto = async (img) => {
    await Share.share({
        url: img.webPath,
        text: printCurrentPosition(),
    });
}