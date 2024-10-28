import { connectToDB } from "../../../../utils/database";
import Product from "../../models/product";

export const GET = async (request) => {
    try {
      await connectToDB ();
      const product = await Product.find({})
      return new Response(JSON.stringify(product), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  
    } catch (error) {
      console.error("Error fetching data:", error);
      return new Response("Failed to fetch data ", { status: 500 ,headers: { 'Content-Type': 'application/json' } });
    }
  };