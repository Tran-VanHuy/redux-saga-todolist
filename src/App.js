import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";
import List from "./view/login/List";
import RdxA from "./view/RdxA";
import RdxB from "./view/RdxB";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <RdxA />
        <RdxB /> */}
        <List />
      </div>
    </Provider>
  );
}

export default App;
