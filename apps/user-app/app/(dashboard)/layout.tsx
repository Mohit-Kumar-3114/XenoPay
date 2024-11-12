"use client"

import { AppbarClient } from "../../components/AppbarClient";
import { SidebarItem } from "../../components/SidebarItem";
import { useState } from "react";


export default function Layout({ children }: { children: React.ReactNode }): JSX.Element {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  return (
    <div>
      {/* Top App Bar */}
      <AppbarClient />

      {/* Bottom Menu Icon for Mobile, directly below AppbarClient */}
      <div className="md:hidden bg-white border-b border-slate-300">
        <button
          onClick={() => setShowMobileSidebar(!showMobileSidebar)}
          className="w-full text-center py-2"
        >
        <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/menu--v6.png" alt="menu--v6"/>
        </button>

        {showMobileSidebar && (
          <div className=" py-2 bg-white shadow-lg">
            <SidebarItem href={"/account-details"} icon={<BalanceIcon />} title="Account" />
            <SidebarItem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
            <SidebarItem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
            <SidebarItem href={"/p2p"} icon={<P2PTransferIcon />} title="P2P" />
            <SidebarItem href={"/chatbot"} icon={<ChatBotIcon/>} title="Chatbot"/>
          </div>
        )}
      </div>

      {/* Main Layout */}
      <div className="flex">
        {/* Sidebar for Desktop Screens */}
        <div className="hidden md:flex w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
          <div>
            <SidebarItem href={"/account-details"} icon={<BalanceIcon />} title=" Account-Info" />
            <SidebarItem href={"/transfer"} icon={<TransferIcon />} title="Transfer" />
            <SidebarItem href={"/transactions"} icon={<TransactionsIcon />} title="Transactions" />
            <SidebarItem href={"/p2p"} icon={<P2PTransferIcon />} title="P2P Transfer" />
            <SidebarItem href={"/chatbot"} icon={<ChatBotIcon/>} title="Chatbot"/>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}



 function TransferIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
  </svg>
}

 function TransactionsIcon() {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
  </svg>
  
}

 function P2PTransferIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
  </svg>
}

function BalanceIcon(){
   return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM9 7.5A.75.75 0 0 0 9 9h1.5c.98 0 1.813.626 2.122 1.5H9A.75.75 0 0 0 9 12h3.622a2.251 2.251 0 0 1-2.122 1.5H9a.75.75 0 0 0-.53 1.28l3 3a.75.75 0 1 0 1.06-1.06L10.8 14.988A3.752 3.752 0 0 0 14.175 12H15a.75.75 0 0 0 0-1.5h-.825A3.733 3.733 0 0 0 13.5 9H15a.75.75 0 0 0 0-1.5H9Z" clip-rule="evenodd" />
</svg>

}
function ChatBotIcon(){
  return <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
  <path d="M 13.5 3 C 10.467 3 8 5.467 8 8.5 L 8 13 L 5.5 13 C 3.5850452 13 2 14.585045 2 16.5 L 2 21.5 C 2 23.414955 3.5850452 25 5.5 25 L 8 25 L 8 29.5 C 8 32.533 10.467 35 13.5 35 L 34.5 35 C 37.533 35 40 32.533 40 29.5 L 40 25 L 43 25 L 43 35.5 C 43 38.003499 41.003499 40 38.5 40 L 29.660156 40 A 3.5 3.5 0 0 0 26.5 38 A 3.5 3.5 0 1 0 26.5 45 A 3.5 3.5 0 0 0 29.658203 43 L 38.5 43 C 42.624501 43 46 39.624501 46 35.5 L 46 23.5 L 46 16.5 C 46 14.585045 44.414955 13 42.5 13 L 40 13 L 40 8.5 C 40 5.467 37.533 3 34.5 3 L 13.5 3 z M 17 14 C 18.105 14 19 14.895 19 16 C 19 17.105 18.105 18 17 18 C 15.895 18 15 17.105 15 16 C 15 14.895 15.895 14 17 14 z M 31 14 C 32.105 14 33 14.895 33 16 C 33 17.105 32.105 18 31 18 C 29.895 18 29 17.105 29 16 C 29 14.895 29.895 14 31 14 z M 5.5 16 L 8 16 L 8 22 L 5.5 22 C 5.2049548 22 5 21.795045 5 21.5 L 5 16.5 C 5 16.204955 5.2049548 16 5.5 16 z M 40 16 L 42.5 16 C 42.795045 16 43 16.204955 43 16.5 L 43 22 L 40 22 L 40 16 z M 17.490234 23 C 17.870984 22.997875 18.253875 23.140281 18.546875 23.425781 C 18.644875 23.515781 20.298 25 24 25 C 27.736 25 29.387078 23.487828 29.455078 23.423828 C 30.051078 22.861828 30.997359 22.875844 31.568359 23.464844 C 32.139359 24.052844 32.139547 24.980547 31.560547 25.560547 C 31.310547 25.810547 28.978 28 24 28 C 19.022 28 16.689453 25.810547 16.439453 25.560547 C 15.853453 24.975547 15.853453 24.024453 16.439453 23.439453 C 16.730453 23.148453 17.109484 23.002125 17.490234 23 z"></path>
  </svg>

}