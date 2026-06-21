function PostCard({
  post,
  onDelete
}) {

  console.log(post);
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        marginBottom: "20px"
      }}
    >
      <h2>{post.title}</h2>

      <p>{post.content}</p>

      {post.imageUrl && (
        <img  
         src={post.imageUrl}
         alt={post.title}
         width="200"
        />
      )}

      <br/>

      <button
        onClick={() =>
          onDelete(post._id)
        }
      >
        Delete
      </button>

    </div>
  );
}

export default PostCard;