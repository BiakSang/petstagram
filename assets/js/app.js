const controlSplashscreen = () => {
    if (Storage !== undefined && sessionStorage.getItem("splashscreen") !== "loaded"){
        document.getElementById("splashscreen").setAttribute("class", "visible");
        
        setTimeout(() => {
            document.getElementById("splashscreen").setAttribute("class", "");
            document.getElementById("app").setAttribute("class", "visible");
            sessionStorage.setItem("splashscreen", "loaded");
        }, 500);
    }
    else {
        document.getElementById("app").setAttribute("class", "visible");
    }
}
const initialFunction = () => {
    updateData();
    setPetType();
    controlSplashscreen();
}

window.onload = initialFunction;