const IndividualPost = ({ user, title, caption, image }) => {
  return (
    <>
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-2xl">{title}</h1>
            <div className="">
                <img
                    src={image}
                    className="h-[400px] w-[448px] overflow-hidden object-cover"
                />
            </div>
            
            <p className="text-lg">{user}: {caption}</p>
        </div>
    </>
  );
};

export default IndividualPost;