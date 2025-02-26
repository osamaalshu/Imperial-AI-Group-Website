import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, Building2, Mail, Linkedin } from 'lucide-react';
import Logo from '../components/Logo';

const speakers = [
  {
    category: "YC Founders",
    people: [
      { name: "James He", role: "Artificial Societies, YC W25" },
      { name: "Daniel Lenton", role: "Unify, YC W23" },
      { name: "Rehan Sheikh", role: "Remade, YC W24" }
    ]
  },
  {
    category: "AI & Web3 Experts",
    people: [
      { name: "Director of Ripple Trading", role: "Blockchain Expert" },
      { name: "Head of IBM Blockchain", role: "Enterprise Solutions" },
      { name: "Google Director", role: "AI Innovation" },
      { name: "Advait", role: "Founder, Periphery Labs" },
      { name: "Konstantinos", role: "Founder, Torus" },
      { name: "Albert", role: "CEO, Tomoro.ai" },
      { name: "Jiahao Sun", role: "Founder, Flock.io" }
    ]
  },
  {
    category: "Government & FinTech",
    people: [
      { name: "Head of FinTech", role: "His Majesty's Government" },
      { name: "CEO of Zodiac Markets", role: "FinTech Innovation" },
      { name: "Charlie Muirhead", role: "CEO of CogX" }
    ]
  },
  {
    category: "Venture Capital",
    people: [
      { name: "Ash", role: "Partner at LocalGlobe" },
      { name: "Jamesin", role: "Partner at ChapterOne" },
      { name: "Kled", role: "Managing Director at KR1" },
      { name: "Robbie", role: "CEO of Animoca Brands" },
      { name: "Mohammed Elzedin", role: "Head of Tokenomics, Animoca Brands" }
    ]
  },
  {
    category: "AI Regulation",
    people: [
      { name: "Shari Gribbin", role: "FTSE 200 Lawyer" },
      { name: "Dana Daher", role: "Practice Leader" },
      { name: "George Chen", role: "Phoenix" }
    ]
  }
];

function Conference() {
  return (
    <div className="min-h-screen bg-white">
      {/* Event Banner */}
      <div className="bg-[#0000CD] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Imperial AI Conference - March 15th, 2025</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Logo className="h-12 w-48" />
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Home</Link>
              <Link to="/conference" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Conference</Link>
              <Link to="/hackathon" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Hackathon</Link>
              <Link to="/members" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Members</Link>
              <Link to="/contact" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Conference Hero */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-center mb-12" style={{ color: '#0000CD' }}>Imperial AI Conference 2025</h1>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=2000"
                    alt="Conference"
                    className="rounded-lg w-full h-64 object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>March 15, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Imperial College London</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>30+ Industry Leaders</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Building2 className="h-5 w-5" />
                    <span>Project Demos & Networking</span>
                  </div>
                  <p className="text-gray-700 mt-4">
                    Join us for an extraordinary gathering of AI innovators, industry leaders, and investors. Featuring project demos, keynote speeches, and exclusive networking opportunities with top VCs and founders.
                  </p>
                  <div className="mt-6">
                    <a 
                      href="#register" 
                      className="inline-block px-6 py-3 text-white rounded-lg transition"
                      style={{ backgroundColor: '#0000CD' }}
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>

              {/* Speakers Grid */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6" style={{ color: '#0000CD' }}>Featured Speakers</h3>
                <div className="grid gap-8">
                  {speakers.map((category, index) => (
                    <div key={index} className="space-y-4">
                      <h4 className="text-xl font-semibold" style={{ color: '#0000CD' }}>{category.category}</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        {category.people.map((person, personIndex) => (
                          <div key={personIndex} className="p-4 bg-gray-50 rounded-lg">
                            <p className="font-semibold">{person.name}</p>
                            <p className="text-sm text-gray-600">{person.role}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0000CD]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center space-y-6">
            <nav className="flex space-x-8">
              <Link to="/" className="text-white hover:text-opacity-80">Home</Link>
              <Link to="/conference" className="text-white hover:text-opacity-80">Conference</Link>
              <Link to="/hackathon" className="text-white hover:text-opacity-80">Hackathon</Link>
              <Link to="/members" className="text-white hover:text-opacity-80">Members</Link>
              <Link to="/contact" className="text-white hover:text-opacity-80">Contact</Link>
            </nav>
            <div className="flex space-x-6">
              <a href="mailto:aisociety@imperial.ac.uk" className="text-white hover:text-opacity-80">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/imperial-ai-society" className="text-white hover:text-opacity-80">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-white opacity-80">© 2025 Imperial AI Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Conference;