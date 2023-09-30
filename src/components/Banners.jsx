import './Banners.css'
import Check from '../assets/check.svg'
import Exclamation from '../assets/exclamation.svg'
import Icon from '../assets/icon.svg'
import XCircle from '../assets/x-circle.svg'

export default function Banners ({children, title, information, status}) {

  //status = bn-success, bn-warning, bn-error, bn-neutral
  //size = bn-sl


  let badge
  if(status==='success') {badge=Check}
  if(status==='warning') {badge=Exclamation}
  if(status==='error') {badge=XCircle}
  if(status==='neutral') {badge=Icon}

  const classStatus = `banner bn-${status}`

  console.log(title)
  

  if(title){
    return (
      <div className={classStatus}>
        <img src={badge} />
        <div className='ti-info-container'>
          <h3 className={`title-${status}`}>{title}</h3>
          <p className={`info-${status}`}>{information}</p>
        </div>
      </div>
    )
  }
  else if(children) {
    return(
      <div className={classStatus}>
        <img src={badge} />
        {children}
      </div>
    )

  }
}