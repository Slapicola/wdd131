let plantPage = document.querySelector("#plant-facts");
const plants = [
    {
        name: "Seed Ferns",
        period: "Triassic",
        fact: "Pteridosperms had fern-like foliage, but reproduced with seeds (Selmeier, 1996, p. 142). Seed ferns exhibited both vine-like and arborescent forms.",
        imageUrl: "images/seed-fern-optimized.webp"
    },
    {
        name: "Monkey Puzzle Tree",
        period: "Triassic",
        fact: "The monkey puzzle tree may grow to a height of 45-50 metres (150-164 feet) with a diameter of 2.5 metres (8 feet) and may live for more than 700 years. Its spiral arrangement of rigid needle-pointed leaves along stiff branches inspired its common name, evoked by a comment about the challenge this prickly network might pose to climbing monkeys.",
        imageUrl: "images/Monkey-puzzle-tree-optimized.webp"
    },
    {
        name: "Caytonia",
        period: "Jurassic",
        fact: "These plants were thought to be small plants or small trees, growing in periodically, waterlogged habitats. They have fertile branch systems exhibiting cupules containing several seeds.",
        imageUrl: "images/caytonia-fossil-optimized.webp"
    },
    {
        name: "Horsetail",
        period: "Jurassic",
        fact: "Horsetails grow in moist, rich soils in all parts of the world except Australasia. Some species produce two kinds of shoots: those with conelike clusters (strobili) of spore capsules and those lacking such structures.",
        imageUrl: "images/horsetail.webp"
    },
    {
        name: "Barberry",
        period: "Cretaceous",
        fact: "Berberis, commonly known as barberry, is a large genus of deciduous and evergreen shrubs from 1-5 m tall, found throughout temperate and subtropical regions of the world.",
        imageUrl: "images/barberry-optimized.webp"
    },
    {
        name: "Calycanthaceae, Sweet Shrub",
        period: "Cretaceous",
        fact: "The Calycanthaceae (sweetshrubs or spicebushes) are a small family of flowering plants in the order Laurales. They are aromatic, deciduous shrubs growing to 2-4 m tall, except for Idiospermum, which is a large evergreen tree.",
        imageUrl: "images/calycanthus-optimized.webp"
    }
]
createPlantCard(plants);

const triassicTab = document.querySelector("#Triassic");
triassicTab.addEventListener('click', () => {
    let triassicPlants = plants.filter(plant => plant.period == "Triassic");
    createPlantCard(triassicPlants);
})

const jurassicTab = document.querySelector("#Jurassic");
jurassicTab.addEventListener('click', () => {
    let jurassicPlants = plants.filter(plant => plant.period == "Jurassic");
    createPlantCard(jurassicPlants);
})

const cretaceousTab = document.querySelector("#Cretaceous");
cretaceousTab.addEventListener('click', () => {
    let cretaceousPlants = plants.filter(plant => plant.period == "Cretaceous");
    createPlantCard(cretaceousPlants);
})

function createPlantCard(array) {
    plantPage.innerHTML = "";
    array.forEach(fact => {
        plantPage.innerHTML += `<section>
        <div>
        <h2>${fact.name}</h2>
        <p>Fact: ${fact.fact}</p>
        </div>
        <img src = ${fact.imageUrl} alt = "${fact.name} image" loading = lazy width = 520</img>
        </section>`
    });
}

const tabs = document.querySelectorAll('.menuItems');

tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		tabs.forEach(navTab => navTab.classList.remove('active'));
		this.classList.add('active');
	});
});