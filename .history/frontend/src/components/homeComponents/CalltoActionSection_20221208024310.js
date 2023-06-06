import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>이벤트 광고 수신</h2>
              <p>이벤트를 가장 먼저 만나보세요~~</p>
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
