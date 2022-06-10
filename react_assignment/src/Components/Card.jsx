import React from 'react'
import Rating from "@mui/material/Rating"

export const Card = ({id, img_src, movie_name, release_year, rating}) => {
  return (
    <div style={{width: "20%", margin: "1%", border: "1px solid black"}} key={id}>
        <img src={img_src} alt="" style={{width: "100%"}}/>
        <div style={{padding: "2%", textAlign: "left"}}>
            <div style={{display: "flex"}}>
                <h5 style={{margin: "0px 10px 0px 0px"}}>{movie_name}</h5>
                <p style={{margin: "0px", color: "grey", fontSize: "12px"}}>({release_year})</p>
            </div>
            <div style={{display: "flex", margin:"0px 10px 0px 0px"}}>
                <Rating value={Number(rating)/2} precision={0.1} readOnly size="small"/>
                <p style={{margin: "0px", color:"grey", fontSize: "12px"}}>{rating}</p>
            </div>
        </div>
    </div>
  )
}
