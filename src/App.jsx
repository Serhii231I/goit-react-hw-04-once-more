import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import { fetchTopics } from "./topics";
import { PacmanLoader } from "react-spinners";
import ErrorMessage from "./components/ErrorMessage";
import ImageModal from "./components/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [selectedImages, setSelectedImages] = useState(null);
  const [page, setPage] = useState(1);

  const openModal = (image) => {
    setSelectedImages(image);
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
    setSelectedImages(null);
  };

  const handleSearch = async (topic) => {
    try {
      setLoading(true);
      setError(false);
      setImages([]);
      setPage(1);
      setQuery(topic);
      const data = await fetchTopics(topic);
      setImages(data);
    } catch (error) {
      console.log(error);

      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const handleLoadMore = async () => {
    try {
      const nextPage = page + 1;
      setLoading(true);
      const data = await fetchTopics(query, nextPage);
      setImages((prev) => [...prev, ...data]);
      setPage(nextPage);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {loading && <PacmanLoader />}
      {images.length > 0 && (
        <>
          <ImageGallery items={images} onImageClick={openModal} />

          <LoadMoreBtn onClick={handleLoadMore} />
        </>
      )}
      {isModal && (
        <ImageModal
          isOpen={isModal}
          images={selectedImages}
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default App;
