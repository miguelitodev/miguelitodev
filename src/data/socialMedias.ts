export interface SocialMedia {
  id: string;
  name: string;
  link: string;
}

export const professionalSocialMedias: SocialMedia[] = [
  {
    id: "github",
    name: "GitHub",
    link: "https://github.com/miguelitodev",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/miguelitodev",
  },
  {
    id: "medium",
    name: "Medium",
    link: "https://medium.com/@miguelito.dev",
  },
  {
    id: "devto",
    name: "Dev.to",
    link: "https://dev.to/miguelito",
  },
  {
    id: "stackoverflow",
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/13791751/miguelito-dev",
  },
  {
    id: "figma",
    name: "Figma",
    link: "https://www.figma.com/@miguelitodev",
  },
  {
    id: "codepen",
    name: "CodePen",
    link: "https://codepen.io/miguelitodev",
  },
  {
    id: "codesandbox",
    name: "CodeSandbox",
    link: "https://codesandbox.io/u/miguelitodev",
  },
  {
    id: "email",
    name: "E-mail",
    link: "mailto:miguelrisquelme@gmail.com",
  },
].sort((a, b) => a.name.localeCompare(b.name));

export const personalSocialMedias: SocialMedia[] = [
  {
    id: "letterboxd",
    name: "Letterboxd",
    link: "https://letterboxd.com/miguelitodev",
  },
  {
    id: "twitter",
    name: "Twitter",
    link: "https://x.com/miguelitoodev",
  },
  {
    id: "reddit",
    name: "Reddit",
    link: "https://www.reddit.com/user/miguelrisquelme/",
  },
  {
    id: "youtube",
    name: "YouTube",
    link: "https://www.youtube.com/@miguelitodev",
  },
  {
    id: "instagram",
    name: "Instagram",
    link: "https://www.instagram.com/miguelito.dev",
  },
  {
    id: "facebook",
    name: "Facebook",
    link: "https://www.facebook.com/miguelito.dev",
  },
  {
    id: "threads",
    name: "Threads",
    link: "https://www.threads.net/@miguelito.dev",
  },
  {
    id: "pinterest",
    name: "Pinterest",
    link: "https://br.pinterest.com/miguelitodev/",
  },
  {
    id: "tiktok",
    name: "TikTok",
    link: "https://www.tiktok.com/@miguelitoodev",
  },
  {
    id: "spotify",
    name: "Spotify",
    link: "https://open.spotify.com/user/22gkbvjxtolpi4mmql22wh5ya",
  },
  {
    id: "twitch",
    name: "Twitch",
    link: "https://www.twitch.tv/miguelitoodev",
  },
].sort((a, b) => a.name.localeCompare(b.name));
