import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Linkedin, Building2, Trophy, Users, Presentation } from 'lucide-react';
import Logo from '../components/Logo';

const sponsorshipTiers = [
  {
    name: "Gold",
    price: "£15,000",
    slots: "4 slots",
    features: [
      "Custom named award aligned with your technology stack",
      "Center spot in the sponsor booth area",
      "Premium logo placement on all marketing materials and merchandise",
      "30-minute talk during opening/closing ceremony",
      "30-minute panel discussion",
      "Host workshops during co-working days",
      "Full access to attendee contact information",
      "Promotion through top UK universities' social media"
    ],
    color: '#FFD700',
    textColor: '#000',
    highlighted: true
  },
  {
    name: "Silver",
    price: "£7,000",
    slots: "4 slots",
    features: [
      "15-minute talk during opening/closing ceremony",
      "Side spot in the sponsor booth area",
      "Prominent logo placement on marketing materials",
      "Logo on participant merchandise",
      "Host workshops during co-working days",
      "Promotion through Imperial Societies"
    ],
    color: '#C0C0C0',
    textColor: '#000',
    highlighted: false
  },
  {
    name: "Bronze",
    price: "£4,000",
    slots: "6 slots",
    features: [
      "30-minute panel discussion participation",
      "Logo on all event marketing materials",
      "Promotion through top UK universities' social media"
    ],
    color: '#CD7F32',
    textColor: '#fff',
    highlighted: false
  }
];

function Hackathon() {
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
              <Link to="/hackathon" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Hackathon</Link>
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
              AI Agent Hackathon
            </h1>
            <p className="text-xl mb-12" style={{ color: '#6F8093' }}>
              Join top talent from Imperial, UCL, Cambridge, and Oxford to create innovative AI projects using cutting-edge frameworks like Levia, Virtuals, and Camel.ai.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Users className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Top Universities</h3>
                <p className="text-gray-600">Bringing together talent from the UK's leading institutions</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Building2 className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Prime Location</h3>
                <p className="text-gray-600">Hosted at Imperial College London's South Kensington campus</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg">
                <Presentation className="h-12 w-12 mb-4 mx-auto" style={{ color: '#0000CD' }} />
                <h3 className="text-lg font-semibold mb-2">Media Coverage</h3>
                <p className="text-gray-600">Featured in CoinDesk, TechCrunch, and leading tech media</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-8">
              <MapPin className="h-6 w-6" style={{ color: '#0000CD' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#0000CD' }}>Venue</h2>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">South Kensington Campus</h3>
              <p className="text-gray-600 mb-6">
                Located in the heart of London, Imperial College London's South Kensington campus provides the perfect setting for innovation and collaboration.
              </p>
              <div className="w-full h-[400px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.9092404037547!2d-0.17917492392006848!3d51.49822067181897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760567da220a01%3A0x31911b371c692e86!2sImperial%20College%20London!5e0!3m2!1sen!2suk!4v1709321493961!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Imperial College London Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsorship Packages */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center space-x-4 mb-12">
              <Trophy className="h-6 w-6" style={{ color: '#0000CD' }} />
              <h2 className="text-3xl font-bold" style={{ color: '#0000CD' }}>Sponsorship Packages</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {sponsorshipTiers.map((tier) => (
                <div 
                  key={tier.name} 
                  className={`bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 ${
                    tier.highlighted ? 'ring-2 ring-[#0000CD]' : ''
                  }`}
                  style={{
                    boxShadow: tier.highlighted 
                      ? `0 4px 20px ${tier.color}40` 
                      : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <div 
                    className="p-6"
                    style={{ 
                      background: tier.color,
                      color: tier.textColor
                    }}
                  >
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <p className="text-3xl font-bold mb-1">{tier.price}</p>
                    <p className="opacity-90">{tier.slots}</p>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {tier.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span style={{ color: tier.color }} className="mt-1">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
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

export default Hackathon;