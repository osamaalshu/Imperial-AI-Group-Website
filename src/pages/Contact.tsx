import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Linkedin, Send } from 'lucide-react';
import Logo from '../components/Logo';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open default mail client with pre-filled information
    const mailtoLink = `mailto:aisociety@imperial.ac.uk?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

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
              <Link to="/contact" className="text-[#0000CD]" style={{ fontWeight: 500 }}>Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-center mb-12" style={{ color: '#0000CD' }}>Get in Touch</h1>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#0000CD' }}>Contact Information</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium mb-2">Location</h3>
                    <p className="text-gray-600">Imperial College London<br />South Kensington Campus<br />London SW7 2AZ</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Email</h3>
                    <a href="mailto:aisociety@imperial.ac.uk" className="text-[#0000CD] hover:underline">aisociety@imperial.ac.uk</a>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-2">Social Media</h3>
                    <div className="flex space-x-4">
                      <a href="https://www.linkedin.com/company/imperial-ai-society" className="text-gray-600 hover:text-[#0000CD]">
                        <Linkedin className="h-6 w-6" />
                      </a>
                      <a href="mailto:aisociety@imperial.ac.uk" className="text-gray-600 hover:text-[#0000CD]">
                        <Mail className="h-6 w-6" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000CD] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000CD] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000CD] focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0000CD] focus:border-transparent"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-[#0000CD] text-white rounded-lg hover:bg-opacity-90 transition"
                  >
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </button>
                </form>
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

export default Contact;