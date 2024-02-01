import React from 'react'
import './Services.css'
import webimg from '../images/webimg.png'
import saasimg from '../images/saasimg.png'
import hrimg from '../images/hrimg.png'
import personImg from '../images/personImg.png'
export default function Services() {
  return (
    <div>
      <div className="services-container">
        <div className="text-container-service">
          <div className='subtext-container'>
            <div className='service-subtext'>Our</div>
            <div className='service-text'>Services</div>
          </div>
          <div className='services-list'>
            <div className='slider-container'>
              <img className='img-services' src={webimg}></img>
              <div className='slider-text'>
                Website & App Development
              </div>
            </div>
            <div className='slider-container2'>
              <img className='img-services' src={saasimg}></img>
              <div className='slider-text'>
                <div className='sub-slider-text'>
                  SaaS<br></br>
                  Marketing
                </div>
              </div>
            </div>
            <div className='slider-container3'>
              <img className='img-services' src={hrimg}></img>
              <div className='slider-text'>
                <div className='sub-slider-text'>
                  HR<br></br>
                  Solutions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="image-container">
          <img
            src={personImg}
            alt="Service Image"
            className="rounded-image"
          />
        </div>
      </div>
    </div>
  )
}
