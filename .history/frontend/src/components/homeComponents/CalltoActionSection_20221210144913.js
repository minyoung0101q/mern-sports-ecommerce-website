import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>BES</h2>
              <p>스포츠 용품을 판매하는 브랜드 웹앱</p>
              <form className="form-section">
                <input placeholder="이메일..." name="email" type="email" />
                <input value="수신" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
