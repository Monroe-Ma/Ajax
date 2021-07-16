let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", `/page${n+1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const array = JSON.parse(request.response)
            console.log("111111",array)
            array.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.id;
            xxx.appendChild(li);
           });
            n += 1
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            myName.textContent=object.name
        }
    }
    request.send()
}

getXml.onclick = () => {
    const request = new XMLHttpRequest()
request.open("GET","/4.xml")
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName("warning")[0].textContent
            console.log(text.trim())
            }
        }
request.send() 
}

getHtml.onclick = () => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status < 300) {
                const div = document.createElement("div")
                div.innerHTML = request.response
                document.body.appendChild(div)
            }
            else { console.log("失败了")}
         }
    }
 request.open("GET","/3.html")
request.send()


}

getJS.onclick = () => { 
const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        console.log(request.response)
   if (request.readyState === 4) {
            if (request.status>=200 && request.status<300) {
                const script = document.createElement("script")
               script.innerHTML = request.response
              document.body.appendChild(script)
         }
    } else { console.log("JS失败了")}
    }
    request.open("GET","/2.js")
    request.send();
}

getCSS.onclick = () => { 
const request = new XMLHttpRequest();
request.open("GET", "/stye.css");
    request.onreadystatechange = () => {
        if (request.readyState===4) {
            if (request.State >= 200 && request.State < 300) {
                const style = document.createElement("style")
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                console.log("css失败了")
             }
        }
     }
    request.send();
}