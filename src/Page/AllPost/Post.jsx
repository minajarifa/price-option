import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { productName, productPhoto, price,_id} = post;
    console.log(post)
    return (
        <div className='m-5 p-5'>
            {/*  */}
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src={productPhoto}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {productName}
                        <div className="badge badge-secondary">{price}$</div>
                    </h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <Link to={`/PostDetails/${_id}`} className="btn btn-outline btn-secondary">Details</Link>
                    </div>
                </div>
            </div>
            {/*  */}
        </div>
    );
};
Post.propTypes = {
    post: PropTypes.object
}

export default Post;