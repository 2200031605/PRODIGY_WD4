import React from 'react'

const Home = () => {
    return (
        <section id="home" className='section'>
            <h2>Welcome to My Portfolio</h2>
            <p>Hi, I'm G.Pavani , a frontend developer passionate about creating user-fiendly and visually web applications. </p>
            <button onClick={() => window.scrollTo({ top: document.getElementById('projects').offsetTop, behavior: 'smooth' })}>View My Projects</button>

        </section>
    )
}

export default Home
