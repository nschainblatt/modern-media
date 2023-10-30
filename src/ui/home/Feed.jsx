import IndividualPost from "./IndividualPost";
import pic1 from "./../../assets/pic1.jpg";
import pic2 from "./../../assets/pic2.jpg";
import pic3 from "./../../assets/pic3.png";
import pic4 from "./../../assets/pic4.jpg";
import pic5 from "./../../assets/pic5.webp";

const users = [
    'Noah',
    'Jim',
    'Tryphena',
    'Jack',
    'Rebecca'
];

const Feed = () => {
  return (
    <>
        <div className="flex flex-col gap-10 py-5 px-8 text-center w-full items-center lg:m-auto sm:mt-20">
            <h1 className="text-4xl">Your Feed</h1>
            <IndividualPost
                user={users[0]}
                title={'Night Sky'}
                caption={'Here in Ohio'}
                image={pic1}
            />
            <IndividualPost
                user={users[1]}
                title={'Mountain Tops'}
                caption={'What a sight to see at sunset!'}
                image={pic2}
            />
            <IndividualPost
                user={users[2]}
                title={'Mood'}
                caption={'My mood right now'}
                image={pic3}
            />
            <IndividualPost
                user={users[3]}
                title={'Happy Hour'}
                caption={'Me on my way to happy hour'}
                image={pic4}
            />
            <IndividualPost
                user={users[4]}
                title={'Devlivery'}
                caption={'Your amazon package has been delivered'}
                image={pic5}
            />
        </div>
    </>
  );
};

export default Feed;