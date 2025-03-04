import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store/store.ts";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
<Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StrictMode>
          <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
              redirect_uri: window.location.origin + "/app",
              
            }}
            cacheLocation="localstorage"
          >
            <App/>
          </Auth0Provider>
          
        </StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
