const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const bookList = document.querySelector('#list');

button.addEventListener('click', function() {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        li.textContent = input.value;
        deleteButton.textContent = "❌";
        
        li.append(deleteButton);
        bookList.append(li);
        
        deleteButton.addEventListener('click', function() {
            bookList.removeChild(li);
            input.focus();
        });
        
        input.value = '';
        input.focus();
    }
});
