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
  <form
    onSubmit={handleSubmit}
    className="
      bg-slate-900
      border border-slate-800
      rounded-2xl
      shadow-xl
      p-6
      mb-8
      space-y-4
    "
  >
    <h2 className="text-2xl font-bold text-white">
      Create a Post
    </h2>

    <input
      type="text"
      value={title}
      placeholder="Title"
      onChange={(e) => setTitle(e.target.value)}
      className="
        w-full
        bg-slate-800
        border border-slate-700
        rounded-xl
        p-3
        text-white
        placeholder-slate-400
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />

    <textarea
      value={content}
      placeholder="Content"
      onChange={(e) => setContent(e.target.value)}
      className="
        w-full
        bg-slate-800
        border border-slate-700
        rounded-xl
        p-3
        h-32
        text-white
        placeholder-slate-400
        outline-none
        focus:ring-2
        focus:ring-blue-500
      "
    />

    <div className="space-y-2">
  <label className="text-slate-300 font-medium">
    Upload Image
  </label>

  <label
    className="
      flex
      items-center
      justify-center
      w-full
      h-28
      border-2
      border-dashed
      border-slate-700
      rounded-xl
      cursor-pointer
      bg-slate-800
      hover:border-blue-500
      transition
    "
  >
    <input
      type="file"
      className="hidden"
      onChange={(e) => setImage(e.target.files[0])}
    />

    <div className="text-center">
      <p className="text-slate-300 font-medium">
        Choose an image
      </p>

      <p className="text-sm text-slate-500 mt-1">
        PNG, JPG, JPEG
      </p>
    </div>
  </label>

  {image && (
    <p className="text-green-400 text-sm">
      Selected: {image.name}
    </p>
  )}
</div>

    <button
      className="
        bg-blue-600
        hover:bg-blue-700
        px-5
        py-3
        rounded-xl
        text-white
        font-medium
        transition
      "
    >
      Create Post
    </button>
  </form>
);
}

export default PostForm;