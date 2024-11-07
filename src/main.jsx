import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { CssBaseline } from "@mui/material";
import App from "./App.jsx";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "./client/client.js";

// Создаем экземпляр QueryClient

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
      <CssBaseline />
    </QueryClientProvider>
  </BrowserRouter>
);
