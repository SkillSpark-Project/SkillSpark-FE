import { Button, Divider, Flex } from "antd";
import logo from "../../../assets/homebannerimg.webp";
export function Banner() {
  const boxStyle = {
    width: "100%",
    height: "90%",
  };
  const imgStyle = {
    borderTopLeftRadius: "7rem",
    borderBottomRightRadius: "7rem",
  };
  return (
    <>
      <div className="h-screen bg-white">
        <Flex style={boxStyle} justify="space-around" align="center">
          <div className="w-2/5">
            <div className="text-5xl font-bold text-[#26a59a]">Skill Spark</div>
            <div className=" my-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
              merninisti licere mihi ista probare, quae sunt a te dicta? Refert
              tamen, quo modo Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Sed nonne merninisti licere mihi ista probare, quae sunt a
              te dicta? Refert tamen, quo modo.
            </div>
            <Button
              size="large"
              className="text-sm bg-[#26a59a] text-white font-semibold button-full-hover-green m-0"
            >
              Tìm hiểu thêm
            </Button>
          </div>
          <img src={logo} className="w-2/5" style={imgStyle} />
        </Flex>
      </div>
    </>
  );
}
