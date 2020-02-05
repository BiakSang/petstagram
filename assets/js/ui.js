const shareModal = document.getElementById("share-modal");
const shareCode = '<a href="whatsapp://send?text=URL" data-action="share/whatsapp/share" class="mobile-only" target="_blank" onclick="exitShareModal()">Share on Whatsapp</a><a href="http://www.facebook.com/sharer.php?u=URL" target="_blank" onclick="exitShareModal()">Share on Facebook</a><a href="https://twitter.com/share?url=URL&amp;text=Check out this pet&amp;hashtags=petstagram" target="_blank" onclick="exitShareModal()">Share on Twitter</a><a href="http://www.tumblr.com/share/link?url=URL&amp;title=Petstagram" target="_blank" onclick="exitShareModal()">Share on Tumblr</a><a href="http://reddit.com/submit?url=URL&amp;title=Petstagram" target="_blank" onclick="exitShareModal()">Share on Reddit</a>';

const loadShareModal = (el) => {
    const url = el.getAttribute("data-url");
    shareModal.getElementsByTagName("section")[0].innerHTML = shareCode.split("URL").join(url);
    shareModal.setAttribute("class", "visible");
};
const exitShareModal = () => {
    shareModal.setAttribute("class", "");
};

////////////////////////////////////////////////

const loadDogs = (start, limit, data) => {
    const home = document.getElementById("home");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const pet = document.getElementsByClassName("pet");
    seeMoreBtn.setAttribute("class", "loading");
    
    for (let i = start; i < (start + limit); i++){
        home.innerHTML += g.pc
        .split("PET")
        .join("dogs")
        .split("PeT")
        .join("dog")
        .split("ID")
        .join(g.dogs[i].id.split("d").join(""))
        .split("LIKEid")
        .join(g.dogs[i].id)
        .split(" LIKED")
        .join(checkLike(g.dogs[i].id))
        .split("LIKESCOUNT")
        .join(g.dogs[i].likes)
        .split(" SAVED")
        .join(checkSave(g.dogs[i].id));
    }
    
    if (start >= (limit*10) - limit){
        g.dogsIndex = 0;
    }
    else {
        g.dogsIndex += limit;
    }
    localStorage.setItem("dogsIndex", g.dogsIndex);
    
    if (pet.length <= (limit*10) - limit){
        seeMoreBtn.style.display = "block";
        seeMoreBtn.setAttribute("class", "");
    }
    else {
        seeMoreBtn.style.display = "none";
        seeMoreBtn.setAttribute("class", "loading");
    }
}

const loadMoreDogs = () => {
    loadDogs(g.dogsIndex, 20, g.dogs);
}

const loadCats = (start, limit, data) => {
    const home = document.getElementById("home");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const pet = document.getElementsByClassName("pet");
    seeMoreBtn.setAttribute("class", "loading");
    
    for (let i = start; i < (start + limit); i++){
        home.innerHTML += g.pc
        .split("PET")
        .join("cats")
        .split("PeT")
        .join("cat")
        .split("ID")
        .join(g.cats[i].id.split("c").join(""))
        .split("LIKEid")
        .join(g.cats[i].id)
        .split(" LIKED")
        .join(checkLike(g.cats[i].id))
        .split("LIKESCOUNT")
        .join(g.cats[i].likes)
        .split(" SAVED")
        .join(checkSave(g.cats[i].id));
    }
    
    if (start >= (limit*10) - limit){
        g.catsIndex = 0;
    }
    else {
        g.catsIndex += limit;
    }
    localStorage.setItem("catsIndex", g.catsIndex);
    
    if (pet.length <= (limit*10) - limit){
        seeMoreBtn.style.display = "block";
        seeMoreBtn.setAttribute("class", "");
    }
    else {
        seeMoreBtn.style.display = "none";
        seeMoreBtn.setAttribute("class", "loading");
    }
}

const checkLike = (id) => {
    if (g.likes.includes(id+",")){
        return " liked"
    }
    else {
        return ""
    }
}

const checkSave = (id) => {
    if (g.saved.includes(id+",")){
        return " saved"
    }
    else {
        return ""
    }
}

const loadMoreCats = () => {
    loadCats(g.catsIndex, 20, g.cats);
}

