/**
 * TIPS AND TRICKS FOR CONTRIBUTORS
 * 1) Memorize the layering of body parts. Hands are higher than arms, feet higher than legs
 * 2) Generally you will want to avoid lower pri items on the same layer sticking out on seams if your object is skintight.
 * In general, this is accomplished by having higher priority items cover more of the original
 */


AddModel({
	Name: "Bra",
	Folder: "Bra",
	Parent: "Bra",
	TopLevel: true,
	Categories: ["Bras"],
	Layers: ToLayerMap([
		{ Name: "Bra", Layer: "BraChest", Pri: -35,
			Invariant: true,
			InheritColor: "Cups",
			EraseAmount: 100,
			EraseSprite: "LaceChest",
			EraseLayers: ToMap(["CorsetBra"]),
		},
		{ Name: "BraRim", Layer: "BraChest", Pri: -34.9,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Rim",
			TieToLayer: "Bra",
		},
		{ Name: "BraUnder", Layer: "Bra", Pri: -35,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Under",
		},
		{ Name: "BraUnderRim", Layer: "Bra", Pri: -34.9,
			Invariant: true,
			NoOverride: true,
			InheritColor: "Rim",
			TieToLayer: "BraUnder",
		},
	])
});


AddModel({
	Name: "BraStraps",
	Folder: "Bra",
	Parent: "Bra",
	TopLevel: false,
	Categories: ["Bras"],
	Layers: ToLayerMap([
		{ Name: "Straps", Layer: "BraChest", Pri: 18,
			Invariant: true,
			MorphPoses: {Boxtie: "Tied", Crossed: "Tied", Front: "Tied", Wristtie: "Tied", Up: "Up"},
		},
	])
});

