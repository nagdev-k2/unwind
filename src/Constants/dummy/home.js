const posts = [
  {
    content:
      'https://www.bollywoodhungama.com/wp-content/uploads/2019/08/Deepika-Padukone-loves-Romi-Dev%E2%80%99s-candour-as-she-plays-on-screen-wife-of-Ranveer-Singh-starrer-83.jpg',
    isFile: true,
  },
  {
    content:
      'Accept the challenges so that you can feel the exhilaration of victory.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    isFile: true,
  },
  {
    content:
      'Accept the challenges so that you can feel the exhilaration of victory.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2015/06/19/21/24/the-road-815297_1280.jpg',
    isFile: true,
  },
  {
    content: 'Be kind whenever possible. It is always possible.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2016/01/08/11/57/butterfly-1127666_1280.jpg',
    isFile: true,
  },
  {
    content:
      'Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2015/11/16/16/28/bird-1045954_1280.jpg',
    isFile: true,
  },
  {
    content: 'It does not matter how slowly you go as long as you do not stop.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2015/01/28/23/35/landscape-615429_1280.jpg',
    isFile: true,
  },
  {
    content:
      'Here are 450 of the best motivational quotes I could find. Some will inspire you for success and work. Others for tough times, change and life. Hope you’ll find the motivation you need.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_1280.jpg',
    isFile: true,
  },
  {
    content:
      'Knowing is not enough; we must apply. Willing is not enough; we must do.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2016/11/08/05/26/woman-1807533_1280.jpg',
    isFile: true,
  },
  {
    content: 'With the new day comes new strength and new thoughts.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2018/01/22/14/13/animal-3099035_1280.jpg',
    isFile: true,
  },
  {
    content:
      'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
    isFile: false,
  },
  {
    content:
      'https://cdn.pixabay.com/photo/2018/08/12/16/59/ara-3601194_1280.jpg',
    isFile: true,
  },
  {
    content:
      'The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.',
    isFile: false,
  },
];

const authorAvatar = [
  {
    name: 'SALMAN KHAN',
    avatar:
      'https://mashtos.com/wp-content/uploads/2020/02/Salman-Khan-is-one-of-the-Highest-Paid-Bollywood-actor.jpg'
  },
  {
    avatar:
      'https://english.samajalive.in/wp-content/uploads/2018/08/Huma-Qureshi.jpg',
    name: 'HUMA QURESHI',
  },
  {
    avatar:
      'https://www.ecopetit.cat/wpic/mpic/46-465386_full-hd-wallpapers-bollywood-actress-second-most-beautiful.jpg',
    name: 'PRIYANKA CHOPRA'
  },
  {
    avatar:
      'https://www.ntvtelugu.com/uploads/images/2018/06/image_default_60805b2375416cffa.jpg',
    name: 'VIJAY',
  },
];

const data = [];

posts.map((post, index) => {
  const authorIndex = Math.floor(Math.random() * Math.floor(3));
  const obj = {
    key: `${index}`,
    author: {
      avatar: authorAvatar[authorIndex].avatar,
      name: authorAvatar[authorIndex].name,
    },
    location: 'Mumbai, India',
    description: 'Lorem Ipsum',
    post: post.content,
    isFile: post.isFile,
  };
  data.push(obj);
});

export default data;
