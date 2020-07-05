import React from 'react' ;
import Movie from './movie' ;


function list(props) {
    
   console.log( props.movies );

   const {movies} = props ;
   
   console.log(movies)
    

    return (

        <div style={{display:"flex", flexWrap:"wrap" , textAlign:'center'}}>
            
        
        {movies.map((movie)=>

           <Movie movie={movie} />
        
        )      }

               </div>
    )
    
}

export default list
