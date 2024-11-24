import { Facebook, Twitter, Linkedin, Instagram, type LucideIcon } from "lucide-react";

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

interface SocialMediaLinksItems{
  icon: LucideIcon;
  link: string;
}

export const socialMediaLinks = [
  {
    icon: Facebook,
    link: "#",
  },
  {
    icon: Twitter,
    link: "#",
  },
  {
    icon: Linkedin,
    link: "#",
  },
  {
    icon: Instagram,
    link: "#",
  },
] satisfies SocialMediaLinksItems[];
