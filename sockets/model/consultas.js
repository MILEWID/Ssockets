var arrayofObjects = [
    //inicio
    { preg: "hola", resp: "Bienvenido a tu asistente de ayuda psicológica. Cuéntame, cómo te sientes?", resp2: "Opciones: 1. Bien | 2. Mal | 3. Indiferente"  },
    //responde pregunta 1
    //hola
    { preg: "bien", resp:"Acudiría a consulta psicológica en caso de ser necesario?", resp2: "Opciones: 1. Si acudiría | 2. No acudiría"},
    { preg: "mal", resp: "Cuál es el problema por el que busca atención?", resp2: "Opciones: 1. Cansancio | 2. Ansiedad | 3. Depresión | 4. Problemas en casa"  },
    { preg: "indiferente", resp: "Cuál es el problema por el que busca atención?", resp2: "Opciones: 1. Cansancio | 2. Ansiedad | 3. Depresión | 4. Problemas en casa"  },
    //responde pregunta 2
    { preg: "cansancio", resp:"Esto ha causado interferencia en el desarrollo normal de su vida?", resp2: "Opciones: 1. Mucho| 2. Algo | 3. Casi nada| 4. Nada"},
    { preg: "ansiedad", resp: "Esto ha causado interferencia en el desarrollo normal de su vida?", resp2: "Opciones: 1. Mucho| 2. Algo | 3. Casi nada| 4. Nada"  },
    { preg: "depresion", resp: "Esto ha causado interferencia en el desarrollo normal de su vida?", resp2: "Opciones: 1. Mucho| 2. Algo | 3. Casi nada| 4. Nada"  },
    { preg: "problemas en casa", resp:"Esto ha causado interferencia en el desarrollo normal de su vida?", resp2: "Opciones: 1. Mucho| 2. Algo | 3. Casi nada| 4. Nada"},
    //responde pregunta 3
    { preg: "mucho", resp: "Cómo ha intentado solucionar el problema?", resp2: "Opciones: 1. Actvididades extra| 2. Tratar de olvidarme de ellos| 3. Hablar con un amigo | 4. Hablar con un familiar"  },
    { preg: "algo", resp: "Cómo ha intentado solucionar el problema?", resp2: "Opciones: 1. Actvididades extra| 2. Tratar de olvidarme de ellos| 3. Hablar con un amigo | 4. Hablar con un familiar"  },
    { preg: "casi nada", resp:"Ha recibio atención psicológica antes?", resp2: "Opciones: 1. Actvididades extra| 2. Tratar de olvidarme de ellos| 3. Hablar con un amigo | 4. Hablar con un familiar"},
    { preg: "nada", resp: "Acudiría a consulta psicológica en caso de ser necesario?", resp2: "Opciones: 1. Si acudiría | 2. No acudiría"  },
    //responde pregunta 4 o 5
    { preg: "actividades extras", resp: "Ha recibido atención psicológica antes?", resp2: "Opciones: 1. Si | 2. No"  },
    { preg: "tratar de olvidarme de ellos", resp:"Ha recibido atención psicológica antes?", resp2: "Opciones: 1. Si | 2. No"},
    { preg: "hablar con un amigo", resp: "Ha recibido atención psicológica antes?", resp2: "Opciones: 1. Si | 2. No"  },
    { preg: "hablar con un familiar", resp: "Ha recibido atención psicológica antes?", resp2: "Opciones: 1. Si | 2. No"  },

    { preg: "si", resp:"Acudiría a consulta psicológica en caso de ser necesario?", resp2: "Opciones: 1. Si acudiría | 2. No acudiría"},
    { preg: "no", resp: "Acudiría a consulta psicológica en caso de ser necesario?", resp2: "Opciones: 1. Si acudiría | 2. No acudiría" },

    //responde pregunta 6
    { preg: "si acudiría", resp: "En ese caso te recomiendo a la Dra. Ana Balseca. Ella es especialista en el servicio psicológico. Puedes agendar una cita con ella en el siguiente enlace: https://centromedico.espoch.edu.ec/horario. Recuerda que no estás solo! :) ", resp2:"También puedes contactarte con ella por WhatsApp usando el ícono de la izquierda"  },
    { preg: "no acudiría", resp: "Recuerda que nunca es malo pedir ayuda en caso de necesitarla. Si necesitas algo estamos a tu disposición. Ten un lindo día :)", resp2:"Gracias por utilizar Sofía-bot"  },
    { preg: "chupemos", resp: "De una!", resp2: "Ahorita, Mañana, Mi novia me pega"  },
];

module.exports ={arrayofObjects}