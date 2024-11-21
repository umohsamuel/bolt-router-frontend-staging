import { MenuItem } from "@/types/navbar";

export const navLinks: MenuItem[] =  [
  { title: "About", link: "/about" },
  { title: "Cross Swap", link: "/cross-swap" },
  { 
    title: "Explorer", 
    link: "/explorer", 
    children: []
  },
];

