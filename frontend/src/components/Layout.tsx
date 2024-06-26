"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  if (typeof window !== "undefined") {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};}

export default Layout;
