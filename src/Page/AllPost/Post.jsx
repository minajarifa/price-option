import PropTypes from 'prop-types';

const Post = ({post}) => {
    const {productName, productPhoto, price, size, color, material, inStock,useName,useEmail,usePhoto}=post;
    console.log(post)
    return (
        <div className='m-5 p-5 border'>
           
            <img src={productPhoto} alt="" />
            {productName}
            {price}
            {size}
            {color}
            {material}
            {inStock}
           <img src= {usePhoto} alt="" />
            {useEmail}
            {useName}
        </div>
    );
};
Post.propTypes={
 post:PropTypes.object
}

export default Post;