const loadMorePets = (el) => {
    el.setAttribute("class", "loading");
    
    if (g.pet === "dog"){
        setTimeout(loadMoreDogs, 500);
    }
    else if (g.pet === "cat"){
        setTimeout(loadMoreCats, 500);
    }
}

////////////////////////////////////////////////

const loadLikedDogs = () => {
    const liked = document.getElementById("liked");
    const title = document.getElementById("intro").getElementsByTagName("h1")[0];
    const seeMoreBtn = document.getElementById("see-more-btn");
    
    if (g.likedDogs.length > 0){
        title.innerHTML = "Dogs you've liked";
        for (let i = 0; i < g.likedDogs.length; i++){
            liked.innerHTML += g.pc
            .split("PET")
            .join("dogs")
            .split("PeT")
            .join("dog")
            .split("ID")
            .join(g.likedDogs[i].id.split("d").join(""))
            .split("LIKEid")
            .join(g.likedDogs[i].id)
            .split(" LIKED")
            .join(checkLike(g.likedDogs[i].id))
            .split("LIKESCOUNT")
            .join(g.likedDogs[i].likes)
            .split(" SAVED")
            .join(checkSave(g.likedDogs[i].id));
        }
        
        setTimeout(() => {
            seeMoreBtn.style.display = "none";
        }, 400);
    }
    else {
        title.innerHTML = "You have'nt liked any dogs yet..";
        setTimeout(() => {
            window.scrollTo(0,0);
            seeMoreBtn.style.display = "none";
        }, 400);
    }
}

const loadLikedCats = () => {
    const liked = document.getElementById("liked");
    const title = document.getElementById("intro").getElementsByTagName("h1")[0];
    const seeMoreBtn = document.getElementById("see-more-btn");
    
    if (g.likedCats.length > 0){
        title.innerHTML = "Cats you've liked";
        for (let i = 0; i < g.likedCats.length; i++){
            liked.innerHTML += g.pc
            .split("PET")
            .join("cats")
            .split("PeT")
            .join("cat")
            .split("ID")
            .join(g.likedCats[i].id.split("c").join(""))
            .split("LIKEid")
            .join(g.likedCats[i].id)
            .split(" LIKED")
            .join(checkLike(g.likedCats[i].id))
            .split("LIKESCOUNT")
            .join(g.likedCats[i].likes)
            .split(" SAVED")
            .join(checkSave(g.likedCats[i].id));
        }
        
        setTimeout(() => {
            seeMoreBtn.style.display = "none";
        }, 400);
    }
    else {
        title.innerHTML = "You have'nt liked any cats yet..";
        setTimeout(() => {
            window.scrollTo(0,0);
            seeMoreBtn.style.display = "none";
        }, 400);
    }
}

////////////////////////////////////////////////

const loadSavedDogs = () => {
    const saved = document.getElementById("saved");
    const title = document.getElementById("intro").getElementsByTagName("h1")[0];
    const seeMoreBtn = document.getElementById("see-more-btn");
    
    if (g.savedDogs.length > 0){
        title.innerHTML = "Your saved dogs";
        for (let i = 0; i < g.savedDogs.length; i++){
            saved.innerHTML += g.pc
            .split("PET")
            .join("dogs")
            .split("PeT")
            .join("dog")
            .split("ID")
            .join(g.savedDogs[i].id.split("d").join(""))
            .split("LIKEid")
            .join(g.savedDogs[i].id)
            .split(" LIKED")
            .join(checkLike(g.savedDogs[i].id))
            .split("LIKESCOUNT")
            .join(g.savedDogs[i].likes)
            .split(" SAVED")
            .join(checkSave(g.savedDogs[i].id));
        }
        
        setTimeout(() => {
            seeMoreBtn.style.display = "none";
        }, 400);
    }
    else {
        title.innerHTML = "You have'nt saved any dogs yet..";
        setTimeout(() => {
            window.scrollTo(0,0);
            seeMoreBtn.style.display = "none";
        }, 400);
    }
}

