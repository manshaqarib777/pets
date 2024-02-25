import { AiFillRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 flex flex-row mx-auto justify-center space-x-20" id="about">
                <div className="xs:hidden w-1/2 flex justify-end">
                    <img src="/new-pets/pet18.jpg" alt="https://via.placeholder.com/250x250" width={400} height={250} />
                </div>
                <div className="flex flex-col text-left w-1/2 space-y-5">
                    <h1 className="text-3xl font-extrabold dark-blue-text">Welcome to Pet Heaven Society</h1>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>Hey there, animal lover! Welcome to Pet Heaven Society, where tails wag, purrs rumble, and hearts are filled with love. We're more than just a pet adoption center – we're a family dedicated to giving pets the second chance they deserve.</p>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>Pet Heaven Society was born out of a simple idea: to create a haven where every furry friend could find warmth, love, and a forever home. Founded by a group of passionate animal advocates, our journey began with a shared dream of making a difference in the lives of pets in need.</p>
                    <Link to={"/"}>
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm"
                        >
                            Contact
                            <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}