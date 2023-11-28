import { AddFriendForm, AddFriendWrapper } from "./AddFriend.styled";
import { ReactComponent as Search } from "../../../../images/search-friend.svg";
import NoFriends from "components/ChatRooms/NoFriends/NoFriends";
import { useEffect, useState } from "react";

import { fetchAllUsersService } from "services/userApi";
export default function AddFriend() {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(null);
  useEffect(() => {
    const getUsers = async () => {
      const page = 1;
      const data = await fetchAllUsersService(page);
      console.log(Math.ceil(data.count / 10));
      setUsers(data.results);
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
