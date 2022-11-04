import React from 'react'
import blog_1 from "../../../assets/ecome/blog-01.jpg";
import blog_2 from "../../../assets/ecome/blog-02.jpg";
import blog_3 from "../../../assets/ecome/blog-03.jpg";

const News = () => {

const blog = [ 
    { date : "" , title: "" , desc: "" , img: blog_1 },
    { date : "" , title: "" , desc: "" , img: blog_2 },
    { date : "" , title: "" , desc: "" , img: blog_3 },
   
]

    return (
        <>
            <div className='bscontainer mb-2'>
                <div className='mb-2 ml-2 mt-6'>
                    <div className="tranding-heading relative">
                        <h1 className=" font-medium text-[20px] uppercase">Latest News</h1>
                        <hr className="mt-2 " />
                        <hr className="border-[2px] -bottom-[1px] absolute z-99 rounded-sm border-[#24D29F] w-[13%]" />
                    </div>
                </div>

                <div className='row mt-[2rem]'>
                    {blog.map((b, index) => (
                        <div className='col-lg-4 '>
                            <div className='p-2 pb-3'>
                                <img src={b?.img} className=" object-cover   " alt="img_pro" />
                                <div>
                                    <div className='flex items-center pt-2 text-[14px]'>
                                        <h2 className='uppercase'>march 5, 2022</h2>
                                        <span className='mx-2'>|</span>
                                        <span >Shopping</span>
                                    </div>
                                    <h2 className='text-[16px] text-black font-medium '>Nullam Ulamcorper Ornare Molestic</h2>
                                    <p className="text-[13px] pt-3 text-gray-500">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint, voluptatem ea minima ducimus earum animi reiciendis...
                                    </p>
                                    <h2 className='underline text-black uppercase pt-2 font-medium text-[16px]'>
                                        Read More
                                    </h2>

                                </div>
                            </div>
                        </div>
                    ))}



                </div>
            </div>

        </>
    )
}

export default News