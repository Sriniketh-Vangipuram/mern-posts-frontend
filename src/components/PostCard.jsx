function PostCard({
  post,
  onDelete
}) {

  console.log(post);
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl mb-8">

      {post.imageUrl && (
        <img  
         src={post.imageUrl}
         alt={post.title}
         width="200"
         className="w-full h-72 object-cover"
        />
      )}

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-3">
          {post.title}
        </h2>

        <p className="text-slate-400 leading-7">
          {post.content}
        </p>

        <button onClick={()=>onDelete(post._id)}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition"
          >
            Delete
          
          </button>
      </div>

    </div>
  );
}

export default PostCard;