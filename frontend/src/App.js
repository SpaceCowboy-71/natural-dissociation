import React, { lazy, Suspense } from "react";
import { Loading, InlineNotification, NotificationActionButton } from "carbon-components-react";
import CookieBanner from "react-cookie-banner";
import "./App.scss";

const MainHeader = lazy(() => import("./components/MainHeader"));
const Content = lazy(() => import("./components/Content/Content"));

const App = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MainHeader />
      </Suspense>
      <Suspense fallback="">
        <Content />
      </Suspense>
      <CookieBanner cookiePath="/" cookie="cookie-notification-accepted" dismissOnScroll={false}>
        {onAccept => (
          <InlineNotification
            title="This website uses cookies to ensure optimal user experience. "
            subtitle=""
            hideCloseButton={true}
            kind="warning"
            actions={<NotificationActionButton onClick={onAccept}>Accept</NotificationActionButton>}
            onCloseButtonClick={onAccept}
          />
        )}
      </CookieBanner>
    </>
  );
};

export default App;
