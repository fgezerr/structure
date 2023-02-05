import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original:require('../../images/proj2.jpg'),
    thumbnail: require('../../images/proj2.jpg')
  },
  {
    original:require('../..//images/proj1.jpg'),
    thumbnail:require('../../images/proj1.jpg')
  },
  {
    original:require('../../images/proj3.jpg'),
    thumbnail: require('../../images/proj3.jpg')
  },
  {
    original:require('../../images/proj4.jpg'),
    thumbnail:require('../../images/proj4.jpg')
  }
];

function Christianoronaldo() {
  return (
    <div style={{marginTop:"50px",color:"lightgrey"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Christianoronaldo;