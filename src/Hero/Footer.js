import React from 'react';

const Footer = ({ companyName, companyDescription, categories, socialLinks, copyrightYear }) => {
  return (
    <footer className="text-gray-400 bg-neutral-700 body-font">
      <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">{companyName}</span>
          </a>
          <p className="mt-2 text-sm text-gray-500">{companyDescription}</p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {categories.map((category, index) => (
            <div key={index} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">{category.title}</h2>
              <nav className="list-none mb-10">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="text-gray-400 hover:text-white">{link}</a>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-neutral-600 bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">{`© ${copyrightYear} ${companyName} —`}<a href={socialLinks.twitter} rel="noopener noreferrer" className="text-gray-500 ml-1" target="_blank">@knyttneve</a></p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <a href={socialLinks.twitter} className="text-gray-400" target="_blank">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            {/* Add similar links for other social media platforms */}
          </span>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const footerContent = {
    companyName: 'ShopSentix',
    companyDescription: 'Fast National Nuces CFD Campus',
    categories: [
      {
        title: 'Developers',
        links: ['Muhammad Ibrahim', 'Saim Malik', 'Hammad Ahmed'],
      },
      {
        title: 'Contact Info',
        links: ['f201058@cfd.nu.edu.pk', 'f200404@cfd.nu.edu.pk', 'f200394@cfd.nu.edu.pk'],
      },
      {
        title: 'Socials',
        links: ['FaceBook', 'Instagram', 'Twitter'],
      },
      // Add more categories as needed
    ],
    socialLinks: {
      twitter: 'https://twitter.com/knyttneve',
      // Add other social media links as needed
    },
    copyrightYear: new Date().getFullYear(), // Get the current year dynamically
  };

  return (
    <div>
      {/* ... (other components) */}
      <Footer {...footerContent} />
    </div>
  );
};

export default App;
