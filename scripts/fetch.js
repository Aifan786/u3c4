
let getData = async(url)=>{

    let res = await fetch(url);

    let data = await res.json();
    return data;
}

let append = (data,result) =>{

    data.forEach(({urlToImage,title,description})=>{

        let div = document.createElement("div");
        div.setAttribute("class","divs")

        let image = document.createElement("img")
        image.src = urlToImage;
        image.setAttribute("class","sz")

        let cn = document.createElement("div");
        cn.setAttribute("class","sze")

        let txt = document.createElement("h3");
        txt.innerText = title;

        let disp = document.createElement("p");
        disp.innerText = description;

        cn.append(txt,disp)
        div.append(image,cn)
        
        result.append(div)
    })
}

export { getData,append }