const loadSavedCats = () => {
    const saved = document.getElementById("saved");
    const title = document.getElementById("intro").getElementsByTagName("h1")[0];
    const seeMoreBtn = document.getElementById("see-more-btn");
    
    if (g.savedCats.length > 0){
        title.innerHTML = "Your saved cats";
        for (let i = 0; i < g.savedCats.length; i++){
            saved.innerHTML += g.pc
            .split("PET")
            .join("cats")
            .split("PeT")
            .join("cat")
            .split("ID")
            .join(g.savedCats[i].id.split("c").join(""))
            .split("LIKEid")
            .join(g.savedCats[i].id)
            .split(" LIKED")
            .join(checkLike(g.savedCats[i].id))
            .split("LIKESCOUNT")
            .join(g.savedCats[i].likes)
            .split(" SAVED")
            .join(checkSave(g.savedCats[i].id));
        }
        
        setTimeout(() => {
            seeMoreBtn.style.display = "none";
        }, 400);
    }
    else {
        title.innerHTML = "You have'nt saved any cats yet..";
        setTimeout(() => {
            window.scrollTo(0,0);
            seeMoreBtn.style.display = "none";
        }, 400);
    }
}

////////////////////////////////////////////////

const loadPetsToVote = (start, limit, data) => {
    const poll = document.getElementById("poll");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const p = document.getElementsByClassName("poll");
    
    for (let i = start; i < (start + limit); i++){
        poll.innerHTML += g.vp
        .split("POLLID")
        .join(data[i].id)
        .split("PET")
        .join(g.pet)
        .split("VOTED")
        .join(voted(data[i].id))
        .split("PHOTOONE")
        .join(data[i].photoOne)
        .split("PHOTOTWO")
        .join(data[i].photoTwo)
        .split("OPTIONONEPERCENTAGE")
        .join(data[i].optionOnePercentage)
        .split("OPTIONTWOPERCENTAGE")
        .join(data[i].optionTwoPercentage)
        .split("MYVOTEONE")
        .join(myVoteOne(data[i].id))
        .split("MYVOTETWO")
        .join(myVoteTwo(data[i].id))
        .split("ONVOTE")
        .join(onVote(data[i].id))
    }
    
    if (p.length <= (limit*5) - limit){
        seeMoreBtn.style.display = "block";
        seeMoreBtn.setAttribute("class", "");
    }
    else {
        seeMoreBtn.style.display = "none";
        seeMoreBtn.setAttribute("class", "loading");
    }
}

const loadMorePetsToVote = (el) => {
    el.setAttribute("class", "loading");
    
    if (g.pet === "dog"){
        setTimeout(() => {
            loadPetsToVote(g.dogsPollIndex, 20, g.dogsPoll);
        }, 500);
    }
    else if (g.pet === "cat"){
        setTimeout(() => {
            loadCatsToVote(g.catsPollIndex, 20, g.catsPoll);
        }, 500);
    }
}

const voted = (id) => {
    if (g.pet === "dog"){
        for (let i = 0; i < g.dogsPoll.length; i++){
            if (g.dogsPoll[i].id === id){
                if (g.dogsPoll[i].voted){
                    return " voted"
                }
                else {
                    return ""
                }
                
                break;
            }
        }
    }
    else if (g.pet === "cat"){
        for (let i = 0; i < g.catsPoll.length; i++){
            if (g.catsPoll[i].id === id){
                if (g.catsPoll[i].voted){
                    return " voted"
                }
                else {
                    return ""
                }
                
                break;
            }
        }
    }
}

const myVoteOne = (id) => {
    if (g.pet === "dog"){
        for (let i = 0; i < g.dogsPoll.length; i++){
            if (g.dogsPoll[i].id === id){
                if (g.dogsPoll[i].myVote === 1){
                    return " v"
                }
                else {
                    return ""
                }
                break;
            }
        }
    }
    else if (g.pet === "cat"){
        for (let i = 0; i < g.catsPoll.length; i++){
            if (g.catsPoll[i].id === id){
                if (g.catsPoll[i].myVote === 1){
                    return " v"
                }
                else {
                    return ""
                }
                break;
            }
        }
    }
}

const myVoteTwo = (id) => {
    if (g.pet === "dog"){
        for (let i = 0; i < g.dogsPoll.length; i++){
            if (g.dogsPoll[i].id === id){
                if (g.dogsPoll[i].myVote === 2){
                    return " v"
                }
                else {
                    return ""
                }
                break;
            }
        }
    }
    else if (g.pet === "cat"){
        for (let i = 0; i < g.catsPoll.length; i++){
            if (g.catsPoll[i].id === id){
                if (g.catsPoll[i].myVote === 2){
                    return " v"
                }
                else {
                    return ""
                }
                break;
            }
        }
    }
}

