const date = document.getElementById('date');
const amount = document.getElementById('amount');
const source = document.getElementById('source');
const list = document.getElementById('body-list');
const form = document.querySelector("form");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(source.value !== "" && amount.value !== "" && date.value !== ""){
        list.innerHTML += 
    `   <tr>
            <td>${amount.value}€</td>
            <td>${source.value}</td>
            <td>${date.value}</td>
            <td><button class="deleteBtn" onclick="delete_tr()">Supprimer</button></td>
        </tr>`

        source.value = '';
        amount.value = '';
        date.value = '';
    }
});

function delete_tr(){
    var deleteBtn = document.querySelector(".deleteBtn");
    if(deleteBtn.closestclassList.contains('checked')){
        deleteBtn.innerHTML = 'Terminé';
    }
    deleteBtn.addEventListener('click', (e) => {
        var parent = e.target.closest("tr");
        if(parent.classList.contains('checked')){
            parent.remove();
        } 
        else{
            parent.classList.add('checked');
        }
    })
    console.log('Coucou :) je veux te supprimer');
};
    // document.getElementById('st').innerHTML = source;
    // document.getElementById('at').innerHTML = amount;
    // document.getElementById('dt').innerHTML = date;