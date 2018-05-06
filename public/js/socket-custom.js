       var socket = io();
       socket.on('connect', function() {
           console.log('Conectado al servidor');
       });
       // Escuchar información
       socket.on('disconnect', function() {
           console.log('Perdimos conexión con el servidor');
       });
       // Enviar información
       socket.emit('enviarMensaje', {
           usuario: 'Jose',
           mensaje: 'Hola Mundo'
       }, function(resp) {
           console.log('respuesta server:', resp);

       });
       // Escuchar información
       socket.on('enviarMensaje', function(mensaje) {
           console.log('Servidor:', mensaje);
       });