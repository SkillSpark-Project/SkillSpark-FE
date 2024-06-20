import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const HomeCarousel = () => {
  return (
    <div className=" w-5/6 m-auto">
      <div className="title-div">Các khóa học nổi bật</div>
      <Carousel autoplay autoplaySpeed={5000}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
