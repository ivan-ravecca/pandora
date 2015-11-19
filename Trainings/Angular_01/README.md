Objetivo
Levantar una aplicación de AngularJS con una directiva que tome una nombre de usuario de GHitHub para obtener un json el cual tiene que ser mostrado en la vista. A su vez esta directiva tiene que aparecer dos veces en la vista, y ambas tienen que compartir una de sus variables con el controlador padre.

Lo que se busca
Tener una instalación mínima de AngularJS (versión 1.3 - no es necesario estilizarla)
Crear la directiva de tal manera que sea “levantada”como un atributo HTML
La directiva escribe un input el cual va a estar observando y al recibir el usuario válido, buscará hacer una llamada GET para obtener el json asociado.
Alguna información del json debe ser colocado en una variable en el scope de la directiva (que a su vez va a ser parte de los parámetros - doble binding)
A su vez el resultado debe ser emitido por la directiva.
El (único) controlador deberá incluir dos veces a ésta directiva:
En la primer inclusión deberá pasarle una variable la cual va a colocar en la vista (para desplegar el json)
En la segunda inclusión (en lugar de pasarle una variable a la directiva) el controlador va a estar escuchando lo que ésta emita y colocará el resultado en la vista del controlador



URL del servicio de GitHub: var url = "https://api.github.com/users/"+ user +"/repos";
