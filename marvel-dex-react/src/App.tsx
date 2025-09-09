import { useState, useEffect, createContext } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import type { Character, SignUpFormType, LoginFormType, Token } from "./typescripts/types";
import { MarvelDex } from "./MarvelDex";
import { Home } from "./components/Home";
import { Heroes } from "./components/Heroes";
import { Villains } from "./components/Villains";
import { CharacterSummary } from "./components/CharacterSummary";
import marvelCharactersData from "./data/marvel_characters.json";
import { Login } from "./components/Login";
import { SignUp } from "./components/SignUp";

function App() {
  // const unusableCharacterIDs: string[] = ["128", "131", "131", "133", "134", "283", "363", "447", "482", "511", "512", "621", "629", "694"];
  // USE STATE FOR LIST OF ALL MARVEL CHARACTERS
  const [marvelCharacters, setMarvelCharacters] = useState<Character[]>([]);

  // USE STATE FOR CHARACTER DISPLAY IN CharacterSummary COMPONENT
  const [character, setCharacter] = useState<Character>();

  // LOGOUT FUNCTION
  // const logOutUser = () => {
  //   setToken(null);
  //   setUserLoggedIn(false);
  // };

  useEffect(() => {
    setMarvelCharacters(marvelCharactersData);
  });

  // MAIN LAYOUT FOR ROUTES
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarvelDex />}>
          {/* LOGIN AND SIGNUP  */}
          <Route index element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          {/* HOME HEROES AND VILLAINS */}
          <Route path="home" element={<Home characters={marvelCharacters} handleClick={setCharacter} />} />
          <Route path="heroes" element={<Heroes characters={marvelCharacters} handleClick={setCharacter} />} />
          <Route path="villains" element={<Villains characters={marvelCharacters} handleClick={setCharacter} />} />
          <Route path="character/:characterName" element={<CharacterSummary character={character} />} />
          {/* <Route path="comics" element={<Comics />} /> */}
          {/* <Route path="locations" element={<Locations />} /> */}
          {/* <Route path="teams" element={<Teams />} /> */}
          {/* PATH PARAMS */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
