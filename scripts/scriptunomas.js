let carrito = [];
let total = 0;

function agregarAlCarrito(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    const nombre = producto.querySelector('h3').innerText;
    const precio = parseFloat(producto.querySelector('p').innerText.replace('$', ''));

    carrito.push({ id, nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');

    listaCarrito.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.nombre} - $${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElement.innerText = total.toFixed(2);
}

function comprar() {
    alert('Gracias por su compra!');
    carrito = [];
    total = 0;
    actualizarCarrito();
}
