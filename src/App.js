import Select from './Components/select';
import Card from './Components/card';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import './App.css'

function App() {

  const [origin, setOrigin] = useState('');
  const [dest, setDest] = useState('');
  const [cabin, setCabin] = useState('');
  const [airlines, setAirlines] = useState([]);
  const [avail, setAvail] = useState(true);
  const [load, setLoad]=useState(false)

  const handleOrigin=(data)=>{
    setOrigin(data);
  }

  const handleDest=(data)=>{
    setDest(data);
  }

  const handleCabin=(data)=>{
    setCabin(data);
  }


  const callAPI= async ()=>{
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9,hi;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    }

   const json_data = {
      'origin': origin,
      'destination': dest,
      'partnerPrograms': [
          'Air Canada',
          'United Airlines',
          'KLM',
          'Qantas',
          'American Airlines',
          'Etihad Airways',
          'Alaska Airlines',
          'Qatar Airways',
          'LifeMiles',
      ],
      'stops': 2,
      'departureTimeFrom': '2024-07-09T00:00:00Z',
      'departureTimeTo': '2024-10-07T00:00:00Z',
      'isOldData': false,
      'limit': 302,
      'offset': 0,
      'cabinSelection': [
          cabin,
      ],
      'date': '2024-07-09T12:00:17.796Z',
  }
    
      try { 
        setAvail(true)    
        setLoad(true)
        setAirlines([])
        const response = await fetch('https://cardgpt.in/apitest', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(json_data),
        });
        const data = await response.json();
        if(data.data.length==0) setAvail(false)
        setAirlines(data.data)
        setLoad(false)
    } catch (error) {
        console.error('Error fetching data:', error);
    }
  }
  return (
    <div className="App">
       <h3>Choose Origin & Destination Airports:</h3>
      <Select options={["JFK","DEL","SYD","BOM","BNE","BLR"]} name={"Origin"} sendData={handleOrigin}/>
       <Select options={["JFK","DEL","SYD","LHR","CDG","DOH","SIN"]} name={"Destination"} sendData={handleDest}/>
       <Select options={["Economy","Buiseness","First"]} name={"Cabin"} sendData={handleCabin}/>
       <button onClick={callAPI}>Search</button>
       {
        load?<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="success" />
        </Stack>:""
       }
       <div className="cards">
        {
          (!avail)? <h2>Try another search route.</h2>
          :airlines.map((air)=>(
            <Card program={air.partner_program} origin={origin} dest={dest} buis_tax={air.min_business_tax} buis_miles={air.min_business_miles} eco_miles={air.min_economy_miles} eco_tax={air.min_economy_tax} first_miles={air.min_first_miles} first_tax={air.min_first_tax}/>
          ))
        }
       </div>
       
    </div>
  );
}

export default App;
