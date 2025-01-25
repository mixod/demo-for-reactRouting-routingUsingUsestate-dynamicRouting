/* eslint-disable react/prop-types */
function AboutMain({ setContent }) {
  return (
    <div>
      <ul>
        <li onClick={() => setContent("apple")}>Apple</li>
        <li onClick={() => setContent("banana")}>Banana</li>
      </ul>
    </div>
  );
}

export default AboutMain;
