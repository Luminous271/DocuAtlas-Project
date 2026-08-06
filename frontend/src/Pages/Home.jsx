import { useState } from "react";

import Header from "../Components/Header";
import Footer from "../Components/Footer";
import UserGreeting from "../Components/UserGreeting";
import Upload from "../Components/Upload";
import FileList from "../Components/FileList";

function Home() {
    const [files, setFiles] = useState([]);

    return (
        <div className="page">
            <Header />

            <UserGreeting message="Home" />

            <div className="body">
                <Upload
                    files={files}
                    setFiles={setFiles}
                />

                <FileList files={files} />
            </div>

            <Footer />
        </div>
    );
}

export default Home;