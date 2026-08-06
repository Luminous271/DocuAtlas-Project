import Button from "./Button.jsx";

function Upload({ files, setFiles }) {

    const handleUpload = () => {
        document.getElementById("fileInput").click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        // Prevent duplicate filenames (optional)
        if (!files.includes(file.name)) {
            setFiles(prevFiles => [...prevFiles, file.name]);
        }

        console.log("Uploaded:", file);
    };

    return (
        <div className="upload">
            <input
                id="fileInput"
                type="file"
                style={{ display: "none" }}
                onChange={handleFileChange}
            />
            
            <Button
                text="Upload Document"
                onClick={handleUpload}
            />
        </div>
    );
}

export default Upload;