import { useParams } from "react-router-dom";

function Descs() {
  const params = useParams();
  if (isNaN(params.descs)) {
    alert("path not found");
  }
  return <div>Descs Apple</div>;
}

export default Descs;
