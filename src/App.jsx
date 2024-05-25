import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import Footer from './components/Footer';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer/>
    </div>
  )
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children:[
      {
        path: "/",
        element: <HomePage />
      }
    ]

  }
]);

export {appRouter};
