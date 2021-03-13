// ACCOUNTS LIST
class Account {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const mainAccount = new Account('DevGuys.pl', 'kontakt@devguys.pl', 'devguyspl');

const inputMail = document.getElementById('loginMail');
const inputPasswd = document.getElementById('loginPasswd');
const logBtn = document.getElementById('loginBtn');
const alert = document.getElementById('alert');
const addNewContent = document.getElementById('AddNewTask');
const content = document.getElementById('content');
let logged = false;

// Check Account, change visibiliti off class 

logBtn.addEventListener('click', (e) => {
    // e.preventDefault();
    if (inputMail.value == mainAccount.email){
        if (inputPasswd.value == mainAccount.password){
            // console.log('login i haslo dziala');
            logged = true;
            alert.textContent = (`Succes, you are logged as ${mainAccount.email}`);
            alert.classList.remove('alert-danger');
            alert.classList.add('alert-success');
            addNewContent.classList.toggle('show');
            content.classList.toggle('show');
        } else {
            // document.getElementById('loginAlert').textContent = ('Somethings wrong, try again!')
        }
    } else {
        // console.log('nope3');
    }
});

const checkLogin = () => {
    if (logged == true) {
        console.log('dupa');
    } else {
        console.log('cyc');
    }
}; 

logBtn.addEventListener('click', () => {
    checkLogin();
});

// creating and adding new content to DO-DO list

// const prepareElement = (elementType, className, contet) => {
//     const element = document.createElement(elementType);
//     element. = className;
//     element.innerHTML = content;
//     return element;
// }

const inputContent = document.getElementById('newTaskContent');
const btnAddNewTask = document.getElementById('btnAddNewTask');
let id = 0;

const addNewTask = () => {
    
    const container = document.getElementById('listTaskContainer');
    const trTable = document.createElement('tr');
    trTable.innerHTML = `
        <th scope="row">${id}</th>
        <td>${mainAccount.name}</td>
        <td>${inputContent.value}</td>
        <td><span class="badge rounded-pill bg-danger">HIGH</span></td>
        <td><span class="badge bg-primary">NEW</span></td>
    `;
    container.appendChild(trTable);
    
    // resultArea.appendChild(container);
}

btnAddNewTask.addEventListener('click', () => {
    id++;
    addNewTask();

})