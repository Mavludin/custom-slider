import React, { useState } from 'react';
import classes from './Slider.module.css';
import { sliderData } from '../../utils/sliderData';
import rightArrow from '../../assets/images/slider/right-arrow.svg'
import PopUp from '../PopUp/PopUp';

function Slider() {

    // Инициализируем начальный объект с данными для слайдера и флаг для показа или скрытия модального окна.
    const [currentSlide, setSlide] = useState(sliderData[0]);
    const [isPopUpVisible, showPopUp] = useState(false);

    // Показываем следующий слайд.
    const showNextSlide = () => {
        if (currentSlide.id === sliderData.length) return false
        setSlide(sliderData[currentSlide.id])
    }

    // Показываем предыдущий слайд.
    const showPreviousSlide = () => {
        if (currentSlide.id === 1) return false
        setSlide(sliderData[currentSlide.id - 2])
    }

    return (

        <div className={classes.Slider}>

            <div className={classes.SliderImage}>

                <img src={currentSlide.mainImage} alt={currentSlide.title} />

                <div className={classes.ControlPanel}>

                    <button onClick={showPreviousSlide} className={classes.Backwards}>
                        <img src={rightArrow} alt="Left arrow" />
                    </button>

                    <button onClick={showNextSlide} className={classes.Forward}>
                        <img src={rightArrow} alt="Right arrow" />
                    </button>

                </div>

            </div>

            <div className={classes.SliderContent}>

                <div className={classes.Header}>
                    <div className={classes.Title}>
                        <h2>{currentSlide.title}</h2>
                        <span>{currentSlide.area} м&#178;</span>
                    </div>
                    <button className="getPriceBtn" onClick={()=>showPopUp(true)}> Узнать стоимость</button>
                </div>

                <div className={classes.Footer}>
                    <div className={classes.Agent}>
                        <img src={currentSlide.agentImage} alt={currentSlide.agentName} />
                        <p>
                            {currentSlide.agentName},<br/>{currentSlide.agentRole}
                        </p>
                    </div>
                    <div className={classes.Description}>{currentSlide.description}</div>
                </div>

            </div>

            { isPopUpVisible ? <PopUp showPopUp={showPopUp} /> : null }

        </div>
        
    );

}

export default Slider;
