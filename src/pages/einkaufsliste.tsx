import * as React from 'react';
import Layout
 from '../components/layout';
import Seo from '../components/seo';
import {EinkaufslisteContainer} from '../components/EinkaufslisteContainer';
// Typanmerkung für die Komponente: Die Komponente gibt ein JSX.Element zurück
const EinkaufsPage: React.FC = (): JSX.Element => {
  return (
    <Layout pageTitle='Deine persönliche Einkaufsliste'>
      <EinkaufslisteContainer />
    </Layout>
  );
};

// Typanmerkung für die Head-Komponente
export const Head: React.FC = (): JSX.Element => <Seo title= "Personal Shoppinglist" />;

export default EinkaufsPage;