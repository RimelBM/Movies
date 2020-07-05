import React ,{useState} from 'react';
import List from  './componenets/list'

function App() {
  
  
  
  const [film,setFilm] =useState('') ;

  const[movies,setMovies] = useState([{id:'1',name:"Naruto",Rate:'99',image:'naruto.jpg'},
                                      {id:'2',name:"500 days of summer",Rate:'97',image:"days.jpg"},
                                      {id:'3',name:"The lord of the rings",Rate:'95',image:'Lord.jpg'},
                                      {id:'4',name:"one day",Rate:'90',image:'One.jpg'},
                                      {id:'5',name:"Braveheart",Rate:'91',image:'Braveheart.jpg'},
                                      {id:'6',name:"danish",Rate:'89',image:"danish.jpg"},
                                      {id:'7',name:"Gladiator",Rate:'89',image:'gladiator.jpg'},
                                      {id:'8',name:"Harry poter",Rate:'91',image:'harry.jpg'} ,
                                      {id:'10',name:"500 days of summer",Rate:'97',image:"days.jpg"},
                                      {id:'11',name:"The lord of the rings",Rate:'95',image:'Lord.jpg'},
                                      {id:'14',name:"danish",Rate:'89',image:"danish.jpg"},
                                      {id:'15',name:"more than blue",Rate:'79',image:"more.jpg"}
                                      ]);

 const  [ajoutfilm ,setajoutfilm] = useState('false')
  console.log(ajoutfilm) ;
  
const [name,setName] =useState('') ;
const [rate,setRate] = useState('');
const [id,setId] =useState('');
const[nameImage,setNameImage]=useState('');

  
  function handleChange(e){

    setFilm(e.target.value) ;


  }

  function foundMovie()
  {

        const found = movies.find((movie)=> (movie.name === film || (movie.Rate === film))) ;

        found ? setMovies(movies.filter((movie)=>  (movie.name === film || (movie.Rate === film)))) : setMovies([{id:0,name:"Not found",Rate:0,image:'notFound.jpg'}]) ;
             
           
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

  
  

  
  return (
    <div className="App" style={{backgroundColor:'black'}}>

      {(ajoutfilm==='true')?  <> {ajout} </> :
        <>
        <div style={{padding:'8px' }}>
         <input type='text'  value={film} style={{width:'75%',height:'100px' ,fontSize:'20px'}} onChange={handleChange}/> 
         <input type='submit' value='search' style={{width:'8%',height:'105px',fontSize:'20px',marginRight:'1%'}} onClick={foundMovie}/>
      
         <input type='submit' value='add movie' style={{width:'15%',height:'105px', backgroundColor:'green',color:'white',fontSize:'20px',borderRadius:'9px' }} onClick={ajoutFilm}/>

      </div>

     
      
      <List movies={movies}/>  </>
 
    }

      
    </div>
  );
}

export default App;
