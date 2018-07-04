import React from "react";
import ReactDom from "react-dom";

const Index = () => {
	return <div> testing other pack </div>;
};

ReactDom.render(
	<Index />, document.getElementById("index")
);