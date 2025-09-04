import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { Character } from "./typescripts/types";
import { MarvelDex } from "./MarvelDex";
import { Home } from "./components/Home";
import { Heroes } from "./components/Heroes";
import { Villains } from "./components/Villains";
import { CharacterSummary } from "./components/CharacterSummary";
import marvelCharactersData from "./data/marvel_characters.json";

function App() {
  // const unusableCharacterIDs: string[] = ["128", "131", "131", "133", "134", "283", "363", "447", "482", "511", "512", "621", "629", "694"];
  // USE STATE FOR LIST OF ALL MARVEL CHARACTERS
  const [marvelCharacters, setMarvelCharacters] = useState<Character[]>([]);
  // USE STATE FOR CHARACTER DISPLAY IN CharacterSummary COMPONENT
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    setMarvelCharacters(marvelCharactersData);
  }, []);

  // MAIN LAYOUT FOR ROUTES
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MarvelDex />}>
          <Route index element={<Home characters={marvelCharacters} handleClick={setCharacter} />} />
          <Route path="heroes" element={<Heroes characters={marvelCharacters} handleClick={setCharacter} />} />
          <Route path="villains" element={<Villains characters={marvelCharacters} handleClick={setCharacter} />} />
          {/* <Route path="comics" element={<Comics />} /> */}
          {/* <Route path="locations" element={<Locations />} /> */}
          {/* <Route path="teams" element={<Teams />} /> */}
          {/* PATH PARAMS */}
          <Route path="character/:characterName" element={<CharacterSummary character={character} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
