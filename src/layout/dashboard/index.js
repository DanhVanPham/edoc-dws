import React, { useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import MainContent from "./MainContent";

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
