# Task Tracker CLI
Este proyecto es una herramienta de línea de comandos (CLI) para gestionar tareas, desarrollada como parte de los proyectos de [roadmap.sh.](https://roadmap.sh/projects/task-tracker) Permite a los usuarios realizar un seguimiento de sus pendientes de manera eficiente directamente desde la terminal.

## Funcionalidades
- Persistencia de Datos: Utiliza el motor nativo de SQLite de Bun para un almacenamiento rápido y confiable.
- Operaciones CRUD:
  - Agregar nuevas tareas con IDs únicos (UUID).
  - Actualizar el título o el estado de las tareas.
  - Eliminar tareas existentes.
- Gestión de Estados: Soporte para múltiples estados como pendiente, en_progreso y finalizado.

## Tecnologías Utilizadas
- Bun: Runtime de JavaScript/TypeScript de alto rendimiento.
- TypeScript: Para un desarrollo seguro con tipado fuerte.
- Bun SQLite: API nativa para la manipulación de la base de datos sin dependencias externas pesadas.

## Aprendizajes Clave
Al realizar este proyecto, puse en práctica conceptos como:
1- El uso de clases y modelos en TypeScript para abstraer la lógica de negocio.
2- Implementación de Sentencias Preparadas (Prepared Statements) para optimizar consultas y prevenir inyecciones SQL.
3- Manejo de UUIDs para identificadores únicos y globales.
4- Empaquetado y distribución de herramientas CLI mediante el registro de paquetes.

### Instalación local
```bash
bun install
bun link
todo-cli
```

## Importante 
_Para esta version del CLI, solamente estara disponible en Bun._
