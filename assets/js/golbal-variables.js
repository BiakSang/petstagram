let g = {
    pc: '<div class="pet" data-id="LIKEid"><img src="PET/ID.jpg" alt="photo of a PeT" onclick="petOnDblClick(\'LIKEid\')"><section><div class="like-btn LIKED" data-id="LIKEid" onclick="likeBtnOnClick(this)"><svg version="1.1" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g transform="translate(0 -161.53)" fill="none" stroke="#444" stroke-width="3.175"><ellipse transform="rotate(3.3591)" cx="51.441" cy="196.5" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(19.204)" cx="131.54" cy="158.86" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(54.862)" cx="228.33" cy="39.509" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(71.567)" cx="261.18" cy="-21.004" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><path d="m26.156 231.92c30.627-7.7537 14.387-6.5404 31.634-14.381 12.305-2.8478 21.525 2.1877 22.322 13.473-4.0385 19.128-1.8537 12.543 0.58198 32.47-2.4168 5.4794-6.4123 19.066-20.726 17.715-20.319-11.911-20.517-12.199-34.784-18.285-3.8444-4.7498-15.123-14.395 0.97172-30.992z"/></g></svg></div><p class="likes-count" data-likes="LIKESCOUNT">LIKESCOUNT Likes</p><div class="share-btn" onclick="loadShareModal(this)" data-url="https://petstagram.netlify.com/PET/ID.jpg"><svg viewbox="0 0 100 100"><polyline points="10,20 90,25 40,90 40,50 90,25 40,50 10,20" /></svg></div><div class="save-btn SAVED" onclick="saveBtnOnClick(this)" data-id="LIKEid"><svg viewbox="0 0 100 100"><polyline points="20,18 80,18 80,82 50,55 20,82 20,18" /></svg></div></section><div class="liked-alert" data-id="LIKEid"><svg version="1.1" viewBox="0 0 135.47 135.47" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><metadata><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/><dc:title/></cc:Work></rdf:RDF></metadata><g transform="translate(0 -161.53)" fill="none" stroke="#444" stroke-width="3.175"><ellipse transform="rotate(3.3591)" cx="51.441" cy="196.5" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(19.204)" cx="131.54" cy="158.86" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(54.862)" cx="228.33" cy="39.509" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><ellipse transform="rotate(71.567)" cx="261.18" cy="-21.004" rx="11.717" ry="18.435" stroke-linecap="round" style="paint-order:markers stroke fill"/><path d="m26.156 231.92c30.627-7.7537 14.387-6.5404 31.634-14.381 12.305-2.8478 21.525 2.1877 22.322 13.473-4.0385 19.128-1.8537 12.543 0.58198 32.47-2.4168 5.4794-6.4123 19.066-20.726 17.715-20.319-11.911-20.517-12.199-34.784-18.285-3.8444-4.7498-15.123-14.395 0.97172-30.992z"/></g></svg></div></div>',
    vp: '<div class="pollVOTED" data-id="POLLID"><div class="optionMYVOTEONE" data-option="1"ONVOTE><img src="PETs/PHOTOONE.jpg" alt="photo of a dog"><button type="button" class="vote-percentage">OPTIONONEPERCENTAGE%</button></div><span class="or">or</span><div class="optionMYVOTETWO" data-option="2"ONVOTE><img src="PETs/PHOTOTWO.jpg" alt="photo of a PET"><button type="button" class="vote-percentage">OPTIONTWOPERCENTAGE%</button></div></div>',
    rp: '<div class="r-pet RATED" data-id="ID"><img src="PET/IMG.jpg" alt="photo of a PeT"><div class="rating"><section class="my-rating" data-id="ID">MYRATING</section><section class="avg-rating">AVGRATING</section></div></div>',
    pet: null,
    dogsIndex: 0,
    catsIndex: 0,
    dogsPollIndex: 0,
    catsPollIndex: 0,
    dogs: [],
    cats: [],
    dogsPoll: [],
    catsPoll: [],
    likes: "",
    likedDogs: [],
    likedCats: [],
    saved: "",
    savedDogs: [],
    savedCats: [],
    l: 20,
    page: document.getElementsByTagName("body")[0].getAttribute("data-page")
}

