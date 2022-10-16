type CardMaker = {
	canvas: Canvas,
	filter: Filters[],
	//toolBar: Tools[],
};

type Canvas = {
	height: number, //800
	width: number, // 600
	color: string, // white
	objects?: obj[],
	filter?: string, // "blue"
};

type Object = {
	objType: string, //Text || Img || Art
	objId: number,
	height: number,
	width: number,
	X: number,
	Y: number,
	transparency: number,
};

type Text = Object & {
	content: string, //"Hello World!",
	color: string, //black
	font: string, // Impact
	fontSize: number,
};

type Image = Object & {
	source: string, //URL or the Path to the Image on PC
};

type Art = Object & {
	source: string, //D:\Frontend\CardMaker\Figures\triangle
	color: string, //red
};

type Filters = {
	colorFilter: string, // yellow
	transparency: number, //10
};

const blueFilter: Filters = {colorFilter: "blue", transparency: 10};
const yellowFilter: Filters = {colorFilter: "yellow", transparency: 10};
const defaultCanvas: Canvas = {height: 800, width: 600, color: "white", objects: [], filter: ""};
const defaultText: Text = {content: "", color: "black", font: "Arial", fontSize: 14};

//Canvas

function createCanvas({cardMaker, height, width}: {cardMaker: CardMaker, height?: number, width?: number}): CardMaker
{

};
function editBackgroundCanvas(cardMaker: CardMaker, color: string): CardMaker
{

};
function editFilterCanvas(cardMaker: CardMaker, filter: Filters): CardMaker
{

//Object

};
function editObjPosition(cardMaker: CardMaker, objId: number): CardMaker
{

};
function editObjSize(cardMaker: CardMaker, objId: number, height: number, width: number): CardMaker
{

};
function deleteObject(cardMaker: CardMaker, objId: number): CardMaker
{

};

//Text

function addTextObj(cardMaker: CardMaker, objId: number, font?: string, color?: string, content?: string): CardMaker
{

};

function editContentObjText(cardMaker: CardMaker, objId: number, content: string): CardMaker
{

};

function editColorObjText(cardMaker: CardMaker, objId: number, color: string): CardMaker
{

};

function editFontObjTxt(cardMaker: CardMaker, objId: number, font: string): CardMaker
{

};

function editFontSizeObjText(cardMaker: CardMaker, objId: number, fontSize: number): CardMaker
{

};

//Image

function addImageObj(cardMaker: CardMaker, objId: number, source: string): CardMaker
{

};

//Art

function addObjArt(cardMaker: CardMaker, objId: number, source: string, color?: string): CardMaker
{

};

function selectObj(cardMaker: CardMaker, objId: number): CardMaker
{

};
