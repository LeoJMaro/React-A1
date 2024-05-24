
import './App.css';
import React, {useState} from 'react';
import MovieData from './movies.json';
import {Button } from 'react-bootstrap'
// import {Button, Navbar} from 'react-bootstrap'


const Movie = ({ name, year, rating }) => {
	return (
		<>
			<h2>{name}</h2>
			<p>Year: {year}</p>
			<p>Rating: {rating}</p>
		</>
	);
};

function MovieList({movieData}) {
	return (
		<>
			{movieData.map(({name, year, rating}) => {
				return <Movie key={`${name}-${year}`} name={name} year={year} rating={rating} />;
			})}
		</>
	);
}

function NavBar({isLoggedIn, onLoginToggleClick}){
	return(
	<Button variant="success" onClick={onLoginToggleClick}>
		{isLoggedIn ? 'Logout' : 'Login'}
	</Button>
	);
}

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const loginToggle = () => setIsLoggedIn(prevState => !prevState);
	return (
		<>
			<NavBar onLoginToggleClick={loginToggle} isLoggedIn={isLoggedIn}  />
			<MovieList movieData={MovieData.movies}/>
		</>
	);
}