import kaboom from "kaboom";

export const k = kaboom({
	global: false,
	touchToMouse: true,
    canvas: document.getElementById("game") as HTMLCanvasElement,
    width: 640,
    height: 480,
    scale: 1,
    
});
