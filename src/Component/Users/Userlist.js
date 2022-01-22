import React, { useEffect, useState } from "react";
import './Userlist.scss';
import getUserList from "../../api/userApi";
import UserCard from './UserCard'


function Userlist() {
    const [userList, setUserList] = useState([]);
    const [loading, showLoading] = useState(false);

    useEffect(async () => {
        showLoading(true)
        const responseData = await getUserList();
        showLoading(false);
        // console.log(responseData);
        setUserList(responseData.data);
    }, [])



    return (
        <>
            {loading ? (
                <div className="loader-img">
                    <img src="https://i.gifer.com/origin/b4/b4d657e7ef262b88eb5f7ac021edda87.gif" alt="" />
                </div>
            ) : (
                <div className="container overflow-hidden">
                    <div className="row gx-5 py-3">
                        {userList.map((item) => (<UserCard
                            image={item.avatar}
                            name={item.first_name + ' ' + item.last_name}
                            email={item.email}
                        />))}

                    </div>

                </div>
            )}

        </>
    )
}
export default Userlist;