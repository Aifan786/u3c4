// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import  navbar  from "../components/navbar.js"
let n = document.getElementById("navbar")
n.innerHTML = navbar();

import {getData,append} from "./fetch.js"


let result = document.getElementById("result")

// let value = document.getElementById("search_input").value;
let url = `https://masai-mock-api.herokuapp.com/news?q=tesla`


    getData(url).then((res)=>{
            
        console.log(res)
        append(res.articles,result)
    })



// let result = document.getElementById("results")

// let getData = async(url)=>{

//     let res = await fetch(url);

//     let data = await res.json();
//     return data;
// }

// let append = (data,result) =>{

//     data.forEach(({urlToImage,title,description})=>{

//         let div = document.createElement("div");
//         div.setAttribute("class","divs")

//         let image = document.createElement("img")
//         image.src = urlToImage;
//         let txt = document.createElement("h4");
//         txt.innerText = title;

//         let disp = document.createElement("p");
//         disp.innerText = description;

//         div.append(image,txt,disp)
        
//         result.append(div)
//     })
// }

// export { getData,append }





