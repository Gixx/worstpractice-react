import Form from "./js/components/Form";
import ReactDOM from "react-dom";


const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
