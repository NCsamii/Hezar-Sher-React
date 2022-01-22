import cssStyle from "./poetCarousel.module.css";
import React from "react";
import Slider from "react-slick";
import {routes} from "../../components/routing/routes";
import PoetItems from "../poetItems";
function PoetCarousel({poets}){
    const {poetsLInk} = routes;
    var settings = {
        arrows: true,
        slidesToShow: 5,
        slidesToScroll: 1,

        centerMode: true,
        focusOnSelect: true ,
        responsive: [{
            breakpoint: 780,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          }]
      };
      
return (
    <div>
        <Slider {...settings} >
{poets.map((poet) => {
                            const { id, name, image } = poet;
                            return (

<PoetItems                                     key={`poet-${name}`}
                                    title={name}
                                    imageURL={image}
                                    link={`${poetsLInk}/${id}`} />                   
         );
                        })}
    </Slider>
    </div>
)
}
export default PoetCarousel;