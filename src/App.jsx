import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Products from './components/Products';
import AllInOneLED from './components/AllInOneLED';
import FeaturesAllInOneLED from './components/FeaturesAllInOneLED';
import AllInOneLEDSpecifications from './components/AllInOneLEDSpecifications';
import AllInOneDownloads from './components/AllInOneDownloads';
import FlatPanelDisplay from './components/InteractiveFlatPanelDisplay';
import FlatPanelDisplayFeatures from './components/FlatPanelDisplayFeatures';
import FlatPanelDisplaySpecs from './components/FlatPanelDisplaySpecs';
import FlatPanelDisplayDownloads from './components/FlatPanelDispayDownloads';
import ActiveLEDDIsplay from './components/ActiveLEDDisplay';
import IndoorCabinets from './components/IndoorCabinets';
import OutdoorCabinets from './components/OutdoorCabinets';
import MenuComponent from './components/MenuComponent';
import ErrorElement from './components/ErrorElement';

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
      {
        path: "Flat-Panel-Display",
        element: <FlatPanelDisplay/>,
        children: [
          {
            path: "features",
            element: <FlatPanelDisplayFeatures />,
          },
          {
            path: "specifications",
            element: <FlatPanelDisplaySpecs />,
          },
          {
            path: "downloads",
            element: <FlatPanelDisplayDownloads />,
          },
        ]
      },
      {
        path: "Active-LED-Display",
        element: <ActiveLEDDIsplay />,
        children: [
          {
            path: "indoor-cabinets",
            element: <IndoorCabinets />,
          },
          {
            path: "outdoor-cabinets",
            element: <OutdoorCabinets />,
          }
        ]
      },
      {
        path: "menu-component",
        element: <MenuComponent/>
      },
    ],
  },
  {
    errorElement: <ErrorElement />,
  }
]);

export {appRouter};
