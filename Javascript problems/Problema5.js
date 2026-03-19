class Vehiculo {
  constructor(placa, modelo) {
    this.placa    = placa;
    this.modelo   = modelo;
    this.velocidad = 0;
  }

  acelerar(cantidad) {
    this.velocidad += cantidad;
    return ` Acelerando — Velocidad actual: ${this.velocidad} km/h`;
  }

  frenar(cantidad) {
    this.velocidad -= cantidad;
    if (this.velocidad < 0) this.velocidad = 0;
    return ` Frenando — Velocidad actual: ${this.velocidad} km/h`;
  }

  detener() {
    this.velocidad = 0;
    return `Vehículo detenido — Velocidad: 0 km/h`;
  }

  estado() {
    if (this.velocidad === 0) return 'Detenido';
    if (this.velocidad <= 60) return 'Velocidad normal';
    return ' Alta velocidad';
  }
}

class AppVehiculos {
  constructor() {
    this.vehiculo      = null;
    this.btnRegistrar  = document.getElementById('btnRegistrar');
    this.btnAcelerar   = document.getElementById('btnAcelerar');
    this.btnFrenar     = document.getElementById('btnFrenar');
    this.btnDetener    = document.getElementById('btnDetener');
    this.msgRegistrar  = document.getElementById('msgRegistrar');
    this.estadoVehiculo = document.getElementById('estadoVehiculo');
    this.infoVehiculo  = document.getElementById('infoVehiculo');
    this.seccionControl = document.getElementById('seccionControl');
  }

  actualizarInfo() {
    this.infoVehiculo.innerHTML =
      `<strong>Placa:</strong> ${this.vehiculo.placa} &nbsp;|&nbsp;
       <strong>Modelo:</strong> ${this.vehiculo.modelo} &nbsp;|&nbsp;
       <strong>Estado:</strong> ${this.vehiculo.estado()}`;
  }

  mostrar(msg, tipo) {
    this.estadoVehiculo.textContent = msg;
    this.estadoVehiculo.className = 'resultado ' + tipo;
    this.actualizarInfo();
  }

  iniciar() {
    this.btnRegistrar.addEventListener('click', () => {
      const placa  = document.getElementById('placaVehiculo').value.trim();
      const modelo = document.getElementById('modeloVehiculo').value.trim();

      if (!placa || !modelo) {
        this.msgRegistrar.textContent = ' Completa todos los campos.';
        this.msgRegistrar.className = 'resultado error';
        return;
      }

      this.vehiculo = new Vehiculo(placa, modelo);
      this.seccionControl.style.display = 'block';
      this.actualizarInfo();
      this.msgRegistrar.textContent = ` Vehículo ${modelo} (${placa}) registrado.`;
      this.msgRegistrar.className = 'resultado ok';
    });

    this.btnAcelerar.addEventListener('click', () => {
      const inc = Number(document.getElementById('incremento').value) || 10;
      this.mostrar(this.vehiculo.acelerar(inc), 'ok');
    });

    this.btnFrenar.addEventListener('click', () => {
      const inc = Number(document.getElementById('incremento').value) || 10;
      this.mostrar(this.vehiculo.frenar(inc), 'ok');
    });

    this.btnDetener.addEventListener('click', () => {
      this.mostrar(this.vehiculo.detener(), 'ok');
    });
  }
}

const app = new AppVehiculos();
app.iniciar();
