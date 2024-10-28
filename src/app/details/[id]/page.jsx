
import Image from "next/image";
import { getDetails } from "../../../services/getDetails";


const Page = async ({ params }) => {
    const { id } = params; // Access params directly
    console.log("Fetching details for ID:", id); // Debugging line
    const details = await getDetails(id);
    const { name, category, variety, season, price, image, rating } = details;

    return (
        <div className="container mx-auto">
            <div className="card card-side bg-base-100 shadow-xl">
                <figure>
                    <Image className="w-96" src={image} alt={name} width={400} height={300} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{category}</p>
                    <div className="flex justify-between">
                        <p>{season}</p>
                        <p>{variety}</p>
                    </div>
                    <div className="flex justify-between">
                        <p>${price}</p>
                        <p>{rating}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-success w-40">ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
