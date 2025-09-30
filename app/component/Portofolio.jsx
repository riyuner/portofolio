'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Linkedin, Code, Briefcase, GraduationCap, ChevronRight, MapPin, Home, User, Folder, Phone } from 'lucide-react';
import riyuner from '../blog/images/riyuner.jpeg';
import riyuner_2 from '../blog/images/riyuner2.png';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Folder },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Phone }
  ];

  const projects = [
    {
      title: "Radio Simulator",
      description: "Advanced radio simulation system calculating signal range based on specifications, terrain topology, and receiver characteristics for defense applications.",
      tech: ["Java", "GIS", "Simulation"],
      year: "2024"
    },
    {
      title: "Public Transport Management System",
      description: "Comprehensive MDVR-based platform for fleet tracking, income reporting, alarm management, and real-time transportation monitoring.",
      tech: ["PostgreSQL", "PostGIS", "MDVR"],
      year: "2024"
    },
    {
      title: "MDVR TCP Server",
      description: "Custom TCP server architecture for receiving and processing raw MDVR data from Meitrack devices with business integration layer.",
      tech: ["Java", "TCP/IP", "Meitrack API"],
      year: "2024"
    },
    {
      title: "Asset Management System",
      description: "Enterprise solution for asset distribution, stock management, location tracking, and inter-location transfer operations.",
      tech: ["Java", "PostgreSQL", "Docker"],
      year: "2023"
    },
    {
      title: "Social Media Sentiment Analyzer",
      description: "Intelligent web scraping system with NLP capabilities for analyzing social media sentiment based on keyword patterns.",
      tech: ["Python", "NLP", "Web Scraping"],
      year: "2023"
    },
    {
      title: "Face Recognition System",
      description: "Vector-based facial recognition platform using advanced similarity search algorithms for matching against stored databases.",
      tech: ["Python", "Vector Search", "AI/ML"],
      year: "2023"
    },
    {
      title: "LED Passenger Information System",
      description: "IoT solution utilizing ESP8266 microcontrollers for LED matrix displays with UDP broadcast and Android control interface.",
      tech: ["ESP8266", "Android", "UDP", "IoT"],
      year: "2023"
    }
  ];

  const experiences = [
    {
      company: "Agora Techno Solution",
      role: "Senior Software Engineer",
      period: "January 2024 - Present",
      location: "Cimahi, West Java",
      description: "Leading development of 7+ major production systems spanning defense applications, IoT solutions, and enterprise platforms. Managing GitLab infrastructure and mentoring development teams.",
      highlights: [
        "Architected and deployed radio simulation system for defense sector",
        "Led development of comprehensive public transport management platform",
        "Managed GitLab infrastructure at gitlab.agoratechnosolution.id",
        "Implemented AI/ML solutions including face recognition systems",
        "Designed IoT systems using ESP8266 and custom communication protocols"
      ]
    },
    {
      company: "Agora Techno Solution",
      role: "Software Engineer",
      period: "August 2023 - January 2024",
      location: "Bandung, West Java",
      description: "Full-stack development focusing on enterprise applications, IoT implementations, and AI/ML integration.",
      highlights: [
        "Developed asset management system with distribution tracking",
        "Built social media sentiment analysis tools",
        "Implemented custom TCP server for MDVR data processing",
        "Collaborated with international partners on hardware integration"
      ]
    },
    {
      company: "Alpha Beta Engineering",
      role: "Software Engineer",
      period: "March 2023 - July 2023",
      location: "Bandung, West Java",
      description: "Software engineering solutions for various client projects.",
      highlights: [
        "Delivered software solutions for client requirements",
        "Participated in full development lifecycle"
      ]
    },
    {
      company: "PT Len Industri (Persero)",
      role: "Software Engineer",
      period: "October 2021 - March 2023",
      location: "Bandung, West Java",
      description: "Defense systems development for Indonesia's military infrastructure.",
      highlights: [
        "Developed Data Link application based on Link-16 NATO Specification using Java",
        "Built Command Center system with JavaFX for military operations",
        "Created System Awareness Viewer using Django and VueJs",
        "Integrated multiple military sensors and weapon systems",
        "Managed CI/CD pipelines with Jenkins",
        "Conducted acceptance testing and system reviews"
      ]
    },
    {
      company: "Bee Solution Partners",
      role: "Software Engineering Intern",
      period: "July 2020 - October 2020",
      location: "Bandung, West Java",
      description: "Mobile application development internship.",
      highlights: [
        "Developed Bee Attendance System using Flutter framework",
        "Gained experience in mobile development lifecycle"
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Java", "Python", "Dart", "JavaScript"],
    "Frameworks & Libraries": ["Jakarta EE", "Django", "Flutter", "VueJs", "JavaFX"],
    "Databases": ["PostgreSQL", "PostGIS", "GIS Data Processing"],
    "DevOps & Infrastructure": ["Docker", "Kubernetes", "Jenkins", "CI/CD", "GitLab"],
    "Hardware & IoT": ["ESP8266", "MDVR Systems", "LED Matrix", "Embedded Systems"],
    "AI & Tools": ["Vector Search", "NLP", "IntelliJ IDEA", "JetBrains Suite", "Claude AI", "GLM4.5"],
    "Methodologies": ["Scrum", "Agile", "System Integration", "Test-Driven Development"]
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      <div className="hidden xl:block fixed right-8 top-1/2 -translate-y-1/2 z-40">
        <div className="space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="group flex items-center gap-3"
              title={item.label}
            >
              <span className={`text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}>
                {item.label.toUpperCase()}
              </span>
              <div className={`w-3 h-3 rounded-full border-2 transition-all ${
                activeSection === item.id 
                  ? 'border-black bg-black scale-125' 
                  : 'border-gray-400 hover:border-black hover:scale-110'
              }`} />
            </button>
          ))}
        </div>
      </div>

      <section id="home" className="min-h-screen flex items-center px-6 lg:px-12 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-6">
                <p className="text-sm font-medium tracking-widest text-gray-500 mb-2">SENIOR SOFTWARE ENGINEER</p>
                <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-6">
                  Rifqi<br/>Yuner
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Building robust, scalable systems from defense applications to IoT solutions. 
                Specialized in bridging hardware and software with 5+ years of experience in enterprise and mission-critical systems.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
                >
                  GET IN TOUCH
                  <ChevronRight size={18} />
                </button>
                <Link 
                  href="https://id.linkedin.com/in/rifqi-yuner-2a4a07148"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all inline-flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  LINKEDIN
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Bandung, West Java, Indonesia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <Link href="mailto:riyuner@gmail.com" className="hover:underline">riyuner@gmail.com</Link>
                </div>
              </div>
            </div>
            
            <div className="hidden lg:block">
              <div className="relative">
                {/* 
                  CHANGE PHOTO HERE:
                  Replace the src URL with your own photo
                  Recommended size: 800x800px (square)
                */}
                <div className="aspect-square overflow-hidden bg-gray-900 relative group">
                  <div className="relative w-full h-full">
                    <Image 
                      src={riyuner}
                      alt="Rifqi Yuner - Senior Software Engineer"
                      fill
                      sizes="(max-width: 768px) 100vw, 810px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-white opacity-50" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-white opacity-50" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-4 border-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <div className="w-16 h-1 bg-black mb-8" />
              
              <div className="mb-8 lg:block hidden">
                <div className="relative group">
                  {/* 
                    CHANGE SECOND PHOTO HERE (Optional):
                    Replace the src URL with your own photo
                    Recommended size: 600x800px (portrait)
                  */}
                  <div className="aspect-[3/4] overflow-hidden bg-gray-200 relative">
                    <Image
                        src={riyuner_2}
                      alt="Rifqi Yuner at work"
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-black -z-10" />
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  I am a Senior Software Engineer with a unique perspective that bridges the gap between hardware and software engineering. 
                  While most engineers specialize in one domain, I thrive in understanding both—from ESP8266 firmware to enterprise Java systems.
                </p>
                <p>
                  My career has taken me through diverse environments, from developing defense systems for Indonesia military infrastructure 
                  at PT Len Industri to architecting IoT solutions and AI-powered platforms at Agora Techno Solution.
                </p>
                <p>
                  What drives me is the curiosity to understand how things work at every level. Whether I am tinkering with PC hardware, 
                  modifying vehicle electronics, or architecting distributed systems, I approach each challenge with the same enthusiasm 
                  for understanding the underlying mechanisms.
                </p>
                <div className="grid md:grid-cols-2 gap-8 pt-8">
                  <div>
                    <h3 className="text-sm font-bold tracking-widest mb-4">INTERESTS</h3>
                    <ul className="space-y-2 text-base">
                      <li className="flex items-start gap-2">
                        <ChevronRight size={20} className="mt-0.5 flex-shrink-0" />
                        <span>Hardware Electronics and PC Building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={20} className="mt-0.5 flex-shrink-0" />
                        <span>Vehicle Modifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={20} className="mt-0.5 flex-shrink-0" />
                        <span>Gaming and Virtual Worlds</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight size={20} className="mt-0.5 flex-shrink-0" />
                        <span>Reading and Music</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold tracking-widest mb-4">PHILOSOPHY</h3>
                    <p className="text-base text-gray-700">
                      To be the best at what motivates me — I believe in continuous learning and deep understanding of both the theoretical 
                      and practical aspects of technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">Experience</h2>
              <div className="w-16 h-1 bg-black mb-8" />
              <p className="text-gray-600">5+ years of professional experience across defense, enterprise, and IoT sectors.</p>
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-12">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="border-l-2 border-gray-200 pl-8 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
                    <div className="mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold">{exp.role}</h3>
                        <span className="text-sm text-gray-500">• {exp.period}</span>
                      </div>
                      <p className="text-lg font-medium text-gray-700 mb-1">{exp.company}</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <MapPin size={14} />
                        {exp.location}
                      </p>
                    </div>
                    <p className="text-gray-700 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <ChevronRight size={16} className="mt-0.5 flex-shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">Projects</h2>
              <div className="w-16 h-1 bg-black mb-8" />
              <p className="text-gray-600">7+ production systems spanning defense applications, enterprise platforms, and IoT solutions.</p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-8">
                {projects.map((project, idx) => (
                  <div key={idx} className="bg-white p-8 border border-gray-200 hover:border-black transition-colors group">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold group-hover:underline">{project.title}</h3>
                      <span className="text-sm font-medium text-gray-500">{project.year}</span>
                    </div>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs font-medium tracking-wide border border-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">Skills</h2>
              <div className="w-16 h-1 bg-black mb-8" />
            </div>
            <div className="lg:col-span-8">
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {Object.entries(skills).map(([category, items], idx) => (
                  <div key={idx}>
                    <h3 className="text-sm font-bold tracking-widest mb-4">{category.toUpperCase()}</h3>
                    <ul className="space-y-2">
                      {items.map((item, i) => (
                        <li key={i} className="text-gray-700 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200">
                <h3 className="text-sm font-bold tracking-widest mb-4">INFRASTRUCTURE MANAGEMENT</h3>
                <div className="space-y-3 text-gray-700">
                  <p><span className="font-medium">GitLab Administration:</span> Managing company infrastructure at gitlab.agoratechnosolution.id</p>
                  <p><span className="font-medium">On-Premise Deployment:</span> Docker and Kubernetes on physical servers for production systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className="py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-4xl font-bold mb-6">Education</h2>
              <div className="w-16 h-1 bg-black mb-8" />
            </div>
            <div className="lg:col-span-8">
              <div className="space-y-8">
                <div className="border-l-2 border-gray-200 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
                  <h3 className="text-xl font-bold mb-1">BINUS University Online Learning</h3>
                  <p className="text-gray-700 mb-1">S1 Teknik Informatika - Computer Science</p>
                  <p className="text-sm text-gray-500">May 2022 - May 2024</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
                  <h3 className="text-xl font-bold mb-1">Politeknik Negeri Bandung</h3>
                  <p className="text-gray-700 mb-1">D3 - Teknik Komputer dan Informatika</p>
                  <p className="text-sm text-gray-500">2018 - October 2021</p>
                </div>
                <div className="border-l-2 border-gray-200 pl-8 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-black rounded-full" />
                  <h3 className="text-xl font-bold mb-1">SMAN 90 Jakarta</h3>
                  <p className="text-gray-700 mb-1">High School - Science Track</p>
                  <p className="text-sm text-gray-500">2015 - 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-8">Let's Work Together</h2>
            <div className="w-16 h-1 bg-black mx-auto mb-8" />
            <p className="text-xl text-gray-600 mb-12">
              Open to opportunities, collaborations, and discussing innovative solutions. 
              Let's build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="mailto:riyuner@gmail.com"
                className="px-10 py-5 bg-black text-white font-medium tracking-wide hover:bg-gray-800 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                SEND EMAIL
              </Link>
              <Link 
                href="https://id.linkedin.com/in/rifqi-yuner-2a4a07148"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-5 border-2 border-black text-black font-medium tracking-wide hover:bg-black hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <Linkedin size={20} />
                LINKEDIN
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 lg:px-12 border-t border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
            <p>© 2025 Rifqi Yuner. All rights reserved.</p>
            <p>Bandung, West Java, Indonesia</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
