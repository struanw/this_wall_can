import React from 'react'
import logo from '../../server/public/cant_image.jpg'
import second from '../../server/public/can_image.jpg'
//import mushroom from '../../server/public/mushroom.jpg'

class Background extends React.Component {

  state = {
    logoVisible: true,
    sndImage: false
  }

  componentDidMount () {
    setTimeout(this.switch, 2000 )
   setInterval(this.refresh, 4000 ) 
   setInterval(this.add, 6000 ) 
  }


 switch = () => {
  this.setState ({
  logoVisible: false,
  sndImage: true,
  mushpic: false
})
}
refresh = () => {           //hack refresh
  this.setState ({
  logoVisible: true,
  sndImage: false
})
}
add = () => {           
  this.setState ({
  mushpic: true
})
}



render () {
    return (
        <>
            {this.state.logoVisible && <img className='Background' src={logo} alt='' />}
            {this.state.sndImage && <img className='Background' src={second} alt='' />}
           {/* {this.state.mushpic && <img className='Background' src={mushroom} alt='' />} */}
        </> 
       
      )
    }
}
export default Background