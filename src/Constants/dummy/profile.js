const admirers = [];

for (let i = 0; i < 150; i++) {
  if (i !== 10) {
    admirers.push ({
      id: `${i}`,
      name: `TEST ${i}`,
    });
  }
}

const myFeeds = [
  'https://i.pinimg.com/originals/51/2b/4f/512b4fa1f2695a6f724b55bbd411b924.jpg',
  'https://sc01.alicdn.com/kf/HTB1GYxQNFXXXXcfXXXXq6xXFXXXy.jpg_350x350.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/738/250/new_large/final_cover.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/733/627/new_large/rohir_gandhi_mangrove.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/733/491/new_large/gaurav_gupta2.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/000/621/468/new_large/anjumadaancouture.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/691/391/new_large/92511892_843566549486139_1230387399121069806_n.jpg',
  'https://images.shaadisaga.com/shaadisaga_production/photos/pictures/001/691/451/new_large/87474001_1324937877715150_5463365707114136298_n.jpg',
];

const myNotes = [
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
  'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ',
];

export default {
  id: '10',
  userAvatar: 'https://i.ytimg.com/vi/Cwu1x1SP3kQ/maxresdefault.jpg',
  name: 'USER NAME',
  admirers,
  admires: admirers,
  profileDescription:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  myFeeds,
  myNotes,
};
