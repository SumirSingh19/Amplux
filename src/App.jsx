// appRouter.js
import { Navigate, Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Products from './components/Products';
import AllInOneLED from './components/AllInOneLED';
import FeaturesAllInOneLED from './components/FeaturesAllInOneLED';
import AllInOneLEDSpecifications from './components/AllInOneLEDSpecifications';
import AllInOneDownloads from './components/AllInOneDownloads';

const AppLayout = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "All-In-One-LED",
        element: <AllInOneLED />,
        children: [
          {
            path: "",
            element: <Navigate to="features" />,
          },
          {
            path: "features",
            element: <FeaturesAllInOneLED />,
          },
          {
            path: "specifications",
            element: <AllInOneLEDSpecifications />,
          },
          {
            path: "downloads",
            element: <AllInOneDownloads />,
          },
        ],
      },
    ],
  },
]);

export {appRouter};
