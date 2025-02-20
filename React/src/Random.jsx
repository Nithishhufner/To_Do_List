import greet from "./Greet"

export default function Random(){

    return (
    <>

        <div className="one">

        <h1 className="h1s">Joseph Vijay</h1>

        <img src={greet[0].url} alt="" />

        <div className="two">

        <p className="phon">{greet[0].phone}</p>

        <p className="mail">{greet[0].email}</p>

        </div> 

        </div>   

        <div className="one">

        <h1 className="h1s">Ajith Kumar </h1>

        <img src={greet[1].url} alt="" />

        <div className="two">

        <p className="phon">{greet[1].phone}</p>

        <p className="mail">{greet[1].email}</p>

        </div>  </div>               
        </>
       
        
 )

}