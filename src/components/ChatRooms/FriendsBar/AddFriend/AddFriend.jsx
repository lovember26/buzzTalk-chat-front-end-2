import { AddFriendForm, AddFriendWrapper } from "./AddFriend.styled";
import { ReactComponent as Search } from "../../../../images/search-friend.svg";
import NoFriends from "components/ChatRooms/NoFriends/NoFriends";
import { useEffect, useState } from "react";
import { ReactComponent as MoreIcon } from "../../../../images/more-gray.svg";

import { ReactComponent as MessageIcon } from "../../../../images/message-gray.svg";
import axios from "axios";
import { FriendsList, ItemWrapper } from "../AllFriends/AllFriends.styled";
import { addFriend } from "services/friendsApi";
export default function AddFriend() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
 
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await axios.get(
        `https://buzz-talk-api.onrender.com/api/accounts/users/?search=${query}`

      );
      // const { data } = await axios.get(
      //   "http://127.0.0.1:8000/api/accounts/users/"
      // );
      setUsers(data);
     
    
    };
    getUsers();

   

    // eslint-disable-next-line
  }, [query]);

  const handleQuery = ({ target }) => {
    setQuery(target.value.trim());
  };
  return (
    <AddFriendWrapper>
      <AddFriendForm action="submit">
        <Search />
        <input
          placeholder="You can add friends with their username"
          value={query}
          onChange={handleQuery}
        ></input>
        <button type="submit">Send a request</button>
      </AddFriendForm>
      {query && (
        <div>
           <FriendsList>
            {users && users.length > 0 ? (
              users.map((user, index) => (
              
    <ItemWrapper key={index}><div style={{display:"flex", gap:"13px", alignItems:"center"}}><img src={user.image} alt="avatar"></img><div><p>{user.username}</p><p style={{color:"#D9D9D9",fontSize: "10px",}}>offline</p></div></div>
    <div><MessageIcon style={{marginRight:"8px"}}/><MoreIcon/></div>
    </ItemWrapper>

  
              ))
            ) : (
              <p>No results</p>
            )}
          </FriendsList>
        </div>
      )}
    {!query && <NoFriends text={"Hello! Let’s find friends to talk!"} />}
    </AddFriendWrapper>
  );
}
