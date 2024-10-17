import { useEffect, useState } from "react";
import Post from "./Post";


const AllPost = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/getPost")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPosts(data)
            })
    }, [])
    return (
        <div>
            {posts.length}
            <div className="grid grid-cols-2">
                {
                    posts.map(post => <Post post={post} key={post._id}></Post>)
                }
            </div>
        </div>
    );
};

export default AllPost;