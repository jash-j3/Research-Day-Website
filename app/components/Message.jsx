import React from 'react'

function Events() {
  return (
    <div>
        <h1 className='-mt-16 relative flex justify-center'>
            About
        </h1>
        <div className='ml-5 mt-12'>
            MESSAGE FROM DIRECTOR 
        </div>
        <div className='container mx-auto bg-slate-300 hover:bg-white rounded-xl shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30 '>
        <div>
            <img
                src='https://www.iith.ac.in/assets/images/profiles/Murty-B.jpg' 
                alt='/'
                height={200}
                width={200}
                className='ml-5 mt-5 rounded-full shadow-lg'

            />
        </div>
        <div className='flex ml-10 -mt-16 justify-center'>
            msg
        </div>
        </div>

        <div className='ml-5 mt-12'>
        MESSAGE FROM DEAN STUDENTS
        </div>
        <div className='container mx-auto bg-slate-300 hover:bg-white rounded-xl shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30'>
        <div>
            <img
                src='https://www.iith.ac.in/assets/images/profiles/Murty-B.jpg' 
                alt='/'
                height={200}
                width={200}
                className='ml-5 mt-5 rounded-full shadow-lg'

            />
        </div>
        </div>
        <div className='flex ml-10 -mt-16 justify-center'>
            msg
        </div>
  
        <div className='ml-5 mt-12'>
        MESSAGE FROM OC
        </div>
        <div className='container mx-auto bg-slate-300 hover:bg-white rounded-xl shadow-xl transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg dark:hover:shadow-black/30'>
        <div>
            <img
                src='https://www.iith.ac.in/assets/images/profiles/Murty-B.jpg' 
                alt='/'
                height={200}
                width={200}
                className='ml-5 mt-5 rounded-full shadow-lg'

            />
        </div>
        </div>
        <div className='flex ml-10 -mt-16 justify-center'>
            msg
        </div>



    </div>
  )
}

export default Events