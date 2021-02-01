function fetchData(){
    return fetch(`https://randomuser.me/api/`)
        .then(response => response.json())
        // .the/n(data => console.log(data));
}


// It had problem to fetch 10 so i put 2 for convenience, 
// sorry for bad display couldn't find them on bootstrap;

async function responsed(){
    for(let i=0;i<2;i++){
        const response = await fetchData();
        console.log(response.results[0]);


        let cont = document.querySelector('.container');
        let main = document.createElement('div');
        let img = document.createElement('div');
        let imgs = document.createElement('img');
        let firstname = document.createElement('div');
        let lastname = document.createElement('div');
        let dob = document.createElement('div');
        let account = document.createElement('div');
        let something = document.createElement('div');
        let copy = document.createElement('div');
        let btn = document.createElement('button');

        main.setAttribute('json', JSON.stringify(response.results[0]));
        main.classList.add('main');
        img.classList.add('img');
        firstname.classList.add('firstname');
        btn.classList.add('btn');
        btn.classList.add('btn-primary');

        btn.innerHTML = 'Copy';

        account.innerHTML = response.results[0].email;
        imgs.src = response.results[0].picture.thumbnail;
        firstname.innerHTML = response.results[0].name.first;
        lastname.innerHTML = response.results[0].name.last;
        dob.innerHTML = response.results[0].dob.date;
        account.innerHTML = response.results[0].phone;
        something.innerHTML = response.results[0].email;
        btn.setAttribute('onclick','Copy(this)');
        btn.type = 'button';

        img.appendChild(imgs);
        main.appendChild(img);
        main.appendChild(firstname);
        main.appendChild(lastname);
        main.appendChild(dob);
        main.appendChild(something);
        main.appendChild(account);
        copy.appendChild(btn);
        main.appendChild(copy)
        cont.appendChild(main);
        
    }

}

responsed();


function Copy(current) { 
      
    let parent = current.parentElement.parentElement;
    let text = parent.getAttribute('json');
    console.log(text);
    let elem = document.createElement('input');
    elem.value = text;
    elem.select();
    elem.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + elem.value);
}

