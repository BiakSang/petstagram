const initialLoad = () => {
    if (g.page === "home"){
        if (g.pet === "dog"){
            loadDogs(g.dogsIndex, 20, g.dogs);
        }
        else if (g.pet === "cat"){
            loadCats(g.catsIndex, 20, g.cats);
        }
    }
    else if (g.page === "rate"){
        if (g.pet === "dog"){
            loadDogsToRate(g.dogsIndex, 20, g.dogs);
        }
        else if (g.pet === "cat"){
            loadCatsToRate(g.catsIndex, 20, g.cats);
        }
    }
    else if (g.page === "poll"){
        if (g.pet === "dog"){
            loadPetsToVote(g.dogsPollIndex, 20, g.dogsPoll);
        }
        else if (g.pet === "cat"){
            loadPetsToVote(g.dogsPollIndex, 20, g.catsPoll);
        }
    }
}

const updateData = () => {
    if ((g.dogs.length <= 0 || g.cats.length <= 0 || g.dogsPoll.length <= 0 || g.catsPoll.length <= 0) && (g.page === "home" || g.page === "rate" || g.page === "poll")){
        for (let i = 1; i < 201; i++){
            const dog = {
                id: "d"+i,
                avgRating: Math.floor(Math.random() * 4) + 1,
                myRating: 0,
                likes: Math.floor(Math.random() * 98) + 2
            };
            
            g.dogs.push(dog);
        }
        localStorage.setItem("dogs", JSON.stringify(g.dogs));
        
        for (let i = 1; i < 201; i++){
            const cat = {
                id: "c"+i,
                avgRating: Math.floor(Math.random() * 4) + 1,
                myRating: 0,
                likes: Math.floor(Math.random() * 98) + 2
            };
            
            g.cats.push(cat);
        }
        localStorage.setItem("cats", JSON.stringify(g.cats));
        
        for (let i = 1; i < 201; i+=2){
            const id = "d" + i + "-d" + (i+1);
            const optionOnePercentage = Math.floor(Math.random() * 80) + 2;
            const optionTwoPercentage = 100 - optionOnePercentage;
            const data = {
                id: id,
                optionOnePercentage: optionOnePercentage,
                optionTwoPercentage: optionTwoPercentage,
                photoOne: i,
                photoTwo: i+1,
                voted: false,
                myVote: null
            };
            
            g.dogsPoll.push(data);
        }
        localStorage.setItem("dogs-poll", JSON.stringify(g.dogsPoll));
        
        for (let i = 1; i < 201; i+=2){
            const id = "c" + i + "-c" + (i+1);
            const optionOnePercentage = Math.floor(Math.random() * 80) + 2;
            const optionTwoPercentage = 100 - optionOnePercentage;
            const data = {
                id: id,
                optionOnePercentage: optionOnePercentage,
                optionTwoPercentage: optionTwoPercentage,
                photoOne: i,
                photoTwo: i+1,
                voted: false,
                myVote: null
            };
            
            g.catsPoll.push(data);
        }
        localStorage.setItem("cats-poll", JSON.stringify(g.catsPoll));
        
        initialLoad();
    }
};