import videoFile from "../styles/EcoModa-Updated.mp4";

function EducationPage() {
    return (
        <div>
            <h1>Community Tips & Videos</h1>
            <video controls width="640" height="360">
                <source src={videoFile} type="video/mp4" />
            </video>
        </div>
    )
}

export default EducationPage;
