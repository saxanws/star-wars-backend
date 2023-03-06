import starWars from "./star-wars";
import { Router } from "express";

const router = Router();


// unite all the router here
router.use(starWars);



// export router
export default router;