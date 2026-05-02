import ImageCard from "./ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul>
      {items.map(({ id, alt_description, urls }) => (
        <li key={id}>
          <div>
            <ImageCard urls={urls} alt={alt_description} />
          </div>
        </li>
      ))}
    </ul>
  );
}
