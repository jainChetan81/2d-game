import { scaleFactor } from "./constants";
import { k } from "./kaboomCtx";
import "./style.css";

k.loadSprite("spritesheet", "/public/spritesheet.png", {
	sliceX: 39, //number of frames in x direction
	sliceY: 31, //number of frames in y direction
	anims: {
		"idle-down": 936,
		"walk-down": {
			from: 936,
			to: 939,
			loop: true,
			speed: 8,
		},
		"idle-side": 935,
		"walk-side": {
			from: 975,
			to: 978,
			loop: true,
			speed: 8,
		},
		"idle-up": 935,
		"walk-up": {
			from: 1014,
			to: 1017,
			loop: true,
			speed: 8,
		},
	},
});

k.loadSprite("map", "/public/map.png");

k.setBackground(k.Color.fromHex("#31104"));

k.scene("main", async () => {
	const mapData = await (await fetch("/public/map.json")).json();
	const layers = mapData.layers;

	const map = k.make([k.sprite("map"), k.pos(0, 0), k.scale(scaleFactor)]);

	const player = k.make([k.sprite("spritesheet", { anim: "idle-down" })]);
});

k.go("main");
