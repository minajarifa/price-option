import {
    useLoaderData,
} from "react-router-dom";


const PostDetails = () => {
    // const post = useParams();
    // console.log(post);
    const postDetail = useLoaderData();
    const { productName, productPhoto, price, size, color, material, inStock, useName, useEmail, usePhoto} = postDetail;
    console.log(postDetail);
    return (
        <div className="flex justify-center items-center">
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img className="object-cover h-full w-full" src={productPhoto} alt="Article" />
                <div className="p-6">
                    <div>
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Product</span>
                        <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">I Built A Successful Blog In One Year</a>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Molestie parturient et sem ipsum volutpat vel. Natoque sem et aliquam mauris egestas quam volutpat viverra. In pretium nec senectus erat. Et malesuada lobortis.</p>
                    </div>
                    <div>
                        <p>productName: {productName}</p>
                        <p>Price: {price}</p>
                        <p>Color: {color}</p>
                        <p>Size: {size}</p>
                        <p>Material: {material}</p>
                        <p>InStock: {inStock}</p>
                    </div>
                    <div className="mt-4">
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="object-cover h-10 rounded-full" src={usePhoto} alt="Avatar" />
                                <a href="" className="mx-2 font-semibold text-gray-700 dark:text-gray-200" tabIndex="0" role="link">User Name: {useName}</a>
                                <p>User Email: {useEmail}</p>
                            </div>
                            <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">21 SEP 2015</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};
export default PostDetails;