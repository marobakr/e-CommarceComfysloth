import React from 'react'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'
import ExploreIcon from '@mui/icons-material/Explore'
import DiamondIcon from '@mui/icons-material/Diamond'

const service = () => {
  return (
    <div className='services'>
      <div className='label_srv'>
        <div className='container_serv'>
          <h1>Custom Furniture Built Only For You</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </div>
      </div>
      <div className='container'>
        <div className='to-top' data-aos='fade-up' data-aos-duration='3000'>
          <div className='box'>
            <i className='icon'>
              <ExploreIcon />
            </i>
            <div className='paragraph'>
              <h3 className='title'>Mission</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </div>
          </div>
        </div>
        <div data-aos='zoom-out-down'>
          <div className='box'>
            <i className='icon'>
              <DiamondIcon />
            </i>
            <div className='paragraph'>
              <h3 className='title'>Vision</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </div>
          </div>
        </div>
        <div
          className='updown'
          data-aos='fade-down'
          data-aos-easing='linear'
          data-aos-duration='1500'
        >
          <div className='box'>
            <i className='icon'>
              <HistoryEduIcon />
            </i>
            <div className='paragraph'>
              <h3 className='title'>History</h3>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum
              velit autem unde numquam nisi
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default service
