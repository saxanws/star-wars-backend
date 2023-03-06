import { Request, Response } from "express";
import dotenv from "dotenv";
// import  {StarWarsApi} from "../services";
import  {StarWarsApi} from "../services";



dotenv.config()

export class StarWars {
    private starWarsService!: StarWarsApi;
    
    constructor() {
       this.starWarsService = new StarWarsApi();
    };

    /**
     * This function Get all the people 
     * @param req 
     * @param res 
     */
    public async getStarWarsPeople(req: Request, res: Response): Promise<void> {
        try {
            const people = await this.starWarsService.getRandomPeople();
            let results = people.data.results;
            results.map(el => {
                let id = el.url.split("/")[5];
                el.id = id;

            })
            res.status(200).send(results);
        } catch (error) {
            
        }
    }
    /**
     * This function Get all the people 
     * @param req 
     * @param res 
     */
    public async getStarWarsPersonDetail(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id;

            let person = await this.starWarsService.getPersonById(id);

            person.data.id = person.data.url.split("/")[5];

            
            if(person.data.species.length !== 0) {
                let specie = await this.starWarsService.getSpeciesByUrl(person.data.species[0]);
                person.data.species = specie.data;
            } else {
                person.data.species = null;
            }

            if(person.data.starships.length !== 0) {
                let starships: any = [];
                starships = await Promise.all(person.data.starships.map( async (el) => {
                    let ship = await this.starWarsService.getStarShipByUrl(el);
                    ship.data.id = ship.data.url.split("/")[5];
                    return ship.data
                }));

                person.data.starships = starships;
            }

            if(person.data.films.length !== 0) {
                let films: any = [];
                films = await Promise.all(person.data.films.map( async (el) => {
                    let film = await this.starWarsService.getFilmByUrl(el);
                    film.data.id = film.data.url.split("/")[5];
                    return film.data
                }));

                person.data.films = films;
            }

            res.send(person.data);
           
        } catch (error) {
            
        }
    }

    /**
     * This function Search person 
     * @param req 
     * @param res 
     */
    public async searchPerson(req: Request, res: Response): Promise<void> {
        try {
            const name = req.params.name;

            let people = await this.starWarsService.searchPerson(name);
            let results = people.data.results;
            results.map(el => {
                let id = el.url.split("/")[5];
                el.id = id;
            })
            res.status(200).send(results);

        } catch( error) {

        }
    }
}