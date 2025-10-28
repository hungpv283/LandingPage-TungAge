import { CONTACT_PAGE, CONTENT_CREATOR_PAGE, DIRECTOR_PAGE, FREESTYLE_FOOTBALL_PAGE, HOME_PAGE } from "../directions/link.direction";

interface IMenu {
  title: string;
  href: string;
}

export const listMenu: IMenu[] = [
  {
    title: "Home",
    href: `${HOME_PAGE}`,
  },
  {
    title: "Freestyle",
    href: `${FREESTYLE_FOOTBALL_PAGE}`,
  },
  {
    title: "Director",
    href: `${DIRECTOR_PAGE}`,
  },
  {
    title: "Content Creator",
    href: `${CONTENT_CREATOR_PAGE}`,
  },
  {
    title: "Contact",
    href: `${CONTACT_PAGE}`,
  },
];