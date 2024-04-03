import { SiteConfig } from "@/types";

export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://gap-navigator.vercel.app";

export const siteConfig: SiteConfig = {
  name: "HTByte",
  stitchedName: "Hyper-Threading Byte",
  description: "Hyper-Threading Byte",
  emailFrom: "tanvir3080@gmail.com",
  url: url,
  links: {
    twitter: "https://twitter.com/#",
    github: "https://github.com/#",
    facebook: "https://facebook.com/#",
    instagram: "https://instagram.com/#",
  },
};
