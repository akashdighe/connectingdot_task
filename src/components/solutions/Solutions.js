import React from 'react'
import './Solutions.css'
import solutionimg from '../images/solutionimg.png'
export default function Solutions() {
  return (
    <div>
      <div className="solution-container">
        <div className="text-container-solution">
          <div>
            <div className='solution-subtext '>
              Our Industry
            </div>
            <div className='solution-text '>Solutions</div>
            <div className='solution-paragraph'>
              Whatever your industry marketing challenges, explore the power of Papercut marketing solutions which can help improve efficiency and agility, reduce cost, participate in new opportunities and explore new opportunities.
            </div>
          </div>
        </div>
        <div className="image-container-solution">
          <img
            src={solutionimg}
            alt="Service Image"
          />
        </div>
      </div>
    </div>
  )
}
