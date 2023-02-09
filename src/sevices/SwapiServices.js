export default class SwapiSevice {
    _apiBase = 'https://swapi.dev/api/'

    async getResourse(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok) {
            throw new Error(`Не получилось получить данные с ${url}. Код ошибки ${res.status}`)
        }
        return await res.json();
    }

    getAllPeople = async () => {
        const peoples = await this.getResourse('people/')
        return peoples.results.map(el => this._transformPerson(el))
    }

    getPerson = async (id) => {
        const person = await this.getResourse(`people/${id}/`)
        return this._transformPerson(person)
    }

    getAllPlanets = async () => {
        const people = await this.getResourse('planets/')
        return people.results.map(el => this._transformPlanet(el))
    }

    getPlanet = async (id) => {
        const planet = await this.getResourse(`planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const straships = await this.getResourse('starships/')
        return straships.results.map(el => this._transformStarship(el))
    }

    getStarship = async (id) => {
        const starship = await this.getResourse(`starships/${id}/`)
        return this._transformStarship(starship)
    }
    getAllFilms = async () => {
        const films = await this.getResourse('films/')
        return films.results.map(el => this._transformFilm(el))
    }

    getFilm = async (id) => {
        const film = await this.getResourse(`films/${id}/`)
        return this._transformFilm(film)
    }

    getId(url) {
        const idRegExp = /\/([0-9]*)\/$/
        return url.match(idRegExp)[1]
    }

    _transformPlanet(data) {
        return {
            id: this.getId(data.url),
            name: data.name,
            population: data.population,
            rotationPeriod: data.rotation_period,
            diameter: data.diameter
        }
    }

    _transformPerson(person) {
        return {
            id: this.getId(person.url),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            height: person.height,
            mass: person.mass
        }
    }

    _transformStarship(data) {
        return {
            id: this.getId(data.url),
            name: data.name,
            model: data.model,
            manufacturer: data.manufacturer,
            costInCredits: data.cost_in_credits,
            length: data.length,
            crew: data.crew,
            passengers: data.passengers,
            cargoCopacity: data.cargo_capacity
        }
    }
    _transformFilm(data){
        return{
            id:this.getId(data.url),
            title : data.title,
            producer : data.producer,
            releaseDate : data.release_date,
            characters : data.characters,
            episode : data.episode_id,
            openingСrawl: data.opening_crawl
        }
    }

}