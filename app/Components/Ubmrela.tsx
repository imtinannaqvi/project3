import React from 'react';
import { FaTooth, FaShieldAlt, FaSyringe, FaCrown } from 'react-icons/fa';
import { GiScalpel, GiTooth } from 'react-icons/gi';

const services_left = [
    {
        icon: <FaTooth size={28} />,
        title: "Implants",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
    {
        icon: <FaShieldAlt size={28} />,
        title: "Minor oral surgeries",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
    {
        icon: <GiScalpel size={28} />,
        title: "Orthodontics",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
];

const services_right = [
    {
        icon: <GiTooth size={28} />,
        title: "Crown and bridge work",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
    {
        icon: <FaSyringe size={28} />,
        title: "Cosmetics",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
    {
        icon: <FaCrown size={28} />,
        title: "Root canal treatments",
        des: "Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales."
    },
];

const Ubmrela = () => {
    return (
        <div className="py-16 px-6 bg-white">

            {/* Header */}
            <div className="text-center mb-14 relative h-24 flex flex-col items-center justify-center">
    <img
        src="/title_img5.webp"
        alt=""
        className="absolute bg-slate-500 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-20 object-contain opacity-10"
    />
    <h1 className="text-3xl font-bold text-gray-800 relative z-10">
        Our <span className="text-cyan-500">Umbrella of Services</span>
    </h1>
    <p className="text-slate-400 mt-2 relative z-10">Pain free procedures in dentistry</p>
</div>

            {/* 3 column layout */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* ── LEFT column ── */}
                <div className="flex flex-col gap-10">
                    {services_left.map((item, i) => (
                        <div key={i} className="flex items-start gap-4">
                            {/* Icon circle */}
                            <div className="shrink-0 w-14 h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-md">
                                {item.icon}
                            </div>
                            {/* Text */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ── CENTER: image ── */}
                <div className="flex justify-center items-center">
                    <img
                        src="/services5-3.jpg"
                        alt="Dental Services"
                        className="w-full max-w-xs object-contain "
                    />
                </div>

                {/* ── RIGHT column ── */}
                <div className="flex flex-col gap-10">
                    {services_right.map((item, i) => (
                        <div key={i} className="flex flex-row-reverse items-start gap-4">
                            {/* Icon circle */}
                            <div className="shrink-0 w-14 h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-md">
                                {item.icon}
                            </div>
                            {/* Text — right aligned */}
                            <div className="text-right">
                                <h3 className="text-lg font-bold text-gray-800 mb-1">{item.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{item.des}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Ubmrela;