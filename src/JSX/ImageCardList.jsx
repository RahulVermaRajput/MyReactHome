import ImageCard from "./ImageCard";
import mdata from "./MoviesData";

function ImageCardList()
{
    return(
        <>
         <h1 style = {{color:'white',textAlign:'center'}}>Use of Array Map Function for Rendering Multiple Components</h1>
            <div className="imagecardlist">
            
            {mdata.map(function(data){
                return <ImageCard key = {data.id} imgsrc={data.imgsrc} name = {data.name} link ={data.link}/>
            })}
            </div>
        <hr/>
        <h1 style = {{color:'white',textAlign:'center'}}>Use of Anonymous Array Map Function</h1>
            <div className="imagecardlist">
            {mdata.map((data) =>{
                return <ImageCard key = {data.id} imgsrc={data.imgsrc} name = {data.name} link ={data.link}/>
            })}
        </div>
            
        <hr/> 

        <h1 style = {{color:'white',textAlign:'center'}}>Use of Props</h1>
        <div className="imagecardlist">
            <br/>
            <ImageCard 
            key = {mdata[0].id}
            imgsrc = {mdata[0].imgsrc} 
            name = {mdata[0].name} 
            link = {mdata[0].link}/>

            <ImageCard 
            key = {mdata[1].id}
            imgsrc = {mdata[1].imgsrc} 
            name = {mdata[1].name} 
            link = {mdata[1].link}/>

            <ImageCard 
            key = {mdata[2].id}
            imgsrc = {mdata[2].imgsrc} 
            name = {mdata[2].name} 
            link = {mdata[2].link}/>

            <ImageCard 
            key = {mdata[3].id}
            imgsrc = {mdata[3].imgsrc} 
            name = {mdata[3].name} 
            link = {mdata[3].link}/>

            <ImageCard 
            key = {mdata[4].id}
            imgsrc = {mdata[4].imgsrc} 
            name = {mdata[4].name} 
            link = {mdata[4].link}/>
          


          </div>
            
            

          
        </>

    );
}

export default ImageCardList;