import { Router } from "express";
import { GetFileNamesFromExternalAPI } from "../../application/files/search/GetAllFilesNameFromExternalAPI.js";

const filesRoutes = Router()

filesRoutes.get('/', (req, res) => GetFileNamesFromExternalAPI(req, res))

export { filesRoutes }