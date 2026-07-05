import CourseModel from "../../(utils)/models/LinkModel"
import connectToDb from "../connect_to_db/connect_to_db"

export default async function searchSimilarByName(name: string){
    try {
        await connectToDb()
        const results = await CourseModel.find(
            {name: {$regex: name, $options: "i"}}
        ).lean()

        const filteredResults = results.map(
            (result) => ({
                ...result,
                _id: result._id.toString()
            })
        )

        return filteredResults
    } catch (e) {
        console.log("Error while searching similar by name ", e)
        return []
    }
}