import { useEffect, useState } from "react";

export default function Joker() {
    
  const URL = "https://official-joke-api.appspot.com/random_joke";

  let [joke, setJoke] = useState({});

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({
      setup: jsonResponse.setup,
      punchline: jsonResponse.punchline,
    });
  };

  useEffect(() => {
    async function getFirstJoke() {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      setJoke({
        setup: jsonResponse.setup,
        punchline: jsonResponse.punchline,
      });
    }
    getFirstJoke();
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getNewJoke}>Generate Joke</button>
    </div>
  );
}
