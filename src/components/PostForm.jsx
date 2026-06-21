import { useState } from "react";

function PostForm({onAddPost}){
    const[title,setTitle]=useState("");
    const[content,setContent]=useState("");
    const[image,setImage] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();

        if(!title || !content)return;

        await onAddPost({
            title,content,image
        });

        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e)=>setTitle(e.target.value)}
            />

            <br/>

            <textarea
             placeholder="Content"
             value={content}
             onChange={(e)=>setContent(e.target.value)}
            />

            <br/>

            <input
            type="file"
            onChange={(e)=>setImage(e.target.files[0])}
            />

            <br/>
            <button> Create Post</button>
        </form>
    );
}

export default PostForm;