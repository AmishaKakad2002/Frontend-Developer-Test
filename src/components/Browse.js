import Header from "./Header";
import usePostsData from "../hooks/usePostsData";
import PostsList from "./PostsList";
import { useSelector } from "react-redux"

const Browse = () => {
  usePostsData();
  const postsList = useSelector((store) => store.posts?.postsData);
  return (
    <div>
      <Header />
      <div className="mt-20"> 
      <PostsList posts={postsList}/>
      </div>
    </div>
  );
};

export default Browse;
