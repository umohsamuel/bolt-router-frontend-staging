import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export const footerLinksArr = [
  {
    title: "Company",
    links: [
      { linkTitle: "Home", linkUrl: "#" },
      { linkTitle: "About us", linkUrl: "#" },
      { linkTitle: "Services", linkUrl: "#" },
      { linkTitle: "Careers", linkUrl: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { linkTitle: "Community", linkUrl: "#" },
      { linkTitle: "Video Tutorials", linkUrl: "#" },
      { linkTitle: "API Documentation", linkUrl: "#" },
      { linkTitle: "Security Reports", linkUrl: "#" },
    ],
  },
  {
    title: "Help",
    links: [
      { linkTitle: "Customer Support", linkUrl: "#" },
      { linkTitle: "Terms & Conditions", linkUrl: "#" },
      { linkTitle: "Privacy Policy", linkUrl: "#" },
    ],
  },
];

export const socialMediaLinks = [
  {
    icon: <Facebook size={14} color="#DCDCE4" aria-disabled={true} />,
    link: "#",
  },
  {
    icon: <Twitter size={14} color="#DCDCE4" aria-disabled={true} />,
    link: "#",
  },
  {
    icon: <Linkedin size={14} color="#DCDCE4" aria-disabled={true} />,
    link: "#",
  },
  {
    icon: <Instagram size={14} color="#DCDCE4" aria-disabled={true} />,
    link: "#",
  },
];
