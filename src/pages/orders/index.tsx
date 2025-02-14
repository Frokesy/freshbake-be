import { NavLink } from "react-router-dom";
import { ArrowLeft } from "../../components/icons";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { OrderItemProps } from "../dashboard";
import { UserDataProps } from "../../App";
import NewOrders from "../../components/orders/NewOrders";
import CompleteOrders from "../../components/orders/CompleteOrders";
import Container from "../../components/defaults/Container";
import { pb } from "../../../utils/pocketbaseCient";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const AllOrders = () => {
  const [activeTab, setActiveTab] = useState<string>("newOrders");
  const [orderItems, setOrderItems] = useState<OrderItemProps[]>([]);
  const [users, setUsers] = useState<UserDataProps[]>([]);
  const [ordersWithUsers, setOrdersWithUsers] = useState<
    { order: OrderItemProps; user: UserDataProps | undefined }[]
  >([]);

  const getOrders = async () => {
    try {
      const data = await pb.collection("orders").getFullList();
      setOrderItems(data as unknown as OrderItemProps[]);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };
  
  const getUsers = async () => {
    try {
      const data = await pb.collection("users").getFullList();
      setUsers(data as unknown as UserDataProps[]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };


  
  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([getOrders(), getUsers()]);
    };

    fetchData();
  }, []);
  
  useEffect(() => {
    const matchOrdersToUsers = () => {
      const matchedOrders = orderItems.map((order) => ({
        order,
        user: users.find((user) => user.id as unknown as string === order.userId),
      }));
      setOrdersWithUsers(matchedOrders);
    };
    if (orderItems.length && users.length) {
      matchOrdersToUsers();
    }
  }, [orderItems, users]);
  
  return (
    <Container active="All Orders">
      <div className="flex items-center space-x-4 px-4 pt-10">
        <div className="flex">
          <NavLink
            to="/"
            className="bg-[#ccc] p-1.5 rounded-full"
          >
            <ArrowLeft />
          </NavLink>
        </div>
        <h2 className="font-semibold text-[24px]">My Orders</h2>
      </div>
      <div className="mt-4 mb-2 mx-4 bg-[#d9d9d9] p-1.5 items-center rounded-lg text-[14px] flex">
        <p
          onClick={() => setActiveTab("newOrders")}
          className={`${
            activeTab === "newOrders"
              ? "bg-[#7d6c3a] text-[#fff]"
              : "text-[#808080]"
          } w-[50%] flex justify-center transition-all duration-500 ease-in-out py-2 rounded-lg`}
        >
          New Orders
        </p>
        <p
          onClick={() => setActiveTab("completeOrders")}
          className={`${
            activeTab === "completeOrders"
              ? "bg-[#7d6c3a] text-[#fff]"
              : "text-[#808080]"
          } w-[50%] flex justify-center transition-all duration-500 ease-in-out py-2 rounded-lg`}
        >
          Complete Orders
        </p>
      </div>

      {activeTab === "newOrders" ? (
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <NewOrders data={ordersWithUsers} />
        </motion.div>
      ) : (
        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={variants}
          transition={{ duration: 0.3 }}
        >
          <CompleteOrders data={ordersWithUsers} />
        </motion.div>
      )}
    </Container>
  );
};

export default AllOrders;
