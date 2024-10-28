import { connectToDB } from "../../../../../utils/database";
import Product from "../../../models/product";
import mongoose from "mongoose";

export const DELETE = async (request, { params }) => {
    console.log("Received DELETE request for ID:", params.id); // Log the ID being deleted
    try {
        await connectToDB(); // Connect to the database
        const { id } = params; // Extract ID from params
        const deletedProduct = await Product.findByIdAndDelete(id); // Delete the product

        if (!deletedProduct) {
            console.log("No product found with ID:", id); // Log if no product is found
            return new Response(JSON.stringify({ message: "Product not found" }), {
                status: 404,
                headers: { "Content-Type": "application/json" },
            });
        }

        console.log("Product deleted:", deletedProduct); // Log successful deletion
        return new Response(JSON.stringify({ message: "Product deleted successfully" }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error deleting product:", error); // Log any errors
        return new Response(JSON.stringify({ message: "Failed to delete product" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
};


  // pages/api/products/[id].js


  export const PATCH = async (request, { params }) => {
    const { name, category, variety, season, price, rating, image } = await request.json();
    try {
        await connectToDB();
        const existingProduct = await Product.findById(params.id);
        if (!existingProduct) {
            return new Response(JSON.stringify({ message: "Product not found" }), { status: 404, headers: { "Content-Type": "application/json" } });
        }
        // Update product fields
        existingProduct.name = name;
        //... other fields
        await existingProduct.save();
        return new Response(JSON.stringify({ message: "Product updated successfully" }), { status: 200, headers: { "Content-Type": "application/json" } });
    } catch (error) {
        console.error('Error updating product:', error);
        return new Response(JSON.stringify({ message: "Error updating data" }), { status: 500, headers: { "Content-Type": "application/json" } });
    }
};



