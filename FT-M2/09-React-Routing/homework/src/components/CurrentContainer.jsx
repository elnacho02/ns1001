import React from 'react';
import SearchBar from './SearchBar';
import CurrentCard from './CurrentCard';
export default function CurrentContainer(props) {
    return (
    
        <div className="recent-card-container">
            <div className="last-div">
                <SearchBar onSearch={props.onSearch}/>
            </div>
            <CurrentCard city={props.city} flag={false} onClose={props.onClose}/>
        </div>
    )
}
