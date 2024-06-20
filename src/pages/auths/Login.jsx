import {
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  theme,
} from "antd";
import React from "react";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
const boxStyle = {
  width: "100%",
  height: "100%",
};
const Login = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="w-2/5 m-auto mt-10">
      <Card
        title="Đăng Nhập"
        bordered={false}
        style={{
          textAlign: "center",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="Tên đăng nhập hoặc địa chỉ email"
              className="border-black transition-all duration-300 input-hover-green"
              prefix={<UserOutlined />}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              size="large"
              placeholder="Mật khẩu"
              prefix={<LockOutlined />}
              className="border-black transition-all duration-300 input-hover-green"
            />
          </Form.Item>
        </Form>
        <Button
          size="large"
          className="text-sm w-full  bg-[#26a59a] text-white font-semibold button-full-hover-green"
        >
          Đăng nhập
        </Button>
        <div className="mt-5">
          hoặc{" "}
          <a href="#" className="text-[#26a59a]  font-semibold ">
            Quên mật khẩu?
          </a>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorSplit: "rgba(0, 0, 0, 0.40)",
            },
          }}
        >
          <Divider>Các tùy chọn đăng nhập khác</Divider>
        </ConfigProvider>

        <div>
          <GoogleOutlined className=" hover:text-[#26a59a] text-4xl" />
          <FacebookOutlined className="hover:text-[#26a59a] text-4xl ml-5" />
          {/* <Flex style={boxStyle} justify="space-evenly" align="center">
            <Button>Primary</Button>
            <Button>Primary</Button>
          </Flex> */}
        </div>
      </Card>
    </div>
  );
};
export default Login;
