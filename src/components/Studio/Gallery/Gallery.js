import ImageGallery from "react-image-gallery";
import './gallery.scss'

const photoGallBig = [
  { original: require('../../../media/big/2M903RVFieA.jpg') },
  { original: require('../../../media/big/2tQ4iXq21Bg.jpg') },
  { original: require('../../../media/big/FNYUuzAphFs.jpg') },
  { original: require('../../../media/big/_4frS4v9ucU.jpg') },
  { original: require('../../../media/big/w2tVS-SPGIA.jpg') }
];

const photoGallSmall = [
    { original: require('../../../media/small/JY7o2eyJC4w.jpg') },
    { original: require('../../../media/small/Op1PgNmkguY.jpg') },
    { original: require('../../../media/small/UY1xVHxd1NE.jpg') },
    { original: require('../../../media/small/VujyU8pJ1QY.jpg') },
    { original: require('../../../media/small/hayHHMNUFss.jpg') }
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