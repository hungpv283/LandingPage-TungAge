import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { faTrophy, faGavel } from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";


interface IFreestyleMenu {
  title: string;
  icon: ReactNode;
  content: string;
}
const ICON_SIZE = 'w-10 h-10 py-2';

const listFreestyleMenu: IFreestyleMenu[] = [
  {
    title: "ACHIVEMENTS:",
    content: "Nation champion | Top 1 Asia Ranked | Top 4 World Ranked",
    icon: < FontAwesomeIcon icon={faTrophy} className={ICON_SIZE} />,

  },
  {
    title: "JURY:",
    content: "Giải vô địch Châu Á 2018 -2024 | Giải vô địch Thế Giới 2020 + 2021",
    icon: < FontAwesomeIcon icon={faGavel} className={ICON_SIZE} />,

  },
  {
    title: "Ambassador:",
    content: "Bundesliga Global 2019-2021 | adidas Vietnam 2016-2022 | Tiger Beer Global 2019 | Chervolet US 2017",
    icon: <FontAwesomeIcon icon={faHandshake} className={ICON_SIZE} />
  },
];
export default listFreestyleMenu;