import React from 'react'

function Movie(props) {

const arr =[1,1,1,1,1] ;

    console.log(props);

    const {movie} = props ;

    const number = movie.Rate ;

 

      const arr2 =  arr.map ((num,index)=> ( index<number ?  num = 1 : num = 0  ) )

    return (
        
        <div style={{width:"21%" ,height:'40%',margin:'2%',backgroundColor:'grey',borderRadius:'9px'}} key={movie.id}>    
        
             <img src={movie.image} alt={movie.name} style={{width:'100%' ,height:'600px',borderRadius:'9px'}}/>
             <div>
             <p style={{margin:'5px', fontSize:'30px' , textAlign:'left'}} >Title : {movie.name} </p>

             <div style={{display:'flex'}} >  {  arr2.map((element)=> (element=='1' ?  <span style={{color:'#ffa64d',margin:'5px' }} class="fa fa-star"></span> : <span style={{margin:'5px'}} class="fa fa-star"></span> ) 
  )                  
             }
             
              </div> 
             </div>
         </div>
        
    )
}

export default Movie
