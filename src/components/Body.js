import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import SinglePost from "./SinglePost";
const Body = () => {
  const appStore = createBrowserRouter([
    { path: "/", element: <Login /> },
    {
      path: "/posts",
      element: <Browse />,
    },
    {
      path: "/posts/:id", // Dynamic route for viewing a single post
      element: <SinglePost />, // Render the SinglePost component for dynamic ID
    },
  ]);

  return (
    <div>
      <RouterProvider router={appStore} />
    </div>
  );
};

export default Body;
