import React, { lazy, Suspense } from "react";
import { Loading } from 'carbon-components-react';
import "./App.scss";

const MainHeader = lazy(() => import("./components/MainHeader"));
const Content = lazy(() => import("./components/Content/Content"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading/>}>
        <MainHeader />
      </Suspense>
      <Suspense fallback="">
        <Content />
      </Suspense>
    </>
  );
};

export default App;
