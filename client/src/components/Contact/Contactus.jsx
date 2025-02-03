import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const ContactUs = () => {
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: MapPin, title: 'Address', content: '123 Innovation Street, Tech City, TC 12345' },
            { icon: Phone, title: 'Phone', content: '+1 (555) 123-4567' },
            { icon: Mail, title: 'Email', content: 'hello@nebulaniche.com' },
            { icon: Clock, title: 'Hours', content: 'Mon-Fri: 9AM - 6PM' }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <item.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.content}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg h-96">
            <div className="w-full h-full bg-gray-200 rounded-lg animate-pulse">
              {/* Map placeholder - Replace with actual map component */}
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                Interactive Map
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={formStatus !== 'idle'}
                className={`w-full py-3 px-6 rounded-lg text-white font-medium 
                  ${formStatus === 'success' ? 'bg-green-500' : 'bg-blue-600 hover:bg-blue-700'} 
                  transition-all duration-300 transform hover:-translate-y-1 
                  flex items-center justify-center space-x-2`}
              >
                {formStatus === 'idle' && (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
                {formStatus === 'sending' && (
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                )}
                {formStatus === 'success' && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Connect With Us</h3>
          <div className="flex justify-center space-x-6">
            {['facebook', 'twitter', 'linkedin', 'instagram'].map((social) => (
              <a
                key={social}
                href={`#${social}`}
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-6 h-6 bg-gray-400 rounded-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;