// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "RobotX and More";
export const SITE_DESCRIPTION =
  "Welcome👋  to Robotics & More! This educational channel simplifies the fields of robotics and artificial intelligence, with a focus on computer science. We primarily use Arabic for explanations, while technical terms are in English.";
export const TWITTER_HANDLE = "@whyzhi";
export const MY_NAME = "RobotX and More";

// setup in astro.config.mjs
const BASE_URL = new URL(import.meta.env.SITE);
export const SITE_URL = BASE_URL.origin;
