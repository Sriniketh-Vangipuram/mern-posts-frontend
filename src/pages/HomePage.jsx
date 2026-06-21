import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/postForm";
import {getPosts,createPost,deletePost} from "../api/postApi";

function HomePage(){
    const[posts,setPosts]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error,setError]=useState("");

    useEffect(()=>{
        const fetchData=async function fetchPosts(){
            try{
                setLoading(true);
                const data=await getPosts();
                setPosts(data);
            }
            catch(err){
                setError(err.message);
            }
            finally{
                setLoading(false);
            }
        }

        fetchData();
    },[]);


    async function handleAddPost(post){
        try{
            const newPost=await createPost(post);

            setPosts(prev=>[
                newPost,
                ...prev
            ]);
        }
        catch(err){
            setError(err.message);
        }
    }

    async function handleDelete(id){
        try{
            await deletePost(id);
            setPosts(prev=>
                prev.filter(
                    post=>post._id!==id
                )
            );
        }
        catch(err){
            setError(err.message);
        }
    }

    if(loading){
        return <h1>Loading...</h1>;
    }

    if(error){
        return <h1>{error}</h1>;
    }
    return (
        <div>
            <h1>Posts</h1>
            <PostForm onAddPost={handleAddPost}/>
            <br/>
            <PostList posts={posts} onDelete={handleDelete}/>
        </div>
    )
}

export default HomePage;