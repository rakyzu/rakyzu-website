export type Lang = "en" | "id" | "zh";

export type Translation = {
  nav: Record<string, string>;
  hero: { greeting: string; title: string; subtitle: string; description: string; cta1: string; cta2: string };
  about: { title: string; p1: string; p2: string; p3: string };
  skills: { title: string; subtitle: string };
  projects: { title: string; subtitle: string; loading: string };
  experience: { title: string; subtitle: string };
  guestbook: { title: string; subtitle: string; name: string; message: string; sign: string };
  contact: { title: string; subtitle: string; name: string; email: string; message: string; send: string };
  footer: { copyright: string };
};

export const languages: { value: Lang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "id", label: "Indonesia" },
  { value: "zh", label: "中文" },
];

export const defaultLang: Lang = "en";

export { en } from "./en";
export { id } from "./id";
export { zh } from "./zh";
