import React from 'react';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa';

const Doc = () => {
    const DocLists = [
        { img: "/team1-1.jpg", name: "Annie Mcgee", category: "Periodontist" },
        { img: "/team2-1.jpg", name: "Danny Fowler", category: "Dentist" },
        { img: "/team3-1.jpg", name: "Lydia Dean", category: "Periodontist" },
        { img: "/team4-1.jpg", name: "Mike Roy", category: "Periodontist" },
    ];

    return (
        <div className="max-w-7xl mx-auto py-16 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {DocLists.map((doc, i) => (
                    <div key={i} className="group cursor-pointer shadow-lg overflow-visible">

                        {/* Image */}
                        <div className="relative overflow-hidden">
                            <img
                                src={doc.img}
                                alt={doc.name}
                                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Bottom section — hidden by default, cyan on hover */}
                        <div className={`relative text-white text-center pt-10 pb-6 
                            bg-gray-200
                            group-hover:bg-cyan-400
                            transition-colors duration-300`}
                        >
                            {/* Icons — hidden by default, show on hover */}
                            <div className="absolute -top-6 left-0 w-full flex justify-center gap-3
                                opacity-0 translate-y-4
                                group-hover:opacity-100 group-hover:translate-y-0
                                transition-all duration-500"
                            >
                                {[FaTwitter, FaFacebookF, FaGooglePlusG, FaLinkedinIn].map((Icon, idx) => (
                                    <div
                                        key={idx}
                                        className="rotate-45 bg-white w-10 h-10 flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 shadow-md"
                                        style={{ transitionDelay: `${idx * 60}ms` }}
                                    >
                                        <Icon className="-rotate-45 text-gray-700 hover:text-white" size={14} />
                                    </div>
                                ))}
                            </div>

                            {/* Name — hidden by default, show on hover */}
                            <h3 className="text-xl font-bold
                                text-transparent
                                group-hover:text-white
                                transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                                {doc.name}
                            </h3>

                            {/* Category — hidden by default, show on hover */}
                            <p className="text-sm font-medium mt-1
                                text-transparent
                                group-hover:text-white/90
                                transition-all duration-300 delay-75 translate-y-2 group-hover:translate-y-0">
                                {doc.category}
                            </p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default Doc;