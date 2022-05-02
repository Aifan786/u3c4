// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page

import  navbar  from "../components/navbar.js"
let n = document.getElementById("navbar")
n.innerHTML = navbar();

import {getData,append} from "./fetch.js"

let value = document.getElementById("search_input").value;

let search = (e)=>{
    if(e.key === "Enter"){

        let url = `https://masai-mock-api.herokuapp.com/news?q=${value}`

        window.location.href = "search.html";
        show(url)
        // getData(url).then((res)=>{
            
        //     console.log(res)
        //     append(res.articles,result)
        // })
    }
}

document.getElementById("search_input").addEventListener("keydown",search)


