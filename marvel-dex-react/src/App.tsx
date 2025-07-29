import { useState, useEffect } from "react";
import type { Character } from "./types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MarvelDex } from "./MarvelDex";
import { Home } from "./components/Home";
import { Heroes } from "./components/Heroes";
import { Villains } from "./components/Villains";
import { CharacterSummary } from "./components/CharacterSummary";

function App() {
  // !!!
  // OPTIMIZE API CALL, THERE HAS TO BE A WAY TO DO IT EFFICIENTLY
  // !!!

  const headers = {
    Accept: "application/json",
    Authorization: import.meta.env.VITE_MARVELDEX_ACCESS_TOKEN,
  };

  const unusableCharacterIDs: string[] = ["128", "131", "131", "133", "134", "283", "363", "447", "482", "511", "512", "621", "629", "694"];
  // USE STATE FOR LIST OF ALL MARVEL CHARACTERS
  const [marvelCharacters, setMarvelCharacters] = useState<Character[]>([]);

  // USE STATE FOR CHARACTER DISPLAY IN CharacterSummary COMPONENT
  const [character, setCharacter] = useState<Character>();

  useEffect(() => {
    // MAKE OWN API
    const characters: Character[] = [];
    const fetchCharacters = async () => {
      // LIST FOR MARVEL CHARACTERS FROM SUPERHERO API
      // TOTAL CHARACTERS 339
      for (let id = 1; id <= 731; id++) {
        try {
          const response = await fetch(`https://www.superheroapi.com/api.php/${headers.Authorization}/${id}`);
          const result: Character = await response.json();
          if (result.biography.publisher == "Marvel Comics" && !unusableCharacterIDs.includes(result.id)) {
            characters.push(result);
          }
        } catch (err) {
          console.error("Failed to fetch characters", err);
        }
      }
      setMarvelCharacters(characters);
    };
    fetchCharacters();
  }, []);

  console.log(marvelCharacters);
  console.log(marvelCharacters.length);

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
