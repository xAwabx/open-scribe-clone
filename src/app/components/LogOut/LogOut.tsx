"use client";
import { FC } from "react";
import { logout } from "./actions";

interface LogOutProps {}

const LogOut: FC<LogOutProps> = ({}) => {
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        logout();
      }}
    >
      logout
    </button>
  );
};

export default LogOut;
