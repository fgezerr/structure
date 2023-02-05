import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original:require('../../images/proj3.jpg'),
    thumbnail: require('../../images/proj3.jpg')
  },
  {
    original:require('../..//images/proj1.jpg'),
    thumbnail:require('../../images/proj1.jpg')
  },
  {
    original:require('../../images/proj3.jpg'),
    thumbnail: require('../../images/proj3.jpg')
  }
];

function Mfatihgezer() {
  return (
    <div style={{marginTop:"50px",color:"lightgrey"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Mfatihgezer;