import Candidate from "@models/Candidate";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    // console.log(request.json().userName+ "request here");
    const { userId, userName, position,userEmail,experience,location,employment,department,telephone } = await request.json();
 // Set cache-control header to prevent caching
//  request.setHeader("Cache-Control", "no-store");
    try {
        await connectToDB();
        const newCandidate = new Candidate({ creator: userId, userName, position, userEmail,experience,location,employment,department,telephone });

        await newCandidate.save();
        return new Response(JSON.stringify(newCandidate), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new Candidate", { status: 500 });
    }
}
