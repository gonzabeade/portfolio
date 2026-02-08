/* Urban Canvas - Street Art Minimalism
   Design: Neo-Brutalist with graffiti accents, diagonal cuts, spray paint effects
   Typography: Bebas Neue (headers) + Space Grotesk (body)
   Colors: Charcoal/concrete base with electric cyan, hot magenta, orange, lime accents
*/

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const personalImages = [
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318502244/nRAsMcTHponZXOdU.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318502244/oohDfceWSUeyGVDD.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318502244/KkBFCxcozHajaHuX.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318502244/HGSGsaWBXRwWVmVM.png",
    "https://files.manuscdn.com/user_upload_by_module/session_file/310519663318502244/TknVZuaaJpSdQVff.png"
  ];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % personalImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="text-2xl font-bold stencil-text" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            <span className="text-[#00d9ff]">GONZALO</span> BEADE
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/gonzabeade" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d9ff] transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/gonzalo-beade" target="_blank" rel="noopener noreferrer" className="hover:text-[#00d9ff] transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="mailto:gonzabeade@gmail.com" className="hover:text-[#00d9ff] transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Cut */}
      <section className="relative min-h-screen flex items-center pt-20 diagonal-cut" style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2PR7lUBICOJV10oziKZDGA/sandbox/1xpjFqCbVobDJrd2HMJ26i-img-1_1770565324000_na1fn_aGVyby1hYnN0cmFjdC1ncmFmZml0aQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMlBSN2xVQklDT0pWMTBvemlLWkRHQS9zYW5kYm94LzF4cGpGcUNiVm9iREpyZDJITUoyNmktaW1nLTFfMTc3MDU2NTMyNDAwMF9uYTFmbl9hR1Z5YnkxaFluTjBjbUZqZEMxbmNtRm1abWwwYVEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=JGa1PYsKejSBIroDOjICsjotQaJML-p8unFzjS-A0f7dWHr2x0oiFakBfviOHgZMRLZE06NhwM~FcdfM0-torTdGb8hD-oLFVyJXv6ncM6cZQwH21gSA7MWq~mmXNz4SNR8Skwx8QK6LgKo-FmzS0ikcdWM7~f1JkfRih7OIyyTIXWuJTp2lz1pwHxPHiF5g66qff85oARPRruFOkgcrxq0Gx6ABKZG0ZsmMqLWPzV-Me43TSALar6Rww1zxEhaabWF3flGD1fJBQL8RUfva4r-5jk-wORFGUydKCtXYZvE-D8ciy6g6kn~4W9L~Bez7JQv9ksNGUBGQQNCY0e5Kkw__')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-5rem',
        paddingTop: '8rem'
      }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Badge className="bg-[#00d9ff] text-[#1a1a1a] text-sm px-4 py-1 stencil-text">BUSINESS ENGINEER</Badge>
            </div>
            <h1 className="mb-6 text-white" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              GONZALO<br />
              <span className="text-[#00d9ff]">MANUEL</span><br />
              BEADE
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-medium leading-relaxed text-gray-200">
              Building and scaling technical solutions at the intersection of engineering and business. 
              Currently accelerating growth for Meta's Dynamic Ads products in London.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#00d9ff] text-[#1a1a1a] hover:bg-[#00b4cc] stencil-text text-base">
                <Mail className="w-4 h-4 mr-2" />
                GET IN TOUCH
              </Button>
              <Button size="lg" variant="outline" className="border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 stencil-text text-base">
                <Download className="w-4 h-4 mr-2" />
                DOWNLOAD CV
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Business Engineer Definition Section */}
      <section className="py-24 bg-[#2d2d2d] relative">
        <div className="absolute inset-0 halftone-overlay"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-12 text-[#00d9ff]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              WHAT IS A BUSINESS ENGINEER?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-[#1a1a1a] border-[#404040] p-6 hover:border-[#00d9ff] transition-all">
                <div className="text-[#ff006e] text-4xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>01</div>
                <h3 className="text-xl mb-3 text-[#00d9ff]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Business Understanding</h3>
                <p className="text-gray-300 leading-relaxed">Deep comprehension of partner needs, market dynamics, and strategic business objectives.</p>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#404040] p-6 hover:border-[#ff6b35] transition-all">
                <div className="text-[#ff6b35] text-4xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>02</div>
                <h3 className="text-xl mb-3 text-[#ff6b35]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Engineering Excellence</h3>
                <p className="text-gray-300 leading-relaxed">World-class software engineering and technical expertise to build scalable solutions.</p>
              </Card>
              <Card className="bg-[#1a1a1a] border-[#404040] p-6 hover:border-[#8ac926] transition-all">
                <div className="text-[#8ac926] text-4xl font-bold mb-4" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>03</div>
                <h3 className="text-xl mb-3 text-[#8ac926]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Entrepreneurial Mindset</h3>
                <p className="text-gray-300 leading-relaxed">Proactive problem-solving, innovation, and growth-focused thinking to drive impact.</p>
              </Card>
            </div>
            <div className="mt-12 p-8 bg-[#1a1a1a] border-l-4 border-[#00d9ff]">
              <p className="text-lg text-gray-200 leading-relaxed">
                <span className="text-[#00d9ff] font-bold">Mission:</span> Accelerate business growth for partners by building and scaling solutions at the intersection of engineering and business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section className="py-24 relative diagonal-cut-reverse" style={{
        backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2PR7lUBICOJV10oziKZDGA/sandbox/1xpjFqCbVobDJrd2HMJ26i-img-2_1770565328000_na1fn_bWV0YS10ZWNoLWFic3RyYWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMlBSN2xVQklDT0pWMTBvemlLWkRHQS9zYW5kYm94LzF4cGpGcUNiVm9iREpyZDJITUoyNmktaW1nLTJfMTc3MDU2NTMyODAwMF9uYTFmbl9iV1YwWVMxMFpXTm9MV0ZpYzNSeVlXTjAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kb5Z43lbxu0bbHsahyjXzlOnUoLXQI7EC-QkOwxWLrt32qa~egtSzr7Est5pFzxeHQcHCBh5esx5yiNeGrHLGoedzgrOJtFCK-lkA79~0QYJzRl~K3Mp0fSyGQ5qtpgtWwah0eclmLaHs3IbyM~wyO1CbleHEsDPbNHngJEcicIMt~ODJ6ElkM99wUXDJPk2G3yF3~wdtP55i7F2aQNrtOPyRU9FzlOZW48fLbzBkkywLPmG8~2nhKYTOMh3hgwoLtfTEmj4lCoSME7QTQGNyaOZvBij8AfxulA00F8yBnCT3PI6laujzLQwgGHCaclS3Ogt4DSsrbuVm3aTNqYSxg__')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: '-5rem',
        paddingTop: '8rem'
      }}>
        <div className="absolute inset-0 bg-background/90"></div>
        <div className="container relative z-10">
          <h2 className="mb-16 text-[#ff006e]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          
          <div className="space-y-8 max-w-5xl">
            {/* Meta - Business Engineer */}
            <Card className="bg-[#2d2d2d] border-[#404040] p-8 hover:border-[#00d9ff] transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#00d9ff] mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Business Engineer</h3>
                  <p className="text-xl text-gray-300 font-medium">Meta</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#00d9ff] font-medium">October 2024 – Present</p>
                  <p className="text-gray-400 flex items-center justify-end gap-1"><MapPin className="w-4 h-4" /> London, UK</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" /> Owned and led end-to-end engineering projects within Meta's Dynamic Ads family of products, delivering high-impact technical solutions that improved system performance and overall product growth and adoption</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" /> Collaborated with largest Meta clients' stakeholders and C-levels in DACH region to identify and prioritize project requirements within their digital marketing strategy</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#00d9ff] flex-shrink-0 mt-0.5" /> Designed and implemented data-driven solutions to inform business decisions, leveraging tools such as data modeling and analytics</li>
              </ul>
            </Card>

            {/* Meta - Solutions Architect Intern */}
            <Card className="bg-[#2d2d2d] border-[#404040] p-8 hover:border-[#ff6b35] transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#ff6b35] mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Solutions Architect Intern</h3>
                  <p className="text-xl text-gray-300 font-medium">Meta · Business Engineering</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#ff6b35] font-medium">July 2023 – June 2024</p>
                  <p className="text-gray-400 flex items-center justify-end gap-1"><MapPin className="w-4 h-4" /> Buenos Aires, Argentina</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" /> Served as LATAM's point of contact for the BE Reels Program</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" /> Designed internal tools and dashboards, enabling the team to efficiently expand their efforts in Go-To-Market strategies for new monetization products</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" /> Orchestrated client interactions to resolve integration issues within Meta's ads ecosystem and interfaces</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#ff6b35] flex-shrink-0 mt-0.5" /> Developed efficient data queries and implemented streamlined data pipelines for large-scale information traversal</li>
              </ul>
            </Card>

            {/* ITBA - Operating Systems Instructor */}
            <Card className="bg-[#2d2d2d] border-[#404040] p-8 hover:border-[#8ac926] transition-all">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl text-[#8ac926] mb-2" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Operating Systems Coursework Instructor</h3>
                  <p className="text-xl text-gray-300 font-medium">Instituto Tecnológico de Buenos Aires</p>
                </div>
                <div className="text-right mt-2 md:mt-0">
                  <p className="text-[#8ac926] font-medium">July 2024 – Present</p>
                  <p className="text-gray-400 flex items-center justify-end gap-1"><MapPin className="w-4 h-4" /> Remote</p>
                </div>
              </div>
              <ul className="space-y-3 text-gray-300 leading-relaxed">
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#8ac926] flex-shrink-0 mt-0.5" /> Lectured for the full-time Software Engineering degree, delivering core content to sophomore university students at one of Argentina's most prestigious engineering universities</li>
                <li className="flex gap-3"><ChevronRight className="w-5 h-5 text-[#8ac926] flex-shrink-0 mt-0.5" /> Teach and support more than 80 students per semester, ensuring strong comprehension of foundational systems concepts</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container">
          <h2 className="mb-16 text-[#00d9ff]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            TECHNOLOGIES & TOOLS
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl">
            {['C', 'Java', 'Python', 'HTML', 'Bash', 'AWS', 'Docker', 'Terraform', 'Git', 'Spring Framework', 'Hibernate', 'React', 'Presto', 'PostgreSQL', 'Unity', 'TensorFlow'].map((tech, i) => (
              <div key={i} className="bg-[#2d2d2d] border border-[#404040] p-4 text-center hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all">
                <p className="font-medium text-gray-200">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-24 bg-[#2d2d2d]">
        <div className="container">
          <h2 className="mb-16 text-[#ff006e]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            EDUCATION
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <Card className="bg-[#1a1a1a] border-[#404040] p-8 hover:border-[#ff006e] transition-all">
              <h3 className="text-2xl text-[#ff006e] mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Software Engineering Degree</h3>
              <p className="text-xl text-gray-300 font-medium mb-2">Instituto Tecnológico de Buenos Aires</p>
              <p className="text-gray-400 mb-4">March 2019 – December 2024</p>
              <p className="text-[#00d9ff] font-medium">Academic Performance: 87.9%</p>
            </Card>
            <Card className="bg-[#1a1a1a] border-[#404040] p-8 hover:border-[#ff6b35] transition-all">
              <h3 className="text-2xl text-[#ff6b35] mb-3" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>Master of Data Engineering & Analytics</h3>
              <p className="text-xl text-gray-300 font-medium mb-2">Technische Universität München</p>
              <p className="text-gray-400 mb-4">Exchange Student 2022-23</p>
              <p className="text-[#8ac926] font-medium">Munich, Germany</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-24 bg-[#1a1a1a]">
        <div className="container">
          <h2 className="mb-16 text-[#8ac926]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            ACHIEVEMENTS & RECOGNITION
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
            <div className="bg-[#2d2d2d] border-l-4 border-[#ff006e] p-6">
              <h3 className="text-xl text-[#ff006e] mb-2 stencil-text">Medal of Honour, Engineering</h3>
              <p className="text-gray-300">Highest academic performance in Software Engineering class cohort, class of 2024</p>
            </div>
            <div className="bg-[#2d2d2d] border-l-4 border-[#00d9ff] p-6">
              <h3 className="text-xl text-[#00d9ff] mb-2 stencil-text">4x IGCSE Top Mark in Argentina</h3>
              <p className="text-gray-300">Economics, ICT, French as a Foreign Language, and Overall ICE</p>
            </div>
            <div className="bg-[#2d2d2d] border-l-4 border-[#ff6b35] p-6">
              <h3 className="text-xl text-[#ff6b35] mb-2 stencil-text">Cambridge English: Advanced (CAE)</h3>
              <p className="text-gray-300">C2-level certificate in English</p>
            </div>
            <div className="bg-[#2d2d2d] border-l-4 border-[#8ac926] p-6">
              <h3 className="text-xl text-[#8ac926] mb-2 stencil-text">Multilingual Proficiency</h3>
              <p className="text-gray-300">Spanish (Native), English (Proficient), French (Intermediate), German (Conversant)</p>
            </div>
          </div>
        </div>
      </section>

      {/* University Projects Section - Less Prominent */}
      <section className="py-24 bg-[#2d2d2d]">
        <div className="container">
          <h2 className="mb-8 text-gray-400" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
            UNIVERSITY PROJECTS
          </h2>
          <p className="text-gray-500 mb-12 max-w-3xl">Academic projects completed during my Software Engineering degree at ITBA and exchange at TUM.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl">
            {[
              { title: "Full-Stack Keras Classifier", tech: "FastAPI, Python, React, Keras, Docker" },
              { title: "P2P Cryptocurrency Marketplace", tech: "Spring 4, Java, PostgreSQL, Hibernate" },
              { title: "Socks5 Proxy From Scratch", tech: "C, RFC1928" },
              { title: "Markovia: Ecosystem Simulator", tech: "Unity, C#, Blender" },
              { title: "JSON-to-XHTML Compiler", tech: "C, Bison, Flex" },
              { title: "Kernel From Scratch", tech: "C, ASM" }
            ].map((project, i) => (
              <Card key={i} className="bg-[#1a1a1a] border-[#404040] p-6 hover:border-gray-600 transition-all">
                <h3 className="text-lg text-gray-300 mb-3 font-medium">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.tech}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section with Image Slideshow */}
      <section className="py-16 bg-[#1a1a1a] border-t border-[#404040]">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl mb-6 text-[#00d9ff]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>ABOUT ME</h3>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3">
                <div className="relative h-64 overflow-hidden border-2 border-[#404040]">
                  {personalImages.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Personal photo ${i + 1}`}
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                      style={{ opacity: i === currentImageIndex ? 1 : 0 }}
                    />
                  ))}
                </div>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Beyond engineering and business, I'm passionate about cycling, travel, and exploring new cultures. 
                  From competing in cycling events to hiking snowy mountains and discovering iconic landmarks, 
                  I bring the same energy and curiosity to my personal adventures as I do to solving complex technical challenges.
                </p>
                <p className="text-gray-400 text-sm">
                  Currently based in London, previously in Buenos Aires and Munich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#2d2d2d] relative">
        <div className="absolute inset-0" style={{
          backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/2PR7lUBICOJV10oziKZDGA/sandbox/1xpjFqCbVobDJrd2HMJ26i-img-4_1770565329000_na1fn_ZGlhZ29uYWwtZ3JhZGllbnQtYWNjZW50.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMlBSN2xVQklDT0pWMTBvemlLWkRHQS9zYW5kYm94LzF4cGpGcUNiVm9iREpyZDJITUoyNmktaW1nLTRfMTc3MDU2NTMyOTAwMF9uYTFmbl9aR2xoWjI5dVlXd3RaM0poWkdsbGJuUXRZV05qWlc1MC5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ZjYgB84JB93s~hUBqoeZ-QpqZ4mB6onr3vv10zvUe-YC3mE7UDomnqIIyPaCKSbx05Ow1gKftHXmi2PnZLUE~nNkD1uDTzfAaY-lZ~p6lpVLErSz98Roe2xx4oK8POv92ZDrxwqD0nL3zwqduWUrjN5ibEWW-KDlnqNftBpacNLAJL9POcs6qXhwOg-gt41fpEc7P2tVc0rquOsLTAmmeglUiY94WggAoq5o4ueWXP3N23qEQV8QFJzrM5h61GcViH5S0wNBB9IknJzsj6iVf7ezFxIBYFw-2bLr8iOvdrMO73ycdnY4PFEhwkrjqddlsA~KPwPXjrmmLUDQsnRNKA__')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.2
        }}></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-8 text-[#00d9ff]" style={{ fontFamily: 'Bebas Neue, sans-serif' }}>
              LET'S CONNECT
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              Interested in collaborating or discussing opportunities? Get in touch.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <a href="mailto:gonzabeade@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#00d9ff] transition-colors">
                <Mail className="w-5 h-5" />
                <span>gonzabeade@gmail.com</span>
              </a>
              <a href="tel:+5491131006408" className="flex items-center gap-2 text-gray-300 hover:text-[#00d9ff] transition-colors">
                <Phone className="w-5 h-5" />
                <span>+54 911 3100 6408</span>
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>London, United Kingdom</span>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://github.com/gonzabeade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] border border-[#404040] hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/gonzalo-beade" target="_blank" rel="noopener noreferrer" className="w-12 h-12 flex items-center justify-center bg-[#1a1a1a] border border-[#404040] hover:border-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-[#1a1a1a] border-t border-[#404040]">
        <div className="container text-center text-gray-500">
          <p>© 2026 Gonzalo Manuel Beade. Built with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}
