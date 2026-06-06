"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, MapPin, Phone, Mail, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';

const slides = [
  {
    id: 1,
    bg: "/Team.jpg",
    bgPos: "bg-center",
    content: "hours",
  },
  {
    id: 2,
    bg: "/doc.jpg",
    bgPos: "bg-top",
    content: "location",
  },
  {
    id: 3,
    bg: "/den.jpg",
    bgPos: "bg-center",
    content: "care",
  },
];

const Sliders = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const next = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="relative w-full h-[550px] overflow-hidden">

      {/* ── SLIDES ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 bg-cover ${slides[current].bgPos}`}
          style={{ backgroundImage: `url(${slides[current].bg})` }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/55"/>

          {/* ── SLIDE 1: Working Hours ── */}
          {slides[current].content === 'hours' && (
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-start px-12 md:px-24"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-10 max-w-md text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-500 p-3 rounded-full">
                    <Clock size={24} className="text-white"/>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Working Hours</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { day: "Monday - Friday", time: "9:00 AM – 6:00 PM" },
                    { day: "Saturday", time: "9:00 AM – 4:00 PM" },
                    { day: "Sunday", time: "Closed" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/20 pb-3">
                      <span className="text-white/80 text-sm font-medium">{item.day}</span>
                      <span className={`font-bold text-sm ${
                        item.time === 'Closed' ? 'text-red-400' : 'text-cyan-300'
                      }`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-2 text-white/70 text-sm">
                  <Phone size={14} className="text-cyan-400"/>
                  <span>Emergency: +440-98-5298</span>
                </div>

                <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition w-full">
                  Book Appointment
                </button>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 2: Location & Address ── */}
          {slides[current].content === 'location' && (
            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-start px-12 md:px-24"
            >
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 md:p-10 max-w-md text-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-cyan-500 p-3 rounded-full">
                    <MapPin size={24} className="text-white"/>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold">Find Us</h2>
                </div>

                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} className="text-cyan-400 shrink-0 mt-1"/>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Address</p>
                      <p className="text-white font-medium">
                        121 King Street, Melbourne<br/>Victoria, Australia 3000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Phone size={18} className="text-cyan-400 shrink-0 mt-1"/>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Phone</p>
                      <p className="text-white font-medium">+440-98-5298</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail size={18} className="text-cyan-400 shrink-0 mt-1"/>
                    <div>
                      <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Email</p>
                      <p className="text-white font-medium">info@medinova.com</p>
                    </div>
                  </div>
                </div>

                <button className="mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-full transition w-full">
                  Get Directions
                </button>
              </div>
            </motion.div>
          )}

          {/* ── SLIDE 3: We Care About Your Teeth ── */}
          {slides[current].content === 'care' && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute inset-0 flex items-center justify-center px-6 text-center"
            >
              <div className="max-w-2xl text-white">
                <div className="flex justify-center mb-6">
                  <div className="bg-cyan-500 p-4 rounded-full shadow-xl">
                    <FaTooth size={36} className="text-white"/>
                  </div>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                  We Care About{' '}
                  <span className="text-cyan-400">Your Teeth</span>
                </h2>

                <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8 max-w-xl mx-auto">
                  At Dental, we combine cutting-edge dental technology with a compassionate
                  team to deliver world-class care. From routine checkups to advanced procedures,
                  your smile is our priority — because a healthy smile changes everything.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold px-8 py-3 rounded-full transition">
                    Our Services
                  </button>
                  <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 font-bold px-8 py-3 rounded-full transition">
                    Meet Our Team
                  </button>
                </div>
              </div>
            </motion.div>
          )}

        </motion.div>
      </AnimatePresence>

      {/* ── PREV / NEXT arrows ── */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24}/>
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-cyan-500 text-white p-3 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24}/>
      </button>

      {/* ── DOT indicators ── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'bg-cyan-500 w-8 h-3' : 'bg-white/50 w-3 h-3'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default Sliders;