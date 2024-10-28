'use server'

import { connectToDB } from "../../../../utils/database";
import Product from "../../models/product";


export const POST = async (request) => {
    const { name, category, variety, season, price, rating, image } = await request.json();

    try {
        await connectToDB();
        const product = new Product({ name, category, variety, season, price, rating, image });
        await product.save();
        return new Response(JSON.stringify(product), { status: 201 });
    } catch (error) {
        console.error("Error saving product:", error);
        return new Response(JSON.stringify({ message: error.message }), { status: 500 });
    }
};
