import { Request, Response, Router } from "express";
import { StarWars } from "../../controllers/starwars";


import  dotenv from "dotenv";


const starWars = Router();
dotenv.config()
const baseUrl = '/starwars';

const starWarsController = new StarWars();

/**
 * @route GET /
 * @desc base route
 */
starWars.get(`/`, async (req: Request, res: Response) => {
    res.send("hi welcome to starwars");
});

/**
 * @route GET /
 * @desc base route
 */
starWars.get(`${baseUrl}`, async (req: Request, res: Response) => {
    await starWarsController.getStarWarsPeople(req, res);
});

/**
 * @route GET /
 * @desc Get all the people
 */
starWars.get(`${baseUrl}/people`, async (req: Request, res: Response) => {
    await starWarsController.getStarWarsPeople(req, res);
})

/**
 * @route GET /
 * @desc Get person id
 */
starWars.get(`${baseUrl}/people/:id`,async (req: Request, res: Response) => {
   await starWarsController.getStarWarsPersonDetail(req, res);
});

/**
 * @route GET /
 * @desc search character by name
 */
starWars.get(`${baseUrl}/search/people/:name`,async (req: Request, res: Response) => {
    await starWarsController.searchPerson(req, res);
});



export default starWars;