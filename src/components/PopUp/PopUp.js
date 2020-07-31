import React, { useEffect } from 'react';
import classes from './PopUp.module.css';
import closeBtn from '../../assets/images/popup/close-btn.svg';
import popUpImage from '../../assets/images/popup/popup-image.png';

function PopUp(props) {

    // Закрываем модальное окно нажатием на кнопку Escape. 
    // Внизу учтены случаи закрытия при нажатии на Overlay и кнопку в виде крестика
    useEffect(() => {
        window.addEventListener('keyup', (event) => {

            if (event.keyCode === 27) {
                props.showPopUp(false)
            }
        });
    });

    return (
        <>

            <div onClick={() => props.showPopUp(false)} className={classes.Overlay}></div>

            <div className={classes.PopUp}>


                <h2>Узнать стоимость</h2>
                <p>
                    Оставьте контактные данные, наш эксперт Игорь Трофименко
                    свяжется с вами и уточнит стоимость этого дома
                </p>

                <div>
                    <img src={popUpImage} alt="Pop-up" />
                    <form action="">
                        <div>
                            <input type="text" placeholder="Имя" />
                        </div>
                        <div>
                            <input type="phone" placeholder="Телефон" />
                        </div>
                        <div>
                            <input type="email" placeholder="Почта" />
                        </div>
                        <button onClick={(e)=>e.preventDefault()} className="getPriceBtn" type="submit"> Узнать стоимость</button>
                        <p>Нажимая на кнопку, вы даете согласие на обработку своих персональных данных</p>
                    </form>
                </div>

                <button onClick={() => props.showPopUp(false)}>
                    <img src={closeBtn} alt="Closing button" />
                </button>

            </div>

        </>
    );

}

export default PopUp;