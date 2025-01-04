import { useState } from "react";
import Body from "./components/Body";
import store from "./utils/store";
import { Provider } from "react-redux";

const App = ()=>{
  return (
    <>
      <Provider store={store}>
        <Body />
      </Provider>
    </>
  )
}

export default App;