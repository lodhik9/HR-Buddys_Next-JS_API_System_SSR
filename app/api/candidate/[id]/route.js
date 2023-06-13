import Candidate from "@models/candidate";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Candidate.findById(params.id).populate("creator");
    if (!prompt) return new Response("Candidate Not Found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Internal Server Error", { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const {
    userName,
    position,
    userEmail,
    experience,
    location,
    employment,
    department,
    telephone,
  } = await request.json();
  try {
    await connectToDB();

    // Find the existing prompt by ID
    const existingPrompt = await Candidate.findById(params.id);

    if (!existingPrompt) {
      return new Response("Candidate not found", { status: 404 });
    }

    // Update the prompt with new data
    existingPrompt.userName = userName;
    existingPrompt.position = position;
    existingPrompt.userEmail = userEmail;
    existingPrompt.experience = experience;
    existingPrompt.location = location;
    existingPrompt.employment = employment;
    existingPrompt.department = department;
    existingPrompt.telephone = telephone;

    await existingPrompt.save();

    return new Response("Successfully updated the Prompts", { status: 200 });
  } catch (error) {
    return new Response("Error Updating Prompt", { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    // Find the prompt by ID and remove it
    await Candidate.findByIdAndRemove(params.id);

    return new Response("Prompt deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting prompt", { status: 500 });
  }
};
