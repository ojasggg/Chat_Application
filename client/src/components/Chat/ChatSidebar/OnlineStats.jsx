import axios from "axios";
import React, { useEffect, useState } from "react";

import Avatar2 from "/assets/img/avatar2.jpg";

const OnlineStats = ({ conversation, currentUserId, online }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const userId = conversation.members.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await axios.get(`/api/user/single/${userId}`);
        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getUserData();
  }, []);
  return (
    <>
      <div className="flex flex-col items-center cursor-pointer hover:bg-orange-500/40 rounded-xl transition">
        {/* avatar */}
        <div className="relative">
          <img
            src={
              userData?.profilePicture !== ""
                ? userData?.profilePicture
                : "/assets/img/default.png"
            }
            alt={userData?.username?.slice(0, 1)}
            className="avatar m-2 mb-0"
          />
          <div className={online ? "online" : "offline"}></div>
        </div>
        {/* user name */}
        <h6 className="h6 mt-1">{userData?.username}</h6>
      </div>
    </>
  );
};

export default OnlineStats;
