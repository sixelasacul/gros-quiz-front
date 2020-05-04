import React from "react";
import ThemeTile from "../ThemeTile/ThemeTile";

const themes = [
	{ name: "theme1" },
	{ name: "theme2" },
	{ name: "theme3" },
	{ name: "theme4" },
	{ name: "theme5" }
];

const ThemesList = () => {
	return themes.map((theme) => <ThemeTile theme={theme} />);
};

export default ThemesList;
