import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://zahidui.com/", // replace this with your deployed domain
  author: "Zahid Ul Islam",
  profile: "https://zahidui.com/",
  desc: "A passionate frontend programmer.",
  title: "Zahid Ul Islam",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/zahidtwt",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Facebook",
    href: "https://facebook.com/zahidtwt",
    linkTitle: `${SITE.title} on Facebook`,
    active: true,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/zahidui",
    linkTitle: `${SITE.title} on Instagram`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/zahidtwt",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:zahidtwt@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/zahid_ui",
    linkTitle: `${SITE.title} on Twitter`,
    active: false,
  },
  {
    name: "Telegram",
    href: "https://t.me/zahidtwt",
    linkTitle: `${SITE.title} on Telegram`,
    active: false,
  },
];