const onVote = (id) => {
    if (g.pet === "dog"){
        for (let i = 0; i < g.dogsPoll.length; i++){
            if (g.dogsPoll[i].id === id){
                if (g.dogsPoll[i].voted){
                    return " onclick='votePet(this, false, \"" + id + "\")'"
                }
                else {
                    return " onclick='votePet(this, true, \"" + id + "\")'"
                }
                break;
            }
        }
    }
    else if (g.pet === "cat"){
        for (let i = 0; i < g.catsPoll.length; i++){
            if (g.catsPoll[i].id === id){
                if (g.dogsPoll[i].voted){
                    return " onclick='votePet(this, false, \"" + id + "\")'"
                }
                else {
                    return " onclick='votePet(this, true, \"" + id + "\")'"
                }
                break;
            }
        }
    }
}

const votePet = (el, notYetVoted, id) => {
    if (notYetVoted){
        const vote = Number(el.getAttribute("data-option"));
        const poll = document.getElementsByClassName("poll");
        
        for (let i = 0; i < poll.length; i++){
            const pollID = poll[i].getAttribute("data-id");
            if (pollID === id){
                poll[i].setAttribute("class", "poll voted");
                break;
            }
        }
        el.setAttribute("class", "option v");
        
        let data;
        if (g.pet === "dog"){
            const dp = g.dogsPoll;
            for (let i = 0; i < dp.length; i++){
                if (dp[i].id === id){
                    data = {
                        id: dp[i].id,
                        optionOnePercentage: dp[i].optionOnePercentage,
                        optionTwoPercentage: dp[i].optionTwoPercentage,
                        photoOne: dp[i].photoOne,
                        photoTwo: dp[i].photoTwo,
                        voted: true,
                        myVote: vote
                    };
                    g.dogsPoll.splice(i, 1);
                    g.dogsPoll.push(data);
                    localStorage.setItem("dogs-poll", JSON.stringify(g.dogsPoll));
                    break;
                }
            }
        }
        else if (g.pet === "cat"){
            const cp = g.catsPoll;
            for (let i = 0; i < cp.length; i++){
                if (cp[i].id === id){
                    data = {
                        id: cp[i].id,
                        optionOnePercentage: cp[i].optionOnePercentage,
                        optionTwoPercentage: cp[i].optionTwoPercentage,
                        photoOne: cp[i].photoOne,
                        photoTwo: cp[i].photoTwo,
                        voted: true,
                        myVote: vote
                    };
                    g.catsPoll.splice(i, 1);
                    g.catsPoll.push(data);
                    localStorage.setItem("cats-poll", JSON.stringify(g.catsPoll));
                    break;
                }
            }
        }
    }
    else {
        console.log("already voted");
    }
}

////////////////////////////////////////////////

const loadDogsToRate = (start, limit, data) => {
    const rate = document.getElementById("rate");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const pet = document.getElementsByClassName("r-pet");
    
    for (let i = start; i < (start + limit); i++){
        rate.innerHTML += g.rp
        .split("PET")
        .join("dogs")
        .split("PeT")
        .join("dog")
        .split("IMG")
        .join(data[i].id.split("d").join(""))
        .split("ID")
        .join(data[i].id)
        .split("AVGRATING")
        .join(avgRating(data[i].id))
        .split("MYRATING")
        .join(myRating(data[i].id))
        .split(" RATED")
        .join(checkRated(data[i].id))
    }
    
    if (start >= (limit*10) - limit){
        g.dogsIndex = 0;
    }
    else {
        g.dogsIndex += limit;
    }
    localStorage.setItem("dogsIndex", g.dogsIndex);
    
    if (pet.length <= (limit*10) - limit){
        seeMoreBtn.style.display = "block";
        seeMoreBtn.setAttribute("class", "");
    }
    else {
        seeMoreBtn.style.display = "none";
        seeMoreBtn.setAttribute("class", "loading");
    }
}

