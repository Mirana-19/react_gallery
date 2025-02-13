/* eslint-disable react/prop-types */

import { Container } from '../../common/Container/Container';
import { GalleryImage } from '../GalleryImage/GalleryImage';

export const Gallery = ({ images }) => {
  return (
    <section>
      <Container>
        <ul>
          {images.map(({ webformatURL, id, likes, views, comments, downloads }) => (
            <li key={id}>
              <GalleryImage img={webformatURL} stats={{ likes, views, comments, downloads }} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
