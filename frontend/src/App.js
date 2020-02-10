import React, { lazy, Suspense } from "react";
import "./App.scss";

const MainHeader = lazy(() => import("./components/MainHeader"));
const Content = lazy(() => import("./components/Content/Content"));

const App = () => {
  return (
    <>
      <Suspense fallback="">
        <MainHeader />
      </Suspense>
      <Suspense fallback="">
        <Content />
      </Suspense>
    </>
  );
};

export default App;
