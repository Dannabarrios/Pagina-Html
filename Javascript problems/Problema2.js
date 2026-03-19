class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre   = nombre;
    this.precio   = Number(precio);
    this.cantidad = Number(cantidad);
  }

  valorTotal() {
    return this.precio * this.cantidad;
  }

  info() {
    return `${this.nombre} — $${this.precio} x ${this.cantidad} uds = $${this.valorTotal()}`;
  }
}

class Inventario {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  valorTotalInventario() {
    return this.productos.reduce((total, p) => total + p.valorTotal(), 0);
  }
}

class AppInventario {
  constructor() {
    this.inventario       = new Inventario();
    this.btnAgregar       = document.getElementById('btnAgregar');
    this.msgAgregar       = document.getElementById('msgAgregar');
    this.tablaInventario  = document.getElementById('tablaInventario');
    this.totalInventario  = document.getElementById('totalInventario');
    this.seccionInventario = document.getElementById('seccionInventario');
  }

  renderTabla() {
    this.tablaInventario.innerHTML = '';
    this.inventario.productos.forEach(p => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${p.nombre}</td>
        <td>$${p.precio.toLocaleString()}</td>
        <td>${p.cantidad}</td>
        <td>$${p.valorTotal().toLocaleString()}</td>
      `;
      this.tablaInventario.appendChild(tr);
    });
    this.totalInventario.textContent =
      `💰 Valor total del inventario: $${this.inventario.valorTotalInventario().toLocaleString()}`;
    this.seccionInventario.style.display = 'block';
  }

  iniciar() {
    this.btnAgregar.addEventListener('click', () => {
      const nombre   = document.getElementById('nombreProd').value.trim();
      const precio   = document.getElementById('precioProd').value;
      const cantidad = document.getElementById('cantidadProd').value;

      if (!nombre || precio === '' || cantidad === '') {
        this.msgAgregar.textContent = '⚠ Completa todos los campos.';
        this.msgAgregar.className = 'resultado error';
        return;
      }

      const producto = new Producto(nombre, precio, cantidad);
      this.inventario.agregar(producto);
      this.renderTabla();

      this.msgAgregar.textContent = ` "${nombre}" agregado al inventario.`;
      this.msgAgregar.className = 'resultado ok';

      document.getElementById('nombreProd').value   = '';
      document.getElementById('precioProd').value   = '';
      document.getElementById('cantidadProd').value = '';
    });
  }
}

const app = new AppInventario();
app.iniciar();
