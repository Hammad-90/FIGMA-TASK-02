import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="app-shell">
      <Header onMenuClick={() => setOpen((value) => !value)} />
      <div className="layout">
        <Sidebar open={open} onClose={() => setOpen(false)} />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
