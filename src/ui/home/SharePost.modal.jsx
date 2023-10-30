import { useState } from "react";
import emailjs from "@emailjs/browser";
import Modal from "../Modal";
import SendIcon from '@mui/icons-material/Send';

const SharePost = () => {
  const [isShown, setIsShown] = useState(false);

  const sharePost = () => {
    const templateParams = {
      from_name: 'Jason',
      message: 'Check this out!'
    };

    emailjs.send("service_ans5h76", "template_miykvtn", templateParams, "91VwoWOTwWorzt825")
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
    }, (error) => {
      console.log('FAILED...', error);
   });
  };

  return (
    <>
      <button
        className="hover:text-red-800"
        onClick={() => {
          setIsShown(true);
        }}
      >
        <SendIcon sx={{ fontSize: 30 }} />
      </button>
      <Modal
        header={
          <div className="text-xl flex flex-col gap-2 w-full text-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl text-center">Share</h1>
            </div>
            <hr />
          </div>
        }
        show={isShown}
        onHide={() => {
          setIsShown(false);
          }}
        maxWidth="25vw"
      >
        <div className="flex flex-col gap-2 p-5">
        <div className="flex flex-col gap-1">
            <label
              htmlFor="share"
              className="font-bold"
            >
              To:
            </label>
            <input 
              id="share"
              className="rounded-sm p-3 bg-stone-200 focus:bg-stone-400 text-[#171717] outline-none"
              placeholder="example@gmail.com" 
            />
          </div>
          <button
            className="bg-stone-200 hover:bg-stone-400 text-[#171717] font-bold p-3 rounded-sm text-center"
            onClick={sharePost}
          >
            Send
          </button>
        </div>
      </Modal>
    </>
  );
};

export default SharePost;