
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
	objId: 3, 
	height: 30,
	width: 40,
	X: 10,
	Y: 15,
	transparency: 10,	
};	

const Text = {
	...Obj,
	objId: 3,
	font: "Arial", 
	fontSize: 16,
	color: "blue",
	content: "Hello",
};

const Picture = {
	...Obj,
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

function createCanvas(cardMaker, height, width)
{

};
function editBackgroundCanvas(cardMaker, color)
{

};
function editFilterCanvas(cardMaker, filter)
{

//Object

};
function editObjPosition(cardMaker, objId)
{

};
function editObjSize(cardMaker, objId, height, width)
{

};
function deleteObject(cardMaker, objId)
{

};

//Text

function addTextObj(cardMaker, objId, font, color, content)
{

};

function editContentObjText(cardMaker, objId, content)
{

};

function editColorObjText(cardMaker, objId, color)
{

};

function editFontObjTxt(cardMaker, objId, font)
{
};

function editFontSizeObjText(cardMaker, objId, fontSize)
{

};

//Image

function addImageObj(cardMaker, objId, source)
{

};

//Art

function addObjArt(cardMaker, objId, source, color)
{

};

function selectObj(cardMaker, objId)
{

};

