import { AnimatePresence } from "framer-motion"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AdminDashboard from "./pages/dashboard";
import AllOrders from "./pages/orders";
import AllProducts from "./pages/products";
import AdminProfile from "./pages/profile";
import UserInfo from "./pages/user-info";
import AdminDetails from "./pages/details";
import AdminPanel from "./pages/customer-service";

export interface UserDataProps {
  created_at: string;
  defaultAddress: string;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  phone: string;
  userId: string;
  password?:string;
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminDashboard />,
    },
    {
      path: "/orders",
      element: <AllOrders />,
    },
    {
      path: "/products",
      element: <AllProducts />,
    },
    {
      path: "/admin-profile",
      element: <AdminProfile />,
    },
    {
      path: "/user-info",
      element: <UserInfo />,
    },
    {
      path: "/admin-details",
      element: <AdminDetails />,
    },
    {
      path: "/customer-service",
      element: <AdminPanel />
    }
  ]);

  return (
    <AnimatePresence>
    <RouterProvider router={router} />
  </AnimatePresence>
  )
}

export default App
