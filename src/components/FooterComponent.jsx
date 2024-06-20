import { Breadcrumb, Button, Flex, Input, Layout, theme } from "antd";
import logo from "../assets/logoskillver.png";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { Outlet } from "react-router-dom";
const { Content, Footer } = Layout;

const FooterComponent = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </>
  );
};
export default FooterComponent;
