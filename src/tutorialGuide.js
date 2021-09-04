import React from "react";
import './tutorial.css';
import img1 from "./img/tutorial/tutorial1.jpg";
import img2 from "./img/tutorial/tutorial2.jpg";
import img3 from "./img/tutorial/tutorial3.jpg";

export default function TutorialInfo() {
    return (
        <>
            <div className="tutorial-header">
                <p>TUTORIAL GUIDE</p>
                <div className="tutorial-sub-header">영상 만들기 어렵지 않아요</div>
                <div className="about-sub">
                    <p>나에게 맞는 템플릿,</p>
                    <p>망설이지 말고 지금 직접 체험해보세요</p>
                </div>
            </div>

            <div className="tutorial-body">
                <div>
                    <img src={img1} alt= "img1" className="img-tutorial"></img>
                    <p></p>
                </div>
                <div >
                    <img src={img2} alt= "img2" className="img-tutorial"></img>
                </div>
                <div >
                    <img src={img3} alt= "img3" className="img-tutorial"></img>
                </div>
            </div>
        </>
      );
}