const loadCatsToRate = (start, limit, data) => {
    const rate = document.getElementById("rate");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const pet = document.getElementsByClassName("r-pet");
    
    for (let i = start; i < (start + limit); i++){
        rate.innerHTML += g.rp
        .split("PET")
        .join("cats")
        .split("PeT")
        .join("cat")
        .split("IMG")
        .join(data[i].id.split("c").join(""))
        .split("ID")
        .join(data[i].id)
        .split("AVGRATING")
        .join(avgRating(data[i].id))
        .split("MYRATING")
        .join(myRating(data[i].id))
        .split(" RATED")
        .join(checkRated(data[i].id))
    }
    
    if (start >= (limit*10) - limit){
        g.catsIndex = 0;
    }
    else {
        g.catsIndex += limit;
    }
    localStorage.setItem("catsIndex", g.catsIndex);
    
    if (pet.length <= (limit*10) - limit){
        seeMoreBtn.style.display = "block";
        seeMoreBtn.setAttribute("class", "");
    }
    else {
        seeMoreBtn.style.display = "none";
        seeMoreBtn.setAttribute("class", "loading");
    }
}

const loadMorePetsToRate = (el) => {
    el.setAttribute("class", "loading");
    
    if (g.pet === "dog"){
        setTimeout(() => {
            loadDogsToRate(g.dogsIndex, 20, g.dogs);
        }, 500);
    }
    else if (g.pet === "cat"){
        setTimeout(() => {
            loadCatsToRate(g.catsIndex, 20, g.cats);
        }, 500);
    }
}

const avgRating = (id) => {
    const star = '<button type="button" class="star FILL"><svg viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke-width=".8" stroke-linejoin="round" /></svg></button>';
    let avgr = "";
    let data;
    
    if (id.includes("d")){
        data = g.dogs;
    }
    else if (id.includes("c")){
        data = g.cats;
    }
    else {
        for (let i = 0; i < 5; i++){
            avgr += star.split(" FILL").join("");
        }
        
        return avgr
    }
    
    data = data.filter(pet => pet.id === id);
    let starCount = 0;
    if (data.length === 1){
        starCount = data[0].avgRating;
    }
    const emptyStars = 5 - starCount;
    
    for (let i = 0; i < starCount; i++){
        avgr += star.split(" FILL").join(" fill");
    }
    
    for (let i = 0; i < emptyStars; i++){
        avgr += star.split(" FILL").join("");
    }
    
    return avgr
}

const myRating = (id) => {
    const star = '<button type="button" class="star FILL" data-id="ID" data-star="STARINDEX"ONCLICK><svg viewbox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" stroke-width=".8" stroke-linejoin="round" /></svg></button>';
    let mr = "";
    let data;
    
    if (id.includes("d")){
        data = g.dogs;
    }
    else if (id.includes("c")){
        data = g.cats;
    }
    else {
        for (let i = 0; i < 5; i++){
            mr += star
            .split(" FILL")
            .join("")
            .split("ID")
            .join(id)
            .split("STARINDEX")
            .join(i+1)
            .split("ONCLICK")
            .join(" onclick=ratePet(this)")
        }
        
        return mr
    }
    
    data = data.filter(pet => pet.id === id);
    let starCount = 0;
    if (data.length === 1){
        starCount = data[0].myRating;
    }
    
    if (starCount === 0){
        for (let i = 0; i < 5; i++){
            mr += star
            .split(" FILL")
            .join("")
            .split("ID")
            .join(id)
            .split("STARINDEX")
            .join(i+1)
            .split("ONCLICK")
            .join(" onclick=ratePet(this)")
        }
        
        return mr
    }
    else {
        let index = 0;
        
        for (let i = index; i < starCount; i++){
            mr += star
            .split(" FILL")
            .join(" fill")
            .split("ID")
            .join(id)
            .split("STARINDEX")
            .join(i+1)
            .split("ONCLICK")
            .join("");
            
            index++
        }
        
        for (let i = index; i < 5; i++){
            mr += star
            .split(" FILL")
            .join("")
            .split("ID")
            .join(id)
            .split("STARINDEX")
            .join(i+1)
            .split("ONCLICK")
            .join("")
        }
        
        return mr
    }
}

