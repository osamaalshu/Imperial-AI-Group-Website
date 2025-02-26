import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Users } from 'lucide-react';
import Logo from '../components/Logo';

const members = [
  {
    name: "Paul Pohl",
    role: "Co-Chair",
  },
  {
    name: "Shafi Maahe",
    role: "Co-Chair",
  },
  {
    name: "Osama Al Shuaili",
    role: "Head of Outreach",
  },
  {
    name: "Fares Giesen",
    role: "Co-Head of IX AI Society",
  },
  {
    name: "Nicolas Franco Gonzalez",
    role: "Co-Head of IX AI Society",
  },
  {
    name: "Maxime Vergnaud",
    role: "Head of IX Events",
  }
];

function Members() {
  return (
    <div className="min-h-screen bg-white">
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
              <Link to="/hackathon" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Hackathon</Link>
              <Link to="/members" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Members</Link>
              <Link to="/contact" className="hover:text-[#0000CD]" style={{ color: '#6F8093' }}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Members Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-12">
              <Users className="h-8 w-8" style={{ color: '#0000CD' }} />
              <h1 className="text-4xl font-bold" style={{ color: '#0000CD' }}>Our Team</h1>
            </div>
            
            <div className="grid gap-6">
              {members.map((member, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: '#0000CD' }}>{member.name}</h3>
                    <p className="text-gray-600">{member.role}</p>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@imperial.ac.uk`}
                      className="p-2 rounded-full hover:bg-gray-100 transition"
                      title="Email"
                    >
                      <Mail className="h-5 w-5" style={{ color: '#0000CD' }} />
                    </a>
                    <a 
                      href={`https://www.linkedin.com/in/${member.name.toLowerCase().replace(' ', '-')}`}
                      className="p-2 rounded-full hover:bg-gray-100 transition"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" style={{ color: '#0000CD' }} />
                    </a>
                  </div>
                </div>
              ))}
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
  );
}

export default Members;