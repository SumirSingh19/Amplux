import { Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
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
