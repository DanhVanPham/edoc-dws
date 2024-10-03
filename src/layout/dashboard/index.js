import React, { useState } from "react";
import Header from "./header";
import MainContent from "./MainContent";
import { Sidebar } from "./sidebar";

const DashboardLayout = () => {
  const [isCollapse, setIsCollapse] = useState(true);

  const handleToggleCollapse = () => setIsCollapse(prev => !prev)

  return (
    <div className="container-standard">
      <Sidebar isCollapse={isCollapse} onCollapse={handleToggleCollapse} />
      <Header isCollapse={isCollapse} onCollapse={handleToggleCollapse} />
      <MainContent isCollapse={isCollapse} />
    </div>
  );
};

export default DashboardLayout;
