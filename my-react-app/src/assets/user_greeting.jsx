function Usergreeting(props){


        if (props.isLoggedin){
            return(
            <div>
                Logged In
            </div>
            );
        }
        else{
            return(
                <>
                <h2>Please log in again</h2>
                </>
            );
        };
  
}

export default Usergreeting;