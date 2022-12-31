import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/storeConfig";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "Configs/ChakraTheme";
import { i18nextInit } from "Configs/i18nextInit";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

/* Initializing the i18next library. */
i18nextInit();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Suspense>
          <App />
        </Suspense>
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
