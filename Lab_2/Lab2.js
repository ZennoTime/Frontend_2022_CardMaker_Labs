
//Filters

const Filter1 = {  
	color: "blue",
	transparency: 15,
};

const Filter2 = {
	color: "red",
	transparency: 20,
};

const Filter3 = {
	color: "yellow",
	transparency: 50,
};

//Main

const Obj = {
	objType: null, 
	indexLayer: 3, 
	height: 30,
	width: 40,
	X: 10,
	Y: 15,
	transparency: 10,	
};	

const Text = {
	...Obj,
	font: "Arial", 
	fontSize: 16,
	color: "blue",
	fontWeight: "bold",
};

const Picture = {
	...Obj,
	resolution: "jpeg", 
	path: "dinosaur.jpg", 
};

const ArtObject1 = {	
	...Obj,
	color: "yellow",    
	path: "rectangle.js", 
};

const ArtObject2 = {	
	...Obj,
	//type: artObj,
	color: "green",
	path: "triangle.js", 
};

const ArtObject3 = {	
	...Obj,
	//type: artObj,	
	color: "black",
	path: "square.js", 
};

//CardMaker

const Canvas = {
	height: 800,
	width: 600,
	color: "white",
	objects: [Text, Picture, ArtObject1, ArtObject2, ArtObject3],
};

const CardMaker = {
	canvas: Canvas,
	filters: [Filter1, Filter2, Filter3],
	//Document,
	//selectObj(), 
	//selectArea(),
	//tools
};

