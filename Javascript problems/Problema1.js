class CuentaBancaria {
  constructor(nombre, saldoInicial) {
    this.nombre = nombre;
    this.saldo  = Number(saldoInicial);
  }

  depositar(monto) {
    if (monto <= 0) return { msg: 'El monto debe ser mayor a 0.', tipo: 'error' };
    this.saldo += monto;
    return { msg: ` Depósito de $${monto} exitoso. Saldo actual: $${this.saldo}`, tipo: 'ok' };
  }

  retirar(monto) {
    if (monto <= 0) return { msg: 'El monto debe ser mayor a 0.', tipo: 'error' };
    if (monto > this.saldo) return { msg: ` Saldo insuficiente. Tienes disponible: $${this.saldo}`, tipo: 'error' };
    this.saldo -= monto;
    return { msg: ` Retiro de $${monto} exitoso. Saldo actual: $${this.saldo}`, tipo: 'ok' };
  }

  consultarSaldo() {
    return { msg: ` ${this.nombre} — Saldo disponible: $${this.saldo}`, tipo: 'ok' };
  }
}

class AppBanco {
  constructor() {
    this.cuenta       = null;
    this.btnCrear     = document.getElementById('btnCrear');
    this.btnDepositar = document.getElementById('btnDepositar');
    this.btnRetirar   = document.getElementById('btnRetirar');
    this.btnConsultar = document.getElementById('btnConsultar');
    this.resultado    = document.getElementById('resultado');
    this.msgCrear     = document.getElementById('msgCrear');
    this.infoCliente  = document.getElementById('infoCliente');
    this.seccionOps   = document.getElementById('seccionOps');
  }

  mostrar(el, msg, tipo) {
    el.textContent = msg;
    el.className = 'resultado ' + tipo;
  }

  actualizarInfo() {
    this.infoCliente.innerHTML =
      `<strong>Cliente:</strong> ${this.cuenta.nombre} &nbsp;|&nbsp; <strong>Saldo:</strong> $${this.cuenta.saldo}`;
  }

  iniciar() {
    this.btnCrear.addEventListener('click', () => {
      const nombre = document.getElementById('nombreCliente').value.trim();
      const saldo  = document.getElementById('saldoInicial').value;

      if (!nombre || saldo === '') {
        this.mostrar(this.msgCrear, ' Completa todos los campos.', 'error');
        return;
      }

      this.cuenta = new CuentaBancaria(nombre, saldo);
      this.seccionOps.style.display = 'block';
      this.actualizarInfo();
      this.mostrar(this.msgCrear, ` Cuenta de ${nombre} creada con $${this.cuenta.saldo}`, 'ok');
    });

    this.btnDepositar.addEventListener('click', () => {
      const monto = Number(document.getElementById('monto').value);
      const r = this.cuenta.depositar(monto);
      this.mostrar(this.resultado, r.msg, r.tipo);
      this.actualizarInfo();
    });

    this.btnRetirar.addEventListener('click', () => {
      const monto = Number(document.getElementById('monto').value);
      const r = this.cuenta.retirar(monto);
      this.mostrar(this.resultado, r.msg, r.tipo);
      this.actualizarInfo();
    });

    this.btnConsultar.addEventListener('click', () => {
      const r = this.cuenta.consultarSaldo();
      this.mostrar(this.resultado, r.msg, r.tipo);
    });
  }
}

const app = new AppBanco();
app.iniciar();
