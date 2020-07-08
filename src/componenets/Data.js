import React ,{useState} from 'react';
import List from  './list'
import Movie from './movie'
function Data() {
  
  
  
  const [film,setFilm] =useState('') ;

  const[movies,setMovies] = useState([{id:'1',name:"Naruto",Rate:5,image:'naruto.jpg'},
                                      {id:'2',name:"500 days of summer",Rate:4,image:"days.jpg"},
                                      {id:'3',name:"The lord of the rings",Rate:3,image:'Lord.jpg'},
                                      {id:'4',name:"one day",Rate:4,image:'One.jpg'},
                                      {id:'5',name:"Braveheart",Rate:2,image:'Braveheart.jpg'},
                                      {id:'6',name:"danish",Rate:5,image:"danish.jpg"},
                                      {id:'7',name:"Gladiator",Rate:3,image:'gladiator.jpg'},
                                      {id:'8',name:"Harry poter",Rate:1,image:'harry.jpg'} ,
                                      {id:'10',name:"500 days of summer",Rate:4,image:"days.jpg"},
                                      {id:'11',name:"The lord of the rings",Rate:5,image:'Lord.jpg'},
                                      {id:'14',name:"danish",Rate:1,image:"danish.jpg"},
                                      {id:'15',name:"more than blue",Rate:0,image:"more.jpg"}
                                      ]);

 const  [ajoutfilm ,setajoutfilm] = useState('false')
  console.log(ajoutfilm) ;
  
const [name,setName] =useState('') ;
const [rate,setRate] = useState('');
const [id,setId] =useState('');
const[nameImage,setNameImage]=useState('');

const [foundFilm ,setFoundFilm] = useState('') ;

const array = [0,0,0,0,0]


  function handleChange(e){

    setFilm(e.target.value) ;


  }

  function foundMovie()
  {

 

    const foud = ( movies.find((movie)=> (movie.name === film )) );

    (foud)? setFoundFilm(foud) : setFoundFilm({id:'0',name:"Not found",Rate:0,image:"notFound.jpg"})
    
         
       
   setFilm('') ;
       
     
  }




  function ajoutFilm(){

      setajoutfilm('true')
      
  }
  function ajouter(){
    console.log(name)
    setMovies([{id:id,name:name,Rate:rate,image:nameImage},...movies]) ; 
    console.log(movies)
    setajoutfilm('false') ;

  }

  const ajout = (

    <div style={{display:'flex' , flexDirection:'column',marginLeft:'12%',marginRight:'12%' }}>
      <h1 style={{color:'white',textAlign:'center',marginTop:'140px'}}>Add a new movie</h1>
      <input type="text" placeholder="id" style={{fontSize:'50px',textAlign:'center',margin:'5px',borderRadius:'9px'}} onChange={e => setId(e.target.value)} />
      <input type='text' placeholder="name of film"  style={{fontSize:'50px',textAlign:'center',margin:'5px',borderRadius:'9px'}} onChange={e => setName(e.target.value)}/>
      <input type="text" placeholder="Rate " style={{fontSize:'50px',textAlign:'center',margin:'5px',borderRadius:'9px'}} onChange={e => setRate(e.target.value)} />
      
      <input type="text" placeholder="image of movie " style={{fontSize:'50px',textAlign:'center',margin:'5px',borderRadius:'9px'}} onChange={e => setNameImage(e.target.value)} />
      
      <input type="submit" value='ADD' style={{fontSize:'50px',textAlign:'center',backgroundColor:'green',color:'white',marginBottom:'200px',marginTop:'30px',borderRadius:'9px'}} onClick={ajouter} />
    </div>
  ) ;


  
  function colredStar(e) {
         

         e.target.style.color = 'red' ;
         console.log(e.target.style.color)
  } 

  function coldrdStar(e){
    e.target.style.color ='red'
  }

  const arrStars = array.map((elmnt)=> <span style={{color:'white'}} className="fa fa-star"  onMouseOver={colredStar} onMouseOut={(e)=>e.target.style.color='white'} > </span> ) ;


  return (
    <div className="App" style={{backgroundColor:'black'}}>

      {(ajoutfilm==='true')?  <> {ajout} </> :
        <>
        <div style={{padding:'8px' ,display:'flex'  }}>
         <input type='text'  value={film} style={{width:'65%',height:'100px' ,fontSize:'20px'}} onChange={handleChange}/> 
             
             

         <input type='submit' value='search' style={{width:'8%',height:'105px',fontSize:'20px',marginRight:'1%'}} onClick={foundMovie}/>
         <div style={{fontSize:'20px' ,  display:'flex' , alignItems:'center' ,margin:'5px'}}> {arrStars} </div>
      
         <input type='submit' value='+' style={{width:'21%',height:'105px', backgroundColor:'green',color:'white',fontSize:'20px',borderRadius:'9px' }} onClick={ajoutFilm}/>

      </div>

     
      <div>
          {(foundFilm !== '') ? <div style={{color:'white',fontSize:'50px'}}> <Movie movie={foundFilm}/>  </div> : <List movies={movies}/>} </div>
 </>      
 
    }

      
    </div>
  );
}

export default Data;
