/* Original Portfolio Style - Improved
   - Split-screen layout with left panel (gray) and right panel (dark)
   - Profile photo in circular frame on left
   - Content sections on right with smooth scrolling
   - All images stored locally in /public directory
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  
  const personalImages = [
    "/cycling_event.webp",
    "/cycling_outdoor.webp",
    "/tower_bridge.webp",
    "/snow_mountain.webp",
    "/graffiti_dog.webp"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left Panel - Profile */}
      <div className="lg:w-2/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen bg-[#e5e5e5] flex flex-col items-center justify-center p-8 lg:p-12">
        <div className="max-w-md w-full">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src={personalImages[currentImageIndex]}
                alt="Gonzalo Beade"
                className="w-full h-full object-cover transition-opacity duration-1000"
              />
            </div>
          </div>
          
          {/* Name and Title */}
          <div className="text-center mb-8">
            <p className="text-sm text-gray-600 mb-2 uppercase tracking-wider">Business Engineer</p>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Gonzalo Beade</h1>
            <p className="text-gray-700 leading-relaxed">
              Building and scaling technical solutions at the intersection of engineering and business at Meta.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <Button 
              className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white"
              size="lg"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
            <Button 
              variant="outline" 
              className="w-full border-gray-400 text-gray-700 hover:bg-gray-200"
              size="lg"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com/gonzabeade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shadow"
            >
              <Github className="w-5 h-5 text-gray-700" />
            </a>
            <a 
              href="https://linkedin.com/in/gonzalo-beade" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shadow"
            >
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a 
              href="mailto:gonzabeade@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white hover:bg-gray-100 transition-colors shadow"
            >
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>
          
          {/* Contact Info */}
          <div className="mt-8 text-center text-sm text-gray-600 space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-4 h-4" />
              gonzabeade@gmail.com
            </p>
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              +54 911 3100 6408
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" />
              London, United Kingdom
            </p>
          </div>
        </div>
      </div>
      
      {/* Right Panel - Content */}
      <div className="lg:w-3/5 lg:ml-[40%] bg-[#2b2b2b] text-white">
        <div className="max-w-4xl mx-auto p-8 lg:p-16">
          
          {/* About Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a <span className="text-white font-semibold">Business Engineer at Meta</span>, where I build and scale technical solutions 
                that accelerate business growth for partners. My role sits at the unique intersection of engineering excellence, 
                business understanding, and entrepreneurial thinking.
              </p>
              <p>
                Currently based in London, I lead end-to-end engineering projects within Meta's Dynamic Ads family of products, 
                collaborating with C-level stakeholders across the DACH region to deliver high-impact solutions that drive 
                measurable business outcomes.
              </p>
              <p>
                Beyond my professional work, I'm passionate about education—I teach Operating Systems at Instituto Tecnológico 
                de Buenos Aires, where I guide over 80 students each semester through foundational systems concepts.
              </p>
            </div>
          </section>
          
          {/* What is Business Engineering */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-white">What is Business Engineering?</h2>
            <div className="bg-[#1a1a1a] p-8 rounded-lg border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Business Engineering at Meta is a unique role that combines three core elements to accelerate 
                business growth for partners by building and scaling solutions.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-[#dc2626] font-bold text-xl mb-2">01</div>
                  <h3 className="text-white font-semibold mb-2">Business Understanding</h3>
                  <p className="text-gray-400 text-sm">Deep comprehension of partner needs, market dynamics, and strategic objectives.</p>
                </div>
                <div>
                  <div className="text-[#dc2626] font-bold text-xl mb-2">02</div>
                  <h3 className="text-white font-semibold mb-2">Engineering Excellence</h3>
                  <p className="text-gray-400 text-sm">World-class software engineering and technical expertise to build at scale.</p>
                </div>
                <div>
                  <div className="text-[#dc2626] font-bold text-xl mb-2">03</div>
                  <h3 className="text-white font-semibold mb-2">Entrepreneurial Mindset</h3>
                  <p className="text-gray-400 text-sm">Proactive problem-solving and growth-focused innovation.</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Experience Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Experience</h2>
            <div className="space-y-8">
              
              {/* Meta - Business Engineer */}
              <div className="border-l-4 border-[#dc2626] pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Business Engineer</h3>
                    <p className="text-gray-400">Meta</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                    <p>October 2024 – Present</p>
                    <p className="flex items-center gap-1 md:justify-end"><MapPin className="w-3 h-3" /> London, UK</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  <li>• Owned and led end-to-end engineering projects within Meta's Dynamic Ads family of products</li>
                  <li>• Collaborated with C-level stakeholders in DACH region on digital marketing strategy</li>
                  <li>• Designed data-driven solutions leveraging data modeling and analytics</li>
                </ul>
              </div>
              
              {/* Meta - Solutions Architect Intern */}
              <div className="border-l-4 border-gray-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Solutions Architect Intern</h3>
                    <p className="text-gray-400">Meta · Business Engineering</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                    <p>July 2023 – June 2024</p>
                    <p className="flex items-center gap-1 md:justify-end"><MapPin className="w-3 h-3" /> Buenos Aires, Argentina</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  <li>• Served as LATAM's point of contact for the BE Reels Program</li>
                  <li>• Designed internal tools and dashboards for Go-To-Market strategies</li>
                  <li>• Developed efficient data queries and streamlined data pipelines</li>
                </ul>
              </div>
              
              {/* ITBA - Instructor */}
              <div className="border-l-4 border-gray-600 pl-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Operating Systems Coursework Instructor</h3>
                    <p className="text-gray-400">Instituto Tecnológico de Buenos Aires</p>
                  </div>
                  <div className="text-sm text-gray-400 mt-1 md:mt-0 md:text-right">
                    <p>July 2024 – Present</p>
                    <p className="flex items-center gap-1 md:justify-end"><MapPin className="w-3 h-3" /> Remote</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
                  <li>• Lecture for full-time Software Engineering degree at one of Argentina's most prestigious universities</li>
                  <li>• Teach and support 80+ students per semester on foundational systems concepts</li>
                </ul>
              </div>
              
            </div>
          </section>
          
          {/* Skills Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['C', 'Java', 'Python', 'HTML', 'Bash', 'AWS', 'Docker', 'Terraform', 'Git', 'Spring', 'Hibernate', 'React', 'Presto', 'PostgreSQL', 'Unity', 'TensorFlow'].map((skill) => (
                <div key={skill} className="bg-[#1a1a1a] px-4 py-3 rounded text-center text-sm font-medium text-gray-300 hover:bg-[#252525] transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </section>
          
          {/* Education Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Education</h2>
            <div className="space-y-6">
              
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">Software Engineering Degree</h3>
                    <p className="text-gray-400">Instituto Tecnológico de Buenos Aires</p>
                  </div>
                  <p className="text-sm text-gray-500">2019-2024</p>
                </div>
                <p className="text-sm text-[#dc2626] font-medium">Academic Performance: 87.9%</p>
              </div>
              
              <div className="bg-[#1a1a1a] p-6 rounded-lg border border-gray-700">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">Master of Data Engineering & Analytics</h3>
                    <p className="text-gray-400">Technische Universität München</p>
                  </div>
                  <p className="text-sm text-gray-500">2022-2023</p>
                </div>
                <p className="text-sm text-gray-400">Exchange Student</p>
              </div>
              
            </div>
          </section>
          
          {/* Achievements */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-8 text-white">Achievements</h2>
            <div className="space-y-4">
              <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-[#dc2626]">
                <h3 className="font-semibold text-white mb-1">Medal of Honour, Engineering</h3>
                <p className="text-sm text-gray-400">Highest academic performance in Software Engineering cohort, class of 2024</p>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-[#dc2626]">
                <h3 className="font-semibold text-white mb-1">4x IGCSE Top Mark in Argentina</h3>
                <p className="text-sm text-gray-400">Economics, ICT, French as a Foreign Language, and Overall ICE</p>
              </div>
              <div className="bg-[#1a1a1a] p-5 rounded-lg border-l-4 border-[#dc2626]">
                <h3 className="font-semibold text-white mb-1">Cambridge English: Advanced (CAE)</h3>
                <p className="text-sm text-gray-400">C2-level certificate in English</p>
              </div>
            </div>
          </section>
          
          {/* University Projects */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-4 text-white">University Projects</h2>
            <p className="text-gray-500 mb-8 text-sm">Academic projects from my Software Engineering degree at ITBA and exchange at TUM</p>
            <div className="grid md:grid-cols-2 gap-6">
              
              {[
                {
                  title: "Full-Stack Keras-based Classifier",
                  desc: "End-to-end CNN system for cat/dog classification with containerized modules",
                  tech: "FastAPI • Python • React • Keras • Docker"
                },
                {
                  title: "P2P Cryptocurrency Marketplace",
                  desc: "Fully-operational Buenos Aires-based marketplace for cryptocurrencies",
                  tech: "Spring 4 • Java • PostgreSQL • Hibernate"
                },
                {
                  title: "Socks5 Proxy From Scratch",
                  desc: "RFC1928-compliant proxy with custom control protocol",
                  tech: "C"
                },
                {
                  title: "Markovia: Ecosystem Simulator",
                  desc: "Food chain simulation with neural network-based decision making",
                  tech: "Unity • C# • Blender"
                },
                {
                  title: "JSON-to-XHTML Compiler",
                  desc: "Modern JSON-based replacement for XSLT language",
                  tech: "C • Bison • Flex"
                },
                {
                  title: "Kernel From Scratch",
                  desc: "Mini kernel with IPC mechanisms, memory management, and process switching",
                  tech: "C • ASM"
                }
              ].map((project, i) => (
                <Card key={i} className="bg-[#1a1a1a] border-gray-700 p-5 hover:border-gray-600 transition-colors">
                  <h3 className="font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-400 mb-3">{project.desc}</p>
                  <p className="text-xs text-gray-500">{project.tech}</p>
                </Card>
              ))}
              
            </div>
          </section>
          
        </div>
      </div>
    </div>
  );
}
