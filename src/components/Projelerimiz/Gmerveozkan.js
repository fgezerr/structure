import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original:require('../../images/proj4.jpg'),
    thumbnail: require('../../images/proj4.jpg')
  },
  {
    original:require('../..//images/proj5.jpg'),
    thumbnail:require('../../images/proj5.jpg')
  },
  {
    original:require('../../images/proj6.jpg'),
    thumbnail: require('../../images/proj6.jpg')
  }
];

function Gmerveozkan() {
  return (
    <div style={{marginTop:"50px",color:"lightgrey"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Gmerveozkan;