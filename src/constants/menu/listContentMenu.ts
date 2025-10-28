interface IContentMenu {
  img: string;
  title: string;
  className?: string;
}
const SIZE = "h-32 w-32 flex justify-center items-center mt-6";
const listContentMenu: IContentMenu[] =
  [
    {
      img: '/images/apple.png',
      title: 'Apple',
      className: SIZE
    },
    {
      img: '/images/nike.jpg',
      title: 'Nike',
      className: SIZE
    },
    {
      img: '/images/adidas.jpg',
      title: 'Adidas',
      className: SIZE
    },
    {
      img: '/images/puma.jpg',
      title: 'Puma',
      className: SIZE
    },
    {
      img: '/images/redbull.jpg',
      title: 'RedBull',
      className: SIZE
    },
    {
      img: '/images/pepsi.jpg',
      title: 'Pepsi',
      className: SIZE
    },
    {
      img: '/images/heineken.jpg',
      title: 'Heineken',
      className: SIZE
    },
    {
      img: '/images/Bundesliga.png',
      title: 'Bundesliga',
      className: SIZE
    },
    {
      img: '/images/MILO.jpg',
      title: 'Milo',
      className: SIZE
    },
    {
      img: '/images/chevrolet.jpg',
      title: 'Chevrolet',
      className: SIZE
    },
    {
      img: '/images/Coca-Cola.png',
      title: 'CocaCola',
      className: SIZE
    },
    {
      img: '/images/Tiger.png',
      title: 'Tiger',
      className: SIZE
    },
    {
      img: '/images/Castrol.png',
      title: 'Castrol',
      className: SIZE
    },
    {
      img: '/images/Chivas.png',
      title: 'Chivas',
      className: SIZE
    },

  ];
export default listContentMenu;