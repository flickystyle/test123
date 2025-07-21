import BlockManager from './BlockManager';
import './style.css';

const addButton = document.querySelector('.add');
const removeButton = document.querySelector('.remove');

const manager = new BlockManager('output-container', 3);
console.log(addButton);
addButton?.addEventListener('click', () => {
    manager.addBlock();
});

removeButton?.addEventListener('click', () => {
    manager.removeBlock();
});

console.log('wow');
