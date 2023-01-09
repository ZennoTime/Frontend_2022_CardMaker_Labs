type CardMaker = {
	canvas: Canvas,
	filter: Filter,
	history: {
		currentIndex: 0,
		states: [],
	}
	//toolBar: Tools[],
};


type Size = {
	height: number,
	width: number,
}


type Position = {
	X: number,
	Y: number,
}

type SelectedArea = {
	size: Size,
	position: Position,
}

type MainObject = {
	objId: number,
	position: Position,
	size: Size,
	transparency: number,
	contentObj: TextObj | Art | Image,
};

type TextObj = {
	objType: 'text',
	content: string, //"Hello World!",
	color: string, //black
	font: string, // Impact
	fontSize: number,
	bold: boolean,
    italic: boolean,
	underline: boolean,
};

type Image = {
	objType: 'img',
    path: string
};

type Art = {
	objType: 'art',
	artType: string, 
	color: string, 
	fill: boolean 
};

type Canvas = {
	size: Size, //800X600
	color: string, // white
	object: MainObject[] | null,
	filter?: Filter, //"Red"
	listObj: number[] // Массив разных IDObj (Img Txt Art)
};

type Filter = {
	nameFilter: string,
	colorFilter: string, // yellow
	transparency: number, //10
};
 

const blueFilter: Filter = {nameFilter: "Blue", colorFilter: "blue", transparency: 10};
const whiteFilter: Filter  = {nameFilter: "White", colorFilter: "white", transparency: 10}
const yellowFilter: Filter = {nameFilter: "Yellow", colorFilter: "yellow", transparency: 10};
const defaultCanvas: Canvas = {size: {height: 800, width: 600}, color: "white", object: null, filter: whiteFilter, listObj: []}; //Как указать, чти
//const defaultText: TextObj = {objType:"text",objId: 3, size: {height: 20, width: 60}, position: {X: 10, Y: 10}, transparency: 10,  content: "", color: "black", font: "Arial", fontSize: 14};
const listFilter: Filter[] = [blueFilter, yellowFilter, whiteFilter];
//Canvas

function createCanvas(cardMaker: CardMaker, inputSize?: Size): CardMaker
{
	if (!inputSize){
		return{
		
			...cardMaker,
			canvas: defaultCanvas,
		};
	}
	else{
		return {
			...cardMaker,
			canvas: {
				object: null,
				size: inputSize,
				color: "white",
				listObj: []
			}
		}
	}
};

function editBackgroundCanvas(canvas: Canvas, newColor: string): Canvas
{
	return {
		...canvas,
		color: newColor,
	}
};
function editFilterCanvas(canvas: Canvas, newNameFilter: string): Canvas
{
	//let newFilter: Filter = listFilter[newNameFilter]
	return {
		...canvas,
		filter: listFilter.find(f => f.nameFilter === newNameFilter),

	}

};

//MainObject

function editObjPosition(canvas: Canvas, object: MainObject): Canvas
{

    return {
        ...canvas,
        listObj: [...canvas.listObj, object.objId]
    }

};
function editObjSize(object: MainObject, newSize: Size): MainObject
{
    return {
        ...object,
        size: newSize,
    }
};
function deleteObject(canvas: Canvas, object: MainObject): Canvas
{
	//let foo_object // Item to remove
	//this.foo_objects = this.foo_objects.filter(obj => obj !== foo_object);
    return {
        ...canvas,
        listObj: canvas.listObj.filter(element => element != object.objId)
    };
};

//Text

function addTextObj(): TextObj
{
    return {
    	objType: "text",
        color: 'black',
        content: 'example',
		font: "Impact", // Impact
		fontSize: 2,
        bold: false,
        italic: false,
        underline: false
    };
// В функцию прокидывать idObj не надо, генерируй новый id для нового объекта внутри функции.
};

function editContentObjText(text: TextObj, newContent: string): TextObj{
    return {
        ...text,
        content: newContent,
    }
}

function editObjTextBold(text: TextObj, newBold: boolean): TextObj{
    return {
        ...text,
        bold: newBold,
    }
}

function editObjTextItalic(text: TextObj, newitalic: boolean): TextObj{
    return {
        ...text,
        italic: newitalic,
    }
}

function editTextUnderline(text: TextObj, newUnderline: boolean): TextObj{
    return {
        ...text,
        underline: newUnderline,
    }
}

function editColorObjText(text: TextObj, newColor: string): TextObj
{
    return {
        ...text,
        color: newColor,
    }
};

function editFontObjTxt(text: TextObj, newFont: string): TextObj
{
	return {
        ...text,
        font: newFont,
    }
};

function editFontSizeObjText(text: TextObj, objId: number, newFontSize: number): TextObj
{
	    return {
       ...text,
       fontSize: newFontSize,
    }
};

//Image

function addImageObj(newPath: string): Image
{
	return {
        objType: "img",
        path: newPath
    };
// В функцию прокидывать idObj не надо, генерируй новый id для нового объекта внутри функции.
};

//Art

function addObjArt(content: string): Art
{
    return {
		objType: "art",
		artType: content, // circle | rectangle | car | cloud ....
		color: "black", //"green" || "#00FFFF"
		fill: false //true 
    };

// В функцию прокидывать idObj не надо, генерируй новый idObj для нового объекта внутри функции.
};

function fillArtObject(art: Art): Art{
	if (art.fill == false){
		return {
			...art,
			fill: true
		};
	}
	else{
		return {
			...art,
			fill: false 
		};
	}
}

// function selectObj(cardMaker: CardMaker, objId: number): CardMaker
// {
	
// };

// function CreateSelectArea(cardMaker: CardMaker, area: SelectedArea) {
	
// };
// function changeSelectedArea {

// };


// ВОЗМОЖНО У ОБЪЕКТА НУЖЕН ЕЩЁ ОДИН ПАРАМЕТР - ЭТО НОМЕР СЛОЯ  - ИНДЕКС В МАССИВЕ СЛОЁВ, ведь у каждого объекта свой слой, и при проверке наложения объектов
// друг на друга мы будем сравнивать их индексы в массиве слоёв, у кого индекс больше тот и будет выше, если объект с меньшим индексом перекрывает объект со 
// старшим индексом, то они просто обмниваются своими индексами. 

//ВОПРОСЫ: 
//Нужно ли в каждом объекте писать objType?
//Как сделать тип с выделением? 
//

/*Похоже объекты вообще не нужны, так как мы утсанвлеваием объект, а потом мы его вообще не меняем.
Так же мы выделяем область объектов только для того,чтобы удалить.
В истории, когда мы добавляем, новый   элемент мы удаляем, будущие события, относительно состояния, на котором
Мы сейчас.
ИСТОРИЯ 
[state1, state2, STATE3] - где БОЛЬШИЕ БУКВЫ, то состояние текущее (currentIndex = 3)
ctrl + z: 
[state1,STATE2, state3] currentIndex = 2
ctrl + y:
[state1, state2, STATE3]  currentIndex = 3

НОВЫЙ ПРИМЕР
[state1, state2, state3, state4, STATE5] currentIndex = 5
ctrl + z,  ctrl + z,  ctrl + z 

[state1,STATE2, state3, state4, state5] currentIndex = 2
добавляем новый объект, то у нас удаляются последующие states, а именно state3, state4, state5 
и создаётся новый state3 с этим объектом

[state1, state2, STATE3]  currentIndex = 3
*/