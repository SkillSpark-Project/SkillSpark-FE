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
              Skill Spark là nền tảng kết nối người học với giáo viên, giúp bạn
              dễ dàng tìm kiếm và học các kỹ năng mới. Với đa dạng các khóa học
              từ chuyên gia uy tín, Skill Spark mang đến trải nghiệm học tập
              chất lượng và linh hoạt, phù hợp với nhu cầu và lịch trình của
              bạn. Tham gia Skill Spark để khơi dậy đam mê và phát triển kỹ năng
              ngay hôm nay!
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
