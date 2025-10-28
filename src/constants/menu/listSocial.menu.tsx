import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FACEBOOK_LINK, INSTAGRAM_LINK, TIKTOK_LINK, YOUTUBE_LINK } from "../directions/social.direction";

// Interface definition
interface ISocialMenu {
  title: string;
  href: string;
  icon: ReactNode;
}
const ICON_SIZE = 'w-8 h-8';

// Array of social menu items
const listSocialMenu: ISocialMenu[] = [
  {
    title: "Facebook",
    href: `${FACEBOOK_LINK}`,
    icon: <FontAwesomeIcon
      icon={faFacebook}
      className={ICON_SIZE}
    />
  },
  {
    title: "Instagram",
    href: `${INSTAGRAM_LINK}`,
    icon: <FontAwesomeIcon
      icon={faInstagram}
      className={ICON_SIZE}
    />
  },
  {
    title: "YouTube",
    href: `${YOUTUBE_LINK}`,
    icon: <FontAwesomeIcon
      icon={faYoutube}
      className={ICON_SIZE}
    />
  },
  {
    title: "Tik Tok",
    href: `${TIKTOK_LINK}`,
    icon: <FontAwesomeIcon
      icon={faTiktok}
      className={ICON_SIZE}
    />
  },
];

export default listSocialMenu;
