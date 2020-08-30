import React from "react";

//실제 컴포넌트를 어떻게 그릴지 작성하는 부분
const AppPresenter = ({ isLoggedIn }: any) => (
  <span>{isLoggedIn ? "you are in" : "you are out"}</span>
);

export default AppPresenter;
