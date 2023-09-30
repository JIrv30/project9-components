import Badges from '../src/components/Badges'
import Banners from '../src/components/Banners'

function App() {
  return (
    <>
    <Banners 
    status='neutral'
    size =''
    title='title'
    information='infromation' />

    <br/>

    <Banners
    status='success'>thing
    </Banners>
    </>
  )
  
}

export default App

{/* <Badges 
    className='badge' 
    color='bg-red' 
    variant='bg-round'>
      thing 
    </Badges> */}
