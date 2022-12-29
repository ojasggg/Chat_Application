import axios from "axios";
import React, { useEffect, useState } from "react";

import Avatar2 from "/assets/img/avatar2.jpg";

const InsideSidebarConversation = ({ currentUserId, conversation }) => {
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
      <div className="flex flex-row items-center p-2 cursor-pointer hover:bg-orange-500/40 rounded-xl transition">
        {/* avatar */}
        <div className="relative">
          <img
            src={
              userData?.profilePicture !== ""
                ? userData?.profilePicture
                : "/assets/img/default.png"
            }
            alt={userData?.username?.slice(0, 1)}
            className="avatar mb-0"
          />
          <div className="online"></div>
        </div>
        {/* User Message */}
        <div className="flex flex-1 justify-between ml-2">
          <div className="flex flex-col">
            <h3 className="h3">{userData?.username}</h3>
            <p className="p">Wanna travel to Japan tomorrow?</p>
          </div>

          <div className="p mr-2">Yesterday</div>
        </div>
      </div>
    </>
  );
};

export default InsideSidebarConversation;
