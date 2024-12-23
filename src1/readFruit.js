import { useSelector } from "react-redux"

export default function ReadFruit(props) {
        const fruit = useSelector(data=>data.fruit)
    
    return (
        <div>
            <div  style={{border:"2px solid teal",margin:"auto",marginTop:"10px",padding:"20px"}}>
            <h1>Composant liste fruits</h1>
            <ul>
                {fruit.map((fruit,i)=><li key={i}>{fruit}</li>)}
            </ul>
            </div>
        </div>
    )
    
}