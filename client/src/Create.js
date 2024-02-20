import { useState, useRef } from "react";
import axios from "axios";

function Create()
{
	const [rno, setRno] = useState("");
	const [name, setName] = useState("");
	const [marks, setMarks] = useState("");
	const rRno = useRef();

	const hRno = (event) => { setRno(event.target.value); } 
	const hName = (event) => {
  		const value = event.target.value;
  			if (/^[A-Za-z\s]*$/.test(value) || value === '') {
    				setName(value);
  			} else {
    				alert("Name should only contain alphabets or letters");
  			}
		}

	const hMarks = (event) =>  {
	const value = event.target.value;
		if (value === '' || (value >= 0 && value <= 100)) {
       			setMarks(value);
    		} else {
        		// Optionally, you can alert the user or handle the error differently
        	alert("Marks must be between 0 and 100");
		
		
    		}
	}
	

	const save = (event) => {
		event.preventDefault();
		if (name.trim() === '') {
    		alert("Name cannot be blank");
    		return;
  		}
		let urladd = "http://localhost:9000/create";
		let data = {rno, name, marks}
		axios.post(urladd, data)
		.then(res => { console.log(res.data)
				
				if (res.data.affectedRows == 1)
						alert("record inserted");
				else
					alert("record already exists");
				

				setRno("");
				setName("");
				setMarks("");
				rRno.current.focus();
	})
		.catch(err => console.log(err))
	}



	return(
		<>
			<center>
				<h1> Create Page </h1>
				<form onSubmit={save}>
				<input type="number" placeholder="enter rno"
onChange={hRno} ref={rRno} value={rno} />
				<br/><br/>
				<input type="text" placeholder="enter name" 
onChange={hName} value={name} />
				<br/><br/>
				<input type="number" placeholder="enter marks"
onChange={hMarks} value={marks}/>
				<br/><br/>
				<input type="Submit" value="Save"/>
				<br/><br/>
				</form>
			</center>
		</>
	);
}

export default Create;







































