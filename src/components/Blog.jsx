import { AiFillRightCircle } from 'react-icons/ai'
import BlogCard from './Cards/BlogCard';
import { Link } from 'react-router-dom';

const blogs = [
    {
        'title': 'How to Choose the Right Bully Stick for Your Dog',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': '/blog/blog5.jpg',
        'link': '/blog/1',
    },
    {
        'title': 'Saving Lives: Animal House Shelter And Downtown Pet Supply',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': '/blog/blog4.jpg',
        'link': '/blog/2',
    },
    {
        'title': 'Himalayan Yak Chews: 11 Benefits You Need To Know',
        'content': 'Below is an excerpt of porch.com article “ Moving with Pets? We have the Experts advice to do it Properly.',
        'image': '/blog/blog6.jpg',
        'link': '/blog/3',
    },
];


export default function Blog() {
    return (
        <>
            <div className="lg:max-w-[1600px] lg:py-20 lg:px-16 mx-auto text-center space-x-20">
                <div className="mb-16">
                    <h2 className="text-5xl font-extrabold dark-blue-text mb-3">Volunteer with Pet Heaven Society</h2>
                </div>
                {/* loop over all the blogs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {blogs.map((blog, index) => {
                        return (
                            <BlogCard
                                key={index}
                                title={blog.title}
                                image={blog.image}
                                link={blog.link}
                                content={blog.content}
                            />
                        )
                    })}
                </div>
                <p className='font-normal mt-2 mb-5'>Join our team of compassionate volunteers and make a difference in the lives of pets in need! At Pet Heaven Society, volunteers are the heart and soul of our organization. Whether you're passionate about walking dogs, socializing with cats, assisting with adoption events, or lending a helping hand behind the scenes, there's a rewarding opportunity waiting for you. As a volunteer, you'll have the chance to directly impact the lives of animals by providing love, care, and companionship while they await their forever homes. Join us in our mission to create a world where every pet is cherished and loved. Sign up today to become a part of our dedicated volunteer family!</p>
                <Link to={"register"} className="my-10 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 pl-5 pr-2 rounded-full w-fit font-inter text-sm">
                    Signup
                    <AiFillRightCircle className="inline-block ml-5 text-2xl text-white " />
                </Link>
            </div>
        </>
    )
}