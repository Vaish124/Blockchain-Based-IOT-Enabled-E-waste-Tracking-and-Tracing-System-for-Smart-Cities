import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './index.css';
import Login from './views/Login/Login';
import Signup from './views/Signup/Signup';
import Home from './views/Home/Home';
import Manufacturer from './views/Manufacturer/Manufacturer';
import Retailer from './views/Retailer/Retailer';
import Consumer from './views/Consumer/Consumer';
import Contractor from './views/Contractor/Contractor';
import Center from './views/Center/Center';
import WasteBin from './views/WasteBin/WasteBin';
import RecyclingPlant from './views/RecyclingPlant/RecyclingPlant';
import DataUnit from './views/DataUnit/DataUnit';
import ContactCard from './views/ContactCard/ContactCard';
import Buy from './views/Buy/Buy'
import Orders from './views/Orders/Orders';
import CertificateGenerator from './views/CertificateGenerator/CertificateGenerator';
import Certificate from './views/Certificate/Certificate';
import CreateProduct from './views/CreateProduct/CreateProduct';
 import CreateProductBuy from './views/CreateProductBuy/CreateProductBuy';
 import HomeConsumer from './views/HomeConsumer/HomeConsumer';
 import CreatingOrder from './views/CreatingOrder/CreatingOrder';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: '/home',
    element: <Home/>
  },{
   path:"/homeconsumer",
   element:<HomeConsumer/>
  },
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/manufacturer',
    element: <Manufacturer />
  },
  {
    path: '/retailer',
    element: <Retailer />
  },
  {
    path:"/creatingOrder",
    element:<CreatingOrder/>
  },
  {
    path: '/consumer',
    element: <Consumer/>
  },
  {
    path: '/contractor',
    element: <Contractor/>
  },
  {
    path: '/center',
    element: <Center/>
  },
  {
    path: '/wasteBin',
    element: <WasteBin/>
  },
  {
    path: '/recyclingPlant',
    element: <RecyclingPlant/>
  },
  {
    path: '/dataUnit',
    element: <DataUnit/>
  },
  {
    path:'/contactcard',
    element:<ContactCard/>
  },
  {
    path:'/Buy/:_id',
    element:<Buy/>
  },
  {
    path:'/CreateProductBuy/:_id',
    element:<CreateProductBuy/>
  },
  {
    path:"/orders",
    element: <Orders/>
  },
  {
    path:"/certificategenerator",
    element:<CertificateGenerator/>
  },
  {
    path:"/certificate",
    element:<Certificate/>
  }
])

root.render(<RouterProvider router={router} />);


