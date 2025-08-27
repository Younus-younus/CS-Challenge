import { ExternalLink, FileText, Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';

interface Platform {
  name: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  hoverColor: string;
  url: string;
}

const challengeSubmissions: Platform[] = [
  {
    name: 'YouTube',
    icon: <Youtube className="w-8 h-8" />,
    description: 'Interview With Cyber Security Professional',
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
  url: 'https://youtu.be/cYZrI8aCTJk?si=kqBsUyhHZWA0kYZT'
  },
  {
    name: 'Medium',
    icon: <FileText className="w-8 h-8" />,
    description: 'Blog on the Interview',
    color: 'bg-green-600',
    hoverColor: 'hover:bg-green-700',
  url: 'https://medium.com/@sayeedataj37/from-curiosity-to-cyber-defense-manohars-journey-into-cybersecurity-b3de0ce95403'
  }
];

const connectPlatforms: Platform[] = [
  {
    name: 'Instagram',
    icon: <Instagram className="w-8 h-8" />,
    description: 'Behind the scenes content',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
    hoverColor: 'hover:from-purple-600 hover:to-pink-600',
  url: 'https://instagram.com/younzzx2?igsh=OHBmNWZmOGxkYjJt'
  },
  {
    name: 'GitHub',
    icon: <Github className="w-8 h-8" />,
    description: 'Open source projects',
    color: 'bg-gray-800',
    hoverColor: 'hover:bg-gray-900',
  url: 'https://x.com/Younzzx?t=hlvUEsW_AW4GlJ8Yz5Vs8g&s=08'
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin className="w-8 h-8" />,
    description: 'Professional network',
    color: 'bg-blue-600',
    hoverColor: 'hover:bg-blue-700',
    url: 'https://www.linkedin.com/in/younus4webdev/'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="w-8 h-8" />,
    description: 'Thoughts and updates',
    color: 'bg-sky-500',
    hoverColor: 'hover:bg-sky-600',
    url: 'https://x.com/Younzzx?t=hlvUEsW_AW4GlJ8Yz5Vs8g&s=08'
  }
];

const Platforms: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="platforms"
      className="min-h-screen bg-gray-50 py-20"
    >
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            CloudSEK Challenge
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium animate-fade-in">
            Thank you for this amazing opportunity! Here are my challenge submissions and ways to connect with me
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Challenge Submissions
          </h3>
          <div className="flex flex-row flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {challengeSubmissions.map((platform, index) => (
              <div
                key={platform.name}
                className={`platform-card bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-purple-300 group ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${platform.color} ${platform.hoverColor}`}> 
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-wide group-hover:text-purple-600 transition-colors duration-300">{platform.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg font-medium">{platform.description}</p>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 font-semibold">
                    Visit Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center animate-gradient-x bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 bg-clip-text text-transparent">
            Connect With Me
          </h3>
          <div className="flex flex-row flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {connectPlatforms.map((platform, index) => (
              <div
                key={platform.name}
                className={`platform-card bg-white rounded-2xl p-8 shadow-2xl border border-gray-100 transition-transform duration-300 hover:scale-105 hover:shadow-blue-300 group ${
                  isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s'
                }}
              >
                <div className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl text-white mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:shadow-lg ${platform.color} ${platform.hoverColor}`}> 
                    {platform.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-wide group-hover:text-blue-600 transition-colors duration-300">{platform.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base md:text-lg font-medium">{platform.description}</p>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full shadow-md hover:from-purple-500 hover:to-pink-500 hover:scale-105 transition-all duration-300 font-semibold">
                    Visit Profile
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-8 py-4 rounded-2xl shadow-xl border border-gray-200 animate-fade-in">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 font-semibold tracking-wide">Available for collaboration</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Platforms;