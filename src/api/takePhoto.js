import { Camera, CameraResultType,CameraDirection } from "@capacitor/camera";
export const takePhoto = async () => {
    const img = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Uri,
        allowEditing: true,
        direction: CameraDirection.Rear
    });

    return img;
}