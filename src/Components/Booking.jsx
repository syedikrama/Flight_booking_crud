import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Booking() {
    let [fname, setFname] = useState('');
    let [dob, setDob] = useState('');
    let [gender, setGender] = useState('');
    let [nationality, setNationality] = useState('');
    let [passportnum, setPassportnum] = useState('');
    let [phonenum, setPhonenum] = useState('');
    let [email, setEmail] = useState('');
    let [trip, setTrip] = useState('');
    let [departure, setDeparture] = useState('');
    let [destination, setDestination] = useState('');
    let [departure_date, setDeparture_date] = useState('');
    let [return_date, setReturn_date] = useState('');
    let [departure_time, setDeparture_time] = useState('');
    let [pessenger, setPessenger] = useState('');
    let [travel_class, setTravel_class] = useState('');
    let [seat, setSeat] = useState('');
    let [special, setSpecial] = useState([]);
    let [payment, setPayment] = useState('');
    let [note, setNote] = useState('');
    let nav = useNavigate();

async function save_data(){
    try {
        let axios_res = await axios.post('https://67ad88483f5a4e1477ddf737.mockapi.io/flight_booking',{
            db_fname: fname,
            db_dob: dob,
            db_gender: gender,
            db_nationality: nationality,
            db_passportnum: passportnum,
            db_phonenum: phonenum,
            db_email: email,
            db_trip: trip,
            db_departure: departure,
            db_destination: destination,
            db_departure_date: departure_date,
            db_return_date: return_date,
            db_departure_time: departure_time,
            db_pessenger: pessenger,
            db_travel_class: travel_class,
            // db_seat, seat,
            db_special: special,
            db_payment: payment,
            db_note:  note
    
        }
        
    )
    toast.success('Data Has Been Sent');
    
    window.location.href = '/';

    
    // console.log("Data has been sent")
    } 
    catch (error) {
        console.error("Error in saving data:", error);
        toast.error('Error sending data');
        
    }
}



    
    return (
        <div className="container mt-4">
            <h1 className="mb-4 text-center">Flight Booking</h1>
            <form>
                <div className="mb-3">
                    <label className="form-label">Full Name (Required)</label>
                    <input type="text" name="full_name" className="form-control" value={fname} onChange={(a)=>setFname(a.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Date of Birth (Required)</label>
                    <input type="date" name="dob" className="form-control" value={dob} onChange={(a)=>setDob(a.target.value)} required />
                </div>

                <div className="mb-3">
                    <label className="form-label">Gender (Required)</label> <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" name="gender" value="male" className="form-check-input" onChange={(a)=>setGender(a.target.value)} required />
                        <label className="form-check-label">Male</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="gender" value="female" className="form-check-input" onChange={(a)=>setGender(a.target.value)} />
                        <label className="form-check-label">Female</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="gender" value="other" className="form-check-input" onChange={(a)=>setGender(a.target.value)} />
                        <label className="form-check-label">Other</label>
                    </div>
                </div>

                <div className="mb-3">
                    <label className="form-label">Nationality (Required)</label>
                    <select name="nationality" className="form-select" required onChange={(a)=>setNationality(a.target.value)}>
                        <option value="">Select Country</option>
                        <option value="us">United States</option>
                        <option value="uk">United Kingdom</option>
                        <option value="in">India</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Passport Number (Required for International Flights)</label>
                    <input type="text" name="passport_number" className="form-control" value={passportnum} onChange={(a)=>setPassportnum(a.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Phone Number (Required)</label>
                    <input type="tel" name="phone" className="form-control" required value={phonenum} onChange={(a)=>setPhonenum(a.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Email (Required)</label>
                    <input type="email" name="email" className="form-control" required value={email} onChange={(a)=>setEmail(a.target.value)} />
                </div>

                {/* Trip Type */}
                <div className="mb-3">
                    <label className="form-label">Trip Type (Required)</label> <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" name="trip_type" value="one-way" className="form-check-input" required onChange={(a)=>setTrip(a.target.value)} />
                        <label className="form-check-label">One-Way</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="trip_type" value="round-trip" className="form-check-input" onChange={(a)=>setTrip(a.target.value)} />
                        <label className="form-check-label">Round Trip</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="trip_type" value="multi-city" className="form-check-input" onChange={(a)=>setTrip(a.target.value)} />
                        <label className="form-check-label">Multi-City</label>
                    </div>
                </div>

                {/* Flight Details */}
                <div className="mb-3">
                    <label className="form-label">Departure City (Required)</label>&nbsp;
                    <select name="departure_city" className="form-select" required onChange={(a)=>setDeparture(a.target.value)}>
                        <option value="">Select City</option>
                        <option value="nyc">New York</option>
                        <option value="lax">Los Angeles</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Destination City (Required)</label>
                    <select name="destination_city" className="form-select" required onChange={(a)=>setDestination(a.target.value)}>
                        <option value="">Select City</option>
                        <option value="lon">London</option>
                        <option value="dub">Dubai</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label className="form-label">Departure Date (Required)</label>
                    <input type="date" name="departure_date" className="form-control" required value={departure_date} onChange={(a)=>setDeparture_date(a.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Return Date (Required for Round Trip)</label>
                    <input type="date" name="return_date" className="form-control" value={return_date} onChange={(a)=>setReturn_date(a.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Preferred Departure Time (Optional)</label>
                    <input type="time" name="departure_time" className="form-control" value={departure_time} onChange={(a)=>setDeparture_time(a.target.value)} />
                </div>

                <div className="mb-3">
                    <label className="form-label">Number of Passengers (Required)</label>
                    <input type="number" name="passengers" className="form-control" required value={pessenger} onChange={(a)=>setPessenger(a.target.value)} />
                </div>

                {/* Class Selection */}
                <div className="mb-3">
                    <label className="form-label">Travel Class (Required)</label> <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" name="travel_class" value="economy" className="form-check-input"  onChange={(a)=>setTravel_class(a.target.value)} />
                        <label className="form-check-label">Economy</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="travel_class" value="business" className="form-check-input"  onChange={(a)=>setTravel_class(a.target.value)} />
                        <label className="form-check-label">Business</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="travel_class" value="first-class" className="form-check-input"  onChange={(a)=>setTravel_class(a.target.value)} />
                        <label className="form-check-label">First Class</label>
                    </div>
                </div>

                {/* Seat Preferences */}
                <div className="mb-3">
                    <label className="form-label">Seat Preference (Optional)</label> <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" name="seat_pref" value="window" className="form-check-input" onChange={(a)=>setSeat(a.target.value)} />
                        <label className="form-check-label">Window</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="seat_pref" value="aisle" className="form-check-input" onChange={(a)=>setSeat(a.target.value)} />
                        <label className="form-check-label">Aisle</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="seat_pref" value="no-preference" className="form-check-input" onChange={(a)=>setSeat(a.target.value)} />
                        <label className="form-check-label">No Preference</label>
                    </div>
                </div>


                {/* <!-- Special Assistance --> */}
                <label>Special Requests (Optional)</label>
                <div class="checkbox-group">
                    <input type="checkbox" name="special_requests" value="extra_legroom"  onChange={(a)=>setSpecial(a.target.value)} /> Extra Legroom &nbsp;
                    <input type="checkbox" name="special_requests" value="wheelchair"  onChange={(a)=>setSpecial(a.target.value)} /> &nbsp; Wheelchair Assistance &nbsp;
                    <input type="checkbox" name="special_requests" value="special_meal"  onChange={(a)=>setSpecial(a.target.value)} /> &nbsp; Special Meal Request &nbsp;
                    <input type="checkbox" name="special_requests" value="infant_seat"  onChange={(a)=>setSpecial(a.target.value)} /> &nbsp; Infant Seat
                </div>


                {/* Payment Method */}
                <div className="mb-3">
                    <label className="form-label">Payment Method (Required)</label> <br />
                    <div className="form-check form-check-inline">
                        <input type="radio" name="payment" value="card" className="form-check-input" required  onChange={(a)=>setPayment(a.target.value)} />
                        <label className="form-check-label">Credit/Debit Card</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="payment" value="netbanking" className="form-check-input"  onChange={(a)=>setPayment(a.target.value)} />
                        <label className="form-check-label">Net Banking</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="payment" value="upi" className="form-check-input"  onChange={(a)=>setPayment(a.target.value)} />
                        <label className="form-check-label">UPI</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input type="radio" name="payment" value="cash" className="form-check-input"  onChange={(a)=>setPayment(a.target.value)} />
                        <label className="form-check-label">Cash at Counter</label>
                    </div>
                </div>

                {/* Additional Notes */}
                <div className="mb-3">
                    <label className="form-label">Additional Notes (Required)</label>
                    <textarea name="notes" className="form-control" rows="4" required value={note} onChange={(a)=>setNote(a.target.value)}></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-25" onClick={save_data}>Submit</button>
            </form>
        </div>

    )
}
