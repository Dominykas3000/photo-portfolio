// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectImage } from "@/types/ProjectImage";

interface ImageSliderProps {
  images: ProjectImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log(images);

  return (
    <Slider {...settings}>
      {images.map((image) => (
        <div key={image.id}>
          <img
            src={"http://127.0.0.1:1337" + image.attributes.formats.small.url}
            alt={image.attributes.name}
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageSlider;
