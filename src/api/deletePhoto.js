
export const deletePhoto = (img) => {
    imgs.filter((i) => {
        if (i == img) return false;
        return true;
    });
}