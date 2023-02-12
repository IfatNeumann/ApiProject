
var interval;
getDoggy();

async function getDoggy(){
    const response = await fetch("https://api.thedogapi.com/v1/images/search");
    const data = await response.json();
    const imgSrc = data[0].url;
    document.getElementById("doggyImg").src=imgSrc;
}

function updateInterval(intervalTime){
    if(intervalTime !== undefined){
        clearInterval(interval);
        interval = setInterval(getDoggy, intervalTime);
        console.log(interval);
    }
    else {
        clearInterval(interval);
        
        console.log(interval);
        getDoggy();
    }
    console.log("interval set to be: " + intervalTime)
}