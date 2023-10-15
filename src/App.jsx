import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './routes/unauthorized/Login';
import ForgotPassword from './routes/unauthorized/ForgotPassword';
import Signup from './routes/unauthorized/Signup';
import Home from './routes/authorized/Home';
import ResetPassword from './routes/unauthorized/ResetPassword';
import Post from './routes/authorized/Post';
import Profile from "./routes/authorized/Post";
import Settings from "./routes/authorized/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/forgotpassword',
    element: <ForgotPassword />
  },
  {
    path: '/resetpassword',
    element: <ResetPassword />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/post',
    element: <Post />
  },
  {
    path: '/profile',
    element: <Profile />
  },
  {
    path: '/settings',
    element: <Settings />
  }
]);

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
