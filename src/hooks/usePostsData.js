import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {addpostsData} from "../utils/postsSlice";

const usePostsData = () => {
  const dispatch = useDispatch();
  const getPostsData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await data.json();
    dispatch(addpostsData(json));
  };

  useEffect(() => {
    getPostsData();
  }, []);
};

export default usePostsData;