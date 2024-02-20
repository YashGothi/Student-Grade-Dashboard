import { useState, useEffect } from "react";
import axios from "axios";

function Home()
{
	const [info, setInfo] = useState([]);

	useEffect( ()=>{
		let urladd = "http://localhost:9000/view";
		axios.get(urladd)
		.then(res => setInfo(res.data))
		.catch(err => console.log(err));			
	}, [])


	const deleteStudent = (rno) => {
		let urladd = "http://localhost:9000/remove";
		let r={rno}		
		axios.delete(urladd, {data:r})
		.then(res => {setInfo(res.data)
			if (res.data.affectedRows === 1)
				alert("record deleted");
			else{
				console.log(res.data.sqlMessage);
				alert("issue: " + res.data.sqlMessage);
			}
				
			window.location.reload();
		})
		.catch(err => console.log(err))	
	}


	return(
		<>
			<center>
				<h1> Home Page </h1>
				<table border="2" style={{ width:"70%"}}>
				<tr>
					<th> Rno </th>
					<th> Name </th>
					<th> Marks </th>
					<th> Delete </th>
				</tr>
				{
				info.map( (e) =>
				<tr style={{ textAlign: "center" }}>
					<td> { e.rno }</td>
					<td> { e.name }</td>
					<td> { e.marks }</td>
				<td> <button onClick = { () => { if
(window.confirm('are you sure')) deleteStudent(e.rno) }}> Delete </button> </td>
				 		</tr>
				)}
				</table>
			</center>
		</>
	);
}

export default Home;
	