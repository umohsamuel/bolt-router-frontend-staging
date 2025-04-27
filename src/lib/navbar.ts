import { MenuItem } from "@/types";
import { routes } from "./routes";

export const navLinks: MenuItem[] = [
  { title: "About", link: routes.about },
  { title: "Cross Swap", link: routes.crossSwap.base },
  {
    title: "Explorer",
    link: routes.explorer,
    children: [],
  },
];
