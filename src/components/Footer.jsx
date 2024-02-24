import { RiFacebookFill, RiTwitterFill, RiInstagramFill, RiLinkedinFill, RiYoutubeFill } from "react-icons/ri";
import pic1 from "../assets/footer-images/pic1.png"
import pic2 from "../assets/footer-images/pic2.png"
import pic3 from "../assets/footer-images/pic3.png"
import pic4 from "../assets/footer-images/pic4.png"
import { Link } from "react-router-dom";

const phone_number = "+98765433"
export default function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <>
            <footer className="lg:max-w-[1600px] lg:py-20 lg:px-16 flex flex-col dark-blue-background text-white mx-auto">
                {/* upper footer */}
                <div className="flex flex-row flex-wrap justify-between align-middle">
                    {/* primary div */}
                    <div className="flex flex-col flex-wrap w-1/2 text-justify space-y-10">
                        <div className="flex flex-row justify-between align-middle space-x-10">
                            {/* <h2 className="font-bold text-xl w-4/5 text-center">YOUR LOGO HERE</h2> */}
                            <Link to={"/"} className="font-bold text-xl w-4/5 text-center"><img src="/logo.png"/></Link>

                            <p className="text-lg">
                                &quot;Hey there, animal lover! Welcome to Pet Heaven Society, where tails wag, purrs rumble, and hearts are filled with love. We're more than just a pet adoption center – we're a family dedicated to giving pets the second chance they deserve.&quot;
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg">Phone Number:</h3>
                            <p className="font-bold text-xl">{phone_number}</p>
                        </div>

                        <div>
                            <h3 className="text-lg">Location:</h3>
                            <p className="font-bold text-xl">Address 56 Tengah Road</p>
                        </div>

                    </div>

                    {/* menu div */}
                    <div>
                        <h3 className="mb-5 font-bold text-xl">Menu</h3>
                        <ul className="text-lg">
                            <li><Link to={"/"}>Home</Link></li>
                            <li><Link to={"#about"}>About</Link></li>
                            <li><Link to={"#services"}>Services</Link></li>
                            <li><Link to={"#breeds"}>Breeds</Link></li>
                            <li><Link to={"#shop"}>Shop</Link></li>
                            <li><Link to={"#contact"}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* gallery div */}
                    <div>
                        <h3 className="mb-5 ml-5 text-xl font-bold">Gallery</h3>
                        {/* grid with 2 rows and 2 columns of images */}
                        <div className="grid grid-cols-2 grid-rows-2 gap-2">
                            <div className="w-full h-full bg-white rounded-2xl"><img src={pic1} alt="https://via.placeholder.com/120x120" /></div>
                            <div className="w-full h-full bg-white rounded-2xl"><img src={pic2} alt="https://via.placeholder.com/120x120" /></div>
                            <div className="w-full h-full bg-white rounded-2xl"><img src={pic3} alt="https://via.placeholder.com/120x120" /></div>
                            <div className="w-full h-full bg-white rounded-2xl"><img src={pic4} alt="https://via.placeholder.com/120x120" /></div>
                        </div>
                    </div>
                </div>

                <hr className="border-white border-opacity-50 mt-20 mb-10" />

                {/* lower footer */}
                <div className="flex flex-row justify-between">
                    <p className="text-lg font-medium">Copyright © {year} City Pet House & Animal Clinic | All Rights Reserved</p>
                    <div className="flex flex-row space-x-5">
                        <div className="w-8 h-8 rounded-md bg-white p-2">
                            <a href="https://www.facebook.com/"><RiFacebookFill className="text-base text-blue-950" /></a>
                        </div>
                        <div className="w-8 h-8 rounded-md bg-white p-2">
                            <a href="https://twitter.com/"><RiTwitterFill className="text-base text-blue-950" /></a>
                        </div>
                        <div className="w-8 h-8 rounded-md bg-white p-2">
                            <a href="https://www.instagram.com/"><RiInstagramFill className="text-base text-blue-950" /></a>
                        </div>
                        <div className="w-8 h-8 rounded-md bg-white p-2">
                            <a href="https://www.linkedin.com/"><RiLinkedinFill className="text-base text-blue-950" /></a>
                        </div>
                        <div className="w-8 h-8 rounded-md bg-white p-2">
                            <a href="https://www.youtube.com/"><RiYoutubeFill className="text-base text-blue-950" /></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}