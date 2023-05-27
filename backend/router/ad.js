import express from "express";
import { createAd, deleteAd, getAd, getAllAd } from "../controller/ad.js";

const routerAd = express.Router();

routerAd.route("/").get(getAllAd).post(createAd).delete(deleteAd);

routerAd.route("/:id").get(getAd);

export default routerAd;
