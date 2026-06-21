import { useEffect, useState } from "react";
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
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
        return (
            <div className="text-center mt-20">
                <h1 className="text-3xl font-bold">
                    Loading posts ...
                </h1>
            </div>
        )
    }

    if(error){
        return <h1>{error}</h1>;
    }
    return (
        <div className="max-w-5xl mx-auto px-5 py-10">

        <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-blue-500">
            MERN Posts 
        </h1>

        <p className="text-slate-400 mt-3">
            Share your thoughts with everyone
        </p>    

  </div>

  <PostForm onAddPost={handleAddPost}/>

  <PostList
    posts={posts}
    onDelete={handleDelete}
  />

</div>
    )
}

export default HomePage;