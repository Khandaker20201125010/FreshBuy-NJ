import { connectToDB } from "../../../../../utils/database";
import Product from "../../../models/product";

export const PATCH = async (request, { params }) => {
    const { name, category, variety, season, price, rating, image } = await request.json();

    // Log received data for debugging
    console.log("Received data:", { name, category, variety, season, price, rating, image });

    try {
        await connectToDB();
        const existingProduct = await Product.findById(params.id);
        
        if (!existingProduct) {
            return new Response(JSON.stringify({ message: "Product not found" }), { 
                status: 404, 
                headers: { "Content-Type": "application/json" } 
            });
        }

        // Update product fields
        existingProduct.name = name;
        existingProduct.category = category;
        existingProduct.variety = variety;
        existingProduct.season = season;
        existingProduct.price = price;
        existingProduct.rating = rating;
        existingProduct.image = image;

        await existingProduct.save();

        return new Response(JSON.stringify({ message: "Product updated successfully" }), { 
            status: 200, 
            headers: { "Content-Type": "application/json" } 
        });
    } catch (error) {
        console.error('Error updating product:', error.message, error); // Log error details
        return new Response(JSON.stringify({ message: "Error updating data" }), { 
            status: 500, 
            headers: { "Content-Type": "application/json" } 
        });
    }
};
