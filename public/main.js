console.log('我是main.js2');

getCSS.onclick = () => { 
const request = new XMLHttpRequest();
request.open ("GET", "/2.js");
    request.onload = () => {
        console.log("request.response")
        console.log(request.response)
        const script =document.createElement("script")
        script.innerHTML = request.response
        document.body.appendChild(script)
};
request.onerror = () => {
    console.log("失败了")
};
    request.send();
}



getCSS.onclick = () => { 
const request = new XMLHttpRequest();
request.open("GET", "/style.css");
request.onload = () => {
    console.log("request.response")
    console.log(request.response)
    const style = document.createElement("style")
    style.innerHTML = request.response
    document.head.appendChild(style)

};
request.onerror = () => {
    console.log("失败了")
};
    request.send();
}