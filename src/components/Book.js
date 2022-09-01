import "../styles/Book.css";

const BookComponent = (props) => {
    
    return (
        <div className="col-3"> {/* take up 1/4th of the row space */}
            <div className="flip-card-container">
                <div className="flip-card-inner">
                    {/* border color = green if I've finished reading; else, the border color = yellow (in progress) */}
                    <div className="card flip-card-front" style={{borderColor: props.status === "Finished" ? "#198754" : "#eed202"}}>
                        <img className="book-img card-img-top img-fluid" src={props.bookLink} alt={props.bookName}></img>
                        <div className="status card-footer d-flex flex-column justify-content-center align-items-center"> {/* horizontally and vertically center status text */}
                            <div><b>{props.status}</b></div>
                        </div>
                    </div>
                    {/* border color = green if I've finished reading; else, the border color = yellow (in progress) */}
                    <div className="card flip-card-back" style={{borderColor: props.status === "Finished" ? "#198754" : "#eed202"}}>
                        <div className="card-header">
                            About
                        </div>
                        <div className="card-body">
                            {props.about}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
};

export default BookComponent;