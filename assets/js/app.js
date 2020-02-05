const hideSplashscreen = () => {
    setTimeout(() => {
        document.getElementById("splashscreen").setAttribute("class", "hidden");
    }, 500);
}
const initialFunction = () => {
    updateData();
    setPetType();
    hideSplashscreen();
}

window.onload = initialFunction;