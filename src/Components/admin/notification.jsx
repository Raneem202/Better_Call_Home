import React from 'react'
import img from "../../Components/images/Group11.png";

const Notification = ({item}) => {

    function convertDateToDays(dateString) {
        const dateParts = dateString.split('T')[0].split('-');
        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]) - 1; // months are zero-based
        const day = parseInt(dateParts[2]);
        
        const date = new Date(year, month, day);
        const today = new Date();
        
        const millisecondsInDay = 1000 * 60 * 60 * 24;
        
        const differenceInMilliseconds = today - date;
        const days = Math.floor(differenceInMilliseconds / millisecondsInDay);
        
        return days;
    }
    
    // Example usage:
    const dateString = "2024-03-28T23:47:21.5748111";
    const days = convertDateToDays(dateString);

    
    
  return (
    
      <div className=" w-100  mt-2 overflow-hidden popup-border">
            <div className=" popupp bord">  {item && item.userName ? item.userName:null}
              <img src={img} alt="img"></img>
              <div>
                <p className="pra fw-bold">
                    {item.userName}{" "}
                  <span className="fw-normal text-secondary">
                    {item.type} {" "} on your post
                  </span>
                </p>
                <p className="text-secondary">{days} days ago</p>
              </div>
            </div>
          </div>
    
  )
}

export default Notification
