import React,{ useState, useEffect } from 'react';
import axios from 'axios';


interface User {
  login: string;
  avatar_url: string;
  followers_url
: number;
}

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [users, setUsers] = useState<User[]>([]);
  const [resultSize, setResultSize] = useState<number>(0);

    useEffect(() => {
      const fetchUsers = async () => {
        try {
          const response = await axios.get(`https://api.github.com/search/users?q=${searchTerm}`);
          setUsers(response.data.items);
          setResultSize(response.data.total_count);
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
      const delaySearch = setTimeout(() => {
      
        if (searchTerm !== '') {
          fetchUsers();
        }
      }, 500);
      return () => clearTimeout(delaySearch);

    }, [searchTerm]);

  return (
 <div>
 <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', width: "100%", justifyContent: 'center', alignItems:"center"}}>
      <input
      style={{width: "300px", padding: "10px", margin: "10px", borderRadius: "25px", textAlign: "center", fontSize: "20px", color: "#017870"}}
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter GitHub username" 
      />
 </div>
      <h3 style={{color: "#017870", textAlign:"center"}}>{resultSize > 0 && `Results: ${resultSize}`}</h3>
      <div style={{display: "flex", flexDirection: "row", flexWrap: 'wrap', width: "100%", justifyContent: 'space-around', alignItems:"center"}}>
      {users.map((user) => (
        
        <div style={{display: "flex", flexDirection: "column", flexWrap: 'wrap', width: "300px", borderRadius:"25px", padding:"10px", margin:"10px", background: "#017870", justifyContent: 'space-around', alignItems:"center"}} key={user.login}>
          <img src={user.avatar_url} alt="Profile" style={{ width: 100, height: 100, borderRadius: '50%' }} />
          <h2>{user.login}</h2>
        </div>
      ))}
      </div>

    </div>
  );
};

export default Search;
