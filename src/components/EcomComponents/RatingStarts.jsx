const Rating = ({ value , color }) => {
    return (
      <div className='rating '>
        <span >
          <i
            style={{ color }}
            className={
              value >= 1
                ? 'fas fa-star text-[12px]'
                : value >= 0.5
                ? 'fas fa-star-half-alt text-[12px]'
                : 'far fa-star text-[12px]'
            }
          ></i>
        </span>
        <span className="ml-1">
          <i
            style={{ color }}
            className={
              value >= 2
                ? 'fas fa-star text-[12px]'
                : value >= 1.5
                ? 'fas fa-star-half-alt text-[12px]'
                : 'far fa-star text-[12px]'
            }
          ></i>
        </span>
        <span className="ml-1">
          <i
            style={{ color }}
            className={
              value >= 3
                ? 'fas fa-star text-[12px]'
                : value >= 2.5
                ? 'fas fa-star-half-alt text-[12px]'
                : 'far fa-star text-[12px]'
            }
          ></i>
        </span>
        <span className="ml-1">
          <i
            style={{ color }}
            className={
              value >= 4
                ? 'fas fa-star text-[12px]'
                : value >= 3.5
                ? 'fas fa-star-half-alt text-[12px]'
                : 'far fa-star text-[12px]'
            }
          ></i>
        </span>
        <span className="ml-1">
          <i
            style={{ color }}
            className={
              value >= 5
                ? 'fas fa-star text-[12px]'
                : value >= 4.5
                ? 'fas fa-star-half-alt text-[12px]'
                : 'far fa-star text-[12px]'
            }
          ></i>
        </span>
        <span className="ml-1 text-[#E0DFDF] text-[12px]">(34 Reviews)</span>
      </div>
    )
  }
  
  Rating.defaultProps = {
    color: '#f8e825',
  }
  

  
  export default Rating;