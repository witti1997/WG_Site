import React from "react";
import { GatsbyImage, IGatsbyImageData  } from 'gatsby-plugin-image'

interface MitbewohnerSlideShowProps {
    src: IGatsbyImageData;
    Favorite: string;
  }


const MitbewohnerSlideShow: React.FC<MitbewohnerSlideShowProps> = ({src, Favorite}) => {
  return (
      <div data-testid="MitbewohnerSlideShow" id="MitbewohnerSlideShow">
        <h1 className= "text-2xl mb-2 font-bold text-center text-pink-900">{Favorite}</h1>
        <GatsbyImage alt="Mitbewohner SlideShow" image={src} style={{ width: 'auto', height: '400' }}  imgStyle={{ objectFit: 'contain' }} />
      </div>
  );

}

export default MitbewohnerSlideShow;