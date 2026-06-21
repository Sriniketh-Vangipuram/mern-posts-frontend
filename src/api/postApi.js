export async function getPosts() {
    const response=await fetch(`${import.meta.env.VITE_API_URL}/posts`);

    if(!response.ok){
        throw new Error("Failed to fetch posts");
    }

    const data=response.json();
    return data;
}

export async function createPost(post){
    const formData=new FormData();

    formData.append("title",post.title);
    formData.append("content",post.content);
    
    if(post.image){
        formData.append("image",post.image);
    }

    const response=await fetch(`${import.meta.env.VITE_API_URL}/posts`,{
        method:"POST",
        body:formData
    });

    if(!response.ok){
        throw new Error("Failed to create post");
    }

    return response.json();
}

export async function deletePost(id){
    const response=await fetch(
            `${import.meta.env.VITE_API_URL}/posts/${id}`,{
                method:"DELETE"
            }
    );

    if(!response.ok){
        throw new Error("failed to delete post");
    }
}