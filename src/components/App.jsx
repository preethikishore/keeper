import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
function App()
{
    return <div>
        <Header/>
        <Note heading="First Note" data="This is the First Content"/>
        <Note heading="Second Note" data="This is the Second Content"/>
        <Note heading="Third Note" data="This is the Thrd Content"/>
        <Footer/>
    </div>
}

export default App