"use client";
import React, { useState } from 'react';
import { FaComment, FaUser, FaTag } from 'react-icons/fa';

const News = () => {
    const NewsLists = [
        { img: "/blog4.jpg", date: "18 Jun 2015", name: "ram", comment: "0", title: "Root Canal Treatment",  des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["blog", "Business"] },
        { img: "/blog6.jpg", date: "18 Jun 2015", name: "ram", comment: "0", title: "Tooth Extraction", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["news", "Technical"] },
        { img: "/blog7.jpg", date: "18 Jun 2015", name: "ram", comment: "0", title: "Dental Hygiene", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["news", "Technical"] },
        { img: "/blog9.jpg", date: "22 Jul 2015", name: "john", comment: "3", title: "Teeth Whitening", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["blog", "Health"] },
        { img: "/blog5-1024x696.jpg", date: "30 Jul 2015", name: "sara", comment: "5", title: "Orthodontic Braces", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["news", "Care"] },
        { img: "/blog7.jpg", date: "10 Aug 2015", name: "alex", comment: "2", title: "Gum Disease Treatment", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["health", "Treatment"] },
        { img: "/blog4.jpg", date: "15 Aug 2015", name: "mike", comment: "1", title: "Dental Implants", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["implants", "Surgery"] },
        { img: "/blog6.jpg", date: "20 Aug 2015", name: "lisa", comment: "4", title: "Cavity Prevention", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["prevention", "Health"] },
        { img: "/blog9.jpg", date: "25 Aug 2015", name: "ram", comment: "0", title: "Pediatric Dentistry", des: "Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem Fusce tincidunt, felis ac tincidunt venenatis, nunc nisi tincidunt nunc sit amet lorem.", tags: ["kids", "Care"] },
    ];

    const itemsPerPage = 3;
    const totalPages = Math.ceil(NewsLists.length / itemsPerPage);
    const [currentPage, setCurrentPage] = useState(0);

    const visibleNews = NewsLists.slice(
        currentPage * itemsPerPage,
        currentPage * itemsPerPage + itemsPerPage
    );

    return (
        <div className="py-16 bg-white">

            {/* ── HEADING with background image ── */}
        <div className="relative text-center mb-12 flex flex-col items-center justify-center h-48 overflow-hidden">

    {/* Background image — centered watermark style */}
    <img
        src="/title_img4.webp"
        alt="Background"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full object-contain opacity-15"
    />

    {/* Text — dark colored like screenshot */}
    <h1 className="text-gray-800 text-3xl md:text-4xl font-semibold relative z-10">
        News from the <span className="text-cyan-500 font-bold">World of Dentists</span>
    </h1>
    <p className="text-gray-400 mt-3 relative z-10 text-sm md:text-base">
        Duas molestias excepturi sint occaecati cupiditate non provident.
    </p>
</div>

            {/* ── NEWS GRID ── */}
            <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {visibleNews.map((news, i) => (
                    <div key={i} className="border space-y-6 shadow-sm group hover:shadow-xl transition-shadow duration-300 hover:border-cyan-600">
                        <div className="relative overflow-hidden">
                            <img
                                src={news.img}
                                alt={news.title}
                                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute bottom-0 left-0 bg-cyan-400 px-4 py-1 text-sm font-bold text-white">
                                {news.date}
                            </div>
                        </div>
                        <div className="p-6 mt-3">
                            <div className="flex justify-between text-black hover:text-cyan-500 text-md mb-4">
                                <span className="flex items-center gap-1"><FaUser/> by {news.name}</span>
                                <span className="flex items-center gap-1"><FaComment/> {news.comment}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors duration-300">
                                {news.title}
                            </h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{news.des}</p>
                            <div className="flex items-center gap-2 text-sm text-cyan-600">
                                <FaTag/> {news.tags.join(', ')}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ── PAGINATION DOTS ── */}
            <div className="flex justify-center mt-10 gap-3">
                {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i)}
                        className={`transition-all duration-300 rounded-full ${
                            currentPage === i
                                ? 'bg-cyan-500 w-8 h-3'
                                : 'bg-gray-300 w-3 h-3 hover:bg-cyan-300'
                        }`}
                    />
                ))}
            </div>

            {/* Page counter */}
            <p className="text-center text-gray-400 text-sm mt-3">
                Page {currentPage + 1} of {totalPages}
            </p>

        </div>
    );
};

export default News;