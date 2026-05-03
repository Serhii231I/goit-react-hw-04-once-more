import ImageCard from "./ImageCard";

export default function ImageGallery({ items, onImageClick }) {
  return (
    <ul>
      {items.map((image) => (
        <li key={image.id}>
          <div>
            <ImageCard img={image} onImageClick={onImageClick} />
          </div>
        </li>
      ))}
    </ul>
  );
}
