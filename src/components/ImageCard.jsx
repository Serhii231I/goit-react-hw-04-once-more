export default function ImageCard({ img, onImageClick }) {
  return (
    <>
      <img
        src={img.urls.small}
        alt={img.alt_description}
        onClick={() => onImageClick(img)}
      />
    </>
  );
}
