import { About } from "../pages/About";
import { Contact } from "../pages/Contact";
import { Home } from "../pages/Home";

export const routerConfig = [
  {
    path: "/",
    name: "home",
    component: <Home />,
  },
  {
    path: "/about",
    name: "about",
    component: <About />,
  },
  {
    path: "/contact",
    name: "contact",
    component: <Contact />,
  },
];
