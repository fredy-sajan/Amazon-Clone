import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
    return (
        <div className='relative'>

            {/* bottom gradient under inside image */}
            <div className='absolute w-full h-32 bg-gradient-to-t from-amazon_home_background_color-dark_white to-transparent bottom-0 z-20'/>

            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61TD5JLGhIL._SX3000_.jpg" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg" alt="" />
                </div>

                <div>
                    <img loading='lazy' src="https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg" alt="" />
                </div>

            </Carousel>
        </div>
    )
}

export default Banner