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
  }, [])

  // -----------for delete-----------------
  let [msg, setMsg] = useState("");  // delete ka masg

  function deleterecord(user_id, db_fname) {
    if (window.confirm(`Are you sure you want to delete ${db_fname} record`)) {
      axios.delete(`https://67ad88483f5a4e1477ddf737.mockapi.io/flight_booking/${user_id}`)
        .then(() => {
          setRecord((a) => a.filter((usr_record) => usr_record.id !== user_id))
          setMsg("Record deleted successfully");
          // setIsshow(true);
        })
    }
  }


  // ---------------update karny ky liye-------------------

  let [fname, setFname] = useState('');
  let [email, setEmail] = useState('');
  let [nationality, setNationality] = useState('');
  let [gender, setGender] = useState('');
  let [phonenum, setPhonenum] = useState('');

  let [id, setId] = useState(''); // id ki help sy record update karien gy

  function fetchRecord(a, b, c, d, e, f) {
    setFname(a);
    setEmail(b);
    setNationality(c);
    setGender(d);
    setPhonenum(e);
    setId(f);
  }

  function updateRecord() {
    axios.put(`https://67ad88483f5a4e1477ddf737.mockapi.io/flight_booking/${id}`, {
      db_fname: fname,
      db_email: email,
      db_nationality: nationality,
      db_gender: gender,
      db_phonenum: phonenum,

    }
    )
      .then(() => {
        setRecord((i) => i.map((a) => a.id === id ? {
          ...a,
          db_fname: fname,
          db_email: email,
          db_nationality: nationality,
          db_gender: gender,
          db_phonenum: phonenum,
        }
          : a));
        setMsg("Record Updated");
        // setIsshow(true);
      }).catch((e) => console.error(e))
  }




  return (
    <div>
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
        <h1>Booking List</h1>
        <div className='w-75 rounded bg-white border shadow p-4'>
          <div className='d-flex justify-content-end'>
            <Link to='/booking' className='btn btn-success'>Add +</Link>
          </div>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Nationality</th>
                <th>Gender</th>
                <th>Phone</th>

              </tr>
            </thead>
            <tbody>
              {
                record.map((a, i) => (
                  <tr key={i}>
                    <td>{a.db_fname}</td>
                    <td>{a.db_email}</td>
                    <td>{a.db_nationality}</td>
                    <td>{a.db_gender}</td>
                    <td>{a.db_phonenum}</td>


                    <td>
                      <Link to={`/full_details/${a.id}`} className='btn btn-sm btn-success me-2'>Read</Link>

                      <button className='btn btn-sm btn-primary me-2' onClick={() => fetchRecord(a.fname, a.email, a.nationality, a.gender, a.phonenum, a.id)}>Edit</button>
                      <button className='btn btn-sm btn-danger' onClick={() => deleterecord(a.id, a.db_fname)}>Delete</button>

                    </td>

                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>


{/* update wala kaam  */}
<div class="modal fade" id="LendaModal" tabindex="-1" aria-labelledby="LendaModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="LendaModal2">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input class='form-control mb-3' type="text" value={fname} onChange={(a) => setFname(a.target.value)} />
                        <input class='form-control mb-3' type="email" value={email} onChange={(a) => setEmail(a.target.value)} />
                        <input class='form-control mb-3' type="number" value={nationality} onChange={(a) => setNationality(a.target.value)} />
                        <input class=' mb-3' type="radio" value="m" name='gender' onChange={(a) => setGender(a.target.value)} checked={gender === "m"} />&nbsp; male &nbsp;
                        <input class=' mb-3' type="radio" value="fm" name='gender' onChange={(a) => setGender(a.target.value)} checked={gender === "fm"} />&nbsp; female
                        <input class='form-control mb-3' type="password" value={phonenum} onChange={(a) => setPhonenum(a.target.value)} />


                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary closebtn" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" onClick={()=> {updateRecord(); document.querySelector(".closebtn").click()}} >Save changes</button>
                    </div>
                </div>
            </div>
        </div>




    </div>
  )
}

