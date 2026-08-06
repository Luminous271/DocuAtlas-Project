function FileList({ files }) {
    return (
        <div>
            <h2>Uploaded Documents</h2>
            <ul>
                {files.map((file, index) => (
                    <li key={index}>{file}</li>
                ))}
            </ul>
        </div>
    );
}

export default FileList;