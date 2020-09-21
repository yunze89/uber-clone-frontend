import React from "react";
import { graphql } from "react-apollo";
import AppPresenter from "./AppPresenter";
import { IS_LOGGED_IN } from "./AppQueries";
import GlobalStyle from '../../global-styles';
import { theme } from "../../theme";
import { ThemeProvider } from "../../typed-components";

//toast 사용 위한 container, css 
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

interface IProps {
  isLoggedIn: boolean; //isLoggedIn props에 대한 타입설정
}

// 데이터를 쿼리로 가져온 후 컴포넌트에 데이터를 넘겨 렌더링하는 컴포넌트에게 prop로 값 전달
const AppContainer: any = (props: any) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <AppPresenter isLoggedIn={props.data.auth.isLoggedIn} />
      {/* <div>{JSON.stringify(props.data)}</div> */}
    </ThemeProvider>
    <ToastContainer draggable={true} position="bottom-center" />
  </>
);

export default graphql(IS_LOGGED_IN)(AppContainer);
