import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";
import UserPost from "./UserPost";

const UserPosts = () => {
    const{user}=useAuth();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/userPost/${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPosts(data)
        })
    },[user])
    return (
        <div>
         <p className="text-xl text-center p-10">  Total Number : {posts?.length}</p>
           <div className="grid grid-cols-3 gap-5">
           {
                posts.map(post=><UserPost key={post._id} post={post}></UserPost>)
            }
           </div>
        </div>
    );
};

export default UserPosts;