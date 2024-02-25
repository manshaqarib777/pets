import { Link } from "react-router-dom";
import ServiceCard from "./Cards/ServiceCard";
import { AiFillRightCircle } from 'react-icons/ai';

const services = [
    {
        title: "Dog/Cat Grooming",
        description: "Our priority is to ensure the well-being and happiness of every pet entrusted to us. By releasing your pet to Pet Heaven Society, you can have peace of mind knowing that they will receive the love, care, and attention they deserve while we work diligently to find them a new forever home.",
        image: '/services/cat7.jpg',
        link: '/services/pet-grooming'
    },
    {
        title: "Home Treatment",
        description: "We believe that every pet deserves a second chance, and we're committed to providing a safe and nurturing environment for pets in need. Our experienced team will carefully assess your pet's needs and work tirelessly to find them the perfect match with a loving adopter.",
        image: "/services/home-treatment.png",
        link: '/services/home-treatment'
    },
    {
        title: "Clinical Treatment",
        description: "If you're considering releasing your pet to Pet Heaven Society, please reach out to us to discuss your options. We're here to listen, support, and guide you through this process with empathy and understanding.",
        image: "/services/cat1.jpg",
        link: '/services/clinical-treatment'
    }
]

export default function Services() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-4xl font-extrabold dark-blue-text mb-3">Releasing Your Pet to Pet Heaven Society</h2>
                    <p className="text-xl leading-8 font-medium" style={{ color: "#515151" }}>
                    We understand that sometimes life circumstances change, and caring for a pet can become overwhelming.<br /> If you're facing challenges and considering releasing your pet, we're here to help. At Pet Heaven Society, we offer a compassionate <br /> and supportive  solution for individuals who are no longer able to care for their pets.
                    </p>
                </div>
                {/* loop over all the breeds */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => {
                        return (
                            <ServiceCard
                                key={index}
                                title={service.title}
                                image={service.image}
                                description={service.description}
                                link={service.link}
                            />
                        )
                    })}
                </div>
                <Link to={"pet-release"}>
                    <button
                        className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm text-center"
                    >
                        Reach Out
                        <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                    </button>
                </Link>
            </div>
        </>
    )
}