import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { PrimaryHeading } from '../../Globals/Globals'
import { LocateImg, LocateMainContainer } from './StylesLocate'
import Inputs from './Inputs'
import './locate.css'
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io'
const Locate = ({ id }) => {
  const [manus] = useState(['HOW', 'YOUR LOCATION', 'YOUR SEARCH', 'YOUR SAFETY', 'YOUR EXPERIENCE'])
  const [active, setActive] = useState('')


  const handleIndex = (index) => {
    if (index === active) {
      setActive('')
    }
    else {
      setActive(index)
    }
  }



  return (
    <LocateMainContainer id={id}>
      <div className='bscontainer-fluid text-center'>
        <div className='text-center w-full'>

          <PrimaryHeading>LOCATE</PrimaryHeading>

          <h3>DOCTORS, ASSOCIATIONS, CANNABIS CLUBS, CAFES, DISPENSARIES AND LAWYERS</h3>


          <div className="list_data mt-3">
            <ul className="flex items-center justify-between cursor-pointer" >
              {manus.map((manu, index) => (
                <li className='w-full flex items-center justify-center border mr-1 text-[18px] p-2 bg-[#DC3545] text-white rounded-md' onClick={() => handleIndex(index)}>
                  {manu}
                  {active === index ?
                    <IoMdArrowDropup className="icons" />
                    :
                    <IoMdArrowDropdown className="icons" />
                  }
                </li>

              ))}
            </ul>

          </div>
          {active === 0 ?
            <p className="text-[16px] w-full px-1 text-justify">
              Welcome, the above-listed professionals and services can be found using our mapping locator function. The service is provided to all clients and visitors at no charge. However, we request your feedback and use of the service to assess the quality of the assistance you encountered from any of those using the locator. That information will be shared with your peers seeking a similar experience if satisfactory or avoid any establishment that doesn't afford them excellent treatment or a high-quality product, goods, or service. The search function is powered by Google Maps technologies, it will direct you to any of the stated services available nearest your hotel, if traveling, or your current in-country location.
            </p>
            :
            active === 1 ?
              <p className="text-[16px] w-full px-1 text-justify">
                location Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
              </p>
              : active === 2 ?
                <p className="text-[16px] w-full px-1 text-justify">
                  Search Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                </p>
                : active === 3 ?
                  <p className="text-[16px] w-full px-1 text-justify">
                    Sefety Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                  </p>
                  : active === 4 ?
                    <p className="text-[16px] w-full px-1 text-justify">
                      Experience Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet eleifend diam. Nulla ac sem nec ligula porta pellentesque ut non purus. Suspendisse vulputate lacus eget nulla semper, non laoreet nulla sollicitudin. In hac habitasse platea dictumst. Ut id tellus odio. Quisque gravida pretium ex a consectetur. Etiam viverra tincidunt lacus, et porttitor sem accumsan et. Sed vehicula faucibus imperdiet. Maecenas iaculis lorem eros. Aliquam porttitor nisl a dolor semper, et gravida tellus rutrum. Aliquam purus elit, luctus sit amet nisl sed, pharetra tincidunt ligula. Etiam magna velit, interdum quis eleifend in, faucibus non nulla. Pellentesque fringilla tellus ex, quis ullamcorper lorem luctus ac. Duis pellentesque metus nec nunc imperdiet, et congue lorem suscipit.
                    </p>
                    : null
          }
        </div>
      </div>
      <Inputs />
    </LocateMainContainer >
  )
}

export default Locate