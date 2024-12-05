import React from 'react';
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";
import { useDataLayerValue } from './DataLayer';

function Header({ spotify }) {
    const [{ user = { display_name: "Guest", images: [] } }] = useDataLayerValue();
    
    // Default avatar URL if none is provided by the user object
    const userAvatarUrl = user?.images?.[0]?.url || "https://www.example.com/default-avatar.png";

    return (
        <div className="header">
            <div className="header__left">
                <SearchIcon />
                <input
                    placeholder="Search for Artists, Songs or Podcasts"
                    type="text"
                />
            </div>
            <div className="header__right">
                <Avatar src={userAvatarUrl} alt={user?.display_name || "User"} />
                <h4>{user?.display_name || "Guest"}</h4>
            </div>
        </div>
    );
}

export default Header;
