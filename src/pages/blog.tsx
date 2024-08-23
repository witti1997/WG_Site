// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { graphql, PageProps } from 'gatsby'

// Step 2: Define types for the GraphQL query data
interface BlogPageProps extends PageProps {
  data: {
    allFile: {
      nodes: Array<{
        name: string;
      }>;
    };
  };
}

// Step 2: Define your component
const BlogPage: React.FC<BlogPageProps> = ({data}): JSX.Element => {
  return (
      <Layout pageTitle='Cool Blog'>
        <ul>
        {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
          <p>Bliblablub</p>
      </Layout>
  )
}

export const query = graphql`
  query {
    allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
      nodes {
        name
      }
    }
  }
`
// You'll learn about this in the next task, just copy it for now
export const Head: React.FC = (): JSX.Element => <Seo title= "Blog" />

// Step 3: Export your component
export default BlogPage