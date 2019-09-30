/* Para insipirarte para la implementacion del ZombieConductor podes usar
al ZombieCaminante de ejemplo. Tene en cuenta que tendra algunas diferencias.
Por ejemplo, la cantidad parametros que recibe su constructor. En ZombieConductor
no son exactamente los mismos parametros que en el objeto Enemigo, a diferencia
del ZombieCaminante que eran los mismos. */

var ZombieConductor = function(sprite, x, y, ancho, alto, velocidad, rangoMov, direccion) {
  /* Completar constructor a partir de Enemigo */
  Enemigo.call(this, sprite, x, y, ancho, alto, velocidad, rangoMov);
  ZombieCaminante.prototype = Object.create(Enemigo.prototype);
  ZombieCaminante.prototype.constructor = ZombieCaminante;
  /* No olvidar agregar la/s propiedad/es unicas de ZombieConductor necesarias */
  ZombieConductor.prototype.direccion = direccion;

}

/* Completar creacion del ZombieConductor */

/* Completar metodos para el movimiento y el ataque */

ZombieCaminante.prototype.mover = function() {


  if (direccion = 'h') {
    this.x += this.velocidad;
    this.y = 0;
  }
  if (direccion = 'v') {
    this.x = 0;
    this.y += this.velocidad;
  }
  
  if ((this.x < this.rangoMov.desdeX) || (this.x > this.rangoMov.hastaX)){
    this.velocidad *= -1;
  }

  if ((this.y < this.rangoMov.desdeY) || (this.y > this.rangoMov.hastaY)){
    this.velocidad *= -1;
  }

}
