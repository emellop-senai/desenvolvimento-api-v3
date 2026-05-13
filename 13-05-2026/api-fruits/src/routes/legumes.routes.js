import express from 'express'
import { legumesService } from '../services/legumes.service.js'

export const legumesRoute = express.Router()

legumesRoute.get("/", async (req, res) => {
    const legumes = await legumesService.getAll()

    res.json(legumes)
})