const checkRated = (id) => {
    let data;
    
    if (id.includes("d")){
        data = g.dogs;
    }
    else if (id.includes("c")){
        data = g.cats;
    }
    
    data = data.filter(pet => id === pet.id);
    if (data.length === 1){
        if (data[0].myRating < 1){
            return ""
        }
        else {
            return " rated"
        }
    }
    else {
        return ""
    }
}

const ratePet = (el) => {
    const id = el.getAttribute("data-id");
    const star = Number(el.getAttribute("data-star"));
    const pet = document.getElementsByClassName("r-pet");
    const mr = document.getElementsByClassName("my-rating");
    let mrIndex;
    for (let i = 0; i < pet.length; i++){
        const dataID = pet[i].getAttribute("data-id");
        if (dataID === id){
            mrIndex = i;
            break;
        }
    }
    
    if (id.includes("d")){
        for (let i = 0; i < g.dogs.length; i++){
            if (g.dogs[i].id === id){
                const newData = {
                    id: g.dogs[i].id,
                    avgRating: g.dogs[i].avgRating,
                    myRating: star,
                    likes: g.dogs[i].likes
                };
                g.dogs.splice(i,1,newData);
                localStorage.setItem("dogs", JSON.stringify(g.dogs));
            }
        }
    }
    else if (id.includes("c")){
        for (let i = 0; i < g.cats.length; i++){
            if (g.cats[i].id === id){
                const newData = {
                    id: g.cats[i].id,
                    avgRating: g.cats[i].avgRating,
                    myRating: star,
                    likes: g.cats[i].likes
                };
                g.cats.splice(i,1,newData);
                localStorage.setItem("cats", JSON.stringify(g.cats));
            }
        }
    }
    else {
        return
    }
    
    mr[mrIndex].innerHTML = myRating(id);
    
    setTimeout(() => {
        for (let i = 0; i < pet.length; i++){
            const dataID = pet[i].getAttribute("data-id");
            if (dataID === id){
                pet[i].setAttribute("class", "r-pet rated");
                break;
            }
        }
    }, 800);
}

////////////////////////////////////////////////

const setPetType = () => {
    const home = document.getElementById("home");
    const liked = document.getElementById("liked");
    const saved = document.getElementById("saved");
    const rate = document.getElementById("rate");
    const poll = document.getElementById("poll");
    const intro = document.getElementById("intro");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const main = document.getElementsByTagName("main")[0];
    main.style.minHeight = (window.innerHeight + intro.clientHeight) + "px";
    seeMoreBtn.style.display = "block";
    seeMoreBtn.setAttribute("class", "loading");
    
    if (g.pet === "dog"){
        document.querySelector("#pet-toggle").getElementsByTagName("span")[0].setAttribute("class", "");
        document.querySelector("#pet-toggle").getElementsByTagName("span")[1].setAttribute("class", "");
        
        document.querySelector("#pet-toggle span[data-pet=dog]").setAttribute("class", "active");
        
        document.getElementById("pet-toggle-marker").style.left = "0%";
        
        document.getElementById("intro-img").setAttribute("src", "assets/svgs/dog.svg");
        document.getElementById("intro-img").setAttribute("alt", "Vector graphic of a man walking a dog");
        
        if (g.dogs.length > 0 && g.page === "home"){
            home.innerHTML = "";
            setTimeout(() => {
                loadDogs(g.dogsIndex, 20, g.dogs);
            }, 300);
        }
        
        if (g.page === "liked"){
            liked.innerHTML = "";
            setTimeout(() => {
                loadLikedDogs();
            }, 300);
        }
        else if (g.page === "saved"){
            saved.innerHTML = "";
            setTimeout(() => {
                loadSavedDogs();
            }, 300);
        }
        else if (g.page === "rate"){
            rate.innerHTML = "";
            setTimeout(() => {
                loadDogsToRate(g.dogsIndex, 20, g.dogs);
            }, 300);
        }
        else if (g.page === "poll"){
            poll.innerHTML = "";
            setTimeout(() => {
                loadPetsToVote(g.dogsPollIndex, 20, g.dogsPoll);
            }, 300);
        }
    }
    else if (g.pet === "cat"){
        document.querySelector("#pet-toggle").getElementsByTagName("span")[0].setAttribute("class", "");
        document.querySelector("#pet-toggle").getElementsByTagName("span")[1].setAttribute("class", "");
        
        document.querySelector("#pet-toggle span[data-pet=cat]").setAttribute("class", "active");
        
        document.getElementById("pet-toggle-marker").style.left = "50%";
        
        document.getElementById("intro-img").setAttribute("src", "assets/svgs/cat.svg");
        document.getElementById("intro-img").setAttribute("alt", "Vector graphic of a cat sitting on the window");
        
        if (g.cats.length > 0 && g.page === "home"){
            home.innerHTML = "";
            setTimeout(() => {
                loadCats(g.catsIndex, 20, g.cats);
            }, 300);
        }
        if (g.page === "liked"){
            liked.innerHTML = "";
            setTimeout(() => {
                loadLikedCats();
            }, 300);
        }
        else if (g.page === "saved"){
            saved.innerHTML = "";
            setTimeout(() => {
                loadSavedCats();
            }, 300);
        }
        else if (g.page === "rate"){
            rate.innerHTML = "";
            setTimeout(() => {
                loadCatsToRate(g.catsIndex, 20, g.cats);
            }, 300);
        }
        else if (g.page === "poll"){
            poll.innerHTML = "";
            setTimeout(() => {
                loadPetsToVote(g.catsPollIndex, 20, g.catsPoll);
            }, 300);
        }
    }
};
const changePetType = (pet) => {
    g.pet = pet;
    localStorage.setItem("pet", g.pet);
    
    setPetType();
    
    let introHeight;
    if (window.innerWidth > 1300 || (window.innerWidth < 801 && window.innerWidth > 500)){
        introHeight = document.getElementById("intro").clientHeight - 30;
    }
    else if (window.innerWidth > 800 && window.innerWidth < 1301) {
        introHeight = document.getElementById("intro").clientHeight - 50;
    }
    else {
        introHeight = document.getElementById("intro").clientHeight - 10;
    }
    window.scrollTo(0,introHeight);
};

