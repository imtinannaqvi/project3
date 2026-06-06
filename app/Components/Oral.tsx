"use client";
import React, { useState, useEffect } from 'react';

const Oral = () => {
    const services = [
        {
            img: "/services19.jpg",
            hoverImg: "/services20.jpg",
            title: "Oral Screening Tests",
            des: "Ullamco laboris nisi ut aliquip ex ea commodo consequat lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation",
            name: "MATHEW"
        },
        {
            img: "/services20.jpg",
            hoverImg: "/services19.jpg",
            title: "Advanced Diagnostics",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            name: "JOHN SMITH"
        },
        {
            img: "/blog4.jpg",
            hoverImg: "/blog6.jpg",
            title: "Dental Care Services",
            des: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.",
            name: "DAREEN TILER"
        },
    ];

    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [fade, setFade] = useState(true);

    // ── Only right side auto-cycles every 2 seconds ──
    useEffect(() => {
        const timer = setInterval(() => {
            setFade(false);
            setTimeout(() => {
                setIndex((prev) => (prev + 1) % services.length);
                setFade(true);
            }, 300);
        }, 2000);
        return () => clearInterval(timer);
    }, [services.length]);

    return (
        <div className="w-full">
            <div className="flex flex-col md:flex-row w-full shadow-lg py-4">

                {/* ── LEFT: Image only — hover swaps img, nothing else changes ── */}
                <div
                    className="relative w-full md:w-1/2 h-80 md:h-96 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Default image — always first service image */}
                    <img
                        src={services[0].img}
                        alt="Service"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    />

                    {/* Hover image — always first service hover image */}
                    <img
                        src={services[0].hoverImg}
                        alt="Service Hover"
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>

                {/* ── RIGHT: Content auto-cycles every 2 seconds ── */}
                <div className="w-full md:w-1/2 bg-cyan-500 text-white p-10 md:p-14 flex flex-col justify-center min-h-80">

                    {/* Title */}
                    <h1 className={`text-3xl md:text-4xl font-light mb-8 transition-opacity duration-300 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}>
                        {services[index].title}
                    </h1>

                    {/* Description */}
                    <p className={`mb-6 opacity-90 leading-relaxed text-sm md:text-base transition-opacity duration-300 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}>
                        "{services[index].des}"
                    </p>

                    {/* Name */}
                    <h2 className={`font-semibold uppercase tracking-widest text-sm mb-8 transition-opacity duration-300 ${
                        fade ? 'opacity-100' : 'opacity-0'
                    }`}>
                        {services[index].name}
                    </h2>

                    {/* Dots — clickable */}
                    <div className="flex gap-2">
                        {services.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => {
                                    setFade(false);
                                    setTimeout(() => { setIndex(i); setFade(true); }, 300);
                                }}
                                className={`w-4 h-4 transition-all duration-300 ${
                                    i === index ? 'bg-white' : 'bg-white/40'
                                }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Oral;