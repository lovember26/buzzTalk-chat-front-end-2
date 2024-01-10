import { AddFriendForm, AddFriendWrapper } from "./AddFriend.styled";
import { ReactComponent as Search } from "../../../../images/search-friend.svg";
import NoFriends from "components/ChatRooms/NoFriends/NoFriends";
import { useEffect, useState } from "react";

import axios from "axios";
export default function AddFriend() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      // const { data } = await axios.get(
      //   "https://buzz-talk-api.onrender.com/api/accounts/users/"

      // );
      const { data } = await axios.get(
        "http://127.0.0.1:8000/api/accounts/users/"
      );
      setUsers(data.results);
      if (data.next) {
        const extraUsers = await axios.get(data.next);
        users.push(extraUsers.data.results);
        console.log(users);
      }
    };
    getUsers();
    const filteredNames = users.filter((user) =>
      user.username.toLowerCase().startsWith(query)
    );

    setFilteredUsers(filteredNames);

    // eslint-disable-next-line
  }, [query]);

  const handleQuery = ({ target }) => {
    setQuery(target.value);
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
          <ul>
            {filteredUsers && filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <li key={index}>{user.username}</li>
              ))
            ) : (
              <p>No results</p>
            )}
          </ul>
        </div>
      )}
      <NoFriends text={"Hello! Let’s find friends to talk!"} />
    </AddFriendWrapper>
  );
}
