import React from "react";
import { Carousel, Typography } from "antd";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  borderRadius: "3rem",
};
const HomeCarousel = () => {
  return (
    <div className=" w-5/6 m-auto">
      <div className="title-div text-xl font-semibold">
        --- NỔI BẬT NHẤT ---
      </div>
      <div className="sub-title-div text-lg font-semibold">
        Những lựa chọn hàng đầu của chúng tôi
      </div>

      <Carousel autoplay autoplaySpeed={5000} arrows>
        <div>
          <img
            style={contentStyle}
            src="https://cdn.venngage.com/template/thumbnail/full/e8a29266-ff09-49b7-8a68-b9f6ac124aae.webp"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://www.shutterstock.com/image-vector/summer-travel-poster-banner-display-260nw-2283878659.jpg"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiMESYMt9diRdIBrPOLwYUzuGhGCXhk0Clig&s"
          />
        </div>
        <div>
          <img
            style={contentStyle}
            src="https://www.shutterstock.com/image-vector/summer-sale-banner-vector-illustration-260nw-1780160747.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
