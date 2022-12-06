import React from "react";
import { Tabs, Button, Dropdown, Space } from "antd";
import { PlusCircleOutlined, DownCircleOutlined } from "@ant-design/icons";
import "./App.css";
import Collapse from "./components/collapse/collapse";

function App() {
  const additems = [
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
    additems,
  };

  const items = [
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
            <Space>
              <PlusCircleOutlined style={{ color: "#F8F8FF" }} />
              Add New
              <DownCircleOutlined style={{ color: "#F8F8FF" }} />
            </Space>
          </Button>
        </Dropdown>
      </div>
      <Tabs items={items} />
    </div>
  );
}

export default App;
