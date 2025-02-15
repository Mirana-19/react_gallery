/* eslint-disable react/prop-types */
export const GalleryImage = ({ img, stats: { likes, views, comments, downloads, tags } }) => {
  return (
    <div className="relative border border-gray overflow-hidden">
      <img src={img} alt={tags} className=" w-[360px]  h-[200px]" />
      <ul className="absolute w-full bottom-[100%] left-0 flex bg-white px-[4px] px[22px] justify-around hover:bottom-0 ">
        <li className="flex flex-col items-center">
          <p>Likes</p>
          <p>{likes}</p>
        </li>
        <li className="flex flex-col items-center">
          <p>Views</p>
          <p>{views}</p>
        </li>
        <li className="flex flex-col items-center">
          <p>Comments</p>
          <p>{comments}</p>
        </li>
        <li className="flex flex-col items-center">
          <p>Downloads</p>
          <p>{downloads}</p>
        </li>
      </ul>
    </div>
  );
};
