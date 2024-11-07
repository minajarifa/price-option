import axios from 'axios';
// import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import useAuth from '../../Hooks/useAuth/useAuth';


const UpdatedPost = () => {
    const {user}=useAuth();
    console.log(user);
    const post = useLoaderData();
    console.log("post",post);
    const handleUpdatedSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const productPhoto = form.productPhoto.value;
        const price = form.price.value;  
        const size = form.size.value;
        const color = form.color.value;
        const material = form.material.value;
        const inStock = form.inStock.value;
        const users = { productName, productPhoto, price, size, color, material, inStock };
        console.log('handleAddSubmit', users);
        // fetch(`http://localhost:5000/updated`, {
        //     method: "PUT",
        //     headers: { "Content-type": "application/json" },
        //     body: JSON.stringify(users),
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //     }); 
        try {
            const { data } = await axios.put(`http://localhost:5000/updated/${post?._id}`,users);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <div className="hero-content ">
                <div className="card bg-base-100 w-full shadow-2xl">
                    <form
                        onSubmit={()=>handleUpdatedSubmit(post._id)}
                        className="card-body">
                        <div className=" grid-cols-2">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Product Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" defaultValue={post?.productName} name="productName" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" placeholder="Photo URL" className="input input-bordered" name="productPhoto" defaultValue={post?.productPhoto} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input type="text" placeholder="price" className="input input-bordered" name="price" defaultValue={post?.price} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Size</span>
                                </label>
                                <input type="text" placeholder="Size" className="input input-bordered" name="size" defaultValue={post?.size} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Color</span>
                                </label>
                                <input type="text" placeholder="Color" className="input input-bordered" name="color" defaultValue={post?.color} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Material</span>
                                </label>
                                <input type="text" placeholder="Material" className="input input-bordered" name="material" defaultValue={post?.material} required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">In Stock</span>
                                </label>
                                <input type="text" placeholder="inStock(true/false)" className="input input-bordered" name="inStock" defaultValue={post?.inStock} required />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Update Product</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default UpdatedPost;