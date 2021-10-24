    const form = document.querySelector('form');
    const code = document.querySelector('.code');
    const name = document.querySelector('.title');
    const count = document.querySelector('.count');
    const add = document.querySelector('.add');
    const order = document.querySelector('.order');
    /*const band = document.querySelector('.band');*/

    add.addEventListener('click', addItem);
    order.addEventListener('click', orderAll);
    let products = [];
    function addItem() {
        let product = {
            code:code.value,
            title:name.value,
            count:count.value
        };
        products.push(product);
    }

    function orderAll() {
        localStorage.setItem('products', JSON.stringify(products));
        const orderList = JSON.parse(localStorage.getItem('products'));
        for (let i = 0; i < orderList.length; i++) {
            console.log(orderList[i])
            /*let a = document.createElement('p');
            a.textContent = orderList[i].code;
            band.appendChild(a);
            let b = document.createElement('p');
            b.textContent = orderList[i].title;
            band.appendChild(b);
            let c = document.createElement('p');
            c.textContent = orderList[i].count;
            band.appendChild(c);*/
    }}
    form.onsubmit = function (e) {
        e.preventDefault();
}

