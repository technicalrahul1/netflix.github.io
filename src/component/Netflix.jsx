const Netflix = (props) =>{
    
    return(
       

        <>
            
            <div style={{marginLeft:"99px",border:"2px solid black",borderRadius:"10px",backgroundColor:"lightblue"}}>
               <img src={props.imgsrc} width="200px" height="140px" alter="...loading image"></img>
               <h3>netflix original series</h3>
               <h2>{props.title}</h2>
               <a href={props.ahref}  target="_blank">
               <button style={{cursor: "pointer",backgroundColor:"lightgreen"}}>watch now</button>
               </a>
            </div>     
        </>
    )
}
export default Netflix;