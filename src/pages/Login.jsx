import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Login() {

  return (
    <>
        <Header />
        <div className="lg:max-w-[1600px] mx-auto text-center lg:min-h-[328px]">
    <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="dark-blue-background md:col-span-4 p-10 text-white">
            <p className="mt-4 text-sm leading-7 font-regular uppercase">
                Contact
            </p>
            <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight">
                Get In <span className="text-indigo-600">Touch</span>
            </h3>
            <p className="mt-4 leading-7 text-gray-200">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s.
            </p>

            <div className="flex items-center mt-5">
                <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 489.536 489.536"
                     enableBackground="new 0 0 489.536 489.536">
                    <g>
                        <g>
                            <path
                                d="m488.554,476l-99-280.2c-1-4.2-5.2-7.3-9.4-7.3h-45.6c12.9-31.1 19.6-54.9 19.6-70.8 0-64.6-50-117.7-112.5-117.7-61.5,0-112.5,52.1-112.5,117.7 0,17.6 8.2,43.1 19.9,70.8h-39.7c-4.2,0-8.3,3.1-9.4,7.3l-99,280.2c-3.2,10.3 6.3,13.5 9.4,13.5h468.8c4.2,0.5 12.5-4.2 9.4-13.5zm-246.9-455.3c51,1.06581e-14 91.7,43.7 91.7,96.9 0,56.5-79.2,182.3-91.7,203.1-31.3-53.1-91.7-161.5-91.7-203.1 0-53.1 40.6-96.9 91.7-96.9zm-216.7,448l91.7-259.4h41.7c29.9,64.1 83.3,151 83.3,151s81.4-145.7 83.8-151h47.4l91.7,259.4h-439.6z">
                            </path>
                            <rect width="136.5" x="177.054" y="379.1" height="20.8"></rect>
                            <path
                                d="m289.554,108.2c0-26-21.9-47.9-47.9-47.9s-47.9,21.9-47.9,47.9 20.8,47.9 47.9,47.9c27.1,0 47.9-21.8 47.9-47.9zm-75-1c0-14.6 11.5-27.1 27.1-27.1s27.1,12.5 27.1,27.1-11.5,27.1-27.1,27.1c-14.6,2.84217e-14-27.1-12.5-27.1-27.1z">
                            </path>
                        </g>
                    </g>
                </svg>
                <span className="text-sm">House #14, Street #12, Darulaman Road, Kabul, Afghanistan.</span>
            </div>
            <div className="flex items-center mt-5">
                <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                    viewBox="0 0 60.002 60.002" enableBackground="new 0 0 60.002 60.002">
                    <g>
                        <path d="M59.002,37.992c-3.69,0-6.693-3.003-6.693-6.693c0-0.553-0.447-1-1-1s-1,0.447-1,1c0,4.794,3.899,8.693,8.693,8.693
		c0.553,0,1-0.447,1-1S59.554,37.992,59.002,37.992z">
                        </path>
                        <path d="M58.256,35.65c0.553,0,1-0.447,1-1s-0.447-1-1-1c-0.886,0-1.605-0.72-1.605-1.605c0-0.553-0.447-1-1-1s-1,0.447-1,1
		C54.65,34.033,56.267,35.65,58.256,35.65z">
                        </path>
                        <path d="M20.002,2.992c3.691,0,6.693,3.003,6.693,6.693c0,0.553,0.448,1,1,1s1-0.447,1-1c0-4.794-3.9-8.693-8.693-8.693
		c-0.552,0-1,0.447-1,1S19.449,2.992,20.002,2.992z">
                        </path>
                        <path d="M19.748,6.334c0,0.553,0.448,1,1,1c0.885,0,1.604,0.72,1.604,1.605c0,0.553,0.448,1,1,1s1-0.447,1-1
		c0-1.988-1.617-3.605-3.604-3.605C20.196,5.334,19.748,5.781,19.748,6.334z">
                        </path>
                        <path d="M44.076,37.889c-1.276-0.728-2.597-0.958-3.721-0.646c-0.844,0.234-1.532,0.768-1.996,1.546
		c-1.02,1.22-2.286,2.646-2.592,2.867c-2.367,1.604-4.25,1.415-6.294-0.629L17.987,29.542c-2.045-2.045-2.233-3.928-0.631-6.291
		c0.224-0.31,1.65-1.575,2.87-2.596c0.778-0.464,1.312-1.152,1.546-1.996c0.311-1.123,0.082-2.444-0.652-3.731
		c-0.173-0.296-4.291-7.27-8.085-9.277c-1.926-1.019-4.255-0.669-5.796,0.872L4.7,9.059c-4.014,4.014-5.467,8.563-4.321,13.52
		c0.956,4.132,3.742,8.529,8.282,13.068l14.705,14.706c5.762,5.762,11.258,8.656,16.298,8.656c3.701,0,7.157-1.562,10.291-4.695
		l2.537-2.537c1.541-1.541,1.892-3.87,0.872-5.796C51.356,42.186,44.383,38.069,44.076,37.889z M51.078,50.363L48.541,52.9
		c-6.569,6.567-14.563,5.235-23.76-3.961L10.075,34.233c-4.271-4.271-6.877-8.344-7.747-12.104
		c-0.995-4.301,0.244-8.112,3.786-11.655l2.537-2.537c0.567-0.566,1.313-0.862,2.07-0.862c0.467,0,0.939,0.112,1.376,0.344
		c3.293,1.743,7.256,8.454,7.29,8.511c0.449,0.787,0.62,1.608,0.457,2.196c-0.1,0.36-0.324,0.634-0.684,0.836l-0.15,0.104
		c-0.853,0.712-2.883,2.434-3.308,3.061c-0.612,0.904-1.018,1.792-1.231,2.665c-0.711-1.418-1.286-3.06-1.475-4.881
		c-0.057-0.548-0.549-0.935-1.098-0.892c-0.549,0.058-0.949,0.549-0.892,1.099c0.722,6.953,6.129,11.479,6.359,11.668
		c0.025,0.02,0.054,0.028,0.08,0.045l10.613,10.613c0.045,0.045,0.092,0.085,0.137,0.129c0.035,0.051,0.058,0.108,0.104,0.154
		c0.189,0.187,4.704,4.567,11.599,5.283c0.035,0.003,0.07,0.005,0.104,0.005c0.506,0,0.94-0.383,0.994-0.896
		c0.057-0.55-0.342-1.041-0.892-1.099c-2.114-0.219-3.987-0.839-5.548-1.558c0.765-0.23,1.543-0.612,2.332-1.146
		c0.628-0.426,2.35-2.455,3.061-3.308l0.104-0.151c0.202-0.359,0.476-0.583,0.836-0.684c0.588-0.159,1.409,0.008,2.186,0.45
		c0.067,0.04,6.778,4.003,8.521,7.296C52.202,48.062,51.994,49.447,51.078,50.363z">
                        </path>
                    </g>
                </svg>
                <span className="text-sm">+93 749 99 65 50</span>
            </div>
            <div className="flex items-center mt-5">
                <svg className="h-6 mr-2 text-indigo-600" fill="currentColor" version="1.1" id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"
                    viewBox="0 0 300.988 300.988" enableBackground="new 0 0 300.988 300.988"
                    >
                    <g>
                        <g>
                            <path d="M150.494,0.001C67.511,0.001,0,67.512,0,150.495s67.511,150.493,150.494,150.493s150.494-67.511,150.494-150.493
                S233.476,0.001,150.494,0.001z M150.494,285.987C75.782,285.987,15,225.206,15,150.495S75.782,15.001,150.494,15.001
                s135.494,60.782,135.494,135.493S225.205,285.987,150.494,285.987z">
                            </path>
                            <polygon
                                points="142.994,142.995 83.148,142.995 83.148,157.995 157.994,157.995 157.994,43.883 142.994,43.883 		">
                            </polygon>
                        </g>
                    </g>
                </svg>
                <span className="text-sm">24/7</span>
            </div>

        </div>
        <form action="https://fabform.io/f/{form-id}" method="post" className="md:col-span-8 p-10">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-first-name">
                        First Name
                    </label>
                    <input
                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name" type="text" placeholder="Jane" />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-last-name">
                        Last Name
                    </label>
                    <input
                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name" type="text" placeholder="Doe" />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Email Address
                    </label>
                    <input
                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email" type="email" placeholder="********@*****.**" />
                </div>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password">
                        Your Message
                    </label>
                    <textarea rows="10"
                        className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"></textarea>
                </div>
                <div className="flex justify-between w-full px-3">
                    <div className="md:flex md:items-center">
                        <label className="block text-gray-500 font-bold">
                            <input className="mr-2 leading-tight" type="checkbox" />
                            <span className="text-sm">
                                Send me your newsletter!
                            </span>
                        </label>
                    </div>
                    <button
                        className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                        type="submit">
                        Send Message
                    </button>
                    
                </div>    
            </div>

        </form>

    </div>
</div>


        <div className="lg:max-w-[1600px] mt-5 mx-auto text-center lg:min-h-[328px] flex flex-1">
            <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
            <div>
                <img
                src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                className="w-32 mx-auto"
                />
            </div>
            <div className="mt-12 flex flex-col items-center">
                <h1 className="text-2xl xl:text-3xl font-extrabold">
                Sign up for templatana
                </h1>
                <div className="w-full flex-1 mt-8">
                <div className="flex flex-col items-center">
                    <button
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline"
                    >
                    <div className="bg-white p-2 rounded-full">
                        <svg className="w-4" viewBox="0 0 533.5 544.3">
                        <path
                            d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
                            fill="#4285f4"
                        />
                        <path
                            d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
                            fill="#34a853"
                        />
                        <path
                            d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
                            fill="#fbbc04"
                        />
                        <path
                            d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
                            fill="#ea4335"
                        />
                        </svg>
                    </div>
                    <span className="ml-4">
                        Sign Up with Google
                    </span>
                    </button>

                    <button
                    className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
                    >
                    <div className="bg-white p-1 rounded-full">
                        <svg className="w-6" viewBox="0 0 32 32">
                        <path
                            fillRule="evenodd"
                            d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                        />
                        </svg>
                    </div>
                    <span className="ml-4">
                        Sign Up with GitHub
                    </span>
                    </button>
                </div>

                <div className="my-12 border-b text-center">
                    <div
                    className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                    >
                    Or sign up with e-mail
                    </div>
                </div>

                <div className="mx-auto max-w-xs">
                    <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                    />
                    <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                    type="password"
                    placeholder="Password"
                    />
                    <button
                    className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                    <svg
                        className="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                    </svg>
                    <span className="ml-3">
                        Sign Up
                    </span>
                    </button>
                    <p className="mt-6 text-xs text-gray-600 text-center">
                    <Link to={"/"} className="border-b border-gray-500 border-dotted">Terms of Service</Link>
                    and its
                    <Link to={"/"} className="border-b border-gray-500 border-dotted">Privacy Policy</Link>
                    </p>
                </div>
                </div>
            </div>
            </div>
            <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
            <div
                className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat"
                style={{backgroundImage: "url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg')"}}
            ></div>
            </div>
        </div>


        <div className="lg:max-w-[1600px] mt-5 mx-auto text-center lg:min-h-[328px]">
            <div aria-label="form" tabIndex="0" className="focus:outline-none xl:w-10/12 w-full px-8">
                <div className="bg-gray-100 py-12 flex flex-wrap items-center justify-center">
                    <div className="w-52 h-16 relative md:mt-0 mt-4">
                        <img src="https://i.ibb.co/DwNs7zG/Steps.png" alt="step1" className="w-full h-full" />
                        <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                            <p tabIndex="0" className="focus:outline-none w-full text-sm font-medium leading-4 text-white">Sign Up</p>
                            <p tabIndex="0" className="focus:outline-none w-full text-xs mt-1 leading-none text-white">description of step 1</p>
                        </div>
                    </div>
                    <div className="w-52 h-16 relative md:mt-0 mt-4">
                        <img src="https://i.ibb.co/wNZ4nzy/Steps2.png" alt="step2" className="w-full h-full" />
                        <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                            <p tabIndex="0" className="focus:outline-none w-full text-sm font-medium leading-4 text-indigo-800">About you</p>
                            <p tabIndex="0" className="focus:outline-none w-full text-xs mt-1 leading-none text-indigo-800">Some info about you</p>
                        </div>
                    </div>
                    <div className="w-52 h-16 relative md:mt-0 mt-4">
                        <img src="https://i.ibb.co/c2k4Gbr/Steps3.png" alt="step3" className="w-full h-full" />
                        <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                            <p tabIndex="0" className="focus:outline-none w-full text-sm font-medium leading-4 text-gray-700">Onboarding</p>
                            <p tabIndex="0" className="focus:outline-none w-full text-xs mt-1 leading-none text-gray-500">Get accquainted</p>
                        </div>
                    </div>
                    <div className="w-52 h-16 relative md:mt-0  mt-4">
                        <img src="https://i.ibb.co/XCdjrhm/Steps4.png" alt="step4" className="w-full h-full" />
                        <div className="absolute w-full flex flex-col px-6 items-center justify-center inset-0 m-0">
                            <p tabIndex="0" className="focus:outline-none w-full text-sm font-medium leading-4 text-gray-700">Getting Started</p>
                            <p tabIndex="0" className="focus:outline-none w-full text-xs mt-1 leading-none text-gray-500">Resources to begin</p>
                        </div>
                    </div>
                </div>
                <div className="xl:px-24">
                    <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                        <div className="flex items-center">
                            <div tabIndex="0" className="focus:outline-none flex-shrink-0">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout_wizard2-svg1.svg" alt="lock" />
                            </div>

                            <p tabIndex="0" className="focus:outline-none text-sm text-gray-800 pl-3">We take privacy issues seriously. You can be sure that your personal data is securely protected.</p>
                        </div>
                        <button  aria-label="Close this banner" className="md:block hidden focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout_wizard2-svg2.svg" alt="cross"/>
                        </button>
                    </div>
                    <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                        <div className="w-80">
                            <div className="flex items-center">
                                <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Personal Information</h1>
                            </div>
                            <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                        </div>
                        <div>
                            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                <div className="md:w-64">
                                    <label className="text-sm leading-none text-gray-800" id="firstName" >First name</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="firstName" placeholder="John" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="text-sm leading-none text-gray-800" id="lastName">Last name</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="lastName" placeholder="Doe" />
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="text-sm leading-none text-gray-800" id="emailAddress">Email address</label>
                                    <input type="email" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="text-sm leading-none text-gray-800" id="phone" >Phone number</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                        <div className="w-80">
                            <div className="flex items-center">
                                <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Security</h1>
                            </div>
                            <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                        </div>
                        <div>
                            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                <div className="md:w-64">
                                    <label className="text-sm leading-none text-gray-800" id="password">Password</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="password" placeholder="Enter your password" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="text-sm leading-none text-gray-800" id="securityCode">Security Code</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="securityCode" placeholder="Enter your security code" />
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="text-sm leading-none text-gray-800" id="recoverEmail">Recovery Email address</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"  placeholder="Your recovery email" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="text-sm leading-none text-gray-800" id="altPhone">Alternate phone number</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="altPhone" placeholder="Your alternate phone number" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="flex flex-col flex-wrap items-center justify-center w-full px-7 lg:flex-row lg:justify-end md:justify-end gap-x-4 gap-y-4"
                >
                    <button
                    className="bg-white border-indigo-700 rounded hover:bg-gray-50 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-indigo-700 border lg:max-w-[95px] w-full"
                    >
                    Cancel
                    </button>
                    <button
                    className="bg-indigo-700 rounded hover:bg-indigo-600 transform duration-300 ease-in-out text-sm font-medium px-6 py-4 text-white lg:max-w-[144px] w-full"
                    >
                    Save Changes
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Login
