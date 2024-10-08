import { FC, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import { UserDataProps } from "../../App";
import { ArrowDown } from "../icons";
import { supabase } from "../../../utils/supabaseClient";
import ConfirmOrderStatusChange from "../modals/ConfirmOrderStatusChange";
import { OrderItemProps } from "../../pages/dashboard";
import { OrderStatusChange } from "../email-templates/OrderStatusChange";
import { render } from "@react-email/render";
import Plunk from "@plunk/node";
import Spinner from "../defaults/Spinner";
import "react-toastify/dist/ReactToastify.css";

export interface AllOrdersProps {
  data: { order: OrderItemProps; user: UserDataProps | undefined }[];
}

const NewOrders: FC<AllOrdersProps> = ({ data }) => {
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const [option, setOption] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<{
    orderId: number;
    newStatus: string;
  } | null>();
  const [openOrderIds, setOpenOrderIds] = useState<number[]>([]);
  const [openOptions, setOpenOptions] = useState<boolean>(false);
  const options = [
    { value: "Processing", label: "Processing" },
    { value: "Out for Delivery", label: "Out for Delivery" },
    { value: "Delivered", label: "Delivered" },
  ];
  const [userData, setUserData] = useState<UserDataProps>();
  const [orderItem, setOrderItem] = useState<OrderItemProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const plunkSecret = import.meta.env.VITE_PLUNK_SECRET;
  const plunkClient = new Plunk(plunkSecret);

  const formatDate = (timestamp: string): string => {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "short",
      year: "numeric",
    };
    return date.toLocaleDateString("en-GB", options);
  };

  const toggleOrder = (orderId: number) => {
    setOpenOrderIds((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };
  const getUser = async (userId: string) => {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("userId", userId);
    if (!error) {
      return data[0];
    } else {
      console.log(error);
    }
  };

  const addToNotification = async (orderId: number, newStatus: string) => {
    try {
      const { error } = await supabase
      .from("notifications")
      .insert([
        {
          userId: userData?.userId,
          title: "Your FreshBake Order Status Change",
          message: `Your order #${orderId} is now  ${newStatus}.`,
          timestamp: new Date().toISOString(),
          read: false,
        },
      ])

      if (!error) {
        console.log("")
      } else {
        throw error
      }
    } catch (error) {
      console.log("error in adding notification:", error)
    }
  }

  const getResponse = async (response: string) => {
    setOpenConfirmationModal(false);
    if (response === "yes" && selectedOrder) {
      setLoading(true);
      const { orderId, newStatus } = selectedOrder;
      try {
        const { error } = await supabase
          .from("orders")
          .update({ orderStatus: newStatus })
          .eq("transactionId", orderId);
        if (!error) {
          try {
            const emailHtml = render(
              <OrderStatusChange
                userData={userData}
                cartItems={orderItem?.items}
                orderId={orderId}
                orderStatus={newStatus}
                activeTab={orderItem?.deliveryOption}
                expectedDeliveryDate={
                  orderItem?.items[0].deliveryDay +
                  " by " +
                  orderItem?.items[0].deliveryTime
                }
              />
            );

            await plunkClient.emails.send({
              to: userData?.email as string,
              subject: "Your FreshBake Order Status Change",
              body: await emailHtml,
            });

            console.log("Order update email sent successfully.");
            addToNotification(orderId, newStatus)
            setLoading(false);
            toast.success(
              "The order status has been updated, the user will be sent a mail to this effect",
              {
                position: "top-right",
                theme: "light",
                autoClose: 2000,
                hideProgressBar: false,
                pauseOnHover: true,
                draggable: true,
                transition: Bounce,
              }
            );
          } catch (error) {
            console.error("Failed to send order update email:", error);
          }

          setTimeout(() => {
            window.location.reload();
          }, 2500);
        }
      } catch (error) {
        console.error("Failed to update order status", error);
      }
    } else setOption("");

    setOpenOptions(false);
  };

  const handleStatusChange = async (
    orderId: number,
    newStatus: string,
    item: OrderItemProps
  ) => {
    setSelectedOrder({ orderId, newStatus });
    setOpenConfirmationModal(true);
    setOption(newStatus);

    const fetchedUserData = await getUser(item.userId);
    if (fetchedUserData) {
      setUserData(fetchedUserData);
      setOrderItem(item);
    }
  };

  return (
    <div>
      <ToastContainer />
      {data.length > 0 ? (
        <div className="pb-[20vh]">
          {data.map(({ order, user }) => (
            <div key={order.id} className="mb-4">
              {order.orderStatus === "Processing" ||
              order.orderStatus === "Out for Delivery" ? (
                <div key={user?.id}>
                  <div
                    className="cursor-pointer px-4 mt-6 mb-3 text-[14px] flex items-center space-x-3"
                    onClick={() => toggleOrder(order.transactionId)}
                  >
                    <h2 className="bg-[#ccc] p-2 rounded-full">
                      {user?.firstname.slice(0, 1)}
                      {user?.lastname.slice(0, 1)}
                    </h2>
                    <div className="w-[100%] space-y-1">
                      <div className="flex justify-between w-[100%]">
                        <h2 className="font-semibold">
                          {user?.firstname} {user?.lastname}
                        </h2>
                        <p className="text-[13px]">
                          Order {order.transactionId}
                        </p>
                      </div>
                      <div className="flex justify-between w-[100%]">
                        <h2 className="text-[13px]">
                          Order Items: {order.items.length}
                        </h2>
                        <p className="text-[13px]">
                          {formatDate(order.created_at)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {openOrderIds.includes(order.transactionId) && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <hr />
                      <div className="space-y-6 pb-10">
                        {order.items.map((item, index) => {
                          const isLastItem = index === order.items.length - 1;
                          return (
                            <div
                              key={item.id}
                              className="flex flex-col space-y-4 my-4 px-4 text-[14px]"
                            >
                              <div className="flex justify-between">
                                <h2>
                                  {item.category} {item.weight} {item.type}
                                </h2>
                                <p>Qty: {item.quantity}</p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Delivery Schedule</h2>
                                <p>{item.deliveryDay}</p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Time of Delivery</h2>
                                <p>{item.deliveryTime}</p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Delivery Address</h2>
                                <p className="text-[#bd9e1e]">
                                  {order.deliveryAddress}
                                </p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Phone Number</h2>
                                <p>{user?.phone}</p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Sub-total</h2>
                                <p>${item.totalCost}</p>
                              </div>
                              <div className="flex justify-between">
                                <h2>Delivery Fee</h2>
                                <p>${order.deliveryFee}</p>
                              </div>

                              {isLastItem && (
                                <div className="flex justify-between items-center">
                                  <h2>Order Status</h2>
                                  <div className="flex flex-col relative text-[14px]">
                                    <AnimatePresence>
                                      {openOptions && (
                                        <motion.div
                                          initial={{ opacity: 0, y: 10 }}
                                          animate={{ opacity: 1, y: 0 }}
                                          exit={{ opacity: 0, y: -10 }}
                                          transition={{ duration: 0.3 }}
                                          className={`flex flex-col absolute -top-[18vh] -left-[50px] space-y-4 pr-10 pl-3 py-3 bg-[#fff] shadow-lg`}
                                        >
                                          {options.map((item, index) => (
                                            <div className="flex" key={index}>
                                              <p
                                                className=""
                                                onClick={() => {
                                                  handleStatusChange(
                                                    order.transactionId,
                                                    item.value,
                                                    order
                                                  );
                                                  setOpenOptions(false);
                                                }}
                                              >
                                                {item.label}
                                              </p>
                                            </div>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                    <div
                                      onClick={() =>
                                        setOpenOptions(!openOptions)
                                      }
                                      className="flex"
                                    >
                                      <div
                                        className={`${
                                          option !== ""
                                            ? "text-[#fff] bg-[#5c501e]"
                                            : "bg-[#fff]"
                                        } py-2 px-3 flex items-center space-x-10 rounded-lg shadow-lg z-50`}
                                      >
                                        {loading ? (
                                          <Spinner />
                                        ) : (
                                          <h2 className="">
                                            {option
                                              ? option
                                              : order.orderStatus}
                                          </h2>
                                        )}
                                        <div className="scale-75">
                                          <ArrowDown />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}
                              <hr />
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      ) : (
        <div className="h-[70vh] flex items-center justify-center">
          <p className="text-[#808080] font-semibold italic">No new orders</p>
        </div>
      )}

      {openConfirmationModal && (
        <ConfirmOrderStatusChange getResponse={getResponse} />
      )}
    </div>
  );
};

export default NewOrders;
