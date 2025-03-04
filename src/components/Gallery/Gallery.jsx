/* eslint-disable react/prop-types */

import { Container } from '../../common/Container/Container';
import { GalleryImage } from '../GalleryImage/GalleryImage';



export const Gallery = ({ images }) => {
  return (
    <section>
      <Container>
        <ul className="flex flex-wrap gap-[24px]">
          {images.map(({ webformatURL, id, likes, views, comments, downloads, tags }) => (
            <li key={id}>
              <GalleryImage
                img={webformatURL}
                stats={{ likes, views, comments, downloads, tags }}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

