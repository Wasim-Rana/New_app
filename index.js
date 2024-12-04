const headline = document.querySelector("#headline")

let fetchheadline = async function () {
    try {
        let result = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5");
        if (!result.ok) throw new Error(`Error: ${result.statusText}`);
        let data = await result.json();
        displayheadline(data.articles);
    } catch (error) {
        console.error('Failed to fetch headlines:', error);
    }
};

fetchheadline();

let displayheadline = (data) =>{
    console.log(data);
    data.forEach(element => {
        const div =document.createElement("div");
        div.style.backgroundImage=`url(${element.urlToImage})`;
        div.innerHTML = `<h3>${element.title}</h3>`
        headline.appendChild(div)
    });
};

//bussiness newa details 
let bussiness= document.getElementById("business");
let fetchbussiness= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displaybussiness(data.articles);
}

fetchbussiness();

let displaybussiness=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        bussiness.appendChild(div)
    })
}

//entairtainment news script

let ent= document.getElementById("ent");
let fetchent= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=entertainment&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displayent(data.articles);
}

fetchent();

let displayent=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        ent.appendChild(div)
    })
}

//health news script

let health= document.getElementById("health");
let fetchhealth= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displayhealth(data.articles);
}

fetchhealth();

let displayhealth=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        health.appendChild(div)
    })
}

//science news script
let science= document.getElementById("science");
let fetchscience= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displayscience(data.articles);
}

fetchscience();

let displayscience=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        science.appendChild(div)
    })
}

//sports news script

let sports= document.getElementById("sports");
let fetchsports= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displaysports(data.articles);
}

fetchsports();

let displaysports=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        sports.appendChild(div)
    })
}

//technology script

let tech= document.getElementById("tech");
let fetchtech= async function(){
    let result= await fetch('https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=7430dbc0ee8f4436b76d3e342e4ca4d5')
    let data= await result.json();
    displaytech(data.articles);
}

fetchtech();

let displaytech=(data)=>{
    console.log(data);
    data.forEach(element =>{
        for(let key in element){
            if(element[key]===null){
                element[key]=`${key} will be updated soon...`
            }
        }
        const div=document.createElement("div");
        div.innerHTML=`<h2>${element.source.name}</h2>
        <h4>${element.title}</h4>
        <img src=${element.urlToImage} alt='Image will be updated soon'>
        <p>${element.description}</p>
        <a href=${element.url} target='_blank'><button>Explore Official Wewbsite </button></a>`
        tech.appendChild(div)
    })
}
