
const facts = [ 
    {
        imageUrl: "images/cretacious-forest-optimized.webp",
        randomFact: "Forests during the Cretaceous period were highly productive, according to a palaeontological analysis. - nature.com"

    },
    {
        imageUrl: "images/hatzegopteryx-giraffe.webp",
        randomFact: "The largest pterosaurs - the azhdarchids - were as tall as giraffes when on the ground."
        
    },
    {
        imageUrl: "images/arthropleura-art-optimized.webp",
        randomFact: "Over 300 million years ago, increased oxygen led to the evolution of massive insects, including 2-meter millipedes, dragonflies the size of owls and spiders the size of cats."
        
    },
    {
        imageUrl: "images/ankylosaurus-skull-optimized.webp",
        randomFact: "The armoured dinosaurs, the Ankylosaurids, were so well protected that some species had armoured eyelids."
        
    }
]


let imageArea = document.querySelector("#imagePlaceholder");
let factArea = document.querySelector("#fact");

const rand = Math.floor(Math.random() * facts.length);
let randomFact = facts[rand];

imageArea.innerHTML = `<img src="${randomFact.imageUrl}" alt="${randomFact.imageUrl.substring(11, 7)}" loading = lazy width = 768 height = 600</img>`
factArea.innerHTML = `<p>${randomFact.randomFact}<p>`

const tabs = document.querySelectorAll('.menuItems');

tabs.forEach(tab => {
	tab.addEventListener('click', function () {
		tabs.forEach(navTab => navTab.classList.remove('active'));
		this.classList.add('active');
	});
});


