import axios from "axios";
import { useEffect, useState } from "react";

export default function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios("http://localhost:90/user/friends/" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src={
          user?.user.profilePictureUrl
            ? user.user.profilePictureUrl
            : PF + "noAvatar.png"
        }
        alt=""
      />
      <span className="conversationName">{user?.user.userId.firstName}</span>
      <span className="conversationName">{user?.user.userId.lastName}</span>
    </div>
  );
}
