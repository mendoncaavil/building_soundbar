let btn = document.querySelectorAll(".btn");

    // console.log(btn);

    let stopSounds = () =>{
        btn.forEach((button) => {
           let audio = document.getElementById(button.innerText);
           audio.pause();
           audio.currentTime = 0;   

        });
    };


let playsound = () =>{
    btn.forEach((button) => {
        button.addEventListener("click", () =>{
            stopSounds();
            // console.log(document.getElementById(button.innerText));
            document.getElementById(button.innerText).play();
        });
    });
};

playsound();