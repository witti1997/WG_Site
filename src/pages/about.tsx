import * as React from 'react';
import Layout
 from '../components/layout';
import Seo from '../components/Seo';
// Typanmerkung für die Komponente: Die Komponente gibt ein JSX.Element zurück
const AboutPage: React.FC = (): JSX.Element => {
  return (
    <Layout pageTitle='About me'>
      <h1>blabliblubb</h1>
      <p>I made this and I'm very confused about all of it</p>
    </Layout>
  );
};

// Typanmerkung für die Head-Komponente
export const Head: React.FC = (): JSX.Element => <Seo title= "About Me" />;

export default AboutPage;