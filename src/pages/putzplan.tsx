import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
import {PutzplanContainer} from '../components/PutzplanContainer';

// Typanmerkung für die Komponente: Die Komponente gibt ein JSX.Element zurück
const PutzplanPage: React.FC = (): JSX.Element => {
  return (
    <Layout pageTitle='Putzplan'>
      <PutzplanContainer />
    </Layout>
  );
};

// Typanmerkung für die Head-Komponente
export const Head: React.FC = (): JSX.Element => <Seo title= "Putzplan" />;

export default PutzplanPage;