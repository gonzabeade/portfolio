/* Black & White Elegant - Modern Sophisticated Portfolio
   Demonstrating frontend mastery through:
   - Advanced layout techniques
   - Complex floating animations for tech logos
   - Smooth animations and micro-interactions
   - Perfect typography and spacing
   - Modern CSS effects (glassmorphism, gradients, transforms)
   - Thoughtful UX design
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ExternalLink, Briefcase, GraduationCap, Award, Code2, ChevronRight, ArrowRight, Plane } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [showFloatingLogos, setShowFloatingLogos] = useState(false);
  const skillsSectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Track active section for navigation
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section.id);
        }
      });
      
      // Trigger floating logos when skills section is in view
      if (skillsSectionRef.current) {
        const rect = skillsSectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.7 && rect.bottom >= 0) {
          setShowFloatingLogos(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'C', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Langchain', logo: 'https://api.iconify.design/simple-icons:langchain.svg' },
    { name: 'MCP', logo: 'https://api.iconify.design/mdi:protocol.svg' },
  ];
  
  const projects = [
    {
      title: "Full-Stack Keras Classifier",
      description: "End-to-end CNN system for image classification with containerized architecture",
      tech: ["FastAPI", "Python", "React", "Keras", "Docker"],
      image: "/project-ai.png"
    },
    {
      title: "P2P Cryptocurrency Marketplace",
      description: "Fully-operational Buenos Aires-based marketplace with custom backend and frontend",
      tech: ["Spring 4", "Java", "PostgreSQL", "Hibernate"],
      image: "/project-cryptuki.png"
    },
    {
      title: "Socks5 Proxy From Scratch",
      description: "RFC1928-compliant proxy with custom control protocol for statistics",
      tech: ["C", "Networking"],
      image: "/project-socks5.png"
    },
    {
      title: "Markovia: Ecosystem Simulator",
      description: "Food chain simulation with neural network-based decision making",
      tech: ["Unity", "C#", "ML", "Blender"],
      image: "/project-markovia.png"
    },
    {
      title: "JSON-to-XHTML Compiler",
      description: "Modern JSON-based compiler as XSLT replacement",
      tech: ["C", "Bison", "Flex"],
      image: "/project-compiler.png"
    },
    {
      title: "Kernel From Scratch",
      description: "Mini kernel with IPC, memory management, and process switching",
      tech: ["C", "Assembly"],
      image: "/project-kernel.png"
    }
  ];
  
  const personalPhotos = [
    { src: "/rowing.png", alt: "Rowing in London" },
    { src: "/cycling_event.webp", alt: "Cycling event" },
    { src: "/cycling_outdoor.webp", alt: "Outdoor cycling" },
    { src: "/tower_bridge.webp", alt: "Tower Bridge, London" },
    { src: "/snow_mountain.webp", alt: "Mountain hiking" },
    { src: "/graffiti_dog.webp", alt: "Street art" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#hero" className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
            GB
          </a>
          <div className="hidden md:flex items-center gap-8">
            {['About', 'Experience', 'Skills', 'Education', 'Projects', 'Gallery', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-sm font-medium transition-colors hover:text-black ${
                  activeSection === item.toLowerCase() ? 'text-black' : 'text-gray-600'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/gonzabeade" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/gonzalo-beade" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 fade-in-up relative inline-block">
              <Badge className="bg-black text-white px-4 py-2 text-sm font-medium relative z-10">
                Business Engineer @ Meta
              </Badge>
              {/* Floating Meta Logo */}
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 float-animation">
                <img src="/meta-logo.svg" alt="Meta" className="w-16 h-16" />
              </div>
              {/* Floating ITBA Logo */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 float-animation" style={{animationDelay: '0.5s'}}>
                <img src="/itba-logo.svg" alt="ITBA" className="w-16 h-16" />
              </div>
            </div>
            <h1 className="mb-6 fade-in-up stagger-1">
              Gonzalo Manuel Beade
            </h1>
            <p className="text-lg md:text-xl text-gray-500 font-light mb-8 max-w-3xl mx-auto leading-relaxed fade-in-up stagger-2">
              Keen teacher and passionate student who advocates for the openness of mathematical and technological 
              education to whoever craves it. I am very eager to deepen my current technical knowledge and broaden 
              my experiences in areas I may not have explored before.
            </p>
            <div className="flex flex-wrap justify-center gap-4 fade-in-up stagger-3">
              <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8" asChild>
                <a href="mailto:gonzabeade@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-black text-black hover:bg-black hover:text-white px-8" asChild>
                <a href="/Gonzalo_Beade_CV.pdf" download="Gonzalo_Beade_CV.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="mt-12 flex justify-center gap-8 text-sm text-gray-600 fade-in-up stagger-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>London, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>gonzabeade@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* About Section with Profile Photo */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8" />
            <h2>About Me</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-12 items-start">
            <div className="md:col-span-2 space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                I'm a <span className="font-semibold text-black">Business Engineer at Meta</span>, where I build and scale 
                technical solutions that accelerate business growth for partners. My role sits at the unique intersection 
                of engineering excellence, business understanding, and entrepreneurial thinking.
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
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-600 rounded-2xl blur-xl opacity-20"></div>
                <img 
                  src="/profile.png" 
                  alt="Gonzalo Beade" 
                  className="relative w-64 h-64 object-cover rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-12 glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-6">What is Business Engineering?</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  1
                </div>
                <h4 className="font-semibold mb-2">Business Understanding</h4>
                <p className="text-sm text-gray-600">Deep comprehension of partner needs and market dynamics</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  2
                </div>
                <h4 className="font-semibold mb-2">Engineering Excellence</h4>
                <p className="text-sm text-gray-600">World-class software engineering and technical expertise</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  3
                </div>
                <h4 className="font-semibold mb-2">Entrepreneurial Mindset</h4>
                <p className="text-sm text-gray-600">Proactive problem-solving and growth-focused innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <Briefcase className="w-8 h-8" />
            <h2>Professional Experience</h2>
          </div>
          <div className="space-y-8 relative">
            {/* Meta Career Path Connection */}
            <div className="absolute left-8 top-24 bottom-[calc(100%-32rem)] w-0.5 bg-gradient-to-b from-blue-500 to-blue-600 hidden md:block"></div>
            
            {/* Meta - Business Engineer */}
            <div className="timeline-item relative">
              <div className="elevated-card p-8 rounded-2xl border-l-4 border-blue-600">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <img src="/meta-logo.svg" alt="Meta" className="w-12 h-12 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Business Engineer</h3>
                      <p className="text-lg text-gray-600 font-medium">Meta</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="font-semibold">October 2024 – Present</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" /> London, UK
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Owned and led end-to-end engineering projects within Meta's Dynamic Ads family of products, delivering high-impact technical solutions</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Collaborated with C-level stakeholders in DACH region to identify and prioritize project requirements within digital marketing strategy</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Designed and implemented data-driven solutions leveraging data modeling and analytics</span>
                  </li>
                </ul>
              </div>
              {/* Conversion Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-10 hidden md:flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                <ArrowRight className="w-4 h-4" />
                <span>Intern → FTE</span>
                <Plane className="w-4 h-4" />
                <span>ARG → UK</span>
              </div>
            </div>

            {/* Meta - Solutions Architect Intern */}
            <div className="timeline-item relative">
              <div className="elevated-card p-8 rounded-2xl border-l-4 border-blue-500">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <img src="/meta-logo.svg" alt="Meta" className="w-12 h-12 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Solutions Architect Intern</h3>
                      <p className="text-lg text-gray-600 font-medium">Meta · Business Engineering</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="font-semibold">July 2023 – June 2024</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" /> Buenos Aires, Argentina
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Served as LATAM's point of contact for the BE Reels Program</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Designed internal tools and dashboards for Go-To-Market strategies for new monetization products</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Developed efficient data queries and streamlined data pipelines for large-scale information traversal</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* ITBA - Instructor */}
            <div className="timeline-item">
              <div className="elevated-card p-8 rounded-2xl">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <img src="/itba-logo.svg" alt="ITBA" className="w-12 h-12 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Operating Systems Instructor</h3>
                      <p className="text-lg text-gray-600 font-medium">Instituto Tecnológico de Buenos Aires</p>
                    </div>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <p className="font-semibold">July 2024 – Present</p>
                    <p className="text-sm text-gray-600 flex items-center gap-1 md:justify-end">
                      <MapPin className="w-3 h-3" /> Remote
                    </p>
                  </div>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Lecture for full-time Software Engineering degree at one of Argentina's most prestigious universities</span>
                  </li>
                  <li className="flex gap-3">
                    <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>Teach and support 80+ students per semester on foundational systems concepts</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Skills Section with Floating Logos */}
      <section ref={skillsSectionRef} id="skills" className="py-20 px-4 relative overflow-hidden min-h-[600px]">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="w-8 h-8" />
            <h2>Technologies & Tools</h2>
          </div>
          <div className="flex flex-wrap gap-3 justify-center relative z-10">
            {skills.map((skill, i) => (
              <div key={skill.name} className={`skill-badge fade-in-up stagger-${(i % 5) + 1}`}>
                {skill.name}
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Tech Logos Background */}
        {showFloatingLogos && (
          <div className="absolute inset-0 pointer-events-none">
            {skills.map((skill, i) => (
              <div
                key={`float-${skill.name}`}
                className="absolute tech-logo-float"
                style={{
                  left: `${(i * 17 + 10) % 90}%`,
                  top: `${(i * 23 + 15) % 80}%`,
                  animationDelay: `${i * 0.3}s`,
                  animationDuration: `${15 + (i % 5) * 2}s`,
                }}
              >
                <img 
                  src={skill.logo} 
                  alt={skill.name}
                  className="w-16 h-16 opacity-10 hover:opacity-30 transition-opacity"
                />
              </div>
            ))}
          </div>
        )}
      </section>

      <div className="section-divider"></div>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="w-8 h-8" />
            <h2>Education</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="elevated-card p-8 rounded-2xl hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Software Engineering Degree</h3>
                  <p className="text-gray-600 font-medium">Instituto Tecnológico de Buenos Aires</p>
                </div>
                <p className="text-sm text-gray-500 font-medium">2019-2024</p>
              </div>
              <p className="text-sm font-semibold">Academic Performance: 87.9%</p>
            </div>
            
            <div className="elevated-card p-8 rounded-2xl hover-lift">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold mb-2">Data Engineering & Analytics</h3>
                  <p className="text-gray-600 font-medium">Technische Universität München</p>
                </div>
                <p className="text-sm text-gray-500 font-medium">2022-2023</p>
              </div>
              <p className="text-sm text-gray-600">Exchange Student · Munich, Germany</p>
            </div>
          </div>
          
          {/* Achievements */}
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-7 h-7" />
              <h3 className="text-2xl font-bold">Achievements & Recognition</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="gradient-border p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Medal of Honour, Engineering</h4>
                <p className="text-sm text-gray-600">Highest academic performance in Software Engineering cohort, class of 2024</p>
              </div>
              <div className="gradient-border p-6 rounded-xl">
                <h4 className="font-semibold mb-2">4x IGCSE Top Mark in Argentina</h4>
                <p className="text-sm text-gray-600">Economics, ICT, French as a Foreign Language, and Overall ICE</p>
              </div>
              <div className="gradient-border p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Cambridge English: Advanced (CAE)</h4>
                <p className="text-sm text-gray-600">C2-level certificate in English</p>
              </div>
              <div className="gradient-border p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Multilingual Proficiency</h4>
                <p className="text-sm text-gray-600">Spanish (Native), English (Proficient), French (Intermediate), German (Conversant)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12">
            <h2 className="mb-4">University Projects</h2>
            <p className="text-gray-600">Academic projects from my Software Engineering degree at ITBA and exchange at TUM</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <Card key={i} className={`elevated-card rounded-xl overflow-hidden hover-lift fade-in-up stagger-${(i % 5) + 1}`}>
                <div className="aspect-video w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 relative">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs px-3 py-1 bg-gray-100 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Photo Gallery */}
      <section id="gallery" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="mb-12 text-center">Beyond Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {personalPhotos.map((photo, i) => (
              <div key={i} className={`aspect-square overflow-hidden rounded-xl elevated-card fade-in-up stagger-${(i % 5) + 1}`}>
                <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-divider"></div>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-white">Let's Connect</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Interested in collaborating or discussing opportunities? I'd love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-gray-300">
            <a href="mailto:gonzabeade@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors animated-underline">
              <Mail className="w-5 h-5" />
              <span>gonzabeade@gmail.com</span>
            </a>
            <a href="tel:+5491131006408" className="flex items-center gap-2 hover:text-white transition-colors animated-underline">
              <Phone className="w-5 h-5" />
              <span>+54 911 3100 6408</span>
            </a>
          </div>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/gonzabeade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/gonzalo-beade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:gonzabeade@gmail.com" className="w-12 h-12 flex items-center justify-center border border-white/20 rounded-full hover:bg-white hover:text-black transition-all">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black text-center text-gray-500 border-t border-white/10">
        <p>© 2026 Gonzalo Manuel Beade</p>
      </footer>
    </div>
  );
}
