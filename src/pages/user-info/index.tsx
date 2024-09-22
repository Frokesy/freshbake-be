import { NavLink } from "react-router-dom";
import { ArrowLeft } from "../../components/icons";
import { useEffect, useState } from "react";
import { supabase } from "../../../utils/supabaseClient";
import { UserDataProps } from "../../App";
import Container from "../../components/defaults/Container";

const UserInfo = () => {
  const [users, setUsers] = useState<UserDataProps[]>();
  useEffect(() => {
    const getUsers = async () => {
      const { data, error } = await supabase.from("users").select("*");
      if (!error) {
        setUsers(data);
      } else {
        console.log(error);
      }
    };
    getUsers();
  }, []);


  return (
    <Container active="Account">
      <div className="flex items-center space-x-4 px-4 pt-10">
        <div className="flex">
          <NavLink
            to="/admin-profile"
            className="bg-[#ccc] p-1.5 rounded-full"
          >
            <ArrowLeft />
          </NavLink>
        </div>
        <h2 className="font-semibold text-[24px]">Users Information</h2>
      </div>

      <div className="mt-6 text-[14px] space-y-3">
        {users?.map((user) => (
          <div
            key={user.id}
            className="flex justify-between items-center border border-[#ccc] p-4"
          >
            <div className="">
              <h2>{user.firstname} {user.lastname}</h2>
              <p>{user.email}</p>
            </div>
            <p>{user.phone}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default UserInfo;
