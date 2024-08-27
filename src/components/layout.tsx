import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css';

// Definition der Props für die Layout-Komponente
interface LayoutProps {
  pageTitle: string;
  children: React.ReactNode; // Kinder können jedes React-Element sein
}

// Layout-Komponente mit typisierten Props
const Layout: React.FC<LayoutProps> = ({ pageTitle, children }): JSX.Element => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="flex flex-col min-h-screen p-4 max-w-custom mx-auto">
      <header className="text-4xl font-bold text-headerColor mb-4">{data.site.siteMetadata.title}</header>
      <nav>
        <ul className="flex flex-wrap gap-4 justify-left mb-8">
          <li className="block py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300">
            <Link to="/" className={navLinkText}>Home</Link>
          </li>

          <li className="block py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300">
            <Link to="/about" className={navLinkText}>About</Link>
          </li>

          <li className="block py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300">
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>

          <li className="block py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300">
            <Link to="/putzplan" className={navLinkText}>Putzplan</Link>
          </li>

          <li className="block py-2 px-4 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition duration-300">
            <Link to="/einkaufsliste" className={navLinkText}>Deine Einkaufsliste</Link>
          </li>

        </ul>
      </nav>
      <main className="flex-grow">
        <h1 className="text-2xl font-semibold text-subheaderColor mb-4">{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;