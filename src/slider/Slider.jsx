import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import "./slider.css";

function SliderProyects({ imageUrls, ProyectNames }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [nameIndex, setNameIndex] = useState(0);

  const showPreviusImage = () => {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      else return index - 1;
    });
    setNameIndex((index) => {
      if (index === 0) return ProyectNames.length - 1;
      else return index - 1;
    });
  };

  const showNextImage = () => {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      else return index + 1;
    });
    setNameIndex((index) => {
      if (index === ProyectNames.length - 1) return 0;
      else return index + 1;
    });
  };

  return (
    <div className="SliderBody">
      <ul className="sliderProyect">
        <li className="sliderProyectName">{ProyectNames[nameIndex]}</li>
        <li className="ProyectSlider">
          <img
            className="sliderImg"
            src={imageUrls[imageIndex]}
            alt="images from proyects"
          />
        </li>
      </ul>
      <button className="ImgSliderBtn n" onClick={showPreviusImage}>
        <ArrowBigLeft />
      </button>
      <button className="ImgSliderBtn rghtBtn" onClick={showNextImage}>
        <ArrowBigRight />
      </button>
    </div>
  );
}

export default SliderProyects;