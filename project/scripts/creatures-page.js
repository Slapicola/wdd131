let creaturePage  = document.querySelector("#creature-facts");
const creatures = [
    {
        name: "Saurosuchus",
        period: "Triassic",
        fact: "With an estimated body length of 6 - 9 meters (20 - 30 ft.), Saurosuchus was a huge, crocodile-like predator of the Late Triassic Period. Saurosuchus had a mouth full of serrated teeth and armor-plated skin. It walked on four straight legs. It is highly likely that this fearsome reptile was an apex predator. Saurosuchus specimens have been found in northwestern Argentina.",
        imageUrl: "https://vignette.wikia.nocookie.net/dinosaurs/images/8/88/Sauro.jpg/revision/latest?cb=20161023031149"
    },
    {
        name: "Lystrosaurus",
        period: "Triassic",
        fact: "Lystrosaurus was a pig-sized dicynodont. Due to the powerful build of its forelimbs and the shape of its skull it is thought that Lystrosaurus was a burrower that may have excavated a new home every night. Like other dicynodonts, it had a beak-like mouth and two tusk-like teeth.",
        imageUrl: "images/lystrosaurus_2x1-optimized.webp"
    },
    {
        name: "Ichthyosaurus",
        period: "Triassic",
        fact: "Despite being a reptile, ichthyosaurus looked very much like today's sharks and dolphins. It had a streamlined, fish-like body, a large tail with which it propelled itself through the water, and a dorsal fin on its back that provided stability.",
        imageUrl: "images/ithchy-optimized.webp"
    },
    {
        name: "Plesiosaurus",
        period: "Jurassic",
        fact: "This fish and squid-eating marine reptile grew to lengths of between 3.5 and 5 m (11.5 and 16.5 ft.). Almost half of the animal’s total length was taken up by its long neck.",
        imageUrl: "images/Plesiosaurus.webp"
    },
    {
        name: "Dimorphodon",
        period: "Jurassic",
        fact: "Dimorphodon was a small pterosaur that lived in the Early Jurassic in what is now England. Its name means 'two types of teeth'. The name refers to the two types of teeth present in dimorphodons beaked mouth, which contained 30-40 small, pointed teeth and around 4 larger fang-like front teeth.",
        imageUrl: "images/dimorphodon-optimized.webp"
    },
    {
        name: "Karaurus",
        period: "Jurassic",
        fact: "Karaurus is one of the earliest-known salamanders. A specimen found in Kazakhstan is the first and only example of this Jurassic amphibian. Karaurus was around 19 cm (7.5 in.) in length. It had a wide head and short body, and may have preyed on aquatic invertebrates.",
        imageUrl: "images/Karaurus_skeleton-optimized.webp"
    },
    {
        name: "Quetzalcoatlus",
        period: "Cretaceous",
        fact: "The largest pterosaur was Quetzalcoatlus. It is one of the largest flying animals of all time, with a wingspan that may have reached 15.9 m (52 ft.). Quetzalcoatlus was discovered in Texas.",
        imageUrl: "images/Quetzalcoatlus-Pictures.webp"
    },
    {
        name: "Mosasaurus",
        period: "Cretaceous",
        fact: "Growing to an estimated length of 17 m (56 ft.), Mosasaurus was one of the largest-known mosasaurs. This fearsome marine predator hunted fish, ammonites, turtles and other marine animals near the surface of the ocean.",
        imageUrl: "images/Mosasaurus-optimized.webp"
    },
    {
        name: "Parasaurolophus",
        period: "Cretaceous",
        fact: "Each species of parasaurolophus had a unique crest structure. It is believed that the precise shape and colouring of the crest may have changed according to the age or sex of the animal.",
        imageUrl: "images/para.webp"
    }
]
createCreatureCard(creatures);

const triassicTab = document.querySelector("#Triassic");
triassicTab.addEventListener('click', () => {
    let triassicCreatures = creatures.filter(creature => creature.period == "Triassic");
    createCreatureCard(triassicCreatures);
})

const jurassicTab = document.querySelector("#Jurassic");
jurassicTab.addEventListener('click', () => {
    let jurassicCreatures = creatures.filter(creature => creature.period == "Jurassic");
    createCreatureCard(jurassicCreatures);
})

const cretaceousTab = document.querySelector("#Cretaceous");
cretaceousTab.addEventListener('click', () => {
    let cretaceousCreatures = creatures.filter(creature => creature.period == "Cretaceous");
    createCreatureCard(cretaceousCreatures);
})

function createCreatureCard(array) {
    creaturePage.innerHTML = "";
    array.forEach(fact => {
        creaturePage.innerHTML += `<section>
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