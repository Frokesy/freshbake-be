import { AnimatePresence } from "framer-motion"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AdminDashboard from "./pages/dashboard";
import AllOrders from "./pages/orders";
import AllProducts from "./pages/products";

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
      path: "/admin/all-orders",
      element: <AllOrders />,
    },
    {
      path: "/admin/all-products",
      element: <AllProducts />,
    },
    // {
    //   path: "/admin/admin-profile",
    //   element: <AdminProfile />,
    // },
    // {
    //   path: "/admin/users-info",
    //   element: <UserInfo />,
    // },
    // {
    //   path: "/admin/admin-details",
    //   element: <AdminDetails />,
    // },
    // {
    //   path: "/admin/customer-service",
    //   element: <AdminPanel />
    // }
  ]);

  return (
    <AnimatePresence>
    <RouterProvider router={router} />
  </AnimatePresence>
  )
}

export default App
