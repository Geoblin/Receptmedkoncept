function write(nr){
    // Import of list
    let recipeslist = exportlist();
    
    // saves the path of the '<section class="receptcontainer">'
    let container = document.querySelector(".receptcontainer");

    // Declare everything to be written on page
    let recept = recipeslist[nr];
    let name = recept.name;
    let text = recept.text;
    let description = recept.Description;
    let ingred = recept.ingredience;
    let img = recept.image;

    // Adds the header/name to the page
    let header = document.createElement("h2");
    header.innerText=name;
    container.innerText=header;
    container.appendChild(header);

    // adds <div class="gridbox"> to <section class="receptcontainer">
    let gridbox = document.createElement("div");
    gridbox.classList.add("gridbox");
    container.appendChild(gridbox);

    // adds <div class="item1"> to <div class="gridbox">
    let item1 = document.createElement("div");
    item1.classList.add("item1");
    gridbox.appendChild(item1);

    // adds <p> to <div class="item1">
    let ptext = document.createElement("p");
    ptext.innerText=text;
    item1.appendChild(ptext);
    
    // Adds img-tagg to receptcontainer
    let image = document.createElement("img");
    image.classList.add("item3");
    image.src=img;
    gridbox.appendChild(image);
    
    // adds <div="item2"> to <div class="gridbox">
    let item2 = document.createElement("div");
    item2.classList.add("item2");
    gridbox.appendChild(item2);

    // adds <h4>Ingredience</h4> to <div="item2">
    let item2h4 = document.createElement("h4");
    item2h4.innerText="Ingredienser:";
    item2.appendChild(item2h4);

    // adds <ul> to <div="item2">
    let item2ul = document.createElement("ul");
    item2.appendChild(item2ul);

    // Loops through ingredience list and adds them to the page
    for (let i = 0; i < ingred.length; i++){
        let item2ulelement = document.createElement("li");
        item2ulelement.innerText=ingred[i];
        item2ul.appendChild(item2ulelement);
    }


    // adds <div="item4"> to <div class="gridbox">
    let item4 = document.createElement("div");
    item4.classList.add("item4");
    gridbox.appendChild(item4)

    // Adds <h4> to <div="item4">
    let item4h4 = document.createElement("h4");
    item4h4.innerText="Howto:";
    item4.appendChild(item4h4);

    // adds <p> to <div="item4">
    let item4p = document.createElement("p");
    item4p.innerText=description;
    item4.appendChild(item4p);
}


// function printing(){

//     // Lists all recipes in list
//     console.log("All recipes:")
//     console.log(recipeslist)

    
//     // Finds recipes based on tags
//     let match = recipes.find(match => match.tags.includes("bönor"));
//     console.log("First to include 'bönor'")
//     console.log("Should be difficult to read:")
//     console.log(match);

//     let ingred_lst = match.ingredience;

//     // List all ingrediences for Färsbiffar
//     console.log("Should be ingredience for Chili con carne:")
//     ingred_lst.forEach(function(item){
//         console.log(item)
//     })


//     // Finds recipes based on ingredience & list tags of recipe
//     let match2 = recipes.find(match2 => match2.ingredience.includes("2 gula lökar"))
//     console.log("Should be chili con carne tags:")
//     console.log(match2.tags)
    

//     // Randomize recipe based on the arrays length
//     console.log("Impossible to predict:")
//     let randomrecipe = Math.floor(Math.random()*recipes.length)
//     console.log(recipes[randomrecipe].name);


//     // Now supports multiple searth terms independent of property
//     let matchlist = [];
//     let len = recipeslist.length;

//     for (let i = 0; i<len; i++){
//         let item = recipeslist[i];
//         if (item.tags.includes("meat"&&"swedish")){
//             console.log(item);
//             matchlist.push(item);
//         }
//     }
    
//     for (let i = 0; i<len; i++){
    //         let item = recipeslist[i];
    //         if (item.tags.includes("kött")&&item.ingredience.includes("salt")){
//             matchlist.push(item);
//         }
//     }
//     console.log("Matches:");
//     console.log(matchlist);


// }

function nr1(){
    write(15);
}
function nr2(){
    write(6);
}
function nr3(){
    write(1);
}

function meatfn(){
    let recipeslist = exportlist();
    let matcheslist = [];

    for (let i = 0; i<recipeslist.length; i++){
        let item = recipeslist[i];

        if (item.tags.includes("kött")){
            matcheslist.push(item.id);
        }
        
    }
    let randomnr = Math.floor(Math.random()*matcheslist.length);
    let number = matcheslist[randomnr];
    write(number);
}

function fncat2(){
    let recipeslist = exportlist();
    let matcheslist = [];

    for (let i = 0; i<recipeslist.length; i++){
        let item = recipeslist[i];

        if (item.tags.includes("vegetariskt")){
            matcheslist.push(item.id);
        }
        
    }
    let randomnr = Math.floor(Math.random()*matcheslist.length);
    let number = matcheslist[randomnr];
    write(number);    
}

function fncat3(){
    let recipeslist = exportlist();
    let matcheslist = [];

    for (let i = 0; i<recipeslist.length; i++){
        let item = recipeslist[i];

        if (item.tags.includes("fisk")){
            matcheslist.push(item.id);
        }
        
    }
    let randomnr = Math.floor(Math.random()*matcheslist.length);
    let number = matcheslist[randomnr];
    write(number);
}

function fncat4(){
    let recipeslist = exportlist();
    let matcheslist = [];

    for (let i = 0; i<recipeslist.length; i++){
        let item = recipeslist[i];

        if (item.tags.includes("kyckling")){
            matcheslist.push(item.id);
        }
        
    }
    let randomnr = Math.floor(Math.random()*matcheslist.length);
    let number = matcheslist[randomnr];
    write(number);
}

function fncat5(){
    let recipeslist = exportlist();
    let randomnr = Math.floor(Math.random()*recipeslist.length);
    write(randomnr);
}



// Veckans favoriter
let btn1 = document.querySelector(".card1");
let btn2 = document.querySelector(".card2");
let btn3 = document.querySelector(".card3");

// Kategorier
let cat1 = document.querySelector(".meat");
let cat2 = document.querySelector(".veg");
let cat3 = document.querySelector(".fish");
let cat4 = document.querySelector(".chicken");
let cat5 = document.querySelector(".greens");

// Sökbaren
let searchbar = document.getElementById("recipesearch")



btn1.addEventListener("click", nr1);
btn2.addEventListener("click", nr2);
btn3.addEventListener("click", nr3);
cat1.addEventListener("click", meatfn);
cat2.addEventListener("click", fncat2);
cat3.addEventListener("click", fncat3);
cat4.addEventListener("click", fncat4);
cat5.addEventListener("click", fncat5);


searchbar.addEventListener("keyup", (e)=>{
    let recipeslist = exportlist();
    console.log("recipeslist")
    console.log(recipeslist)
    let matchlist = [];
    let searchquery = searchbar.value;
    console.log(searchquery);


    if (searchquery == ""){
        write(5)
    }else{
        for (let i = 0; i<recipeslist.length; i++){
            let item = recipeslist[i];
            
            if (item.tags.includes(searchquery)){
                matchlist.push(item.id);
            }
            
        }
        let number = matchlist[0];
        write(number);
    }
    console.log("matchlist")
    console.log(matchlist)

})