
***
![Keepcoding](https://d2vvqscadf4c1f.cloudfront.net/078jf4zQNCjF2CsMPMmR_128x.png)

*Verónica Serna*  
<verserper@gmail.com>
***

## Enunciado
 
**_AVISO: La práctica de esta asignatura tendrá un alto grado de re-utilización en la práctica final de
Bootcamp, por tanto se recomienda al alumno que realice un buen análisis y organización del
código para que su re-utilización en la práctica final sea máxima._**

>La idea práctica final del Bootcamp será crear un sitio similar a medium.com, una plataforma
social de publicación de artículos de diferentes contenidos.
Se pretende poner en práctica las habilidades adquiridas durante los dos primeros módulos del
Bootcamp construyendo un prototipo del front-end responsive que formará parte de la
práctica final. Este front-end deberá adaptarse a terminales móviles, tablets y equipos de
escritorio.

Este front-end constará de las siguientes plantillas:

* Listado de artículos: donde se encontrará un listado de artículos en los cuales, haciendo click
en cada uno de ellos se accedería a su plantilla de detalle.
*  Detalle de un artículo: plantilla a la que se accedería tras hacer click en un artículo en concreto
del listado.

Como la finalidad de esta práctica es demostrar las habilidades de front-end, ambas plantillas
serán estáticas. Es decir, sea cual sea el artículo sobre el que se hace click en el listado de
artículos, siempre se mostrará el mismo artículo de detalle. Por tanto, los contenidos de los
artículos del listado tanto como los del artículo del detalle quedan completamente a elección del
alumno.

## Requisitos de todas las plantillas

Todas las plantillas deberán compartir una cabecera y un pie de página común.

En **la cabecera se deberá mostrar el nombre de la plataforma **(a elección del alumno), **un
input para poder realizar búsquedas** junto con un menú horizontal que contenga un **listado de
categorías temáticas** (la idea es que, en un futuro, un usuario pueda hacer click en una categoría
para ver sólo artículos de esa categoría, pero no es objetivo de esta práctica), un **enlace a la
plantilla de login** y un **enlace a la plantilla de registro**.

El menú deberá ser responsive, de manera que se adapte de la mejor manera posible a los
diferentes tipos de dispositivos para los que se desea dar soporte.

En el pie de página deberá mostrar el nombre de la plataforma (a elección del alumno) así como
un enlace que permita subir a la parte superior de la página. 
Se deja a elección del alumno la posibilidad de incorporar más elementos a la cabecera o al pie de
página.

## Requisitos de la plantilla de listado de artículos

En la plantilla de listado de artículos se deberá mostrar un listado de 10 artículos donde al
hacer click en un artículo se acceda a la plantilla de detalle de un artículo y cada artículo esté
compuesto de:

* Un título
* Una imagen o vídeo (opcional). Entre los 10 artículos que debe haber en esta plantilla de
listado, al menos uno de ellos deberá mostrar una imagen y al menos uno de ellos deberá
mostrar un vídeo.
* Un texto a modo de introducción del artículo
* Información del autor del artículo: se deberá mostrar el nombre del autor del artículo así como
una foto de perfil. Al menos dos de los artículos deberán mostrar una imagen de placeholder (es
decir, una imagen de sustitución simulando que el autor del artículo no hubiera subido ninguna
imagen como foto de perfil).
* La fecha y hora de publicación del artículo: esta fecha deberá mostrar el número segundos que
han pasado desde la fecha y hora de publicación en caso de haber sido hace menos de un
minuto, el número de minutos en caso de haber sido hace menos de una hora, el número de
horas en caso de haber sido hace menos de un día y el día de la semana (Lunes, Martes,
Miércoles) en caso de haberse publicado hace menos de una semana. En cualquier otro caso,
la fecha y hora al completo.
* Un elemento de iteración (icono o botón) que permita un usuario indicar que le gusta el artículo.
* El número de comentarios que tiene el artículo. Al hacer click en el número de comentarios, se
deberá cargar la plantilla de detalle de artículo mostrando directamente la zona de comentarios
del artículo.

Además, al final del listado de artículos deberá existir una navegación que permita el usuario
cargar artículos más antiguos o más recientes (dicho de otra manera: un sistema de paginación).

## FUNCIONALIDAD “ME GUSTA”

Como en el listado de artículos existe un botón de “me gusta”, se deberá implementar esa
funcionalidad utilizando Web Storage de manera que, cuando un usuario haga click en el botón de
“me gusta” de alguno de los artículos, esta información deberá quedar almacenada en el
navegador del usuario.

**NOTA**: En un futuro, esta funcionalidad almacenará la información de los artículos que gustan a
un usuario en un backend para que, sea cual sea el navegador o dispositivo que utilice el usuario,
esta información sea persistente estando almacenada en el servidor. Por tanto, en un futuro esta
funcionalidad se verá modificada por lo que se recomienda al alumno que tenga en cuenta esta
restricción a la hora del diseño de la lógica de la funcionalidad.

## Requisitos de la plantilla de detalle de un artículo

En la página de detalle de un artículo se deberán mostrar los mismos elementos que se
mostraban en un artículo del la plantilla del listado de artículos (título, imagen, etc.) pero con las
siguientes modificaciones:

* Se mostrará una imagen (no vídeo)
* Se mostrará un texto de varios párrafos en lugar del “texto a modo de introducción” (ya que se
trata del detalle de un artículo. En estos párrafos se deberá mostrar algunas palabras en
negrita, algunas en cursiva así como algún enlace.

Además de estos componentes, antes del pie de página se deberá mostrar un sistema de
comentarios que se detalla a continuación.

## SISTEMA DE COMENTARIOS

Se desea tener un sistema de comentarios en la plantilla de detalle de un artículo donde los
usuarios puedan dejar sus comentarios acerca de un artículo. Este sistema de comentarios
deberá mostrar la lista de comentarios y, al final, un formulario para que el usuario pueda dejar un
comentario.

Al tratarse de un prototipo, este sistema de comentarios se implementará utilizando SparREST
como backend para persistir los datos (al igual que se ha hecho en las clases del módulo).

**La lista de comentarios se cargará asíncronamente una vez el sistema de comentarios pasa
a ser visible en la pantalla** (de esta manera, el sistema cargará únicamente los comentarios
cuando el usuario los vaya a ver). Por tanto se tendrán que gestionar los posibles estados de
listado de comentarios (vacío o sin comentarios, cargando comentarios, error en la carga de
comentarios y éxito en la carga de comentarios).

Se deberá **implementar la funcionalidad de dejar un comentario** mediante un formulario donde
se solicite el nombre y apellidos del usuario que desea dejar el comentario, el e-mail y un campo
de texto donde el usuario podrá escribir su comentario (con un máximo de 120 palabras). Antes de
poder enviar el comentario, se deberán validar correctamente los datos. No se deberá permitir
enviar el formulario si alguno de los campos es incorrecto. Se deberán gestionar también los
posibles errores que pueda haber en la comunicación con el servidor (como que el servidor no
esté disponible) para mostrarlos debidamente al usuario).

**NOTA**: en un futuro, el sistema de comentarios se implementará con un backend diferente (no
SparREST). Por tanto, en un futuro esta funcionalidad se verá modificada por lo que se
recomienda al alumno que tenga en cuenta esta restricción a la hora del diseño de la lógica de la
funcionalidad.

## Consideraciones generales

Se desea que la optimización del front-end sea máxima, por lo que se espera que el sitio web
cargue de una manera rápida, realizando el menor número de peticiones HTTP posible así como
que todos los recursos que cargue el sitio web estén lo más optimizados posibles (esto incluye
hojas de estilo, archivos JavaScript e imágenes).

Se deberán cargar las imágenes optimizadas para cada dispositivo, por lo que se deberán tener
imágenes optimizadas a los diferentes tamaños de dispositivo.

El front-end deberá funcionar en los navegadores: Google Chrome, Mozilla Firefox e Internet
Explorer 11 o superior.

Se permite el uso de cualquier librería así como la elección de tecnologías a utilizar por parte del
alumno para la realización de la práctica.

Se recomienda el uso de algún sistema de automatización de tareas como Gulp o Grunt así como
el uso de preprocesadores de CSS tipo LESS o SASS. 
