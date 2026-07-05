import { ICourse } from "../../(utils)/models/iCourse"
import CourseModel from "../../(utils)/models/LinkModel"
import connectToDb from "../connect_to_db/connect_to_db"

export async function searchForCodeCourse(courseCode: string) : Promise<ICourse[]> {
    try {
        await connectToDb()
        const results = await CourseModel.find(
            {courseCode: {$regex: courseCode, $options: "i"}}
        ).lean()

        const filteredResults = results.map((result) => ({
            ...result,
            _id: result._id.toString()
        }))
        
        return filteredResults
    } catch (e) {
        console.log("Errore", e)
        return []
    }
}