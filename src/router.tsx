import { createBrowserRouter } from "react-router-dom";
import { SiteFrame } from "./components/SiteFrame";
import { AboutPage } from "./pages/AboutPage";
import { ConsultingPage } from "./pages/ConsultingPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SpeakingPage } from "./pages/SpeakingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteFrame />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "speaking",
        element: <SpeakingPage />,
      },
      {
        path: "consulting",
        element: <ConsultingPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

