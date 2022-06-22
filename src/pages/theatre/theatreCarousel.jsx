import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import "./slider.css";

function TheatreCarousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="sliderWrap">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: "center",
            background: "black",
            border: "none",
            borderRadius: "50%",
            color: "white",
            cursor: "pointer",
            fontSize: "20px",
            height: 30,
            lineHeight: 1,
            textAlign: "center",
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 3,
            itemsToScroll: 3,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div
          className="slide"
          style={{ width: 200, height: 200, background: "#ffff" }}
        >
          <img
            src="https://api.bubilet.com.tr/files/Etkinlik/yuzyuzeyken-konusuruz-konseri-13140.jpg"
            alt=""
            height="200px"
          />
        </div>
        <div
          className="slide"
          style={{ width: 200, height: 200, background: "#ffff" }}
        >
          <img
            src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/yildiz-tilbe-2022621105142.jpg"
            alt=""
            height="200px"
          />
        </div>
        <div
          className="slide"
          style={{ width: 200, height: 200, background: "#ffff" }}
        >
          <img
            src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/korkuyu-beklerken-202212615424.jpg"
            alt=""
            height="200px"
          />
        </div>
        <div
          className="slide"
          style={{ width: 200, height: 200, background: "#ffff" }}
        >
          <img
            src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/istanbul-festivali-9-gun-haluk-levent-20226295722.jpg"
            alt=""
            height="200px"
          />
        </div>
        <div
          className="slide"
          style={{ width: 200, height: 200, background: "#ffff" }}
        >
          <img
            src="https://kdaidggt0f3v.merlincdn.net/Uploads/Films/plastik-asklar-2021106112645.jpg"
            alt=""
            height="200px"
          />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default TheatreCarousel;
