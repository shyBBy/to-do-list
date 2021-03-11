// ACCOUNTS LIST
// let accountMail = 'kontakt@devguys.pl';
// let accountPass = 'devguyspl';

class Account {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

const mainAccount = new Account('Main', 'kontakt@devguys.pl', 'devguyspl');

const inputMail = document.getElementById('loginMail');
const inputPasswd = document.getElementById('loginPasswd');
const logBtn = document.getElementById('loginBtn');
const alert = document.getElementById('alert');
const addNewContentBtn = document.getElementById('btnAddNewTask');
const content = document.getElementById('content');
let logged = false;

// Check Account, change visibiliti off class 

logBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputMail.value == mainAccount.email){
        if (inputPasswd.value == mainAccount.password){
            // console.log('login i haslo dziala');
            logged = true;
            alert.textContent = (`Succes, you are logged as ${mainAccount.email}`);
            alert.classList.remove('alert-danger');
            alert.classList.add('alert-success');
            addNewContentBtn.classList.toggle('show');
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
let dupa = checkLogin();

logBtn.addEventListener('click', dupa);
// checkLogin();

// creating and adding new content to DO-DO list
