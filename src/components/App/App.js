import './App.css';
import Header from "../Header/Header";
import RandomPlanet from "../RandomPlanet/RandomPlanet";
import React from "react";
import PersonPage from "../PersonPage/PersonPage";
import StarshipPage from "../StarshipsPage/StarshipPage";
import PlanetPage from "../PlanetPage/PlanetPage";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "../Startpage/StartPage";
import FilmsPage from "../FilmsPage/FilmsPage";
import FilmDetail from "../FilmsPage/FilmDetail/FilmDetail";

function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <Header/>
                <RandomPlanet/>
                <Routes>
                    <Route path='/' element={<StartPage/>}/>
                    <Route path='/films' element={<FilmsPage/>}/>
                    <Route path='/films/:id' element={<FilmDetail/>}/>
                    <Route path='/persons' element={<PersonPage/>}/>
                    <Route path='/starships' element={<StarshipPage/>}/>
                    <Route path='/planets' element={<PlanetPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
