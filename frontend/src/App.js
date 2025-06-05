import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'bot', message: 'Hello! I\'m the Hot Beans Web assistant. How can I help you today?' }
  ]);
  const [currentMessage, setCurrentMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    portfolio: '',
    experience: '',
    skills: '',
    message: ''
  });

  const predefinedResponses = {
    'hello': 'Hi there! Welcome to Hot Beans Web. We\'re excited to help you start your web development career!',
    'jobs': 'We currently have openings for Junior Web Developer, Front-end Developer, and Full-stack Developer positions. Check out our job specifications section above!',
    'requirements': 'We look for candidates with HTML, CSS, JavaScript knowledge, and a passion for learning. Previous project experience or course completion is preferred.',
    'apply': 'You can apply using the application form on this page. Make sure to include your portfolio and any relevant projects!',
    'courses': 'We recommend checking out our course links section for great web development learning resources.',
    'company': 'Hot Beans Web is a dynamic web development company focused on training the next generation of developers. We believe in hands-on learning and career growth.',
    'default': 'That\'s a great question! For specific inquiries, please use our application form or contact us directly. I can help with information about jobs, requirements, courses, or our company.'
  };

  const handleChatSubmit = (e) => {
    e.preventDefault();
    if (!currentMessage.trim()) return;

    const userMessage = { type: 'user', message: currentMessage };
    const lowercaseMessage = currentMessage.toLowerCase();
    
    let botResponse = predefinedResponses.default;
    for (const [key, response] of Object.entries(predefinedResponses)) {
      if (lowercaseMessage.includes(key)) {
        botResponse = response;
        break;
      }
    }

    setChatMessages(prev => [...prev, userMessage, { type: 'bot', message: botResponse }]);
    setCurrentMessage('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! We will review it and get back to you soon.');
    setFormData({
      name: '', email: '', phone: '', portfolio: '', experience: '', skills: '', message: ''
    });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gold">Hot Beans Web</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
                <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
                <button onClick={() => scrollToSection('team')} className="nav-link">Team</button>
                <button onClick={() => scrollToSection('jobs')} className="nav-link">Jobs</button>
                <button onClick={() => scrollToSection('apply')} className="nav-link">Apply</button>
                <button onClick={() => scrollToSection('courses')} className="nav-link">Courses</button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513470270416-d3ff6f16b22f" 
            alt="Modern office workspace"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-gold/20"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-300 animate-fade-in">
            Hot Beans Web
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-gray-200 animate-slide-up">
            Join the Future of Web Development
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed animate-slide-up-delay">
            Launch your career with our dynamic team. We're recruiting passionate web developers ready to make their mark.
          </p>
          <button 
            onClick={() => scrollToSection('apply')}
            className="premium-btn text-xl px-12 py-4 animate-glow"
          >
            Start Your Journey
          </button>
        </div>
      </section>

      {/* Company Profile */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="glass-card p-8">
              <h2 className="section-title mb-8">About Hot Beans Web</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Hot Beans Web is a cutting-edge web development company dedicated to creating exceptional digital experiences. 
                We specialize in modern web technologies and pride ourselves on fostering the next generation of talented developers.
              </p>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                Our mission is to bridge the gap between education and industry, providing real-world experience and mentorship 
                to aspiring web developers while delivering outstanding results for our clients.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <div className="text-gray-400">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">3</div>
                  <div className="text-gray-400">Years Strong</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2749495/pexels-photo-2749495.jpeg" 
                alt="Professional workspace"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section id="team" className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Meet Our Trainee Developers</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Patel Khan */}
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold to-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6">
                  PK
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-2">Patel Khan</h3>
                  <p className="text-gray-400">Junior Frontend Developer</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "Joining Hot Beans Web has been an incredible journey. The mentorship and real-world projects have 
                accelerated my learning beyond what I thought possible. I'm working with React, Node.js, and modern 
                design frameworks daily."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">React</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">CSS3</span>
                <span className="skill-tag">Tailwind</span>
              </div>
            </div>

            {/* Abdina Abdul */}
            <div className="glass-card p-8 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-gold to-yellow-300 rounded-full flex items-center justify-center text-black font-bold text-2xl mr-6">
                  AA
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gold mb-2">Abdina Abdul</h3>
                  <p className="text-gray-400">Full-Stack Developer Trainee</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4 leading-relaxed">
                "The collaborative environment at Hot Beans Web is amazing. I'm constantly learning from senior developers 
                while contributing to meaningful projects. The transition from bootcamp to professional development has been seamless."
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">MongoDB</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Vue.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Specifications */}
      <section id="jobs" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Open Positions</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Junior Web Developer */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gold mb-4">Junior Web Developer</h3>
              <p className="text-gray-300 mb-6">Perfect for recent graduates ready to start their professional journey.</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gold">Requirements:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• HTML5, CSS3, JavaScript fundamentals</li>
                  <li>• Basic understanding of React or Vue.js</li>
                  <li>• Portfolio with 2-3 projects</li>
                  <li>• Eagerness to learn and grow</li>
                </ul>
              </div>
              <div className="text-2xl font-bold text-gold">£25,000 - £30,000</div>
            </div>

            {/* Frontend Developer */}
            <div className="glass-card p-8 hover-lift border-gold border">
              <div className="bg-gold text-black px-3 py-1 rounded-full text-sm font-bold mb-4 inline-block">POPULAR</div>
              <h3 className="text-2xl font-bold text-gold mb-4">Frontend Developer</h3>
              <p className="text-gray-300 mb-6">For developers with some experience ready to take the next step.</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gold">Requirements:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• 1+ years experience with React/Vue/Angular</li>
                  <li>• Proficiency in modern CSS frameworks</li>
                  <li>• Experience with Git and version control</li>
                  <li>• Understanding of responsive design</li>
                </ul>
              </div>
              <div className="text-2xl font-bold text-gold">£30,000 - £40,000</div>
            </div>

            {/* Full-Stack Developer */}
            <div className="glass-card p-8 hover-lift">
              <h3 className="text-2xl font-bold text-gold mb-4">Full-Stack Developer</h3>
              <p className="text-gray-300 mb-6">For experienced developers ready to handle end-to-end development.</p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gold">Requirements:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>• Frontend + Backend experience</li>
                  <li>• Node.js, Python, or similar</li>
                  <li>• Database management (SQL/NoSQL)</li>
                  <li>• API development experience</li>
                </ul>
              </div>
              <div className="text-2xl font-bold text-gold">£40,000 - £55,000</div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="py-20 px-4 bg-gradient-to-r from-black/70 to-gray-900/70">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-16">Apply Now</h2>
          <div className="glass-card p-8">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-gold font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gold font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="form-input"
                  />
                </div>
                <div>
                  <label className="block text-gold font-semibold mb-2">Portfolio/GitHub URL</label>
                  <input 
                    type="url" 
                    value={formData.portfolio}
                    onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                    className="form-input"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">Experience Level</label>
                <select 
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="form-input"
                >
                  <option value="">Select your experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="experienced">Experienced (3+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">Technical Skills</label>
                <input 
                  type="text" 
                  placeholder="e.g., HTML, CSS, JavaScript, React, Node.js"
                  value={formData.skills}
                  onChange={(e) => setFormData({...formData, skills: e.target.value})}
                  className="form-input"
                />
              </div>

              <div>
                <label className="block text-gold font-semibold mb-2">Why do you want to join Hot Beans Web?</label>
                <textarea 
                  rows="4" 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="form-input resize-none"
                ></textarea>
              </div>

              <button type="submit" className="premium-btn w-full text-xl py-4">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Course Links */}
      <section id="courses" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center mb-16">Recommended Learning Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">FreeCodeCamp</h3>
              <p className="text-gray-300 mb-4">Free comprehensive web development curriculum</p>
              <a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>
            
            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">The Odin Project</h3>
              <p className="text-gray-300 mb-4">Open source curriculum for learning web development</p>
              <a href="https://theodinproject.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>

            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">Codecademy</h3>
              <p className="text-gray-300 mb-4">Interactive coding lessons and projects</p>
              <a href="https://codecademy.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>

            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">MDN Web Docs</h3>
              <p className="text-gray-300 mb-4">Complete reference for web technologies</p>
              <a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>

            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">Coursera</h3>
              <p className="text-gray-300 mb-4">University-level courses in computer science</p>
              <a href="https://coursera.org" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>

            <div className="glass-card p-6 hover-lift">
              <h3 className="text-xl font-bold text-gold mb-3">Udemy</h3>
              <p className="text-gray-300 mb-4">Practical web development courses</p>
              <a href="https://udemy.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-300">
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gold/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gold mb-4">Hot Beans Web</h3>
              <p className="text-gray-300 mb-4">
                Building the future of web development, one developer at a time.
              </p>
              <div className="text-sm text-gray-400">
                Made by <span className="text-gold font-semibold">Zulkernain Haider</span>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 careers@hotbeansweb.com</p>
                <p>📞 +44 (0) 20 1234 5678</p>
                <p>📍 London, United Kingdom</p>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => scrollToSection('about')} className="block text-gray-300 hover:text-gold">About Us</button>
                <button onClick={() => scrollToSection('jobs')} className="block text-gray-300 hover:text-gold">Open Positions</button>
                <button onClick={() => scrollToSection('apply')} className="block text-gray-300 hover:text-gold">Apply Now</button>
                <button onClick={() => scrollToSection('courses')} className="block text-gray-300 hover:text-gold">Learning Resources</button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Hot Beans Web. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* AI Chatbox */}
      <div className="fixed bottom-6 right-6 z-50">
        {chatOpen && (
          <div className="mb-4 w-80 h-96 glass-card flex flex-col">
            <div className="bg-gold text-black p-4 rounded-t-2xl">
              <div className="flex justify-between items-center">
                <h3 className="font-bold">Hot Beans Web Assistant</h3>
                <button onClick={() => setChatOpen(false)} className="text-black hover:text-gray-800">×</button>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((msg, index) => (
                <div key={index} className={`p-3 rounded-lg ${msg.type === 'user' ? 'bg-gold text-black ml-8' : 'bg-gray-800 text-white mr-8'}`}>
                  {msg.message}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleChatSubmit} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  placeholder="Ask about jobs, requirements..."
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-gold"
                />
                <button type="submit" className="px-4 py-2 bg-gold text-black rounded-lg hover:bg-yellow-300">
                  Send
                </button>
              </div>
            </form>
          </div>
        )}
        
        <button 
          onClick={() => setChatOpen(!chatOpen)}
          className="w-16 h-16 bg-gold text-black rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-300 transition-all duration-300 hover:scale-105"
        >
          💬
        </button>
      </div>
    </div>
  );
}

export default App;