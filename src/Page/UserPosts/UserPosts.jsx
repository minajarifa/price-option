import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth/useAuth";

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
            {posts.length}
        </div>
    );
};

export default UserPosts;