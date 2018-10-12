export default class swapiService {

    _apiBase = 'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if(!res.ok) {
            throw new Error(`Не можно зафетчить ${url}`, `, recieved ${res.status}`)
        }
        return await res.json();
    }
    async getAllPeople() {
        const res =  await this.getResource(`/people/`);

        return res.results
    }
    getPerson(id) {
        return this.getResource(`people/${id}/`)
    }
}

const swapi = new swapiService();

swapi.getAllPeople().then((body) => console.log(body));
swapi.getPerson(4).then((body) => console.log(body));
