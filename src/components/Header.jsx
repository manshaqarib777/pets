import { useState } from "react";
import { Link } from "react-router-dom";
import './index.css';

export default function Header() {
    const [selectedLink] = useState(null);

    // const handleLinkClick = (index, href) => {
    //     setSelectedLink(index);

    //     const targetElement = document.querySelector(href);
    //     if (targetElement) {
    //         const offsetTop = targetElement.offsetTop;
    //         window.scrollTo({
    //             top: offsetTop,
    //             behavior: "smooth",
    //         });
    //     }
    // }

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Breeds", href: "#breeds" },
        { label: "Shop", href: "#shop" },
        { label: "Gallery", href: "#gallery" }
    ];

    return (
        <>
            <div className="lg:max-w-[1600px] py-5 flex align-middle mx-auto justify-evenly flex-wrap flex-row items-center font-semibold dark-theme ">

                <div className="flex flex-row items-center flex-wrap space-x-10">
                    <Link to={"/"} className="w-28 text-center"><img src="/logo.png"/></Link>

                    {/* <Link to="/" className="w-28 text-center">YOUR LOGO HERE</Link> */}

                    {links.map((link, index) => (
                        <Link to={link.href} className={`${selectedLink === index ? "text-blue-400 underline" : "hover:underline hover:text-blue-800"} && cursor-pointer link-dark`} key={index}>{link.label}</Link>
                    ))}

                </div>



            </div>
        </>
    )
}