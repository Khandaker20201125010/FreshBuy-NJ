import { connectToDB } from "../../../../utils/database";
import Product from "../../models/product";


export const GET = async (request, { params }) => {
    try {
      // Connect to the database
      await connectToDB();
  
      // Find a single product by ID
      const product = await Product.findOne({ _id: params.id });
  
      // Check if the product exists
      if (!product) {
        return new Response(JSON.stringify({ message: "Product not found" }), {
          status: 404,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      // Return the product data if found
      return new Response(JSON.stringify(product), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error fetching product data:", error);
      return new Response(JSON.stringify({ message: "Failed to fetch product data" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  };
