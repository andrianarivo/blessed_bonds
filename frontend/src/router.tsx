import GeneralError from "@/pages/errors/general-error";
import MaintenanceError from "@/pages/errors/maintenance-error";
import NotFoundError from "@/pages/errors/not-found-error";
import UnauthorisedError from "@/pages/errors/unauthorised-error";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "./components/protected-route";

const router = createBrowserRouter([
  // Auth routes
  {
    path: "/",
    errorElement: <GeneralError />,
    children: [
      {
        path: "sign-in",
        lazy: async () => ({
          Component: (await import("@/pages/sign-in/sign-in-container")).default,
        }),
      },
      {
        path: "sign-up",
        lazy: async () => ({
          Component: (await import("@/pages/sign-up/sign-up-container")).default,
        }),
      },
    ],
  },

  // Main routes
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <GeneralError />,
    children: [
      {
        lazy: async () => ({
          Component: (await import("@/pages/home")).default,
        }),
      },
    ],
  },

  // Error routes
  { path: "/500", Component: GeneralError },
  { path: "/404", Component: NotFoundError },
  { path: "/503", Component: MaintenanceError },
  { path: "/401", Component: UnauthorisedError },

  // Fallback 404 route
  { path: "*", Component: NotFoundError },
]);

export default router;
