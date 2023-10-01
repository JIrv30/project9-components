import './Cards.css'
import cloud from '../assets/cloud.svg'


export default function Cards () {


  return (
    <div className='card'>
        <div className='icon-container'>
        <img className='icon' src={cloud}/>
        </div>
      <div className='text-container'>
        <h3 className='heading'>title</h3>
        <p className='text'>Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>

      </div>
      
    </div>
  )
}

