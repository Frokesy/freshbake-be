import { AnimatePresence } from "framer-motion"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AdminDashboard from "./pages/dashboard";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminDashboard />,
    },
    // {
    //   path: "/admin/all-orders",
    //   element: <AllOrders />,
    // },
    // {
    //   path: "/admin/all-products",
    //   element: <AllProducts />,
    // },
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
