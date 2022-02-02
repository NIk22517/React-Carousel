import photos from './photo';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useRef, useEffect, useState} from 'react';

function App() {

  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  
  }, []);
  
  return (
    <Carousel ref={carousel} whileTap={{cursor: 'grabbing'}}>
         <InnerCarousel drag='x' 
            dragConstraints={{right: 0, left: -width}}
         >
           {photos.map(photo => {
             return(
               <Item key={photo}>
                <img src={photo} alt={photo} />
               </Item>
             )
           })}
         </InnerCarousel>
    </Carousel>
  );
}

export default App;



const Carousel = styled(motion.div) `
  cursor: grab;
  overflow: hidden;
`;

const InnerCarousel = styled(motion.div) `
    display: flex;
`;

const Item = styled(motion.div) `
    min-height: 20rem;
    min-width: 20rem;
    padding: 20px;
    img{
      width: 100%;
      height: 100%;
      border-radius: 2rem;
      pointer-events: none;
    }
`;
