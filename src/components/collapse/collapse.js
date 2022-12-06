import React from "react";
import { UpCircleFilled, DownCircleFilled } from "@ant-design/icons";
import { Collapse } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
const { Panel } = Collapse;

function collapseScreen() {
  let Extracheck = () => <Checkbox />;

  return (
    <div>
      <Collapse
        collapsible="icon"
        expandIconPosition="end"
        expandIcon={({ isActive }) =>
          isActive ? (
            <UpCircleFilled style={{ fontSize: "1.25rem", color: "#3394FF" }} />
          ) : (
            <DownCircleFilled
              style={{ fontSize: "1.25rem", color: "#3394FF" }}
            />
          )
        }
      >
        <Panel header="Paralegal Department" extra={Extracheck()}>
          <p>text</p>
        </Panel>
        <Panel header="Case Management" extra={Extracheck()}>
          <Collapse
            collapsible="icon"
            ghost="true"
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <UpCircleFilled
                  style={{ fontSize: "1.25rem", color: "#3394FF" }}
                />
              ) : (
                <DownCircleFilled
                  style={{ fontSize: "1.25rem", color: "#3394FF" }}
                />
              )
            }
          >
            <Panel header="Team X" extra={Extracheck()}>
              <p>text</p>
            </Panel>
            <Panel header="Team Y" extra={Extracheck()}>
              <Collapse
                style={{
                  marginLeft: "-1.95rem",
                  backgroundColor: "white",
                  width: "105%",
                }}
              >
                <Panel
                  header="Jennifer"
                  extra={Extracheck()}
                  showArrow={false}
                ></Panel>
                <Panel
                  header="Qasim"
                  extra={Extracheck()}
                  showArrow={false}
                ></Panel>
                <Panel
                  header="Zack"
                  extra={Extracheck()}
                  showArrow={false}
                ></Panel>
                <Panel
                  header="Samet"
                  extra={Extracheck()}
                  showArrow={false}
                ></Panel>
              </Collapse>
            </Panel>
            <Panel header="Team Z" extra={Extracheck()}>
              <p>text</p>
            </Panel>
            <Panel header="Team F" extra={Extracheck()}>
              <p>text</p>
            </Panel>
          </Collapse>
        </Panel>
        <Panel header="Intake" extra={Extracheck()}>
          <p>text</p>
        </Panel>
        <Panel header="Operations" extra={Extracheck()}>
          <p>text</p>
        </Panel>
        <Panel header="Marketing" extra={Extracheck()}>
          <p>text</p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default collapseScreen;
