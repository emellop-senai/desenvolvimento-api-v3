import { pool } from "../config/db.js"

class LegumesService {
    async getAll() {
        try {
            const res = await pool.query("SELECT * FROM public.legumes")

            return res.rows
        } catch (error) {
            console.error(error)
        }
    }

}

export const legumesService = new LegumesService()