  import { model, models, Schema } from "mongoose";

  const ProductInfoSchema = new Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    variety: { type: String }, // Optional, only for fruits that have varieties
    season: { type: String, required: true },
    price: { type: Number, required: true }, // Use Number for price
    rating: { type: Number, required: true }, // Use Number for rating
    image: { type: String, required: true }
  });

  const Product = models.product || model("product", ProductInfoSchema);
  export default Product;