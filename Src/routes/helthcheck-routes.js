import {response, Router} from "express";
import healthcheck from "../controllrs/helthcheck-controllers.js";
const router = Router();
router.route("/").get(healthcheck)
response.getHeader()
export default router;