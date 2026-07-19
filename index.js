const display = document.getElementById('display');
const deleteBtn= document.getElementById('delete');
deleteBtn.addEventListener('click', () => {
    display.value = display.value.slice(0, -1);
});
const clearBtn = document.getElementById('clear');
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');
        if (button.id === 'clear' || button.id === 'delete') {
            return;
        }
        if (value === '=') {
            try {
                display.value = eval(display.value);    
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += value;
        }
    });
});

clearBtn.addEventListener('click', () => {
    display.value = '';
});