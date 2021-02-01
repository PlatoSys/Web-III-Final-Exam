class City {
    constructor(cityName){
        this.cityName = cityName;
    }

    async getWeather(){
        let response = await fetch(`http://api.weatherapi.com/v1/current.json?key=793b87fb703f4c79902152527210102&q=${this.cityName}`)
            .then(response => response.json())
            .then(data => this.render(data))
    }

    render(data){
        this.degree = data.current.temp_c;
        console.log(this.degree);
    }

    getDegree(){
        return this.degree;
    }

}

let citiesDiv = document.querySelector('#cities');

class App {
    constructor(){
        this.cities = new Set()
    }

    addCity(City){
        this.cities.add(City);
    }

    removeCity(City){

    }

    render(){
        let data = this.cities;
        data.forEach(element => {
            console.log(element);

            localStorage.setItem(`${element.cityName}`,JSON.stringify({'name':`${element.cityName}`,'degree':`${element.getDegree()}`}));

            let div = document.createElement('div');
            let h1 = document.createElement('h1');
            let x = document.createElement('button');
            div.id = `${element.cityName}`;

            x.classList.add('btn');
            x.classList.add('btn-primary');
            x.innerHTML = 'Delete';
            x.setAttribute('onclick', 'deletion(this)');
            h1.innerHTML = `${element.cityName} - ${element.getDegree()}`

            div.appendChild(h1);
            div.appendChild(x);

            citiesDiv.appendChild(div);
            console.log(localStorage);

        });
    }
}

let app = new App();
let btn = document.querySelector('#start');
btn.addEventListener('click',ev => {
    let cit = document.querySelector('.inputer');
    let div = document.createElement('div');
    let input = document.createElement('input');
    let button = document.createElement('button');

    input.classList.add('form-control');
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.innerHTML = 'Search';
    button.id = 'search';
    div.id ='inputer';
    div.appendChild(input);
    div.append(button);
    cit.appendChild(div);

    
    let searcher = document.querySelector('#search');

    searcher.addEventListener('click',ev => {
        let value = input.value;
        let inst = new City(value);
        inst.getWeather();
        app.addCity(inst);
        app.render();
        div.remove();
    })
})


function deletion(current){
    current.parentElement.remove();
    let name = current.parentElement.id;
    localStorage.removeItem(`${name}`);
}



(function () {
    keys = Object.keys(localStorage);
    for (let i = 0; i < localStorage.length; i++) {
        let data = JSON.parse(localStorage.getItem(keys[i]));
        console.log(data)
        let div = document.createElement('div');
        let h1 = document.createElement('h1');
        let x = document.createElement('button');
        div.id = `${data.name}`;

        x.classList.add('btn');
        x.classList.add('btn-primary');
        x.innerHTML = 'Delete';
        x.setAttribute('onclick', 'deletion(this)');
        h1.innerHTML = `${data.name} - ${data.degree}`

        div.appendChild(h1);
        div.appendChild(x);

        citiesDiv.appendChild(div);

    }
})();