import React, { useState, useEffect } from 'react';

const Cv = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    { name: 'Aarkayad', url: 'https://aarkayad.com/', type: 'Website' },
    { name: 'Cosdelta', url: 'https://www.cosdelta.in/', type: 'Website' },
    { name: 'Paradise Specialty Cables', url: 'https://www.paradisespecialitycables.com/', type: 'Website' },
    { name: 'Master60', url: 'http://www.masters60.com/', type: 'Website' },
    { name: 'Innerally', url: 'https://innerally.in/', type: 'Website' },
    { name: 'Neeto', url: 'https://www.neeto.com/neetoinvoice', type: 'Website' },
    { name: 'EatFigo', url: 'https://eatfigo.com/', type: 'Website & App', appUrl: 'apps.apple.com/by/app/figo/' },
    { name: 'Phalafire', url: 'http://pahalfire.com/', type: 'Website' },
    { 
      name: 'Pidge', 
      type: 'Mobile App',
      playStore: 'https://play.google.com/store/search?q=pidge+delivery+partner&c=apps',
      appStore: 'https://apps.apple.com/in/app/pidge-on-demand-delivery/id1479218436'
    },
    { 
      name: 'Ovatime', 
      type: 'Mobile App',
      playStore: 'https://play.google.com/store/apps/details?id=com.ovatimes&hl=en&gl=US',
      appStore: 'https://apps.apple.com/in/app/ovatime-mobile/id1485844877'
    },
    { 
      name: 'MyEtimecard', 
      type: 'Mobile App',
      appStore: 'https://apps.apple.com/in/app/myetimecard/id1078717406'
    },
    { 
      name: 'Gas Hero', 
      type: 'Mobile App',
      playStore: 'https://play.google.com/store/apps/details?id=com.gashero&hl=en_IN&gl=US',
      appStore: 'https://apps.apple.com/us/app/gas-hero-fuel/id1455204101'
    },
    { 
      name: 'Upstox', 
      type: 'Mobile App',
      playStore: 'https://play.google.com/store/apps/details?id=in.upstox.pro&hl=en_IN&gl=US',
      appStore: 'https://apps.apple.com/in/app/upstox-stocks-mutual-funds/id1070470718'
    }
  ];

  const services = [
    { title: 'Custom Web Development', icon: '🌐', desc: 'Tailored web solutions built with modern technologies' },
    { title: 'Mobile App Development', icon: '📱', desc: 'Native and cross-platform mobile applications' },
    { title: 'Custom Plugins and Scripts', icon: '⚙️', desc: 'Specialized tools and automation solutions' },
    { title: 'UI/UX Design', icon: '🎨', desc: 'User-centered design for optimal experiences' },
    { title: 'E-commerce Development', icon: '🛒', desc: 'Complete online store solutions' },
    { title: 'Cloud Integration', icon: '☁️', desc: 'Scalable cloud-based infrastructure' },
    { title: 'Digital Strategy & Consulting', icon: '💡', desc: 'Strategic guidance for digital transformation' },
    { title: 'Maintenance & Support', icon: '🔧', desc: 'Ongoing support and optimization' }
  ];

  const coreValues = [
    { 
      title: 'Innovation', 
      desc: 'We embrace creativity and push technological boundaries to deliver cutting-edge solutions.',
      icon: '🚀'
    },
    { 
      title: 'Excellence', 
      desc: 'Quality is our priority. We ensure our products are reliable, user-friendly, and meet the highest standards.',
      icon: '⭐'
    },
    { 
      title: 'Client Focus', 
      desc: 'Our clients are central to our work. We tailor our services to meet their unique needs and drive their success.',
      icon: '🎯'
    },
    { 
      title: 'Integrity', 
      desc: 'We operate with honesty and transparency, building trust in every relationship.',
      icon: '🤝'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 pt-10">

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-teal-600 via-teal-600 to-teal-800 bg-clip-text text-transparent mb-4">
              ELOOP DEV
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
              SOLUTIONS
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe in the transformative power of technology.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-teal-600 to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View Our Work
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">About Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Eloop Dev Solutions, we believe in the transformative power of technology. Our mission is to empower businesses to reach their full potential through innovative IT solutions and exceptional service. Since our inception, we have been dedicated to helping our clients navigate the complexities of the digital landscape with ease and confidence.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At the heart of our company is a commitment to excellence and innovation. We believe that every business, regardless of size or industry, deserves access to the best technology and IT support available. Our approach is client-centric, focusing on understanding our clients’ goals and challenges so that we can deliver solutions that drive success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We are not just service providers; we’re your partner in digital transformation. Whether you're looking to build a new website, develop a mobile app, or enhance your digital strategy, we are here to help you succeed in today’s fast-paced, technology-driven world.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to remain at the forefront of the IT industry, delivering solutions that drive 
                business success and make technology accessible to all. By combining creativity, technical 
                expertise, and a deep commitment to quality, we aim to deliver products that not only meet 
                but exceed our clients' expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Core Values</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Services</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a wide range of cutting-edge technology solutions designed to help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Work</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-teal-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Explore some of our successful projects and digital solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
                  <span className="text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
                
                <div className="space-y-2">
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-blue-600 hover:text-blue-800 text-sm transition-colors duration-200"
                    >
                      🌐 Website
                    </a>
                  )}
                  {project.playStore && (
                    <a 
                      href={project.playStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-green-600 hover:text-green-800 text-sm transition-colors duration-200"
                    >
                      📱 Play Store
                    </a>
                  )}
                  {project.appStore && (
                    <a 
                      href={project.appStore} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block text-gray-600 hover:text-gray-800 text-sm transition-colors duration-200"
                    >
                      🍎 App Store
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-teal-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <span className="text-xl font-bold">ELOOP DEV SOLUTIONS</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Cv;