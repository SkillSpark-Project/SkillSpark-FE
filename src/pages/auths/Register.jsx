import {
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  Divider,
  Flex,
  Form,
  Input,
  Row,
  theme,
} from "antd";
import logo from "../../assets/logoskillver.png";
import loginimg from "../../assets/loginimg.png";

import React, { useState } from "react";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import Title from "antd/es/typography/Title";
import { loginUser } from "../../redux/slice/authSlice";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const boxStyle = {
  width: "100%",
  height: "100%",
};
const Register = () => {
  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const userInfo = cookies?.get("user");

  const handleLogin = async (values) => {
    try {
      setIsLoading(true);
      const response = await loginUser({
        email: values.username,
        password: values.password,
      });
      if (userInfo != null) {
        cookies.remove("user");
      }
      cookies.set("user", response, { path: "/" });
      toast.success("Đăng nhập thành công.");
      if (response.listRoles.includes("Learner")) {
        navigate("/");
      } else if (response.listRoles.includes("Admin")) {
        navigate("/admin");
      }
    } catch (error) {
      toast.error(error.response.data.title);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="w-5/6 m-auto mt-10">
      <Card
        bordered={false}
        style={{
          textAlign: "center",
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        }}
      >
        <Row>
          <Col span={12} className="px-10">
            <div>
              <a href="/">
                <img src={logo} className="w-2/6 m-auto" />
              </a>

              <div className="font-bold py-3 text-xl">Đăng Ký</div>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                form={form}
                onFinish={handleLogin}
                autoComplete="off"
              >
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đăng nhập hoặc địa chỉ email",
                    },
                  ]}
                >
                  <Input
                    disabled={isLoading}
                    allowClear
                    onChange={(e) => setEmail(e.target.value)}
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
                      message: "Vui lòng nhập mật khẩu",
                    },
                  ]}
                >
                  <Input.Password
                    disabled={isLoading}
                    allowClear
                    onChange={(e) => setPass(e.target.value)}
                    size="large"
                    placeholder="Mật khẩu"
                    prefix={<LockOutlined />}
                    className="border-black transition-all duration-300 input-hover-green "
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    size="large"
                    loading={isLoading}
                    className="text-sm  bg-[#26a59a] text-white font-semibold button-full-hover-green"
                  >
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>

              <div className="mt-5">
                {/* <div className="mt-5">
                  hoặc{" "}
                  <a href="#" className="text-[#26a59a] font-semibold ">
                    Quên mật khẩu?
                  </a>
                </div> */}
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
                <div className="mt-5">
                  Bạn dã có tài khoản?{" "}
                  <a href="#" className="text-[#26a59a]  font-semibold ">
                    Đăng Ký
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col span={12} className="px-10">
            <img src={loginimg} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Register;
