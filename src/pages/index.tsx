// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import MitbewohnerContainer from '../components/Mitbewohnercontainer'
import Seo from '../components/seo'
import Slideshow from '../components/Slideshow'

// Step 2: Define your component
const IndexPage = () => {
  return (
      <Layout pageTitle='Home page'>
          <h1>Mitbewohner of the week</h1>
          <MitbewohnerContainer 
          />
      </Layout>
  )
}

// You'll learn about this in the next task, just copy it for now
export const Head: React.FC = (): JSX.Element => <Seo title= "Home Page" />

// Step 3: Export your component
export default IndexPage