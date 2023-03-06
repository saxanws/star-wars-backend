import dotenv from "dotenv";
import axios from "axios";



dotenv.config()

export default class StarWarsApi {

    private baseUrl: any = "https://swapi.dev/api";

    constructor() {
        
    }

    // get all the people but the first page
    async getAllPeople(): Promise<any> {
        return await axios.get(`${this.baseUrl}/people`); 
    }

    // Get random people a random page
    async getRandomPeople(): Promise<any> {
        let pageNumber = Math.floor(Math.random() * 8) + 1;
        return await axios.get(`${this.baseUrl}/people/?page=${pageNumber}`); 
    }

    // Get person by URl
    async getPersonByUrl(personUrl: string): Promise<any> {
        return await axios.get(`${personUrl}`);
    }

    // get person buy id
    async getPersonById(id: any): Promise<any> {
        return await axios.get(`${this.baseUrl}/people/${id}/`);
    }

    // get species by the url
    async getSpeciesByUrl(specieUrl: string): Promise<any> {
        return await axios.get(`${specieUrl}`);
    }

    // Get species by ID
    async getSpeciesById(id: any): Promise<any> {
        return await axios.get(`${this.baseUrl}/species/${id}/`);
    }

    // get Film by url
    async getFilmByUrl(filmUrl): Promise<any> {
        return await axios.get(`${filmUrl}`);
    }

    // get film by ID
    async getFilmById(id: any): Promise<any> {
        return await axios.get(`${this.baseUrl}/films/${id}/`);
    }
    
    // Get starship by url
    async getStarShipByUrl(starShipUrl): Promise<any> {
        return await axios.get(`${starShipUrl}`);
    }

    // get starship by ID
    async getStarShipById(id: any): Promise<any> {
        return await axios.get(`${this.baseUrl}/starships/${id}/`);
    }

    // Search person by name
    async searchPerson(name: any): Promise<any> {
        return await axios.get(`${this.baseUrl}/people/?search=${name}`);
    }


}
