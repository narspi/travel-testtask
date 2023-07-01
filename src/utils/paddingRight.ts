export const padding = () => {
    const bodyWidth = document.body.offsetWidth;
    const windowWidth = window.innerWidth;
    const padding = windowWidth - bodyWidth + "px";
    return padding;
}