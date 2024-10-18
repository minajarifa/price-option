import { 
    // useLoaderData,
     useParams } from "react-router-dom";


const PostDetails = () => {
    const post = useParams();
    console.log(post);
    return (
        <div>
            
        </div>
    );
};

export default PostDetails;