import { useState } from 'react';
import Footer from '../components/Footer'
import Header from '../components/Header'

function ReleasingForm() {
    const [formData, setFormData] = useState({
        ownerFullName: '',
        ownerAddress: '',
        ownerPhoneNumber: '',
        ownerEmail: '',
        petName: '',
        petType: '',
        petBreed: '',
        petAge: '',
        petSex: '',
        petSpayedNeutered: false,
        petVaccinations: '',
        petMedicalIssues: '',
        petBehaviorStrangers: '',
        petBehaviorChildren: '',
        petBehaviorAnimals: '',
        petAggressiveBehavior: '',
    });
    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const finalValue = type === 'checkbox' ? checked : value;
        setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: finalValue,
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Send formData to your backend or process it as needed
    };

  return (
    <>        
        <Header />
        <div className="lg:max-w-[1600px] mb-5 mx-auto text-left lg:min-h-[328px]">
            <div aria-label="form" tabIndex="0" className="focus:outline-none">
                <div className="xl:px-24">
                    <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                        <div className="flex items-center">
                            <div tabIndex="0" className="focus:outline-none flex-shrink-0">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/form_layout_wizard2-svg1.svg" alt="lock" />
                            </div>

                            <h1 tabIndex="0" className="focus:outline-nont font-bold text-2xl text-gray-800 pl-3">Pet Releasing Application</h1>
                        </div>
                    </div>
                    <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                        <div className="w-80">
                            <div className="flex items-center">
                                <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Owner Information</h1>
                            </div>
                            <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                        </div>
                        <div>
                            <div className="md:flex items-left lg:ml-24 lg:mt-0 mt-4">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="fullname" >Full Name</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="fullname" placeholder="Enter Your Full Name" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="address">Address</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="address" placeholder="Enter Your Address" />
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="emailAddress">Email Address</label>
                                    <input type="email" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="emailAddress" placeholder="youremail@example.com" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="phone" >Phone number</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="phone" placeholder="123-1234567" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                        <div className="w-80">
                            <div className="flex items-center">
                                <h1 tabIndex="0" className="focus:outline-none text-xl font-medium pr-2 leading-5 text-gray-800">Pet Information</h1>
                            </div>
                            <p tabIndex="0" className="focus:outline-none mt-4 text-sm leading-5 text-gray-600">Information about the section could go here and a brief description of how this might be used.</p>
                        </div>
                        <div>
                            <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_name">Pet's Name</label>
                                    <input type="text" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="pet_name" placeholder="Enter your Pet's Name" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_type">Type of Pet (e.g., dog, cat, bird)</label>
                                    <select className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" id="petType" name="petType" value={formData.petType} onChange={handleChange} required>
                                        <option value="">Select a pet type</option>
                                        <option value="Dog">Dog</option>
                                        <option value="Cat">Cat</option>
                                        <option value="Bird">Bird</option>
                                        {/* Add more pet types as needed */}
                                    </select>
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_breed">Breed (if known/applicable)</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"  placeholder="Your Breed (if known/applicable)" />
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_age">Age of Pet</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="pet_age" placeholder="Your Age of Pet" />
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_sex">Sex of Pet</label>
                                    <select className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" id="petSex" name="petSex" value={formData.petSex} onChange={handleChange} required>
                                        <option value="">Select sex</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_neutered">Is the pet spayed/neutered?</label>
                                    <div className="mt-2">
                                        <label className="inline-flex items-center mr-6">
                                        <input type="radio" className="form-radio" name="petSpayedNeutered" value="Yes" checked={formData.petSpayedNeutered === 'Yes'} onChange={handleChange} />
                                        <span className="ml-2">Yes</span>
                                        </label>
                                        <label className="inline-flex items-center">
                                        <input type="radio" className="form-radio" name="petSpayedNeutered" value="No" checked={formData.petSpayedNeutered === 'No'} onChange={handleChange} />
                                        <span className="ml-2">No</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="md:flex items-center lg:ml-24 mt-8">
                                <div className="md:w-64">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="breed">Current on vaccinations?</label>
                                    <select className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" id="petVaccinations" name="petVaccinations" value={formData.petVaccinations} onChange={handleChange} required>
                                        <option value="">Select an option</option>
                                        <option value="Yes">Yes</option>
                                        <option value="No">No</option>
                                        <option value="Not Sure">Not Sure</option>
                                    </select>
                                </div>
                                <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" id="pet_age">Please list any medical issues or needs</label>
                                    <input type="name" tabIndex="0" className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="pet_age" placeholder="Your Age of Pet" />
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

export default ReleasingForm
