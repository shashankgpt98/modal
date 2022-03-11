import React, { useState } from "react";
import "./style.css";
const OpenSliderModal = ({ mod, setShow }) => {
  console.log(mod);
  const closeSLider = () => {
    setShow(false);
  };
  return (
    <div className={`modal-wrapper + ${mod} `}>
      <div className="border">
        <button className="modal_btn" onClick={closeSLider}>
          Close
        </button>
        <span className="header">Modal Content</span>
      </div>
      <div className="a">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
    </div>
  );
};
const BottomSlider = () => {
  const [show, setShow] = useState(false);
  const [mod, showMod] = useState("");
  const openSlider = (val) => {
    switch (val) {
      case "start-bottom":
        showMod("start-bottom");
        break;
      case "start-top":
        showMod("start-top");
        break;
      case "start-left":
        showMod("start-left");
        break;
      case "start-right":
        showMod("start-right");
        break;
      default:
        break;
    }
    setShow(true);
  };
  return (
    <div className="container">
      <div>
        {!show && (
          <div>
              <div  className="btn-grp">
            <button className="btn" onClick={() => openSlider("start-bottom")}>
              Open Bottom Modal
            </button>
            <button className="btn" onClick={() => openSlider("start-top")}>
            Open Top Modal
            </button>
            </div>
            <button className="btn" onClick={() => openSlider("start-left")}>
            Open Left Modal
            </button>
            <button className="btn" onClick={() => openSlider("start-right")}>
            Open Right Modal
            </button>
          </div>
        )}
      </div>
      <div>
        <div>{show && <OpenSliderModal mod={mod} setShow={setShow} />}</div>
      </div>
    </div>
  );
};

export default BottomSlider;
