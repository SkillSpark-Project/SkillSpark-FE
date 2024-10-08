import { Breadcrumb, Button, Flex, Input, Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { PropagateLoader } from "react-spinners";
const { Content } = Layout;

const LearnerRouter = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <HeaderComponent />
      <Content
        className="bg-white"
        style={{
          padding: "0 48px",
        }}
      >
        <div
          style={{
            minHeight: "100vh",
          }}
        >
          {/* <PropagateLoader color="#36d7b7" /> */}
          <Outlet />
        </div>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default LearnerRouter;
