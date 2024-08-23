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
    <div className={container}>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>Home</Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>About</Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>Blog</Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/putzplan" className={navLinkText}>Putzplan</Link>
          </li>

          <li className={navLinkItem}>
            <Link to="/einkaufsliste" className={navLinkText}>Deine Einkaufsliste</Link>
          </li>

        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;