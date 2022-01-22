import React from "react";

function UserCard(props) {
    return (
        
            <div className="col mb-5">
                <div className="card justify-content-center align-items-center py-3">
                    <div className="img-container img-fluid">
                        <img src={props.image} alt="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}</h5>
                        <a href={`mailto:${props.email}`}>{props.email}</a>
                    </div>
                </div>
            </div>
        
    )
}
export default UserCard;