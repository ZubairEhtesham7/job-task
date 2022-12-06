import React from "react";
import { Tabs, Button, Dropdown } from "antd";
import { PlusCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import "./App.css";
import Collapse from "./components/collapse/collapse";

function App() {
  const items = [
    {
      label: "Department",
      key: "1",
    },
    {
      label: "Team",
      key: "2",
    },
    {
      label: "User",
      key: "3",
    },
  ];
  const menuProps = {
    items,
  };
  const tabs = [
    {
      label: "Users",
      key: "1",
      children: "Users",
    },
    {
      label: "Teams & Departments",
      key: "2",
      children: <Collapse />,
    },
  ];

  return (
    <div className="Maindiv">
      <div className="managediv11">
        <div className="managetext11">
          <h2>Manage Users & Teams</h2>
          <small>
            Start adding the departments and teams to your growth planner
          </small>
        </div>
        <Dropdown menu={menuProps}>
          <Button type="primary" style={{ height: "2.5rem", width: "8rem" }}>
            <PlusCircleOutlined style={{ color: "#F8F8FF" }} />
            Add New
            <DownCircleOutlined style={{ color: "#F8F8FF" }} />
          </Button>
        </Dropdown>
      </div>
      <Tabs items={tabs} />
    </div>
  );
}

export default App;
