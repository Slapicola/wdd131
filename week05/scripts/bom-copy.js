const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const bookList = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter)
});


button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    if (item.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = item;
        deleteButton.textContent = "❌";
        deleteButton.classList.add('delete');
        
        li.append(deleteButton);
        bookList.append(li);
        
        deleteButton.addEventListener('click', function() {
            bookList.removeChild(li);
            deleteChapter(li.textContent);
            input.focus();
        });
    }
}

function setChapterList(){
    localStorage.setItem('chapterList', JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('chapterList'));
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}
