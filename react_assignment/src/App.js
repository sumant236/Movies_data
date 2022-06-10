import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { Card } from './Components/Card';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [imgSrc, setImgSrc] = useState("");
  const [movieRating, setMovieRating] = useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleClick = useCallback(() => {
    fetch("http://localhost:8000/", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          id: data.length,
          movie_name: name,
          rating: movieRating,
          release_year: releaseYear,
          img_src: imgSrc
        })
    })
    .then(response=>response.json())
    .then(response=>console.log(response))
    .catch((e)=>console.log(e));
    setName("");
    setImgSrc("");
    setMovieRating("");
    setReleaseYear("");
  })

  useEffect(()=>{
    fetch("http://localhost:8000/")
    .then((res)=>res.json())
    .then((res)=>{
      setData(res);
    })
    .catch((err)=>console.log(err));
  }, [handleClick])
  return (
    <div className="App">
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "20px"}}>
          <input value={name} placeholder="Enter Movie Name" onChange={(e)=>setName(e.target.value)} style={{maxWidth: "17%"}}/>
          <input value={releaseYear} placeholder="Enter Release Year" onChange={(e)=>setReleaseYear(e.target.value)} style={{maxWidth: "17%"}}/>
          <input value={imgSrc} placeholder="Enter image source" onChange={(e)=>setImgSrc(e.target.value)} style={{maxWidth: "17%"}}/>
          <input value={movieRating} placeholder="Enter Movie Rating" onChange={(e)=>setMovieRating(e.target.value)} style={{maxWidth: "17%"}}/>
          <button onClick={handleClick} style={{maxWidth: "17%"}}>Add Movie</button>
        </div>
      <div className="App" style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
        {data.map((data) =><Card id={data.id} img_src={data.img_src} movie_name={data.movie_name} release_year={data.release_year} rating={data.rating} />)}
      </div>
    </div>
  );
}

export default App;
