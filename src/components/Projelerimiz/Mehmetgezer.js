import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original:require('../../images/proj9.jpg'),
    thumbnail: require('../../images/proj9.jpg')
  },
  {
    original:require('../..//images/proj8.jpg'),
    thumbnail:require('../../images/proj8.jpg')
  },
  {
    original:require('../../images/proj4.jpg'),
    thumbnail: require('../../images/proj4.jpg')
  }
];

function Mehmetgezer() {
  return (
    <div style={{marginTop:"50px",color:"lightgrey"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Mehmetgezer;