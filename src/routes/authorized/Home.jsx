import Sidebar from "../../ui/Sidebar";
import Feed from "../../ui/home/Feed";

const Home = () => {
  return (
    <>
        <div className="flex">
          <Sidebar />
          <div className="w-full flex flex-col text-center justify-center align-middle items-center">
            <Feed />
          </div>
        </div>
    </>
  );
};

export default Home;