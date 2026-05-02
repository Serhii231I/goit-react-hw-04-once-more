export default function ImageCard({ urls, alt_description }) {
  return (
    <>
      <a href="" alt={alt_description}>
        <img src={urls.regular} />
      </a>
    </>
  );
}
