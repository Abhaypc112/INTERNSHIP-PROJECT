import React from 'react'

function ViewUsers() {
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ORDERS</th>
                        <th>BLOCK</th>
                    </tr>
                    <tr className='text-center border-y-2 h-14 text-xs md:text-base'>
                        <td>Abhay pc</td>
                        <td>abhay</td>
                        <td>abhay@gmail.com</td>
                        <td>11</td>
                        <td><button className='bg-yellow-400 px-2 rounded-md p-1'>Block</button></td>
                    </tr>
                    
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewUsers
