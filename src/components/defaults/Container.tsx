import React, { FC } from "react"
import PageTransition from "../defaults/PageTransition";
import BottomNav from "./BottomNav";

interface AdminContainerProps {
    children: React.ReactNode;
    active: string;
}
const Container: FC<AdminContainerProps> = ({ children, active }) => {
  return (
    <div className="min-h-screen lg:w-[450px] bg-[#fafafa] mx-auto">
      <PageTransition active={active}>
        <div>{children}</div>
      </PageTransition>
      <BottomNav active={active} />
    </div>
  )
}

export default Container
