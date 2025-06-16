import { useState } from 'react';

function Header() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <header className='fixed-top '>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => setActiveTab('home')}
            href="/"
          >Home</a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'about' ? 'active' : ''}`}
            onClick={() => setActiveTab('about')}
            href="/#About"
          >About</a>
        </li>
        <li className="nav-item">
          <a
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            onClick={() => setActiveTab('contact')}
            href="/#contact"
          >Contact</a>
        </li>
      </ul>
    </header>
  );
}
export default Header;