import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import ImageGallery from "./components/ImageGallery";

function App() {
  const ACCES_KEY = "hPSd_YdcdR-y-7K9YCLUf7GqX1DmigU28igAbGQfZzA";
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    async function fetchImages() {
      const response = await axios.get(
        "https://api.unsplash.com/photos/?client_id=hPSd_YdcdR-y-7K9YCLUf7GqX1DmigU28igAbGQfZzA",
      );
      setImages(response.data);
      console.log(response);
    }
    fetchImages();
  }, []);

  return (
    <>
      <SearchBar onSearch={setQuery} />
      {images.length > 0 && <ImageGallery items={images} />}
    </>
  );
}

export default App;
