import Modal from "../../ui/Modal";
import CollectionsIcon from '@mui/icons-material/Collections';
import { useState, useRef } from "react";

const Post = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  return (
    <>
      <Modal
        animation={false}
        header={
          <div className="text-xl flex flex-col gap-2 w-full text-center">
            <p>Post a new personal record</p>
            <hr />
          </div>
        }
        show={true}
        maxWidth="25vw"
      >
        <div className="flex flex-col text-center items-center gap-10 mt-20 p-4">
          <CollectionsIcon sx={{ fontSize: 80 }} />
          <h1 className="text-2xl">Drag a photo or video here</h1>
          <button
            className="bg-white hover:bg-stone-300 text-[#171717] font-bold py-2 px-4 rounded-lg text-center"
            onClick={() => fileInputRef.current.click()}
          >
            Select from camera roll
          </button>
          <input 
            id="imageInput"
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={(event) => setSelectedImage(event.target.files[0])}
            className="hidden"
          />
          {selectedImage && (
            <img 
              src={URL.createObjectURL(selectedImage)}
              alt={selectedImage.name}
            />
          )}
        </div>
      </Modal>
    </>
  );
};

export default Post;
