import { Web3Button } from "@web3modal/react";
import { useAccount } from "wagmi";
import { Outlet, useNavigate } from "react-router-dom";

import AppHeader from "./components/AppHeader";

import "./App.css";
import { useEffect } from "react";
import Network from "./components/Network";

export function App() {
  const { isConnected } = useAccount();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === "/") {
      console.log(location.pathname);
      navigate("/swap");
    }
  }, []);

  return (
    <>
      <div className="h-screen">
        <div className="fixed top-0 left-0 w-full h-full z-0 bg-gradient-to-r from-gray-100 to-yellow-100 overflow-y-auto overflow-x-hidden">
          <AppHeader />
          <Network />
          <Outlet />
        </div>
      </div>
    </>
  );
}
