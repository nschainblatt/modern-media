import { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SharePost from './SharePost.modal';

const IndividualPost = ({ user, caption, image }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [shareModal, setShareModal] = useState(false);

  return (
    <>
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl text-left flex items-center gap-1">
          <AccountCircleIcon />
          {user}
        </h1>
            <img
                src={image}
                className="h-[400px] w-[448px] overflow-hidden object-cover rounded-xl"
            />
        <div className="flex gap-7">
          <button
            className="hover:text-red-800 flex gap-2"
            onClick={() => setLikeCount(likeCount + 1)}
          >
            <ThumbUpIcon sx={{ fontSize: 30 }} />
            <span className="">{likeCount ? likeCount : ''}</span>
          </button>
          <button
            className="hover:text-red-800 flex gap-2"
            onClick={() => setDislikeCount(dislikeCount + 1)}
          >
            <ThumbDownIcon sx={{ fontSize: 30 }} />
            <span className="">{dislikeCount ? dislikeCount : ''}</span>
          </button>
          <SharePost
            isShown={shareModal}
            setIsShown={setShareModal}
          /> 
        </div>
        <p
          className="text-lg text-left flex gap-3"
        >
          <span className="font-bold">{user}:</span>
          {caption}
        </p>
        <hr className="w-full" />
      </div>
    </>
  );
};

export default IndividualPost;