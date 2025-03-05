import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Show() {

  let [record, setRecord] = useState([])  // for data show

  // ----------------data show karwany ky liye-------------
  useEffect(() => {
    axios.get('https://67ad88483f5a4e1477ddf737.mockapi.io/flight_booking')
      .then((mai_data_hn) => {
        setRecord(mai_data_hn.data)
        // console.log(mai_data_hn.data)
      }).catch((a) => console.error(a))
  })
  return (
    <div>Show
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>Booking List</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
          <div className='d-flex justify-content-end'>
            <Link to='/booking' className='btn btn-success'>Add +</Link>
          </div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>a</th>
                <th>aa</th>
                <th>aaa</th>
                <th>aaaa</th>

              </tr>
            </thead>
            <tbody>
              {
                record.map((a) =>(
                  <tr>
                    <td>{a.db_fname}</td>
                    <td>{a.db_email}</td>
                    <td>{a.db_nationality}</td>
                    <td>
                    <button className='btn btn-sm btn-success me-2'>Read</button>

                      <button className='btn btn-sm btn-primary me-2'>Edit</button>
                      <button className='btn btn-sm btn-danger'>Delete</button>

                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
