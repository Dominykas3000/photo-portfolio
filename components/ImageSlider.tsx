// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ProjectImage } from "@/types/ProjectImage";

interface ImageSliderProps {
  images: ProjectImage[];
}

const ImageSlider = ({ images }: ImageSliderProps) => {
  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" }}
  //       onClick={onClick}
  //     />
  //   );
  // }

  let settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // adaptiveHeight: true,
    // cssEase: "linear",
    // autoplay: true,
    // autoplaySpeed: 5000,
    // nextArrow: <SampleNextArrow  />,
    // prevArrow: <SamplePrevArrow />,
  };

  console.log(images);

  return (
    <section className="w-3/4">
      <Slider {...settings}>
        {images.map((image) => (
          <div key={image.id} className="flex justify-center">
            <img
              className="m-auto w-auto h-auto max-h-[70dvh] max-w-lg"
              src={
                "http://127.0.0.1:1337" + image.attributes.formats.medium.url
              }
              alt={image.attributes.name}
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;
