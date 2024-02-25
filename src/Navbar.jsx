import { Link } from 'react-scroll';

function Navbar() {
  // Define sections with their corresponding IDs and text
  const sections = [
    { id: 'about', text: 'About' },
    { id: 'services', text: 'Services' },
    { id: 'contact', text: 'Contact' },
  ];

  // Set the scroll offset
  const scrollOffset = 0;

  return (
    // Navigation bar with a sticky, top-0, and high z-index style
    <nav className="p-4 md:p-6 flex justify-center sticky top-0 z-50 ">
      {/* Navigation container with background, border, and shadow styling */}
      <div className="bg-black border border-purple-600 rounded-full px-2 md:px-4 py-2
        shadow-[0px_20px_207px_10px_rgba(165,_39,_255,_0.48)] z-50">
        {/* Logo div */}
        <div className="flex items-center">
          {/* Logo  */}
          <img src="/assets/mobilon-logo.png" alt="Logo" className="h-8 w-8 mx-2 cursor-pointer" />
          {/* Map through sections to create navigation links */}
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.id}
              smooth={true}
              duration={500}
              offset={scrollOffset}
              className="text-white hover:text-purple-400 px-4 py-2 cursor-pointer"
            >
              {section.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
