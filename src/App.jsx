import { useEffect } from 'react';


// SVG icons for social and challenge buttons
const icons = {
  github: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56A10.99 10.99 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z"/></svg>
  ),
  linkedin: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.1-.9-2-2-2s-2 .9-2 2v5.5h-3v-10h3v1.5c.41-.77 1.39-1.5 2.5-1.5 1.93 0 3.5 1.57 3.5 3.5v6.5z"/></svg>
  ),
  instagram: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.975 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.072-1.276.06-2.687.334-3.662 1.309-.975.975-1.249 2.386-1.309 3.662-.06 1.28-.072 1.688-.072 4.947s.012 3.667.072 4.947c.06 1.276.334 2.687 1.309 3.662.975.975 2.386 1.249 3.662 1.309 1.28.06 1.688.072 4.947.072s3.667-.012 4.947-.072c1.276-.06 2.687-.334 3.662-1.309.975-.975 1.249-2.386 1.309-3.662.06-1.28.072-1.688.072-4.947s-.012-3.667-.072-4.947c-.06-1.276-.334-2.687-1.309-3.662-.975-.975-2.386-1.249-3.662-1.309-1.28-.06-1.688-.072-4.947-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
  ),
  youtube: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a2.998 2.998 0 0 0-2.112-2.112C19.13 3.5 12 3.5 12 3.5s-7.13 0-9.386.574a2.998 2.998 0 0 0-2.112 2.112C.5 8.442.5 12 .5 12s0 3.558.574 5.814a2.998 2.998 0 0 0 2.112 2.112C4.87 20.5 12 20.5 12 20.5s7.13 0 9.386-.574a2.998 2.998 0 0 0 2.112-2.112C23.5 15.558 23.5 12 23.5 12s0-3.558-.002-5.814zM9.75 15.02V8.98l6.5 3.02-6.5 3.02z"/></svg>
  ),
  medium: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 6.13c.02-.2-.06-.4-.22-.53L.27 3.68V3.41h6.34l4.89 10.72 4.3-10.72h6.08v.27l-1.7 1.63c-.15.12-.22.32-.18.51v12.36c-.04.19.03.39.18.51l1.66 1.63v.27h-8.63v-.27l1.72-1.67c.17-.17.17-.22.17-.51V7.7l-4.77 12.01h-.65L2.01 6.13z"/></svg>
  ),
  blog: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-2h-2v2zm0-4h2v-6h-2v6z"/></svg>
  ),
  video: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-3.5l4 4v-11l-4 4z"/></svg>
  ),
  short: (
    <svg height="32" width="32" viewBox="0 0 24 24" fill="currentColor"><path d="M10 16.5l6-4.5-6-4.5v9z"/></svg>
  ),
  link: (
    <svg height="24" width="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12a5.1 5.1 0 0 1 5.1-5.1h3V5H9A7 7 0 0 0 2 12a7 7 0 0 0 7 7h3v-1.9H9a5.1 5.1 0 0 1-5.1-5.1zm7.1-3.1V10h2V8.9h-2zm0 6.2V14h2v-1.1h-2zm7-6.2h-3V5h3a7 7 0 0 1 7 7 7 7 0 0 1-7 7h-3v-1.9h3a5.1 5.1 0 0 0 5.1-5.1A5.1 5.1 0 0 0 17 8.9z"/></svg>
  ),
};

const roles = [
  'Frontend Developer',
  'Full Stack Developer',
  'Cloud Engineer',
  'Google Cloud',
  'Arcade Facilitator',
  'Researcher',
];

const challengeLinks = [
  { name: 'Blog on Medium', icon: icons.medium, url: '#', color: '#fff' },
  { name: 'Full Interview', icon: icons.youtube, url: '#', color: '#fff' },
  { name: 'Short Video', icon: icons.short, url: '#', color: '#fff' },
];

const socials = [
  { name: 'GitHub', icon: icons.github, url: 'https://github.com/Younus-younus', color: '#333' },
  { name: 'LinkedIn', icon: icons.linkedin, url: 'https://www.linkedin.com/in/younus4webdev/', color: '#0077b5' },
  { name: 'Instagram', icon: icons.instagram, url: 'https://instagram.com/younzzx2?igsh=OHBmNWZmOGxkYjJt', color: '#E1306C' },
  { name: 'YouTube', icon: icons.youtube, url: 'https://www.youtube.com/@THRILLNASX', color: '#FF0000' },
];

function App() {
  useEffect(() => {
    // Simple animated particles using canvas
    const canvas = document.createElement('canvas');
    canvas.className = 'particles-bg';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let particles = [];
    let w = window.innerWidth;
    let h = window.innerHeight;
    canvas.width = w;
    canvas.height = h;
    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    }
    window.addEventListener('resize', resize);
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 2 + 1,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        color: `rgba(${100+Math.random()*155},${108+Math.random()*100},255,0.7)`
      });
    }
    let running = true;
    function animate() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = p.color;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > w) p.dx *= -1;
        if (p.y < 0 || p.y > h) p.dy *= -1;
      }
      requestAnimationFrame(animate);
    }
    animate();
    return () => {
      running = false;
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return (
    <div className="landing-bg">
      <div className="content-wrapper">
        <div className="landing-container">
          <header className="header">
            <h1 className="gradient-title animate-title">Younus</h1>
            <div className="roles">
              {roles.map(role => (
                <span className="role-tag animate-tag" key={role}>{role}</span>
              ))}
            </div>
            <p className="subtitle animate-fade">Scroll down to explore</p>
            <div className="arrow-down animate-arrow">&#8595;</div>
          </header>
          <section className="challenge-section">
            <h2 className="gradient-title animate-title">Challenge Submissions</h2>
            <p className="animate-fade">Thank you for this amazing opportunity! Here are my challenge submissions and ways to connect with me</p>
            <div className="challenge-links">
              {challengeLinks.map((link, i) => (
                <a className="challenge-card animate-card" href={link.url} target="_blank" rel="noopener noreferrer" key={link.name} style={{animationDelay: `${i*0.1+0.2}s`}}>
                  <div className="challenge-icon">{link.icon}</div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </section>
          <section className="social-section">
            <h2 className="gradient-title animate-title"><span className="icon-link">{icons.link}</span> Connect With Me</h2>
            <div className="social-cards">
              {socials.map((social, i) => (
                <a className="social-card animate-card" href={social.url} target="_blank" rel="noopener noreferrer" key={social.name} style={{animationDelay: `${i*0.1+0.2}s`}}>
                  <div className="social-icon">{social.icon}</div>
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </section>
          <footer className="footer animate-fade">
            <p>Made by Younus &copy; 2025</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
