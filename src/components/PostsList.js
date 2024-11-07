const PostsList = ({ posts }) => {
    if (!posts || posts.length === 0) {
        return <div className="text-center text-gray-600">No posts available</div>;
      }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-slate-800">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
              <p className="text-gray-600 mt-2">{post.body}</p>
            </div>
            
          </div>
        ))}
      </div>
    );
  };
  
  export default PostsList;
  