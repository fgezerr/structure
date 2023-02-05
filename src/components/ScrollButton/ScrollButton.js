import React, {useState} from 'react';
import { Button } from './Styles';
  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'auto'
      /* you can also use 'smooth' behaviour
         in place of 'auto' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
        <i style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}  class="bi bi-arrow-up-circle-fill"></i>
    </Button>
  );
}
  
export default ScrollButton;