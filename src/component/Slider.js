import React,{useState} from 'react'
import './Slider.css'

export default function Slider(props) {
  const [currentIndex, setCurrectIndex] = useState(0);
  // console.log()
  const maxIndex = props.maxIndex;
  // console.log(props.slides)

  let handlePrev = () => {
    setCurrectIndex((prevIndex) => (prevIndex === 0 ? maxIndex : prevIndex - 1));
    
  }

  let handleNext = () => {
    setCurrectIndex((prevIndex) => (prevIndex === maxIndex ? 0 : prevIndex + 1));
  }

  let handleDotClick = (index) => {
    setCurrectIndex(index);
  }

  let dots = []
  for (let i = 0; i <= maxIndex; i++) {
    dots.push(<div className={`dot ${i === currentIndex ? 'active' : ''} `} data-key={i} onClick={() => handleDotClick(i)}> </div>);
  }

  return (
    <div className='slider_section'>

      <button className='prev_btn ' onClick={handlePrev} style={{display:`${currentIndex===0 ? 'none' : 'block'}`}}>
        <i class="fa-solid fa-angle-left"></i>

      </button>

      <div className="slide_bar_container">

          <div className='slide_bar' style={{width:`${props.width}px`, transform: `translateX(-${currentIndex * props.indi_width}px)` }}>
            {
            // console.log(props.slides)
              
            props.slides.map((slide, index) => (

              <div className='single_slide_block' key={index} style={{width:`${props.indi_width}px` }} >
               {slide}
              </div>
            )
            )}
          </div>

         { props.isDotRequired && <div className='dot_container' style={{ dislay: "block" }}>
            {dots}
          </div>}



        </div>

      <button className='next_btn ' onClick={handleNext}  style={{display:`${currentIndex===maxIndex ? 'none' : 'block'}`}}>
          <i class="fa-solid fa-angle-right"></i>
      </button>

    </div>
  )
}
