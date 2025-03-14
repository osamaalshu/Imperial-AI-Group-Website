import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Building2, Trophy, Users, Calendar, Clock } from 'lucide-react';
import Logo from '../components/Logo';

const sponsors = {
  gold: [
    { name: "Venice.ai", logo: "/sponsors/venice.svg" },
    { name: "Flock.io", logo: "/sponsors/flock.png" },
    { name: "DeSciWorld", logo: "/sponsors/desci.png" },
    { name: "Nerd Knowledge Network", logo: "/sponsors/nkn.png" },
    { name: "ACI Dev", logo: "/sponsors/acidev.svg" },
    { name: "OLAS", logo: "/sponsors/olas.png" }
  ],
  silver: [
    { name: "RockawayX", logo: "/sponsors/rockaway.png" },
    { name: "Assuster", logo: "/sponsors/assuster.png" },
    { name: "EDUCHAIN", logo: "/sponsors/educhain.png" },
    { name: "Innovation Lab", logo: "/sponsors/innovationlab.png" },
    { name: "Fetch.ai", logo: "/sponsors/fetch.png" }
  ],
  partners: [
    { name: "Levia Protocol" },
    { name: "Solana" },
    { name: "AI16Z" },
    { name: "SuperteamUK" },
    { name: "Virtual Protocol" },
    { name: "Anthropic" }
  ]
};

function Hackathon() {
  return (
    <div className="min-h-screen bg-white">
      {/* Event Banner */}
      <div className="bg-[#0000CD] text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span className="font-medium">Imperial AI Hackathon - March 15 - April 13, 2025</span>
            </div>
            <a 
              href="https://lu.ma/aeumfimb" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-opacity-80 transition"
            >
              Register Now →
            </a>
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
              <Link to="/conference" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Conference</Link>
              <Link to="/hackathon" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Hackathon</Link>
              <Link to="/members" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Members</Link>
              <Link to="/contact" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6" style={{ color: '#0000CD' }}>
              Imperial AI Hackathon 2025
            </h1>
            <p className="text-xl mb-8" style={{ color: '#6F8093' }}>
              Join us for an exciting month of innovation, collaboration, and AI development
            </p>
            <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Calendar className="h-5 w-5" />
                    <span>March 15 - April 13, 2025</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock className="h-5 w-5" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-5 w-5" />
                    <span>Imperial College London</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users className="h-5 w-5" />
                    <span>100+ Participants Expected</span>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <a 
                    href="https://lu.ma/aeumfimb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 text-white text-lg font-semibold rounded-lg transition transform hover:scale-105"
                    style={{ backgroundColor: '#0000CD' }}
                  >
                    Register for the Hackathon
                  </a>
                  <p className="text-sm text-gray-500 mt-4">Limited spots available. Register now to secure your place!</p>
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Users className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Diverse Teams</h3>
                <p className="text-gray-600">Form teams with talented students from top UK universities</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Industry Mentors</h3>
                <p className="text-gray-600">Get guidance from experienced industry professionals</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Trophy className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Prizes</h3>
                <p className="text-gray-600">Win exciting prizes and potential internship opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-20">
            {/* Gold Sponsors */}
            <div>
              <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#B8860B' }}>Gold Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {sponsors.gold.map((sponsor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{ backgroundColor: '#B8860B' }}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-16 w-auto object-contain"
                      style={{
                        filter: 'brightness(1.1) contrast(1.2)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Silver Sponsors */}
            <div>
              <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#808080' }}>Silver Sponsors</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {sponsors.silver.map((sponsor, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{ backgroundColor: '#808080' }}
                  >
                    <img 
                      src={sponsor.logo} 
                      alt={sponsor.name} 
                      className="h-14 w-auto object-contain"
                      style={{
                        filter: 'brightness(1.1) contrast(1.2)'
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Industrial Partners */}
            <div>
              <h3 className="text-4xl font-bold text-center mb-12" style={{ color: '#0000CD' }}>Industrial Partners</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
                {sponsors.partners.map((partner, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-center p-8 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                    style={{ 
                      backgroundColor: 'rgba(0, 0, 205, 0.1)',
                      border: '2px solid rgba(0, 0, 205, 0.2)'
                    }}
                  >
                    <span className="text-xl font-semibold" style={{ color: '#0000CD' }}>{partner.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#0000CD] mt-20">
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

export default Hackathon;