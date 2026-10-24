# Plataforma de Eventos e Inscripciones

API REST para gestionar eventos e inscripciones. Esta es la **Pre-entrega 1** de Backend II: la base arquitectónica del proyecto, organizada por capas y lista para escalar.

**Temática elegida:** plataforma de eventos e inscripciones (con control de cupos, roles y notificaciones en próximas entregas).

## Tecnologías

- Node.js (módulos ESM)
- Express
- dotenv
- Mongoose (modelos base; la conexión a MongoDB llega en próximas entregas)

## Instalación

```bash
git clone <URL_DEL_REPOSITORIO>
cd proyecto-eventos
npm install
```

## Configuración de variables de entorno

Copiá el archivo de ejemplo y completá los valores:

```bash
cp .env.example .env
```

| Variable     | Descripción                                        |
|--------------|----------------------------------------------------|
| `PORT`       | Puerto donde corre el servidor (default 8080)      |
| `NODE_ENV`   | Entorno de ejecución (`development`, `production`) |
| `MONGO_URL`  | URL de conexión a MongoDB                          |
| `JWT_SECRET` | Secreto para firmar los JWT (próximas entregas)    |

## Cómo ejecutar

```bash
npm start      # producción
npm run dev    # desarrollo, con recarga automática
```

## Estructura de carpetas

```
proyecto-eventos/
├── src/
│   ├── app.js            # configura Express (no levanta el server)
│   ├── server.js         # levanta el servidor
│   ├── config/           # variables de entorno y configuración
│   ├── routes/           # definición de rutas
│   ├── controllers/      # reciben la request y devuelven la response
│   ├── services/         # lógica de negocio
│   ├── repositories/     # abstracción del acceso a datos
│   ├── dao/              # acceso directo a la fuente de datos
│   ├── models/           # modelos de Mongoose (User, Event)
│   ├── middlewares/      # middlewares (vacía por ahora)
│   └── utils/            # utilidades (vacía por ahora)
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

Flujo de una request: `routes → controllers → services → repositories → dao`.

## Rutas disponibles

| Método | Ruta                     | Descripción                                     | Respuesta |
|--------|--------------------------|-------------------------------------------------|-----------|
| GET    | `/api/health`            | Verifica que el servidor esté activo            | `200` `{ "status": "ok", "message": "Servidor activo" }` |
| GET    | `/api/events`            | Lista de eventos (vacía por ahora)              | `200` `{ "status": "success", "payload": [] }` |
| POST   | `/api/sessions/register` | Registro (estructura inicial, sin lógica)       | `501` |
| POST   | `/api/sessions/login`    | Login (estructura inicial, sin lógica)          | `501` |
| GET    | `/api/sessions/current`  | Usuario actual (estructura inicial, sin lógica) | `501` |
