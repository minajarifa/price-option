import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import ErrorPage from './Page/ErrorPage/ErrorPage.jsx';
import Home from './Page/Home/Home.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import LineCharts from './Page/LineCharts/LineCharts.jsx';
import AddPost from './Page/AddPost/AddPost.jsx';
import PrivateRouter from './Page/PrivateRoute/PrivateRoute.jsx';
import AllPost from './Page/AllPost/AllPost.jsx';
import UserPosts from './Page/UserPosts/UserPosts.jsx';
import PostDetails from './Page/AllPost/PostDetails.jsx';
import UpdatedPost from './Page/UserPosts/UpdatedPost.jsx';
import ClientPost from './Page/ClientPost/ClientPost.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/Login",
        element: <Login />,
      }, {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/LineCharts",
        element: <LineCharts />,
      },
      {
        path: "/AddPost",
        element: <PrivateRouter>
          <AddPost />
        </PrivateRouter>,
      },
       {
        path: "/UserPosts",
        element: <PrivateRouter>
          <UserPosts/>
        </PrivateRouter>,
      },
       {
        path: "/AllPost",
        element: 
          <AllPost />
        ,
      },
      {
        path: "/ClientPost",
        element: 
          <ClientPost />
        ,
      },
      {
        path: "/PostDetails/:id",
        element: 
          <PostDetails />
        ,
        loader:({params})=>fetch(`http://localhost:5000/getPost/${params.id}`)
      }, 
      {
        path: "/UpdatedPost/:id",
        element: <PrivateRouter>

          <UpdatedPost />
        </PrivateRouter>
        ,
        loader:({params})=>fetch(`http://localhost:5000/getPost/${params.id}`)
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
