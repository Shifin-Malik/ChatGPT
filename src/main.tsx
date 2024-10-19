import React from "react";
import { createRoot } from "react-dom/client";
import { ButtonStyleTypes, ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";

import "./index.css";

const queryClient = new QueryClient();

const theme = {
  button: {
    defaultProps: {
      className: "bg-primary",
    },
  } as ButtonStyleTypes,
};

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={theme}>{(<App />) as any}</ThemeProvider>

        {/* <ReactQueryDevtools buttonPosition="top-right" /> */}
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
);