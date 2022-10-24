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
			name: "fade",
			to: {
				namespace: ["fade"],
			},
			leave() {},
			enter() {},
		},
	],
});
