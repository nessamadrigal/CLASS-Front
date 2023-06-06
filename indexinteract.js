let button = document.getElementById('btn');
let content = document.getElementById('content');

button.addEventListener('click', () => { 
    if (content.innerHTML == 'Goodbye.') {
content.innerHTML ='Hello.';
} else {
    content.innerHTML = 'Goodbye.'
}
});

document.getElementById('remove').addEventListener('click', () => 
{ content.parentNode.removeChild(content);
})