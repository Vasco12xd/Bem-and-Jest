import React from "react";
import "./Container.scss";

const Container = () => {
    return (
        <div className="container">
            <div className="card">
                <a href="#" className="card__thumbnail">
                    <img src="../public/logo192.png" alt="" className="card__img"/>
                </a>
                <div className="card__text">
                    <h3 className="card__title">
                        <a href="#" className="card__link">Lorem ipsum </a>
                        <p className="card__extracto">Lorem</p>

                        <a href="#" className="button">
                            <span className="button__text">ver mas</span>
                            <i className="button__icon"></i>
                        </a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Container;