import { RouterProvider, createBrowserRouter } from "react-router-dom";

// use index.js to import all the components in the pages folder
import {
  HomeLayout,
  Register,
  Login,
  DashboardLayout,
  Landing,
  Error,
} from "./pages";

//import single component directly from React JavaScript XML
//import HomeLayout from "./pages/HomeLayout";

//use createBrowserRouter to create a router object
const router = createBrowserRouter([
  {
    //use parent and child routes to nested the routes
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      //use index: true to set the default home page, because now home page only have navbar
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

const App = () => {
  //pass the router object to the RouterProvider
  return <RouterProvider router={router} />;
};
export default App;
