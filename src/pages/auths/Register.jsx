import {
  Button,
  Card,
  Checkbox,
  Col,
  ConfigProvider,
  DatePicker,
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
  MailOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import Title from "antd/es/typography/Title";
import { loginUser, registerAcc } from "../../redux/slice/authSlice";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const boxStyle = {
  width: "100%",
  height: "100%",
};
const Register = () => {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);

  const cookies = new Cookies();
  const navigate = useNavigate();

  const userInfo = cookies?.get("user");

  const handleLogin = async (values) => {
    console.log(values);
    try {
      setIsLoading(true);
      const response = await registerAcc({
        email: values.email,
        username: values.username,
        fullname: values.fullname,
        phoneNumber: values.phoneNumber,
        birthday: values.birthday,
        password: values.password,
      });

      toast.success(response);
    } catch (error) {
      error?.response?.data?.title == "One or more validation errors occurred."
        ? toast.error("Vui lòng kiểm tra lại thông tin.")
        : toast.error(error.response.data.title);
      const errorData = error.response.data;
      const errors = errorData.errors || errorData;
      const fields = Object.keys(errors).map((field) => ({
        name: field.toLowerCase(),
        errors: errors[field],
      }));
      form.setFields(fields);
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

              <div className="font-semibold py-3 text-xl">Đăng Ký</div>
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
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập địa chỉ email",
                    },
                  ]}
                >
                  <Input
                    disabled={isLoading}
                    allowClear
                    onChange={(e) => setEmail(e.target.value)}
                    size="large"
                    type="email"
                    placeholder="Địa chỉ email"
                    className="border-black transition-all duration-300 input-hover-green"
                    prefix={<MailOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập tên đăng nhập",
                    },
                  ]}
                >
                  <Input
                    disabled={isLoading}
                    allowClear
                    size="large"
                    placeholder="Tên đăng nhập"
                    className="border-black transition-all duration-300 input-hover-green"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="fullname"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập họ tên",
                    },
                  ]}
                >
                  <Input
                    disabled={isLoading}
                    allowClear
                    size="large"
                    placeholder="Họ tên"
                    className="border-black transition-all duration-300 input-hover-green"
                    prefix={<UserOutlined />}
                  />
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập số điện thoại",
                    },
                  ]}
                >
                  <Input
                    disabled={isLoading}
                    allowClear
                    size="large"
                    placeholder="Số điện thoại"
                    className="border-black transition-all duration-300 input-hover-green"
                    prefix={<PhoneOutlined />}
                    type="number"
                  />
                </Form.Item>
                <Form.Item
                  name="birthday"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập ngày sinh",
                    },
                  ]}
                >
                  <DatePicker
                    className="w-full border-black transition-all duration-300 input-hover-green"
                    format={{
                      format: "DD-MM-YYYY",
                      type: "mask",
                    }}
                    placeholder="Ngày sinh"
                    size="large"
                    prefix={<MailOutlined />}
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
                    Đăng ký
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
          <Col span={12} className="px-10 m-auto">
            <img src={loginimg} />
          </Col>
        </Row>
      </Card>
    </div>
  );
};
export default Register;
