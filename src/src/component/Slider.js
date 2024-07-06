import React,{useState} from 'react'
import './Slider.css'

export default function Slider(props) {
  const [currentIndex, setCurrectIndex] = useState(0);
  // console.log()
  const maxIndex = Math.max(0, props.slides.length - props.items_to_be_displayed);;
  // const maxIndex = props.maxIndex;
  // console.log(props.slides)


  let handlePrev = () => {
    setCurrectIndex((prevIndex) => Math.max(0, prevIndex - props.no_of_items_to_scroll));
    
  }
  
  let handleNext = () => {
    setCurrectIndex((prevIndex) => Math.min(maxIndex, prevIndex + props.no_of_items_to_scroll));
  }
  
  let handleDotClick = (index) => {
    setCurrectIndex(index);
  }

  let dots = []
  for (let i = 0; i <= maxIndex; i=i+props.no_of_items_to_scroll) {
    dots.push(<div className={`dot ${i === currentIndex ? 'active' : ''} `} data-key={i} onClick={() => handleDotClick(i)}> </div>);
  }

  return (
    <div className='slider_section'>

      <button className='prev_btn ' onClick={handlePrev} style={{display:`${currentIndex===0 ? 'none' : 'block'}`}}>
        <i class="fa-solid fa-angle-left"></i>

      </button>

      <div className="slide_bar_container">

          <div className='slide_bar' style={{width:`${props.width}px`, transform: `translateX(-${Math.min(props.width,currentIndex * props.indi_width) }px)` }}>
            {
            // console.log(props.slides)
              
            props.slides.map((slide, index) => (

              <div className={`single_slide_block ${((index>=currentIndex)&&(index)<(currentIndex+props.items_to_be_displayed)) ?  'slides_active' : ''}`} key={index} style={{width:`${props.indi_width}px` }} >
               {slide}
              </div>
            )
            )}
          </div>

         { props.isDotRequired && <div className='dot_container' style={{ dislay: "block" }}>
            {dots}
          </div>}



        </div>

      <button className='next_btn ' onClick={handleNext}  style={{display:`${currentIndex>=maxIndex ? 'none' : 'block'}`}}>
          <i class="fa-solid fa-angle-right"></i>
      </button>

    </div>
  )
}


Slider.defaultProps = {
  isDotRequired : 'true',
  maxIndex : 6,
  width : 1170,
  indi_width : 365,
  no_of_items_to_scroll : 1,
  items_to_be_displayed:3


}
