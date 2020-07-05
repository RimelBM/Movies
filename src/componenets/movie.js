import React from 'react'

function Movie(props) {

    console.log(props);

    const {movie} = props ;

    return (
        
        <div style={{width:"21%" ,height:'40%',margin:'2%',backgroundColor:'grey',borderRadius:'9px'}} key={movie.id}>    
        
             <img src={movie.image} alt={movie.name} style={{width:'100%' ,height:'600px',borderRadius:'9px'}}/>
             <div>
             <p style={{margin:'5px', fontSize:'30px' , textAlign:'left'}} >Title : {movie.name} </p>

             <h1 style={{textAlign:'end', color:'red' , marginRight:'5px'}}> {movie.Rate} </h1> </div>
         </div>
        
    )
}

export default Movie
