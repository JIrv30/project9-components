import './Testimonials.css'
import quote from '../assets/quote.svg'

import example from '../assets/example.jpeg'

export default function Testimonials () {

  return (
    <div className='testimonial'>
      <img className='image' src={example} />
      <div className='text'>
      <img className='quote' src={quote} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. 
      </p>
      <p>
      May Andersons
      </p>
      <p>
      Workcation, CTO
      </p>
      </div>
    </div>
  )
}