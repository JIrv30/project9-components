import './Badges.css'

export default function Badges ({children, color, variant}) {

  let colorAndVariantClass = `badge ${color} ${variant}`


  //set color using bg-color
  //set variant using bg-round
  return (
    <div className={colorAndVariantClass}>
    {children}
    </div>
  )
}