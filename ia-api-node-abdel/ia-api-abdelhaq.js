const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
const fs = require("fs");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

// Ruta para enviar mensajes a la API externa
app.post("/api/enviar-mensaje", (req, res) => {
  const mensajeEnviado = req.body.mensaje;

  // Realiza la solicitud a la API externa
  realizarSolicitud(mensajeEnviado, (mensajeRecibido) => {
    // Configura los encabezados CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    // Envía la respuesta de vuelta al cliente
    res.status(200).json(mensajeRecibido);

    // Guardar la conversación en un archivo de texto
    guardarConversacion(mensajeEnviado, mensajeRecibido.content);
  });
});

// Función para realizar la solicitud a la API externa
function realizarSolicitud(mensaje, callback) {
  const url =
    'https://ia-kong-dev.codingbuddy-4282826dce7d155229a320302e775459-0000.eu-de.containers.appdomain.cloud/api/llm/any-client';
  const requestData = {
    model: 'meta-llama/llama-2-70b-chat',
    uuid: '32rasdf3io2hop',
    message: {
      role: 'user',
      content: mensaje,
    },
    temperature: 0.05,
    origin: 'escueladata',
    tokens: 3000,
    folder: 'root',
    account: 'WatsonX-VN',
    user: '',
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': 'VVVAAACCCIIIAAA',
    },
  };

  // Realiza la solicitud HTTPS a la API externa
  const req = https.request(url, options, (res) => {
    let data = '';

    // Recibe la respuesta
    res.on('data', (chunk) => {
      data += chunk;
    });

    // Maneja la respuesta completa
    res.on('end', () => {
      try {
        // Parsea la respuesta JSON y la envía de vuelta al cliente
        const responseData = JSON.parse(data);
        callback(responseData);
      } catch (error) {
        console.error('Error al analizar la respuesta JSON:', error);
        callback({ error: 'Error al analizar la respuesta JSON' });
      }
    });
  });

  // Maneja errores de la solicitud
  req.on('error', (error) => {
    console.error('Error al enviar la solicitud:', error);
    callback({ error: 'Error al enviar la solicitud' });
  });

  // Envía los datos del cuerpo de la solicitud
  req.write(JSON.stringify(requestData));
  // Finaliza la solicitud
  req.end();
}

// Función para guardar la conversación en un archivo de texto
function guardarConversacion(mensajeEnviado, mensajeRecibido) {
  const conversacion = `Enviado: ${mensajeEnviado}\nRecibido: ${mensajeRecibido}\n============================================\n`;

  fs.appendFile('conversacion.txt', conversacion, (err) => {
    if (err) {
      console.error('Error al guardar la conversación:', err);
    } else {
      console.log('Conversación guardada correctamente.');
    }
  });
}

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Node.js escuchando en el puerto ${port}`);
});