if (!Storage !== undefined){
    ///if local storage is supported
    const dogsIndex = localStorage.getItem("dogsIndex");
    const catsIndex = localStorage.getItem("catsIndex");
    const pet = localStorage.getItem("pet");
    const dogs = localStorage.getItem("dogs");
    const cats = localStorage.getItem("cats");
    const dogsPoll = localStorage.getItem("dogs-poll");
    const catsPoll = localStorage.getItem("cats-poll");
    const likes = localStorage.getItem("likes");
    const saved = localStorage.getItem("saved");
    
    ////////////////////////////////////////////////
    
    if (dogsIndex){
        g.dogsIndex = Number(dogsIndex);
    }
    else {
        g.dogsIndex = 0;
    }
    
    ////////////////////////////////////////////////
    
    if (catsIndex){
        g.catsIndex = Number(catsIndex);
    }
    else {
        g.catsIndex = 0;
    }
    
    ////////////////////////////////////////////////
    
    if (pet){
        g.pet = pet;
    }
    else {
        g.pet = "dog";
    }
    
    ////////////////////////////////////////////////
    
    if (dogs){
        g.dogs = JSON.parse(dogs);
    }
    else {
        g.dogs = [];
    }
    
    ////////////////////////////////////////////////
    
    if (cats){
        g.cats = JSON.parse(cats);
    }
    else {
        g.cats = [];
    }
    
    ////////////////////////////////////////////////
    
    if (dogsPoll){
        g.dogsPoll = JSON.parse(dogsPoll);
    }
    else {
        g.dogsPoll = [];
    }
    
    ////////////////////////////////////////////////
    
    if (catsPoll){
        g.catsPoll = JSON.parse(catsPoll);
    }
    else {
        g.catsPoll = [];
    }
    
    ////////////////////////////////////////////////
    
    if (likes){
        g.likes = likes;
    }
    else {
        g.likes = "";
    }
    
    ////////////////////////////////////////////////
    
    if (saved){
        g.saved = saved;
    }
    else {
        g.saved = "";
    }
    
    ////////////////////////////////////////////////
    
    const l = g.likes.split(",");
    l.pop();
    if (l.length > 0){
        let ld, lc;
        for (let i = 0; i < l.length; i++){
            ld = l.filter(id => id.includes("d"));
        }
        for (let i = 0; i < l.length; i++){
            lc = l.filter(id => id.includes("c"));
        }
        
        for (let i = 0; i < ld.length; i++){
            g.likedDogs.push(
                g.dogs.filter(dog => dog.id === ld[i])[0]
            );
        }
        for (let i = 0; i < lc.length; i++){
            g.likedCats.push(
                g.cats.filter(cat => cat.id === lc[i])[0]
            );
        }
    }
    
    ////////////////////////////////////////////////
    
    const s = g.saved.split(",");
    s.pop();
    if (s.length > 0){
        let sd, sc;
        for (let i = 0; i < s.length; i++){
            sd = s.filter(id => id.includes("d"));
        }
        for (let i = 0; i < s.length; i++){
            sc = s.filter(id => id.includes("c"));
        }
        
        for (let i = 0; i < sd.length; i++){
            g.savedDogs.push(
                g.dogs.filter(dog => dog.id === sd[i])[0]
            );
        }
        for (let i = 0; i < sc.length; i++){
            g.savedCats.push(
                g.cats.filter(cat => cat.id === sc[i])[0]
            );
        }
    }
}
else {
    ///if local storage is not supported
    g.dogsIndex = 0;
    g.catsIndex = 0;
    g.pet = "dog";
    g.dogs = [];
    g.cats = [];
}