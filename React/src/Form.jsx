

export default function Form(props){



    return(

        <>

        <div className="container">

           
            <form action="">
             
            <input type="text" placeholder="Username" className="user"/>

            <input type="Password" placeholder="Password" />
            
            {props.value == 'false' ? <input type="Confirm Pasword" placeholder="Confirm Password"/> : null }
            

            <button>{props.value == 'false' ? 'login' : 'Register'}</button>

            </form>

            

        

        
        
        </div>

        </>
    );
}