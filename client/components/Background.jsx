import React from 'react'
import logo from '../../server/public/cant_image.jpg'
import second from '../../server/public/can_image.jpg'


class Background extends React.Component {

  state = {
    logoVisible: true,
    sndImage: false
  }

  componentDidMount () {
    setInterval(this.switch, 2000 )
  }

 switch = () => {
  this.setState ({
  logoVisible: false,
  sndImage: true
})
}

render () {
    return (
        <>
            {this.state.logoVisible && <img className='Background' src={logo} alt='' />}
            {this.state.sndImage && <img className='Background' src={second} alt='' />}
        
        </> 
       
      )
    }
}
export default Background