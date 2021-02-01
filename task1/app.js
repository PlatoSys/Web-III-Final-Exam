let btn = document.querySelector('#start');
let copy = btn;
let btnsdiv = document.querySelector('.buttons');

btn.addEventListener('click',ev => {
    let hours = parseInt(document.querySelector('#hour').value);
    let minutes = parseInt(document.querySelector('#minute').value);
    let seconds = parseInt(document.querySelector('#second').value);

    let dc = document.querySelector('.main');
    let tm = document.createElement('div');
    let h1 = document.createElement('h1');
    let h2 = document.createElement('h1');
    let h3 = document.createElement('h1');

    tm.classList.add('time');
    h1.id = 'hours';
    h2.id = 'minutes';
    h3.id = 'seconds';
    h1.innerHTML = hours;
    h2.innerHTML = minutes;
    h3.innerHTML = seconds;

    tm.appendChild(h1);
    tm.appendChild(h2);
    tm.appendChild(h3);
    dc.appendChild(tm);

    setInterval(
        function decreaseSec(){
            let seconds = parseInt(document.querySelector('#seconds').innerHTML);
            seconds--;
            if (seconds == 0){
                seconds = 60;
                let minutes = parseInt(document.querySelector('#minutes').innerHTML);
                minutes--;
                document.querySelector('#minutes').innerHTML = minutes;
                setInterval(
                    function decreaseMin(){
                        let seconds = parseInt(document.querySelector('#minutes').innerHTML);
                        seconds--;
                        if (seconds == 0){
                            seconds = 60;
                            let hours = parseInt(document.querySelector('#hours').innerHTML);
                            hours--;
                            document.querySelector('#hours').innerHTML = minutes;
                            setInterval(
                                function decreaseHour(){
                                    let seconds = parseInt(document.querySelector('#hours').innerHTML);
                                    seconds--;
                                    if (seconds == 0){
                                        seconds = 60;
                                    }
                                    let second = document.querySelector('#hours');
                                    second.innerHTML = seconds;
                                    console.log(seconds)
                                }, 3600000
                            );

                        }
                        let second = document.querySelector('#minutes');
                        second.innerHTML = seconds;
                        console.log(seconds)
                    }, 60000
                );

            }
            let second = document.querySelector('#seconds');
            second.innerHTML = seconds;
            console.log(seconds)
        }, 1000
    );


    
    let pause = document.createElement('button');
    pause.classList.add('btn');
    pause.classList.add('btn-primary');
    pause.innerHTML = 'Pause';
    pause.id = 'pause';

    let stop = document.createElement('button');
    stop.classList.add('btn');
    stop.classList.add('btn-primary');
    stop.innerHTML = 'stop';
    stop.id = 'stop';
    stop.setAttribute('onclick','stopTime()')

    btnsdiv.appendChild(pause);
    btnsdiv.appendChild(stop);
    btn.remove();

})

function stopTime(){
    console.log('stopped');

    let Clear = document.querySelector('.buttons');
    var child = Clear.lastElementChild;
    while (child) {
        Clear.removeChild(child);
        child = Clear.lastElementChild;
    }
    clearInterval(decreaseSec,1000);
    clearInterval(decreaseMin,60000);
    clearInterval(decreaseHour,3600000);
    console.log(copy);
    btnsdiv.append(copy);
    
}