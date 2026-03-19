class ProductoCarrito {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = Number(precio);
  }
}

class CarritoCompras {
  constructor() {
    this.items = [];
  }

  agregar(producto) {
    this.items.push(producto);
  }

  eliminar(index) {
    this.items.splice(index, 1);
  }

  total() {
    return this.items.reduce((sum, p) => sum + p.precio, 0);
  }
}

class AppCarrito {
  constructor() {
    this.carrito        = new CarritoCompras();
    this.btnAgregar     = document.getElementById('btnAgregar');
    this.msgAgregar     = document.getElementById('msgAgregar');
    this.listaCarrito   = document.getElementById('listaCarrito');
    this.totalCarrito   = document.getElementById('totalCarrito');
    this.seccionCarrito = document.getElementById('seccionCarrito');
  }

  renderCarrito() {
    this.listaCarrito.innerHTML = '';
    this.carrito.items.forEach((p, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<span>${p.nombre} — $${p.precio.toLocaleString()}</span>`;

      const btnEliminar = document.createElement('button');
      btnEliminar.textContent = 'Eliminar';
      btnEliminar.className = 'btn small';
      btnEliminar.addEventListener('click', () => {
        this.carrito.eliminar(index);
        this.renderCarrito();
      });

      li.appendChild(btnEliminar);
      this.listaCarrito.appendChild(li);
    });

    this.totalCarrito.textContent =
      `🛒 Total: $${this.carrito.total().toLocaleString()}`;
    this.seccionCarrito.style.display = 'block';
  }

  iniciar() {
    this.btnAgregar.addEventListener('click', () => {
      const nombre = document.getElementById('nombreProd').value.trim();
      const precio = document.getElementById('precioProd').value;

      if (!nombre || precio === '') {
        this.msgAgregar.textContent = '⚠ Completa todos los campos.';
        this.msgAgregar.className = 'resultado error';
        return;
      }

      const producto = new ProductoCarrito(nombre, precio);
      this.carrito.agregar(producto);
      this.renderCarrito();

      this.msgAgregar.textContent = ` "${nombre}" agregado al carrito.`;
      this.msgAgregar.className = 'resultado ok';

      document.getElementById('nombreProd').value = '';
      document.getElementById('precioProd').value = '';
    });
  }
}

const app = new AppCarrito();
app.iniciar();
