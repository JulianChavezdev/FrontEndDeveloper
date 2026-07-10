/**
 * GUÍA DE REFERENCIA RÁPIDA DE GSAP (GreenSock)
 * Archivo puramente descriptivo para almacenamiento local.
 * * Configuración recomendada en React:
 * import gsap from "gsap";
 * import { useGSAP } from "@gsap/react";
 * import { ScrollTrigger } from "gsap/ScrollTrigger";
 * import { TextPlugin } from "gsap/TextPlugin";
 * * gsap.registerPlugin(ScrollTrigger, TextPlugin);
 */

// ==========================================
// 1. GSAP .TO()
// Anima elementos desde su estado ACTUAL hasta un NUEVO estado.
// ==========================================
const referenciaGsapTo = () => {
  useGSAP(() => {
    gsap.to("#box", {
      x: 200,                // Traslación en eje X (equivale a transform: translateX)
      rotation: 360,         // Rotación en grados
      duration: 1.5,         // Duración en segundos
      ease: "power2.out",    // Curva de aceleración (Alineada a GSAP v3)
    });
  });
};

// ==========================================
// 2. GSAP .FROM()
// Anima elementos desde un NUEVO estado especificado hacia su estado ACTUAL (CSS original).
// Ideal para animaciones de entrada (fade-ins, herencias de diseño).
// ==========================================
const referenciaGsapFrom = () => {
  useGSAP(() => {
    gsap.from(".title", {
      opacity: 0,
      y: 50,                 // Viene desde 50px abajo
      duration: 1,
      ease: "power1.out",
    });
  });
};

// ==========================================
// 3. GSAP .FROMTO()
// Define explícitamente tanto el estado INICIAL (objeto 1) como el estado FINAL (objeto 2).
// Te da un control absoluto sin depender de los estilos CSS iniciales del navegador.
// ==========================================
const referenciaGsapFromTo = () => {
  useGSAP(() => {
    gsap.fromTo("#badge", 
      { opacity: 0, scale: 0.5 }, // Estado inicial (FROM)
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)"      // Efecto rebote hacia el final
      } 
    );
  });
};

// ==========================================
// 4. GSAP STAGGER (Escalonamiento)
// No es un método independiente, sino una propiedad dentro de los métodos anteriores.
// Introduce un retraso secuencial automático entre múltiples elementos que comparten el mismo selector.
// ==========================================
const referenciaGsapStagger = () => {
  useGSAP(() => {
    gsap.to(".list-item", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      // Se ejecuta uno tras otro con 0.2 segundos de diferencia
      stagger: 0.2, 
      
      // Configuración avanzada opcional:
      // stagger: {
      //   each: 0.2,
      //   from: "start" // "start", "center", "end", "edges"
      // }
    });
  });
};

// ==========================================
// 5. GSAP TIMELINE (Líneas de tiempo)
// Contenedor cronológico para encadenar múltiples animaciones. Evita el "callback hell".
// Por defecto, las animaciones se ejecutan una después de que termina la anterior.
// ==========================================
const referenciaGsapTimeline = () => {
  useGSAP(() => {
    // Inicialización con configuración global para toda la secuencia
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    tl.to("#element", { x: 100, duration: 1 })
      .to("#element", { y: 100, duration: 1 }) // Se ejecuta justo al terminar la anterior
      .to("#element", { rotation: 90, duration: 0.5 }, "+=0.5") // Espera 0.5s de delay (Position Parameter)
      .to("#element", { opacity: 0, duration: 0.5 }, "<");     // Se ejecuta AL MISMO TIEMPO que la anterior
  });
};

// ==========================================
// 6. GSAP SCROLLTRIGGER (Animación por scroll)
// Vincula el progreso de una animación directamente con el scroll del usuario en el viewport.
// Requiere: gsap.registerPlugin(ScrollTrigger);
// ==========================================
const referenciaGsapScrollTrigger = () => {
  useGSAP(() => {
    gsap.to(".section-hero", {
      opacity: 0,
      scale: 0.9,
      scrollTrigger: {
        trigger: ".section-hero",    // Elemento que dispara la animación
        start: "top top",            // "cuándo empieza": [Elemento] [Viewport]
        end: "bottom top",           // "cuándo termina": [Elemento] [Viewport]
        scrub: true,                 // Vincula la animación al scroll exacto (avanza y retrocede)
        pin: true,                   // Fija el elemento en pantalla mientras dura el trigger
        markers: false,              // Activar 'true' en desarrollo para debug visual de límites
      }
    });
  });
};

// ==========================================
// 7. GSAP TEXT (TextPlugin)
// Permite animar texto dinámicamente mediante efectos de máquina de escribir o reemplazo de caracteres.
// Requiere: gsap.registerPlugin(TextPlugin);
// ==========================================
const referenciaGsapText = () => {
  useGSAP(() => {
    gsap.to("#typing-text", {
      duration: 3,
      text: {
        value: "Este es el nuevo texto que reemplaza al original.",
        newClass: "text-highlight", // Opcional: añade una clase al nuevo texto
        delimiter: "",              // Anima carácter por carácter. Usa " " para palabra por palabra
      },
      ease: "none",                 // "none" simula mejor el ritmo constante de mecanografía
    });
  });
};