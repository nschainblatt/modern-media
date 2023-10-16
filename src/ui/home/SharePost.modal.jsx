import { useEffect } from "react";
import emailjs from "@emailjs/browser";

const SharePost = ({ isShown, setIsShown }) => {

  useEffect(() => {
    if (isShown) {
      document.body.style.overflow = "hidden";
    }
  }, [isShown]);
  
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
      <div 
        className="fixed inset-0 min-w-[100vw] min-h-[100vh] bg-red-950 opacity-25" 
        onClick={() => {
            document.body.style.overflow = "auto";
            setIsShown(false);
          }
        }
      />
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-1/3 h-1/3 bg-[#171717] rounded-xl flex flex-col gap-2 p-5">
          <h1>Share</h1>
          <hr />
          <div className="flex gap-2">
            <label
              htmlFor="share"
              className="font-bold"
            >
              To:
            </label>
            <input 
              id="share"
              className="bg-transparent outline-none"
              placeholder="example@gmail.com" 
            />
          </div>
          <hr />
          <button
            className="bg-red-950 hover:bg-[#270A0A] text-white font-bold py-2 px-4 rounded-lg text-center"
            onClick={sharePost}
          >
            Send
          </button>
      </div>
    </>
  );
};

export default SharePost;