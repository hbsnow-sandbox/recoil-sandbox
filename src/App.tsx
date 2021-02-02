import React, { Suspense } from "react";

import { DebugButton } from "./components/DebugButton";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { WeatherForm } from "./components/WeatherForm";
import { WeatherResult } from "./components/WeatherResult";

export const App: React.VFC = () => {
  return (
    <>
      <h1>お天気アプリ</h1>

      <WeatherForm />

      <ErrorBoundary fallback={<p>error</p>}>
        <Suspense fallback={<p>loading</p>}>
          <WeatherResult />
        </Suspense>
      </ErrorBoundary>

      <hr />

      <DebugButton />
    </>
  );
};
