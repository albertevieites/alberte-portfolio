import barba from "@barba/core";
import barbaCss from "@barba/css";

// Tell Barba to use CSS plugin
barba.use(barbaCss);

// init Barba
barba.init({
	transitions: [
		{
			name: "home",
			beforeOnce() {
				console.log("beforeOnce");
			},
			once() {
				console.log("once");
			},
			afterOnce() {
				console.log("afterOnce");
			},
		},
		{
			name: "about",
			to: {
				namespace: ["about"],
			},
			leave() {},
			enter() {},
		},
		{
			name: "work",
			to: {
				namespace: ["work"],
			},
			leave() {},
			enter() {},
		},
		{
			name: "contact",
			to: {
				namespace: ["contact"],
			},
			leave() {},
			enter() {},
		},
		{
			name: "details",
			to: {
				namespace: ["details"],
			},
			leave() {},
			enter() {},
		},
	],
});
