import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-6.png" />
          <div className="rectangle-2" />
          <div className="text-wrapper">BrandNmame</div>
          <div className="text-wrapper-2">Doc</div>
          <div className="text-wrapper-3">Pricing</div>
          <div className="text-wrapper-4">Contact</div>
          <div className="text-wrapper-5">Airtime</div>
          <div className="text-wrapper-6">Login</div>
          <div className="group">
            <div className="overlap-group">
              <img className="quill-arrow-left" alt="Quill arrow left" src="/img/quill-arrow-left.svg" />
              <div className="text-wrapper-7">Join us</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="div-wrapper">
              <div className="text-wrapper-8">Learn more</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-9">Join us</div>
            </div>
          </div>
          <p className="find-the-right">
            Find the right instructor for you from
            <br />
            over 20,000 teachers
          </p>
          <div className="element-STUDENTS-TRUST">
            2000+ STUDENTS <br />
            TRUST US
          </div>
          <div className="text-wrapper-10">welcome</div>
        </div>
        <img className="img" alt="Rectangle" src="/img/rectangle-7.png" />
        <div className="text-wrapper-11">Video in live action</div>
        <p className="watch-the-video-on">
          Watch the video on how to navigate <br />
          through this site
        </p>
      </div>
    </div>
  );
};
