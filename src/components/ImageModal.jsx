import Modal from "react-modal";
Modal.setAppElement("#root");

export default function ImageModal({ isOpen, onClose, images }) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      {images && (
        <div onClick={onClose}>
          <img src={images.urls.regular} alt={images.alt_description} />
        </div>
      )}
    </Modal>
  );
}
