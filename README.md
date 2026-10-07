# Cerebro motivado 3D · Laboratorio virtual

**Laboratorio docente e interactivo para enseñar neurociencia de la motivación y la emoción.** Permite explorar en 3D las estructuras cerebrales implicadas en la motivación, simular paso a paso procesos motivacionales cotidianos, separar *wanting* y *liking*, experimentar con variables, desmontar neuromitos y seguir la comunicación entre el cerebro y el cuerpo a través de las hormonas.

Creado para la asignatura **Emoción y Motivación** (Semanas 3 y 4: cerebro motivado, recompensa y regulación; necesidades fisiológicas). Basado en Reeve (2008, 2018) y Palmero et al. (2011).

> Simulación conceptual con finalidad docente. Las intensidades representan relaciones cualitativas, no actividad neuronal real.

---

## Módulos

| # | Módulo | Qué permite hacer |
|---|---|---|
| 01 | **Explorar el cerebro** | Anatomía 3D de referencia (FreeSurfer fsaverage) con familias anatómicas, vistas lateral, medial, inferior y superior, selección de hemisferio, capas y transparencia. Modo «Estructura aislada» y modo «Red». |
| 02 | **Simular un proceso** | Seis ejemplos (el pastel, esfuerzo al estudiar, curiosidad, señales aprendidas, resultado y predicción, nervios antes de un examen). Cada uno se recorre en ocho etapas, del estímulo a la conducta, o a través de sus tres conexiones clave. Incluye preguntas, decisiones y el indicador bottom-up / top-down. |
| 03 | **Recompensa** | Disociación entre *wanting*, *liking* y esfuerzo con controles didácticos. |
| 04 | **Experimentar** | Escenarios de clase y preguntas «¿qué pasa si…?» (regulación PFC, señal dopaminérgica, saliencia, saciedad, incertidumbre). |
| 05 | **Desmontar neuromitos** | «Dopamina = placer» y «amígdala = miedo». |
| 06 | **Cuerpo y hormonas** | Cuerpo en 3D (con esquema 2D alternativo) con hipotálamo, hipófisis, glándulas y órganos; once mensajeros químicos y siete casos de la Semana 4 (hambre, reservas, sed, sueño, estrés, afiliación y competición). |

## Uso en clase

- **Fondo claro para proyectar (por defecto).** El fondo claro mejora el contraste y la definición de las estructuras en el proyector. El botón **«Fondo oscuro / Fondo claro»** de la cabecera cambia el tema en cualquier momento; el navegador recuerda la elección.
- **Navegación de «Simular un proceso».** Los ejemplos y la línea de etapas («Del estímulo a la conducta») están encima del cerebro. Al desplazarte hacia abajo, la barra de etapas queda fija en la parte superior con accesos rápidos a los seis ejemplos y a los controles de reproducción.
- **Atajos de teclado.** En «Simular un proceso», las flechas **←** y **→** del teclado (o de un presentador inalámbrico) cambian de etapa.

## Ejecutar

La aplicación es estática (HTML, CSS y módulos de JavaScript), sin instalación ni compilación. Los módulos necesitan servirse por HTTP: no funciona abriendo `index.html` con doble clic.

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Abre <http://127.0.0.1:8765>. Three.js y los datos anatómicos están incluidos en el repositorio. Los enlaces bibliográficos requieren Internet. No se envían datos del alumnado: el progreso se reinicia al recargar.

**Publicación en GitHub Pages:** *Settings → Pages → Deploy from a branch → `main` / root*. La aplicación quedará disponible en `https://er-ufv.github.io/motivation-brain/`.

## Estructura

```
index.html          Página y estructura de la interfaz
styles.css          Estilos (tema oscuro base y diseño)
light.css           Tema claro para proyección
app.js              Estado, navegación y renderizado de los módulos
brain-viewer.js     Visor 3D del cerebro (Three.js)
body-viewer.js      Visor 3D del cuerpo (Three.js)
neurodata.js        Regiones, familias y conexiones
cases.js            Casos de «Simular un proceso»
learning.js         Recorridos de tres conexiones clave
body.js             Hormonas, órganos y casos de la Semana 4
references.js       Bibliografía y ayudas de cada panel
anatomy/            Datos anatómicos derivados de fsaverage y su licencia
vendor/             Three.js 0.180.0 y OrbitControls (MIT)
REVISION.md         Revisión neuroanatómica y docente, fuentes y límites
```

## Alcance y límites

El modelo usa una anatomía de referencia, no una anatomía individual ni un atlas clínico. VTA, SNc, hipotálamo (LH y VMH), hipófisis, ínsula, vmPFC y formación reticular/SARA son **marcadores aproximados**, identificados con asterisco. Las líneas son esquemas funcionales, no trayectorias reales de fibras. Los indicadores de 0 a 100 son escalas didácticas sin unidades: no son mediciones neuronales ni predicciones individuales. Consulta [REVISION.md](REVISION.md) para las correcciones, las fuentes y los límites.

## Créditos

- **Diseño docente, contenidos y prompts:** Eduar Ramírez.
- **Desarrollo de la aplicación:** Codex (OpenAI) y Claude (Anthropic), a partir de las indicaciones del autor.
- **Anatomía:** FreeSurfer fsaverage, distribuido por MNE, con topología fsaverage5 de Nilearn. Licencia y aviso de modificación en [`anatomy/LICENSE.txt`](anatomy/LICENSE.txt).
- **Visualización:** [Three.js](https://threejs.org) 0.180.0, licencia MIT ([`vendor/LICENSE.txt`](vendor/LICENSE.txt)).

## Licencia

© 2026 Eduar Ramírez. El contenido docente y el código propio de este proyecto se publican bajo la licencia **[Creative Commons Atribución-NoComercial 4.0 Internacional (CC BY-NC 4.0)](https://creativecommons.org/licenses/by-nc/4.0/deed.es)**.

Puedes **usar, copiar, compartir y adaptar** el material libremente, en clase o en otros proyectos, siempre que:

- **cites la autoría** («*Cerebro motivado 3D*, Eduar Ramírez, CC BY-NC 4.0») con un enlace a este repositorio y a la licencia, e indiques si has hecho cambios;
- **no lo utilices con fines comerciales.**

Los componentes de terceros mantienen sus propias licencias: Three.js (MIT) en `vendor/` y los datos anatómicos derivados de FreeSurfer en `anatomy/`. Texto completo en [LICENSE](LICENSE).
