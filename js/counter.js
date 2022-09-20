const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

async function cuenta(minutesData){
    for(var im = minutesData; im >= 0; im--){

        for(var is = 59; is >= 0; is--){

            if(im === minutesData){
                await sleep(1000);
                break;
            }else{
                minutes.innerText = `0${im}`;
                if(is < 10){
                    seconds.innerHTML = `0${is}`;
                }else{
                    seconds.innerHTML = `${is}`;
                }
                await sleep(1000);
            }
        }
    }
    location.href = "sistema-encubierto.html";
}

function sleep(time){
    return new Promise((accept) => {
        setTimeout(() => {
            accept();
        },1000);
    });
}

cuenta(3);