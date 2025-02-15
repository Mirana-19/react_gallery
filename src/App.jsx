import { useEffect, useState } from 'react';
import { getImages } from './api/getImages';
import { Searchbar } from './components/Searchbar/Searchbar';
import { Gallery } from './components/Gallery/Gallery';

function App() {
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);

  const handleGetImages = async query => {
    const result = await getImages(query, page);
    setImages(result);
  };

  const handleLoadMore = () => setPage(prevState => prevState + 1);

  useEffect(() => {
    handleGetImages('cat');
  }, []);

  return (
    <>
      <Searchbar onSubmit={handleGetImages} />
      <Gallery images={images} />
    </>
  );
}

export default App;
