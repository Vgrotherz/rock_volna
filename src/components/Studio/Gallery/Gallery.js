import ImageGallery from 'react-image-gallery'
import './gallery.scss'

const photoGallBig = [
  { original: require('../../../media/big/1.jpg') },
  { original: require('../../../media/big/2.JPG') },
  { original: require('../../../media/big/3.JPG') },
  { original: require('../../../media/big/4.JPG') },
  { original: require('../../../media/big/5.JPG') },
  { original: require('../../../media/big/6.JPG') },
  { original: require('../../../media/big/7.JPG') },
  { original: require('../../../media/big/8.JPG') },
];

const photoGallSmall = [
   { original: require('../../../media/small/1.jpeg') },
   { original: require('../../../media/small/2.jpeg') },
   { original: require('../../../media/small/3.jpeg') },
   { original: require('../../../media/small/4.jpeg') },
   { original: require('../../../media/small/5.jpeg') },
   { original: require('../../../media/small/6.jpeg') },
   { original: require('../../../media/small/7.jpeg') },
   { original: require('../../../media/small/8.jpeg') },
]

const galleryProps = {
    // autoPlay: true,
    showBullets: true,
    showPlayButton: false,
    showFullscreenButton: false
}


export const BigGallery = () => {
    return(
        <>
            <ImageGallery items={photoGallBig} {...galleryProps} />
        </>
    )
}

export const SmallGallery = () => {
    return(
        <>
            <ImageGallery items={photoGallSmall} {...galleryProps} />
        </>
    )
}