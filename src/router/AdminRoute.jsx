import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";
import logo from "../assets/logoskillver.png";
import { Outlet } from "react-router-dom";
const { Header, Sider, Content } = Layout;
const AdminRoute = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const items = [
    {
      key: "1",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "2",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "3",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
    {
      key: "4",
      icon: <UserOutlined />,
      label: "nav 1",
    },
    {
      key: "5",
      icon: <VideoCameraOutlined />,
      label: "nav 2",
    },
    {
      key: "6",
      icon: <UploadOutlined />,
      label: "nav 3",
    },
  ];
  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={{
          height: "100vh",
          backgroundColor: "white",
        }}
      >
        <div className="demo-logo-vertical my-6 flex justify-center">
          <img src={logo} width={140} />
        </div>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={["2"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default AdminRoute;
