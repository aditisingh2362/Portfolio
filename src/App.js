import React from 'react'
import useSticky from './hooks/useSticky.js'
import Navbar from './components/Navbar/Navbar'
import Main from './screens/Main.js'

function App() {
    const { isSticky, element } = useSticky()
    return (
        <>
            <Navbar sticky={isSticky} />
            <Main element={element} />
        </>
    )
}

export default App