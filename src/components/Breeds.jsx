import { AiFillRightCircle } from 'react-icons/ai';
import PetCard from "./Cards/PetCard";
import { Link } from 'react-router-dom';

const breeds = [
    {
        name: "Luna",
        image: "/pets/golden-retriever.png",
        link: "/breeds/golden-retriever",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Bella",
        image: "/pets/cat6.jpg",
        link: "/breeds/doberman",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Max",
        image: "/pets/apso.png",
        link: "/breeds/apso",
        gender: "Female",
        age: "1 year",
    },
    {
        name: "Charlie",
        image: "/pets/cat3.jpg",
        link: "/breeds/chiuahua",
        gender: "Female",
        age: "1 year",
    },
    {
        name: "Daisy",
        image: "/pets/japanese-spitz.png",
        link: "/breeds/japanese-spitz",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Milo",
        image: "/pets/cat4.jpg",
        link: "/breeds/german-shepherd",
        gender: "Male",
        age: "2 months",
    },
    {
        name: "Lusy",
        image: "/pets/husky.png",
        link: "/breeds/husky",
        gender: "Female",
        age: "3 months",
    },
    {
        name: "Oliver",
        image: "/pets/cat5.jpg",
        link: "/breeds/valldemossa",
        gender: "Female",
        age: "4 months",
    },
];

export default function Breeds() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-5xl font-extrabold dark-blue-text mb-3">Meet Our Furry Friends</h2>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>
                        &quot;Let us introduce you to our delightful bunch of furry companions! From playful pups with wagging tails to cuddly kittens with purrs that could melt the coldest of hearts, each pet has a unique story and a whole lot of love to give. We take the time to get to know each of our furry residents, ensuring that we find the perfect match for their personality and yours.&quot;
                    </p>
                </div>
                {/* loop over all the breeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {breeds.map((breed, index) => {
                        return (
                            <PetCard
                                key={index}
                                name={breed.name}
                                image={breed.image}
                                link={breed.link}
                                gender={breed.gender}
                                age={breed.age}
                            />
                        )
                    })}
                </div>
                <Link to={"pet-enquire"}>
                    <button
                        className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                    >
                        Enquire More
                        <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                    </button>
                </Link>
            </div>
        </>
    )
}