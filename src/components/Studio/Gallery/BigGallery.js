import ImageGallery from "react-image-gallery";
import './gallery.scss'

const photoGallBig = [
  { original: require('../../../media/big/2M903RVFieA.jpg') },
  { original: require('../../../media/big/2tQ4iXq21Bg.jpg') },
  { original: require('../../../media/big/FNYUuzAphFs.jpg') },
  { original: require('../../../media/big/_4frS4v9ucU.jpg') },
  { original: require('../../../media/big/w2tVS-SPGIA.jpg') }
];



const BigGallery = () => {
    return(
        <>
            <ImageGallery items={photoGallBig} />
        </>
    )
}

export default BigGallery;