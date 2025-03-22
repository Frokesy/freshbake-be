import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Pen } from "../../components/icons";
import Spinner from "../../components/defaults/Spinner";
import Container from "../../components/defaults/Container";
import { pb } from "../../../utils/pocketbaseCient";

interface AdminDataProps {
  vendorName: string;
  pickupAddress: string;
  phoneNumber: string;
}

const AdminDetails = () => {
  const [vendorName, setVendorName] = useState<string | null>(null);
  const [pickupAddress, setPickupAddress] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<string | null>(null);
  const [deliveryFee, setDeliveryFee] = useState<string | null>(null);
  const [adminData, setAdminData] = useState<AdminDataProps>();
  const [editField, setEditField] = useState<string | null>(null);

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const data = await pb.collection("admin").getOne("6apn4zg6jd6h6pd");
        setVendorName(data.vendorName);
        setPickupAddress(data.pickupAddress);
        setPhoneNumber(data.phoneNumber);
        setDeliveryFee(data.deliveryFee);
        setAdminData(data as unknown as AdminDataProps);
      } catch (error) {
        console.error("Error fetching admin details:", error);
      }
    };

    fetchAdminDetails();
  }, []);

  const handleUpdate = async (field: string, value: string) => {
    setEditField(null);

    try {
      await pb
        .collection("admin")
        .update("6apn4zg6jd6h6pd", { [field]: value });
      console.log(`${field} updated successfully.`);
    } catch (error) {
      console.error("Error updating admin details:", error);
    }
  };

  if (!adminData) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Spinner color="#000" />
      </div>
    );
  }

  return (
    <Container active="Account">
      <div className="flex items-center space-x-4 px-4 pt-10">
        <div className="flex">
          <NavLink to="/admin-profile" className="bg-[#ccc] p-1.5 rounded-full">
            <ArrowLeft />
          </NavLink>
        </div>
        <h2 className="font-semibold text-[24px]">Admin Details</h2>
      </div>

      <div className="mt-6 space-y-3 text-[14px]">
        <div className="flex justify-between items-center border border-[#e8e8e8] p-4">
          <div className="">
            <h2 className="text-[12px]">Vendor name</h2>
            {editField === "vendorName" ? (
              <input
                type="text"
                value={vendorName || ""}
                onChange={(e) => setVendorName(e.target.value)}
                onBlur={() => handleUpdate("vendorName", vendorName || "")}
                className="border-none bg-inherit p-1 outline-none"
                autoFocus
              />
            ) : (
              <p className="text-[#7a7474]">{vendorName}</p>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setEditField("vendorName")}
          >
            <Pen />
          </div>
        </div>

        <div className="flex justify-between items-center border border-[#e8e8e8] p-4">
          <div className="">
            <h2 className="text-[12px]">Pickup address</h2>
            {editField === "pickupAddress" ? (
              <input
                type="text"
                value={pickupAddress || ""}
                onChange={(e) => setPickupAddress(e.target.value)}
                onBlur={() =>
                  handleUpdate("pickupAddress", pickupAddress || "")
                }
                className="border-none bg-inherit p-1 outline-none"
                autoFocus
              />
            ) : (
              <p className="text-[#7a7474]">{pickupAddress}</p>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setEditField("pickupAddress")}
          >
            <Pen />
          </div>
        </div>

        <div className="flex justify-between items-center border border-[#e8e8e8] p-4">
          <div className="">
            <h2 className="text-[12px]">Phone number</h2>
            {editField === "phoneNumber" ? (
              <input
                type="text"
                value={phoneNumber || ""}
                onChange={(e) => setPhoneNumber(e.target.value)}
                onBlur={() => handleUpdate("phoneNumber", phoneNumber || "")}
                className="border-none bg-inherit p-1 outline-none"
                autoFocus
              />
            ) : (
              <p className="text-[#7a7474]">{phoneNumber}</p>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setEditField("phoneNumber")}
          >
            <Pen />
          </div>
        </div>

        <div className="flex justify-between items-center border border-[#e8e8e8] p-4">
          <div className="">
            <h2 className="text-[12px]">Delivery Fee</h2>
            {editField === "deliveryFee" ? (
              <input
                type="text"
                value={deliveryFee || ""}
                onChange={(e) => setDeliveryFee(e.target.value)}
                onBlur={() => handleUpdate("deliveryFee", deliveryFee || "")}
                className="border-none bg-inherit p-1 outline-none"
                autoFocus
              />
            ) : (
              <p className="text-[#7a7474]">${deliveryFee}</p>
            )}
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setEditField("deliveryFee")}
          >
            <Pen />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AdminDetails;
