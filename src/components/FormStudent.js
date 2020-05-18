import React, { useEffect, useState } from 'react';

import AnimationButton from './AnimationButton';

function FormStudent( { onSubmit } ) {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [github_username, setGithubUsername] = useState('');
    const [courses, setCourses] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            (err) => {
                console.log(err);
            },
            {
                timeout: 30000
            }
        )
    }, []);
    async function handleAddStudent(e){
        e.preventDefault();

        await onSubmit({
            github_username,
            longitude,
            latitude,
            courses
        });
        
        setCourses('');
        setGithubUsername('');
    }

    return (
        <aside>
            <strong>Cadastrar</strong>
            <form onSubmit={handleAddStudent}>
                <div className="input-block">
                    <label htmlFor="github_username">Usuário do GitHub</label><br />
                    <input
                        name="github_username"
                        id="github_username"
                        required
                        value={github_username}
                        onChange={e => setGithubUsername(e.target.value)}
                    /><br />
                </div>

                <div className="input-block">
                    <label htmlFor="courses" >Cursos</label><br />
                    <input
                        name="courses"
                        id="courses"
                        required
                        value={courses}
                        onChange={e => setCourses(e.target.value)}
                    ></input>
                </div>
                <div className="inline">
                    <div>
                        <label htmlFor="latitude">Latitude</label><br />
                        <input
                            type="number"
                            value={latitude}
                            name="latitude"
                            id="latitude"
                            required
                            onChange={e => setLatitude(e.target.value)}
                        ></input><br />
                    </div>
                    <div>
                        <label htmlFor="longitude" >Longitude</label><br />
                        <input
                            type="number"
                            value={longitude}
                            name="longitude"
                            id="longitude"
                            required
                            onChange={e => setLongitude(e.target.value)}
                        ></input>
                    </div>
                </div>

                <AnimationButton value="Salvar" />
            </form>
        </aside>
    );
}

export default FormStudent;