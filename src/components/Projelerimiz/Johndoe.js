import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
  {
    original:require('../../images/proj5.jpg'),
    thumbnail: require('../../images/proj5.jpg')
  },
  {
    original:require('../..//images/proj6.jpg'),
    thumbnail:require('../../images/proj6.jpg')
  },
  {
    original:require('../../images/proj1.jpg'),
    thumbnail: require('../../images/proj1.jpg')
  }
];

function Johndoe() {
  return (
    <div style={{marginTop:"50px",color:"lightgrey"}}>
      <ImageGallery items={images} />
    </div>
  )
}

export default Johndoe;