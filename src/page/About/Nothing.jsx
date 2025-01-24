/* eslint-disable react/prop-types */
function Nothing({ setContents }) {
  return (
    <div>
      <ul>
        <li onClick={() => setContents("Content")}>Content</li>
        <li onClick={() => setContents("Photo")}>Photo</li>
        <li onClick={() => setContents("Video")}>Video</li>
      </ul>
    </div>
  );
}

export default Nothing;
