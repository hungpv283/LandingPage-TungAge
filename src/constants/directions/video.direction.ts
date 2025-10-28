type videoDirectionTypes = {
  videoDirection: string;
  introductionImg: string;
  embed?: boolean;
};
export const videoDirection: videoDirectionTypes[] = [
  {
    videoDirection: "https://www.youtube.com/watch?v=A-tX5PI3V0o",
    introductionImg: "/images/Dic2.png",
    embed: true,
  },

  {
    videoDirection: "https://www.youtube.com/watch?v=p7YGAKeDPkM",
    introductionImg: "/images/Dic3.png",
    embed: false,
  },
];
