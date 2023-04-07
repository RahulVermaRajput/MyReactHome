import "../CSS/ImageCard.css";
function ImageCard(props)
{
    return(
        <div className="imagecard">
            <img src={props.imgsrc} alt="Avatar" style={{width:'100%',height:'300px'}} />
            <div className="imagecardinfo">
                <h3><b>{props.name}</b></h3> <br/>
                <a className="link" href={props.link} target="_blank">Watch Now on Hotstar</a>
            </div>
        </div>
    );
}
export default ImageCard;