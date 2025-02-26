import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Mail, Linkedin, GraduationCap, FlaskRound as Flask, Microscope, Calendar, MapPin, Users, Trophy } from 'lucide-react';
import Logo from './components/Logo';
import Conference from './pages/Conference';
import Hackathon from './pages/Hackathon';
import Members from './pages/Members';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route path="/conference" element={<Conference />} />
      <Route path="/hackathon" element={<Hackathon />} />
      <Route path="/members" element={<Members />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/" element={
        <div className="min-h-screen bg-white">
          {/* Event Banners */}
          <div className="bg-[#0000CD] text-white">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Join us for the Imperial AI Conference - March 9th, 2025</span>
                </div>
                <Link to="/conference" className="text-white hover:text-opacity-80 transition">
                  View Details →
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-[#000080] text-white">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5" />
                  <span className="font-medium">Imperial AI Hackathon - March 23-24, 2024</span>
                </div>
                <Link to="/hackathon" className="text-white hover:text-opacity-80 transition">
                  Register Now →
                </Link>
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
                  <Link to="/" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Home</Link>
                  <Link to="/conference" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Conference</Link>
                  <Link to="/hackathon" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Hackathon</Link>
                  <Link to="/members" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Members</Link>
                  <Link to="/contact" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Contact</Link>
                </nav>
              </div>
            </div>
          </header>

          {/* Conference Preview Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#0000CD' }}>Imperial AI Conference 2025</h2>
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
                        <span>March 9, 2025</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>Imperial College London</span>
                      </div>
                      <p className="text-gray-700 mt-4">
                        Join us for an extraordinary gathering of AI innovators, industry leaders, and investors. Featuring project demos, keynote speeches, and exclusive networking opportunities with top VCs and founders.
                      </p>
                      <div className="mt-6">
                        <Link 
                          to="/conference" 
                          className="inline-block px-6 py-3 text-white rounded-lg transition"
                          style={{ backgroundColor: '#0000CD' }}
                        >
                          View Full Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Hackathon Preview Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8" style={{ color: '#0000CD' }}>Imperial AI Hackathon 2024</h2>
                <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Calendar className="h-5 w-5" />
                        <span>March 23-24, 2024</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <MapPin className="h-5 w-5" />
                        <span>Imperial College London</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Users className="h-5 w-5" />
                        <span>100+ Participants Expected</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Trophy className="h-5 w-5" />
                        <span>Exciting Prizes & Opportunities</span>
                      </div>
                      <p className="text-gray-700 mt-4">
                        Join us for an exciting weekend of innovation and collaboration. Work with talented students from top UK universities, receive guidance from industry mentors, and compete for amazing prizes.
                      </p>
                      <div className="mt-6">
                        <a 
                          href="https://lu.ma/aeumfimb"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-3 text-white rounded-lg transition"
                          style={{ backgroundColor: '#0000CD' }}
                        >
                          Register Now
                        </a>
                      </div>
                    </div>
                    <div>
                      <img 
                        src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=2000"
                        alt="Hackathon"
                        className="rounded-lg w-full h-64 object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Main Hero */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6" style={{ color: '#0000CD' }}>
                Advancing AI Research
              </h1>
              <p className="text-xl mb-12" style={{ color: '#6F8093' }}>
                Pushing the boundaries of artificial intelligence through innovative research and collaboration.
              </p>
              <div className="flex justify-center space-x-4">
                <Link to="/contact" className="text-white px-8 py-3 rounded-lg transition" style={{ backgroundColor: '#0000CD', borderColor: '#0000CD' }}>
                  Get in Touch
                </Link>
                <Link to="/hackathon" className="px-8 py-3 rounded-lg transition border hover:text-[#0000CD] hover:border-[#0000CD]" style={{ color: '#6F8093', borderColor: '#6F8093' }}>
                  Join Hackathon
                </Link>
              </div>
            </div>
          </section>

          {/* Research Areas */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#0000CD' }}>Research Areas</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 border rounded-lg hover:shadow-lg transition">
                  <GraduationCap className="h-12 w-12 mb-4" style={{ color: '#0000CD' }} />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#0000CD' }}>Machine Learning</h3>
                  <p style={{ color: '#6F8093' }}>Advanced research in deep learning, reinforcement learning, and neural networks.</p>
                </div>
                <div className="p-6 border rounded-lg hover:shadow-lg transition">
                  <Flask className="h-12 w-12 mb-4" style={{ color: '#0000CD' }} />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#0000CD' }}>AI Ethics</h3>
                  <p style={{ color: '#6F8093' }}>Exploring the ethical implications and responsible development of AI systems.</p>
                </div>
                <div className="p-6 border rounded-lg hover:shadow-lg transition">
                  <Microscope className="h-12 w-12 mb-4" style={{ color: '#0000CD' }} />
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#0000CD' }}>Applied AI</h3>
                  <p style={{ color: '#6F8093' }}>Practical applications of AI in healthcare, robotics, and sustainable technology.</p>
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
                <p className="text-white opacity-80">© 2024 Imperial AI Group. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      } />
    </Routes>
  );
}

export default App;