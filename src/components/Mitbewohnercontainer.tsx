import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { graphql, useStaticQuery } from 'gatsby';
import MitbewohnerSlideShow from "./MitbewohnerSLideShow";

//import GuineaPigsForm from "../components/GuineaPigsForm";

//const importAll = (r: __WebpackModuleApi.RequireContext) => r.keys().map(r);
//const images = importAll(require.context('./images/Andi', false, /\.(png|jpe?g|svg)$/));

const MitbewohnerContainer: React.FC = () => {

  const images_query = useStaticQuery(graphql`
  {
    andiFiles: allFile(filter: {relativeDirectory: {eq: "Andi"}} ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          relativePath
          name
        }
      }
    }
    julianaFiles: allFile(filter: {relativeDirectory: {eq: "Juliana"}} ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          relativePath
          name
        }
      }
    }
    magdaFiles: allFile(filter: {relativeDirectory: {eq: "Magda"}} ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
          relativePath
          name
        }
      }
    }
  }`
  )

  console.log("Why here")
  const [currentMB, setCurrentMB] = useState(2);
	const [mb, setMb] = useState("Andi");
  const mbs = ["Andi", "Juliana", "Magda"];

  const [images, setImages] = useState(images_query.andiFiles.edges);
  const mbFotos = [images_query.andiFiles.edges, images_query.julianaFiles.edges, images_query.magdaFiles.edges];

  //const images = images_query.julianaFiles.edges;
  
  //const favoriteChangeHandler = (event) => {
    //setFavoriteGP(parseInt(event.target.value));
  //}

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate a random index to select a new favorite GP
      const randomIndex = Math.floor(Math.random() * mbs.length);
      setImages(mbFotos[randomIndex])
      setMb(mbs[randomIndex])
      setCurrentMB(0)
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount


  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentMB(prevMB => {
        console.log(`In Effect: ${images[0].node.relativePath}}`)
				const nextMB = prevMB + 1;
				return nextMB % images.length;
			});
		}, 2000)
		return () => clearInterval(intervalId);
	}, [images]);


  console.log(`State: ${mb}, number:${currentMB}, image: ${images[currentMB]}, imagegroup:${images[0].node.relativePath}`)
  const currentImage = images[currentMB]?.node.childImageSharp.gatsbyImageData || images[0].node.childImageSharp.gatsbyImageData;

	return (
    <>
      <MitbewohnerSlideShow src={currentImage} Favorite={mb} />
    </>
  );
}

export default MitbewohnerContainer;
