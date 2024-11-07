import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserPost = ({ post }) => {
    const { productName, productPhoto, price,_id 
        // , size, color, material, inStock, useName, useEmail, usePhoto
    } = post;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={productPhoto}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {price}$
                        <div className="badge badge-secondary">{productName}</div>
                    </h2>
                    <p>If a dress chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to={`/PostDetails/${_id}`} className="btn btn-outline btn-secondary">Details</Link>
                    <Link to={`/UpdatedPost/${_id}`} className="btn btn-outline btn-secondary">Update</Link>
                    <button className="btn btn-outline btn-secondary">Order Now</button>
                    <button className="btn btn-outline btn-secondary">delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
UserPost.propTypes = {
    post: PropTypes.object
}
export default UserPost;