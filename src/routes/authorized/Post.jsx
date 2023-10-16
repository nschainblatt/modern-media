import Modal from "../../ui/Modal";
import CollectionsIcon from '@mui/icons-material/Collections';
import { useState, useEffect } from "react";

const Post = () => {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    setIsShown(true);
  }, []);

  return (
    <>
        <div className="flex">
          {isShown
            ? <div className="w-full flex flex-col text-center justify-center align-middle items-center">
                <Modal
                  header={
                    <div className="text-xl flex flex-col gap-2 w-full text-center">
                      <p>Post a new personal record</p>
                      <hr />
                    </div>
                  }
                  show={isShown}
                  onHide={() => setIsShown(false)}
                >
                  <div className="flex flex-col text-center items-center gap-10">
                    <CollectionsIcon sx={{ fontSize: 80 }} />
                    <h1 className="text-2xl">Drag a photo or video here</h1>
                    <button
                      className="bg-white hover:bg-stone-300 text-[#171717] font-bold py-2 px-4 rounded-lg text-center"
                    >
                      Select from camera roll
                    </button>
                  </div>
                </Modal>
              </div>
            : <></>
          }
        </div>
    </>
  );
};

export default Post;
