import React from "react";
import { graphql } from "react-apollo";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";

interface IProps {
  isLoggedIn: boolean;
}

// 데이터를 쿼리로 가져온 후 컴포넌트에 데이터를 넘겨 렌더링하는 컴포넌트에게 prop로 값 전달
const AppContainer: any = (props: any) => (
  <AppPresenter isLoggedIn={props.data.auth.isLoggedIn} />
  //   <div>{JSON.stringify(props.data)}</div>
);

export default graphql(IS_LOGGED_IN)(AppContainer);