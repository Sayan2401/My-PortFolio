import { useEffect, useState } from 'react';

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const offsets = sections.map(id => {
        const el = document.getElementById(id);
        return el ? { id, offsetTop: el.offsetTop } : null;
      }).filter(Boolean);

      const scrollY = window.scrollY + 100; // 100px offset for early highlight
      for (let i = offsets.length - 1; i >= 0; i--) {
        if (scrollY >= offsets[i].offsetTop) {
          setActiveTab(offsets[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed-top">
      <ul className="nav px-3 py-2">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            href="#home"
          >
            <i className="fas fa-home me-2 text-primary"></i>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
            href="#about"
          >
            <i className="fas fa-user-gear me-2 text-primary"></i>
            About
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
            href="#projects"
          >
            <i className="fas fa-project-diagram me-2 text-primary"></i>
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
            href="#contact"
          >
            <i className="fas fa-paper-plane me-2 text-primary" />
            Contact
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
