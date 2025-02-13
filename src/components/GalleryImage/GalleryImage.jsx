/* eslint-disable react/prop-types */
export const GalleryImage = ({img, stats:{ likes, views, comments, downloads}}) => {
  return <div>
    <img src={img} alt="" />
    <ul>
      <li><p>Likes {likes}</p></li>
      <li><p>Viewvs {views}</p></li>
      <li><p>Comments{comments}</p></li>
      <li><p>Downloads {downloads}</p></li>
    </ul>
  </div>;
};


// collections: 1750;
// comments: 24;
// downloads: 33068;
// id: 7271017;
// imageHeight: 2561;
// imageSize: 1593682;
// imageWidth: 3842;
// largeImageURL: 'https://pixabay.com/get/g1e23c50eda2195d2565c2ae9d59aff2630854ce2a0f7cf191c68ce7afad806ed0b6a6a33c89e7e0bfd39a8fb2f1dedc3fbc7f6e76c466a218ac0fc4cb430b87c_1280.jpg';
// likes: 148;
// pageURL: 'https://pixabay.com/photos/cat-animal-pet-lounging-feline-7271017/';
// previewHeight: 100;
// previewURL: 'https://cdn.pixabay.com/photo/2022/06/19/04/25/cat-7271017_150.jpg';
// previewWidth: 150;
// tags: 'cat, animal, pet, lounging, feline, domestic cat, cat, cat, nature, cat, cat, cat';
// type: 'photo';
// user: 'Martadireja';
// userImageURL: 'https://cdn.pixabay.com/user/2019/06/28/16-06-48-143_250x250.jpg';
// user_id: 12902725;
// views: 40937;
// webformatHeight: 427;
// webformatURL: 'https://pixabay.com/get/g7e0f219a11358267c8a14303d9d82cd31e6dc5f0caab187b194737f01db80207a6dd843234fa160b140e4fb37c55f04bce296c848bdf124b5cc25738c28c1f84_640.jpg';
// webformatWidth: 640;