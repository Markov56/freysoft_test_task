import React from 'react';
import './slider.scss';

const imgIds = [1, 2, 3, 4, 5]

const renderList = () => imgIds.map(id => {
    return  (
              <li>
                <a href="#">
                    <div className="img-hover">See All Roles</div>
                    <img src={`./images/slider-1/${id}.jpg`} alt=""/>
                </a>                
              </li>
  )})

const Slider = () => {
    return (
            <div className="animation-container">
                <ul className="slider-1">
                    { renderList() }
                </ul>
                <ul className="slider-2">
                    { renderList() }
                </ul>
            </div>
    )}

export default Slider;