import React, { lazy, Suspense } from "react";
import "./App.scss";

const TutorialHeader = lazy(() => import("./components/TutorialHeader"));
const Content = lazy(() => import("./components/Content/Content"));

const App = () => {
  return (
    <>
      <Suspense fallback="loading">
        <TutorialHeader />
      </Suspense>
      <Suspense fallback="loading">
        <Content />
      </Suspense>
    </>
  );
};

export default App;
