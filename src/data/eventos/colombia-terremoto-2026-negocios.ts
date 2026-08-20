import type { Negocio } from "../tipos";
import fotoAntes from "../../assets/negocios/ejemplo/antes.jpg";
import fotoAhora from "../../assets/negocios/ejemplo/ahora.jpg";

/**
 * Fichas de negocio publicadas.
 *
 * De momento solo hay una de ejemplo, rotulada como tal. No inventamos negocios
 * afectados: presentar un comercio ficticio como real, en una web sobre una
 * catástrofe con cientos de muertos, sería fabricar un registro. En cuanto
 * llegue el primer negocio real y revisado, esta ficha de ejemplo se queda al
 * final de la lista o desaparece.
 *
 * El ejemplo usa un nombre arquetípico —el mismo que aparece en la portada— en
 * vez de uno plausible, precisamente para que no pueda confundirse con ningún
 * comercio real de Pereira. Y no lleva datos de contacto que puedan resolver en
 * la cuenta de nadie.
 */
export const negociosColombia2026: Negocio[] = [
  {
    slug: "ejemplo",
    esEjemplo: true,
    nombre: "La panadería de la esquina",
    actividad: "Panadería y repostería",
    localidad: "pereira",
    historia:
      "Llevaba dieciocho años abriendo a las cuatro y media de la mañana. Vendía pan, buñuelos y tortas por encargo, y daba trabajo a cuatro personas del barrio. Los sábados la fila llegaba hasta la esquina.",
    estado: {
      local: "grave",
      mercancia: "destruido",
      equipos: "grave",
      detalle:
        "Se cayó parte de la cubierta y la pared del fondo quedó agrietada. La producción del día se perdió entera. El horno grande está en pie pero sin revisar, y las dos vitrinas refrigeradas quedaron aplastadas.",
    },
    operando: true,
    dondeEstaAhora:
      "Sigue vendiendo por encargo desde la casa de su hermana y reparte a domicilio en el barrio por las mañanas.",
    necesita: [
      "Una vitrina refrigerada de dos puertas",
      "Revisión técnica del horno para saber si se puede usar",
      "Pedidos por encargo mientras el local no reabre",
      "Bandejas y moldes de panadería",
    ],
    contacto: {},
    fotos: [
      {
        src: fotoAntes,
        alt: "La panadería de la esquina antes del terremoto, con el mostrador lleno de pan y clientes atendidos por sus dueños.",
      },
      {
        src: fotoAhora,
        alt: "La panadería de la esquina tras el terremoto, con la pared agrietada, la vitrina rota y escombros sobre el mostrador.",
      },
    ],
    revisadaEl: "2026-08-14",
    consentimiento: true,
  },
];
