import React from 'react';

export default function StudentCard(props) {
    const { github_username, course_of_preference, avatar_url, bio } = props.properties;
    return (
        <li className="student-item">
            <header>
                <img src={ avatar_url } alt="profilePicture" />
                <div className="student-info">
                    <strong>{ github_username }</strong>
                    <span>{ course_of_preference.join(", ") }</span>
                </div>
            </header>
            <div className="student-content">
                <p>{ bio }</p>
                <a href={`https://github.com/${github_username}`}>Acessar perfil no GitHub</a>
            </div>
        </li>
    );
}