import React, { useEffect, useState } from 'react'
import { getAllUsers, updateUser } from '../../api/adminApi';

function ViewUsers() {
  const [users,setUsers] = useState([]);
  useEffect(()=>{
    getAllUsers()
    .then((res) => setUsers(res.data));
  },[])

  function handleOnClick (userId,status) {
    updateUser(userId,{block:!status})
    .then(()=>{
      getAllUsers()
      .then((res) => setUsers(res.data));
    })
  }
  return (
    <div>
      <section>
            <div className='flex justify-center mt-10'>
                <table className='w-[80%]'>
                    <tr>
                        <th>NAME</th>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>ROLE</th>
                        <th>ORDERS</th>
                        <th>BLOCK</th>
                    </tr>
                    {
                      users && users.map((user,index)=>{
                        if (user.role !== 'admin'){

                          return(
                          <tr key={index} className='text-center border-y-2 h-14 text-xs md:text-base'>
                              <td>{user.name}</td>
                              <td>{user.username}</td>
                              <td>{user.email}</td>
                              <td>{user.role}</td>
                              <td>11</td>
                              <td className='w-20'><button onClick={()=>handleOnClick(user.id,user.block)} className='bg-yellow-400 px-2 rounded-md p-1'>{user.block?"Unblock":"Block"}</button></td>
                        </tr>
                          )
                        }
                      })
                    }
                    
                    
                </table>
            </div>
        </section>
    </div>
  )
}

export default ViewUsers
