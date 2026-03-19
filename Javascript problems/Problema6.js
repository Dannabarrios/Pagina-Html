class Libro {
  constructor(titulo, autor) {
    this.titulo      = titulo;
    this.autor       = autor;
    this.disponible  = true;
  }

  prestar() {
    if (!this.disponible) return ' El libro ya está prestado.';
    this.disponible = false;
    return ` "${this.titulo}" prestado correctamente.`;
  }

  devolver() {
    if (this.disponible) return '⚠ El libro ya está disponible.';
    this.disponible = true;
    return ` "${this.titulo}" devuelto correctamente.`;
  }

  estadoTexto() {
    return this.disponible ? 'Disponible' : 'Prestado';
  }
}

class Biblioteca {
  constructor() {
    this.libros = [];
  }

  agregar(libro) {
    this.libros.push(libro);
  }
}

class AppBiblioteca {
  constructor() {
    this.biblioteca    = new Biblioteca();
    this.btnRegistrar  = document.getElementById('btnRegistrar');
    this.msgRegistrar  = document.getElementById('msgRegistrar');
    this.tablaLibros   = document.getElementById('tablaLibros');
    this.seccionLibros = document.getElementById('seccionLibros');
  }

  renderTabla() {
    this.tablaLibros.innerHTML = '';
    this.biblioteca.libros.forEach((libro, index) => {
      const tr = document.createElement('tr');
      const badgeClass = libro.disponible ? 'badge-estado badge-disponible' : 'badge-estado badge-prestado';
      const btnTexto   = libro.disponible ? 'Prestar' : 'Devolver';
      const btnClase   = libro.disponible ? 'btn rojo small' : 'btn verde small';

      tr.innerHTML = `
        <td>${libro.titulo}</td>
        <td>${libro.autor}</td>
        <td><span class="${badgeClass}">${libro.estadoTexto()}</span></td>
        <td></td>
      `;

      const btn = document.createElement('button');
      btn.textContent = btnTexto;
      btn.className = btnClase;
      btn.style.marginTop = '0';
      btn.addEventListener('click', () => {
        const msg = libro.disponible ? libro.prestar() : libro.devolver();
        this.msgRegistrar.textContent = msg;
        this.msgRegistrar.className = msg.includes('') || msg.includes('⚠')
          ? 'resultado error' : 'resultado ok';
        this.renderTabla();
      });

      tr.cells[3].appendChild(btn);
      this.tablaLibros.appendChild(tr);
    });

    this.seccionLibros.style.display = 'block';
  }

  iniciar() {
    this.btnRegistrar.addEventListener('click', () => {
      const titulo = document.getElementById('tituloLibro').value.trim();
      const autor  = document.getElementById('autorLibro').value.trim();

      if (!titulo || !autor) {
        this.msgRegistrar.textContent = '⚠ Completa todos los campos.';
        this.msgRegistrar.className = 'resultado error';
        return;
      }

      const libro = new Libro(titulo, autor);
      this.biblioteca.agregar(libro);
      this.renderTabla();

      this.msgRegistrar.textContent = ` "${titulo}" registrado en la biblioteca.`;
      this.msgRegistrar.className = 'resultado ok';

      document.getElementById('tituloLibro').value = '';
      document.getElementById('autorLibro').value  = '';
    });
  }
}

const app = new AppBiblioteca();
app.iniciar();
