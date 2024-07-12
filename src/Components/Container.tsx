import React from "react";
import "./Container.scss";

const Container = () => {
    return (
        <div className="container">
            <div className="container__card">
            <div className="card">
                <a href="#" className="card__thumbnail">
                    <img src="./logo192.png" alt="" className="card__img"/>
                </a>
                <div className="card__text">
                    <h3 className="card__title">
                        <a href="#" className="card__link">Lorem ipsum </a>
                        <p className="card__extracto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt minus aut architecto, amet tempore aspernatur quis enim odio, magnam pariatur repellat optio laudantium sed similique necessitatibus autem eveniet! Reiciendis, a?</p>

                        <a href="#" className="button button--absolute">
                            <span className="button__text">Ver mas</span>
                            <i className="button__icon"></i>
                        </a>
                    </h3>
                </div>
            </div>
        </div>
            <div className="card"> 
				<a href="#" className="card__thumbnail">
					<img className="card__img" src="./logo192.png" alt=""/>
				</a>
				<div className="card__text">
					<h3 className="card__title">
						<a href="#" className="card__link">Lorem Ipsum Dolot Asimet</a>
					</h3>
					<p className="card__extracto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquet ornare ex, eget varius velit fringilla quis. Curabitur pellentesque lectus et arcu commodo efficitur.</p>
	
					<a href="#" className="button button--absolute"> 
						<span className="button_text">Ver Mas</span>
						<i className="button__icon fas fa-arrow-right"></i>
					</a>
				</div>
			</div>
            <div className="phrase"> {/* Bloque */}
			    <h2 className="phrase__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
			        <a href="#" role="button" className="button button--verde">
				        <span className="button__text">Comprar</span>
				        <i className="fas fa-shopping-cart"></i>
			        </a>
		</div>
        </div>
    );
};


export default Container;