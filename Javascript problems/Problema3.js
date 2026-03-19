class Estudiante {
  constructor(nombre, id, nota) {
    this.nombre = nombre;
    this.id     = id;
    this.nota   = Number(nota);
  }

  aprobado() {
    return this.nota >= 6;
  }

  estado() {
    return this.aprobado() ? 'Aprobado' : 'Reprobado';
  }

  info() {
    return `${this.nombre} (${this.id}) — Nota: ${this.nota} — ${this.estado()}`;
  }
}

class RegistroEstudiantes {
  constructor() {
    this.estudiantes = [];
  }

  agregar(estudiante) {
    this.estudiantes.push(estudiante);
  }
}

class AppEstudiantes {
  constructor() {
    this.registro           = new RegistroEstudiantes();
    this.btnRegistrar       = document.getElementById('btnRegistrar');
    this.msgRegistrar       = document.getElementById('msgRegistrar');
    this.tablaEstudiantes   = document.getElementById('tablaEstudiantes');
    this.seccionEstudiantes = document.getElementById('seccionEstudiantes');
  }

  renderTabla() {
    this.tablaEstudiantes.innerHTML = '';
    this.registro.estudiantes.forEach(e => {
      const tr = document.createElement('tr');
      const badgeClass = e.aprobado() ? 'badge-estado badge-aprobado' : 'badge-estado badge-reprobado';
      tr.innerHTML = `
        <td>${e.nombre}</td>
        <td>${e.id}</td>
        <td>${e.nota}</td>
        <td><span class="${badgeClass}">${e.estado()}</span></td>
      `;
      this.tablaEstudiantes.appendChild(tr);
    });
    this.seccionEstudiantes.style.display = 'block';
  }

  iniciar() {
    this.btnRegistrar.addEventListener('click', () => {
      const nombre = document.getElementById('nombreEst').value.trim();
      const id     = document.getElementById('idEst').value.trim();
      const nota   = document.getElementById('notaEst').value;

      if (!nombre || !id || nota === '') {
        this.msgRegistrar.textContent = '⚠ Completa todos los campos.';
        this.msgRegistrar.className = 'resultado error';
        return;
      }

      if (Number(nota) < 0 || Number(nota) > 10) {
        this.msgRegistrar.textContent = '⚠ La nota debe estar entre 0 y 10.';
        this.msgRegistrar.className = 'resultado error';
        return;
      }

      const estudiante = new Estudiante(nombre, id, nota);
      this.registro.agregar(estudiante);
      this.renderTabla();

      this.msgRegistrar.textContent = ` ${nombre} registrado — ${estudiante.estado()}`;
      this.msgRegistrar.className = 'resultado ' + (estudiante.aprobado() ? 'ok' : 'error');

      document.getElementById('nombreEst').value = '';
      document.getElementById('idEst').value     = '';
      document.getElementById('notaEst').value   = '';
    });
  }
}

const app = new AppEstudiantes();
app.iniciar();
