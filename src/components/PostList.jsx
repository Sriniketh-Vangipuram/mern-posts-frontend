import PostCard from "./PostCard";

function PostList({
  posts,
  onDelete
}) {


  if(posts.length===0){

    return(

      <div className=" text-center text-gray-500 mt-10">

              No posts available.

            Create your first post!

      </div>

    )

  }

  return (
    <>
      {
        posts.map(post => (
          <PostCard
            key={post._id}
            post={post}
            onDelete={onDelete}
          />
        ))
      }
    </>
  );
}

export default PostList;