////////////////////////////////////////////////

const likePet = (id) => {
    if (!g.likes.includes(id+",")){
        const likes = id + "," + g.likes;
        g.likes = likes;
        localStorage.setItem("likes", g.likes);
        
        const lb = document.getElementsByClassName("like-btn");
        const lc = document.getElementsByClassName("likes-count");
        for (let i = 0; i < lb.length; i++){
            const dataID = lb[i].getAttribute("data-id");
            if (dataID === id){
                lb[i].setAttribute("class", "like-btn liked");
                
                let dataLikes = Number(lc[i].getAttribute("data-likes"));
                dataLikes++;
                lc[i].innerHTML = dataLikes + " Likes";
                lc[i].setAttribute("data-likes", dataLikes);
                
                if (id.includes("d")){
                    const index = g.dogs.findIndex(dog => dog.id === id);
                    g.dogs.splice(index, 1, {
                        id: id,
                        likes: dataLikes
                    });
                    
                    localStorage.setItem("dogs", JSON.stringify(g.dogs));
                }
                else if (id.includes("c")){
                    const index = g.cats.findIndex(cat => cat.id === id);
                    g.cats.splice(index, 1, {
                        id: id,
                        likes: dataLikes
                    });
                    
                    localStorage.setItem("cats", JSON.stringify(g.cats));
                }
                
                break;
            }
        }
    }
};
const unlikePet = (id) => {
    if (g.likes.includes(id+",")){
        const likes = g.likes.split(id + ",").join("");
        g.likes = likes;
        localStorage.setItem("likes", g.likes);
        
        const lb = document.getElementsByClassName("like-btn");
        const lc = document.getElementsByClassName("likes-count");
        for (let i = 0; i < lb.length; i++){
            const dataID = lb[i].getAttribute("data-id");
            if (dataID === id){
                lb[i].setAttribute("class", "like-btn");
                
                let dataLikes = Number(lc[i].getAttribute("data-likes"));
                if (dataLikes > 0){
                    dataLikes--;
                }
                else {
                    dataLikes = 0;
                }
                lc[i].innerHTML = dataLikes + " Likes";
                lc[i].setAttribute("data-likes", dataLikes);
                
                if (id.includes("d")){
                    const index = g.dogs.findIndex(dog => dog.id === id);
                    g.dogs.splice(index, 1, {
                        id: id,
                        likes: dataLikes
                    });
                    
                    localStorage.setItem("dogs", JSON.stringify(g.dogs));
                }
                else if (id.includes("c")){
                    const index = g.cats.findIndex(cat => cat.id === id);
                    g.cats.splice(index, 1, {
                        id: id,
                        likes: dataLikes
                    });
                    
                    localStorage.setItem("cats", JSON.stringify(g.cats));
                }
                
                break;
            }
        }
        
        if (g.page === "liked"){
            if (g.pet === "dog"){
                g.likedDogs = g.likedDogs.filter(dog => dog.id !== id);
            }
            else if (g.pet === "cat"){
                g.likedCats = g.likedCats.filter(cat => cat.id !== id);
            }
            
            removeLikedFromDom(id);
        }
    }
};
const removeLikedFromDom = (id) => {
    const pet = document.getElementsByClassName("pet");
    for (let i = 0; i < pet.length; i++){
        const dataID = pet[i].getAttribute("data-id");
        if (dataID === id){
            setTimeout(() => {
                if (window.innerWidth > 500){
                    pet[i].style.width = "0px";
                    pet[i].setAttribute("class", "pet removed");
                }
                else {
                    pet[i].style.maxHeight = "0px";
                    pet[i].setAttribute("class", "pet removed");
                }
            }, 200);
            setTimeout(() => {
                pet[i].remove();
            }, 500);
            break;
        }
    }
};
let clicked = false;
let clickedID = "";
const petOnDblClick = (id) => {
    if (!clicked){
        clicked = true;
        clickedID = id;
    }
    else if (clicked && clickedID === id) {
        likePet(id);
        likedAlert(id);
        clicked = false;
        clickedID = "";
    }
    setTimeout(() => {
        clicked = false;
        clickedID = "";
    }, 400);
};
const likeBtnOnClick = (el) => {
    const cl = el.getAttribute("class");
    const dataID = el.getAttribute("data-id");
    
    if (cl.includes(" liked")){
        unlikePet(dataID);
    }
    else {
        likePet(dataID);
        likedAlert(dataID);
    }
};
const likedAlert = (id) => {
    const la = document.getElementsByClassName("liked-alert");
    for (var i = 0; i < la.length; i++){
        const dataID = la[i].getAttribute("data-id");
        if (dataID === id){
            la[i].setAttribute("class", "liked-alert visible1");
            setTimeout(() => {
                la[i].setAttribute("class", "liked-alert visible2");
            }, 200);
            setTimeout(() => {
                la[i].setAttribute("class", "liked-alert");
            }, 800);
            break;
        }
    }
};

