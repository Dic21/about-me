let pjbox = document.querySelector("#projectBox");

document.querySelectorAll(".pj-container").forEach((el) => {
    el.addEventListener("click", (() => { handleClick(el.id) }))
});
document.querySelectorAll(".about-nav>li>a").forEach((el) => {
    el.addEventListener("click", handleBack)
});

async function handleClick(pj) {
    //get data
    let info;
    await fetch("./js/data.json").then(resData=>resData.json()).then((data)=>{
        info = data;
    })

    //image
    let imagebox = "";
    for (let i = 0; i < info[pj]["img"].length; i++) {
        imagebox += `<img src="/images/${info[pj]["img"][i]}" onclick="window.open(this.src, '_blank');"/>`
    }
    //link
    let linkbox = "";
    for (let i = 0; i < info[pj]["link"].length; i++){
        linkbox += `<a href="${info[pj]["link"][i]["url"]}" target="_blank">${info[pj]["link"][i]["name"]}</a>`;
    }

    let template = `
        <div>
            <div class="pj-box-top">
                <h1>PROJECT</h1>
                <button id="close">Back</button>
            </div>
            <div>
                <h2>${info[pj]["title"]}</h2>
                <div class="pj-box-link">${linkbox}</div>
            </div>
            <div>
                <div class="pj-box-desc-img">
                    ${imagebox}
                </div>
            </div>
            <div>
                <p class="pj-box-desc-para">${info[pj]["desc"]}</p>
            </div>

        </div>
    
    `
    pjbox.innerHTML = template;
    if (!pjbox.classList.contains("hidden")) {
        pjbox.classList.add("hidden");
    } else {
        pjbox.classList.remove("hidden");

    }
    document.querySelector("#close").addEventListener('click', handleBack);

    //
    // const element = document.querySelector(".pj-box-desc-img");
    // document.querySelector("#slideRight").addEventListener('mousedown', function(event){
    //     event.preventDefault();
    //     element.scrollLeft += 50;
    //     console.log(element.scrollWidth);
    // })
    
    // let int;
    // let scrolling = function(e){
    //     console.log('triggered');
    //     if(e.type == "mousedown" || e.type == "touchstart" ){
    //         int = setInterval(()=>{
    //             element.scrollLeft -= 50;
    //         },200)
    //     }
    //     if(e.type == "mouseup" || e.type == "touchend" ){
    //         clearInterval(int);
    //     }
    // }

    // let arr = ['mousedown', 'touchstart', 'mouseup', 'touchend'];
    // arr.forEach(function(event){
    //     console.log(event);
    //     document.querySelector("#slideLeft").addEventListener(event,scrolling);
    // });
}

function handleBack() {
    pjbox.classList.add("hidden");
}

