import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import AppRoute from "./Routers/Routes.jsx";
import {AuthProvider} from "./Context/AuthContext.jsx";
import { Toaster } from 'sonner'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ThemeProvider } from "./Context/ThemeProvider.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Toaster  position="top-right" richColors />
      <AuthProvider>
        <ThemeProvider>
        <AppRoute />
        </ThemeProvider>
      </AuthProvider>
      </QueryClientProvider>
    </BrowserRouter>
    </StrictMode>
);
