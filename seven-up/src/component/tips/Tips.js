import React, { useMemo, useRef, useState, useEffect } from "react";
import { SomeTipsData } from "../../Data/someTips";
import useOnscreen from "../../hooks/useOnScreen";
import Layout from "../LayOut/LayOut";
import "./Tips.css";

function Tips() {
  let [selected, setSelected] = useState(0);

  let [righto, setRighto] = useState("");

  let [lefto, setLefto] = useState("");

  let [disp, setDisp] = useState("");

  let ref = useRef(null);

  let memoOptions = useMemo(() => {
    return { threshold: 0.5 };
  }, []);

  let isVisible = useOnscreen(ref, memoOptions);

  useEffect(() => {
    setTimeout(() => {
      setRighto("");
      setLefto("");
      setDisp("");
    }, 300);
  }, [righto, lefto, disp]);

  const handleLeftArrow = () => {
    if (selected >= 0) {
      setSelected((prv) => prv + 1);
    }
    if (selected === SomeTipsData.length - 1) {
      setSelected(0);
    }
    setRighto("translateToRight");
    setLefto("translateToLeft");
    setDisp("disp");
  };

  const handleRightArrow = () => {
    if (selected >= 0) {
      setSelected((prv) => prv + 1);
    }
    if (selected === SomeTipsData.length - 1) {
      setSelected(0);
    }
    setRighto("translateToRight");
    setLefto("translateToLeft");
    setDisp("disp");
  };

  return (
    <Layout>
      <div className="container">
        <div className="tips">
          <div className="tips-heading heading-section">Some Tips</div>

          <div className="tips-container">
            <div className="tips-left-side">
              <div className={`${righto} heading-right `}>
                Tip {SomeTipsData[selected].type}
              </div>

              <div className={`${righto}`}> {SomeTipsData[selected].text} </div>
            </div>

            <div className="tips-right-side">
              <div className="img-left-container">
                <div
                  className={`cadre ${isVisible ? "animateCadre" : ""}`}
                  ref={ref}></div>
                <div className={`full ${isVisible ? "animateFull" : ""}`}></div>
                <img
                  src={SomeTipsData[selected].image}
                  alt="slide"
                  className={`${lefto}`}
                />
                <div className="arrows">
                  <img
                    src="./Assets/leftArrow.png"
                    alt="left"
                    onClick={handleLeftArrow}
                  />
                  <img
                    src="./Assets/rightArrow.png"
                    alt="right"
                    onClick={handleRightArrow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Tips;
