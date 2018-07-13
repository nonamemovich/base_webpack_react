import React from "react";
import ReactDom from "react-dom";
import style from "./Style.css"

const Index = () => {
	return (
		<div> 
			testing other pack 123123
			<Search />
		</div>
	);
};

const Search = () => {
  return <div className={style.primaryButton}>
           Hello Search Component :)
         </div>
}
ReactDom.render(
	<Index />, document.getElementById("index")
);