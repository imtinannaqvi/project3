import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Services = () => {
    const ServicesLists = [
        { img: "/blog1.jpg", title: "Painless Dental Procedures", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor." },
        { img: "/blog3.jpg", title: "Dental Hygiene in Pregnancy", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor." },
        { img: "/blog2.jpg", title: "Tooth Extraction", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortorLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor." },
        { img: "/img1.jpg", title: "Gum Infection - Gingivitis", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortorLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor."},
        { img: "/img2.jpg", title: "Dental Sealants Application", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortorLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor." },
        { img: "/img3.jpg", title: "Teeth Whitening Procedures", des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortorLorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id arcu tortor." },
    ];

    return (
        <>
        <div>
            <h1 className='text-black text-3xl font-bold text-center mt-3'>
                Our <span className='text-cyan-500'>
                    Services
                </span>
            </h1>
           <div className="max-w-5xl mx-auto py-12 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ServicesLists.map((service, i) => (
                    <div key={i} className="bg-gray-50 pb-8 shadow-sm group">
                        {/* Image Container with Hover Effect */}
                        <div className="relative overflow-hidden cursor-pointer">
                            <img 
                                src={service.img} 
                                alt={service.title} 
                                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" 
                            />
                            {/* Plus Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-cyan-500/20">
                                <div className="bg-cyan-500 text-white p-4 rounded-full">
                                    <FaPlus size={24} />
                                </div>
                            </div>
                        </div>

                        {/* Content Section */}
                        <div className="text-center mt-6 px-4">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{service.des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        
        </>
       
    );
};

export default Services;