import React from 'react';

const Artist =()=>{
    return (
        <div>
        <h1>Kanye West</h1>
        <h2> Genre: Hip Hop, Progressive Rap, Pop Art, Pop </h2>
        <p>About Me: Ye, more commonly known by his birth name, is an American rapper, 
        record producer, and fashion designer. Born in Atlanta and raised in Chicago, 
        West gained recognition as a producer for Roc-A-Fella Records in the early 2000s, 
        producing singles for several artists and developing the "chipmunk soul" sampling style. </p>
        <h2>Albums:</h2>
        <Albums/>
        </div>
    )
};

const Albums =()=>{
    return (
        <div>
            <p>The College Dropout</p>
            <p>Late Registration</p>
            <p>Graduation</p>
            <p>808s and Heartbreak</p>
            <p>My Beautiful Dark Twisted Fantasy</p>
            <p>Watch The Throne</p>
            <p>Yeezus</p>
            <p>The Life of Pablo</p>
            <p>Kids See Ghosts</p>
            <p>Ye</p>
            <p>Jesus is King</p>
            <p>Donda</p>
        </div>
    )
};

export default Artist;