const table = document.querySelector('.myTable')
const orders = JSON.parse(localStorage.getItem('products'))
console.log(orders)

for (let x = 0; x < orders.length; x++) {
    console.log(orders[x]);
    console.log(orders[x].code);
    console.log(orders[x].count);
    console.log(orders[x].title);
    let row = table.insertRow(1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    cell1.innerHTML = orders[x].code;
    cell2.innerHTML = orders[x].title;
    cell3.innerHTML = orders[x].count;
}

