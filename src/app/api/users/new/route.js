

'use server'
import { connectToDB } from "../../../../../utils/database";
import userInfo from "../../../models/userinfo";



export const POST = async (request) => {
    const { name, email, password } = await request.json();
  
    try {
      await connectToDB();
  
      const user = new userInfo({ name, email, password });
      await user.save();
  
      return new Response(JSON.stringify(user), { status: 201 });
    } catch (error) {
      console.error("Error saving user:", error);
      return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
  };
  