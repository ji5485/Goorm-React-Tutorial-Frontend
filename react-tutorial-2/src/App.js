import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="input_boxes">
        <div className="input_box">
          <div className="input_box_name">이름</div>
          <input
            type="text"
            placeholder="이름"
            name="name"
            className="input_box_input"
          />
        </div>
        <div className="input_box">
          <div className="input_box_name">전화번호</div>
          <input
            type="text"
            placeholder="전화번호"
            name="phone"
            className="input_box_input"
          />
        </div>
        <button className="input_box_button">저장</button>
      </div>

      <div className="phone_list">
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
        <div className="phone_item">
          <div className="phone_item_left">
            <div className="phone_item_name">홍길동</div>
            <div className="phone_item_phone">010-0000-0000</div>
          </div>
          <div className="phone_item_right">
            <button>삭제</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