////////////////////////////////////////////////

const savePet = (id, el) => {
    if (!g.saved.includes(id+",")){
        g.saved = id + "," + g.saved;
        localStorage.setItem("saved", g.saved);
        
        el.setAttribute("class", "save-btn saved");
    }
}

const unsavePet = (id, el) => {
    if (g.saved.includes(id+",")){
        g.saved = g.saved.split(id+",").join("");
        localStorage.setItem("saved", g.saved);
        
        el.setAttribute("class", "save-btn");
        
        if (g.page === "saved"){
            if (g.pet === "dog"){
                g.savedDogs = g.savedDogs.filter(dog => dog.id !== id);
            }
            else if (g.pet === "cat"){
                g.savedCats = g.savedCats.filter(cat => cat.id !== id);
            }
            
            removeSavedFromDom(id);
        }
    }
}
const removeSavedFromDom = (id) => {
    const pet = document.getElementsByClassName("pet");
    for (let i = 0; i < pet.length; i++){
        const dataID = pet[i].getAttribute("data-id");
        if (dataID === id){
            setTimeout(() => {
                if (window.innerWidth > 500){
                    pet[i].style.width = "0px";
                    pet[i].setAttribute("class", "pet removed");
                }
                else {
                    pet[i].style.maxHeight = "0px";
                    pet[i].setAttribute("class", "pet removed");
                }
            }, 200);
            setTimeout(() => {
                pet[i].remove();
            }, 500);
            break;
        }
    }
};

const saveBtnOnClick = (el) => {
    const id = el.getAttribute("data-id");
    const cls = el.getAttribute("class");
    
    if (cls.includes("saved")){
        unsavePet(id, el);
    }
    else {
        savePet(id, el);
    }
}