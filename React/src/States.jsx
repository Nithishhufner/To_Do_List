



export default function States(){


    function value(){

        document.getElementById('root').style.textDecoration= 'line-through'
    }

    function change(){

        document.getElementById('root').style.textDecoration= null
    }

    return(

        <>

       <h1>Learnt Html</h1>

       <button onClick={value}>completed</button>

       <button onClick={change}>change</button>
    
    
       </>

    )
    
}