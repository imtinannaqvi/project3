"use client";
import React, { useState } from 'react';
import { ChevronDown, Menu, X, Search } from 'lucide-react';

const navItems = [
  {
    name: 'Home',
    sub: ['Home Layout 1', 'Home Layout 2', 'Home Layout 3']
  },
  {
    name: 'About',
    sub: ['About Us', 'Our Team', 'Why Choose Us', 'Testimonials']
  },
  {
    name: 'Services',
    sub: ['Dental Implants', 'Teeth Whitening', 'Root Canal', 'Orthodontics', 'Cosmetic Dentistry', 'Oral Surgery']
  },
  {
    name: 'Blog',
    sub: ['Blog Grid', 'Blog Classic', 'Blog Single', 'Blog Left Sidebar']
  },
  {
    name: 'Dentists',
    sub: ['Our Doctors', 'Doctor Profile', 'Doctor Schedule']
  },
  {
    name: 'Portfolio',
    sub: ['Portfolio 2 Col', 'Portfolio 3 Col', 'Portfolio 4 Col', 'Portfolio Single']
  },
  {
    name: 'ShortCodes',
    sub: ['Buttons', 'Icons', 'Typography', 'Forms', 'Tables', 'Alerts']
  },
  {
    name: 'Appointment',
    sub: []
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* Logo */}
        <img src="/logo-1.webp" className="w-32" alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={`flex items-center gap-1 px-4 py-2 font-semibold text-sm transition-colors duration-200 rounded-sm ${
                item.name === 'Appointment'
                  ? 'bg-cyan-500 text-white hover:bg-cyan-600 px-5'
                  : 'text-gray-700 hover:text-cyan-500'
              }`}>
                {item.name}
                {item.sub.length > 0 && (
                  <ChevronDown size={14} className={`transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`}/>
                )}
              </button>

              {/* Dropdown */}
              {item.sub.length > 0 && activeDropdown === item.name && (
                <ul className="absolute left-0 top-full w-52 bg-white shadow-xl border-t-2 border-cyan-500 z-50 py-2">
                  {item.sub.map((sub) => (
                    <li
                      key={sub}
                      className="px-5 py-2.5 text-sm text-gray-600 hover:text-cyan-500 hover:bg-cyan-50 cursor-pointer transition-colors duration-200"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Search + Mobile hamburger */}
        <div className="flex items-center gap-3">

          {/* Search icon */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2 text-gray-600 hover:text-cyan-500 transition-colors duration-200"
          >
            <Search size={20}/>
          </button>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 text-gray-600 hover:text-cyan-500 transition"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24}/> : <Menu size={24}/>}
          </button>
        </div>
      </div>

      {/* Search bar — drops below navbar on click */}
      {searchOpen && (
        <div className="bg-cyan-500 px-6 py-4 flex items-center gap-3">
          <Search size={20} className="text-white shrink-0"/>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            autoFocus
            className="w-full bg-transparent text-white placeholder-white/70 outline-none text-base"
          />
          <button
            onClick={() => { setSearchOpen(false); setSearchQuery(''); }}
            className="text-white hover:text-white/70 transition"
          >
            <X size={20}/>
          </button>
        </div>
      )}

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-6 pb-6">
          {navItems.map((item) => (
            <div key={item.name}>
              <div
                className="flex items-center justify-between py-3 font-semibold text-gray-800 border-b border-gray-100 cursor-pointer hover:text-cyan-500 transition"
                onClick={() => setMobileExpanded(mobileExpanded === item.name ? null : item.name)}
              >
                {item.name}
                {item.sub.length > 0 && (
                  <ChevronDown size={16} className={`transition-transform ${
                    mobileExpanded === item.name ? 'rotate-180' : ''
                  }`}/>
                )}
              </div>
              {mobileExpanded === item.name && item.sub.length > 0 && (
                <ul className="pl-4 border-l-2 border-cyan-500 mt-1 mb-2">
                  {item.sub.map((sub) => (
                    <li
                      key={sub}
                      className="py-2 text-sm text-gray-600 hover:text-cyan-500 cursor-pointer transition"
                    >
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;