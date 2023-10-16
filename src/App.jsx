import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom';
import Login from './routes/unauthorized/Login';
import ForgotPassword from './routes/unauthorized/ForgotPassword';
import Signup from './routes/unauthorized/Signup';
import Home from './routes/authorized/Home';
import ResetPassword from './routes/unauthorized/ResetPassword';
import Post from './routes/authorized/Post';
import Profile from './routes/authorized/Profile';
import Settings from './routes/authorized/Settings';
import Sidebar from './ui/Sidebar';

const router = createBrowserRouter(createRoutesFromChildren(
  <>
    <Route
      path="/"
      element={<Login />}
    />
    <Route
      path="/signup"
      element={<Signup />}
    />
    <Route
      path="/forgotpassword"
      element={<ForgotPassword />}
    />
    <Route
      path="/resetpassword"
      element={<ResetPassword />}
    />
    <Route element={<Sidebar />}>
      <Route
        path="/home"
        element={<Home />}
      />
      <Route
        path="/post"
        element={<Post />}
      />
      <Route
        path="/profile"
        element={<Profile />}
      />
      <Route
        path="/settings"
        element={<Settings />}
      />
    </Route>
  </>
));

const App = () => {

  return (
    <RouterProvider router={router} />
  );
};

export default App;
