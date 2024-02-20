import {Link} from "react-router-dom";

function NavBar()
{
	return(
		<>
			<center>
			<div class="nav">
				<Link to="/"> Home </Link>
				<Link to="/create"> Create Page </Link>
			</div>
			</center>
		</>
	);
}

export default NavBar;