// Cuerpo y hormonas: esquema docente (no anatómico a escala) de la comunicación cerebro–cuerpo.
// Diseño docente y contenidos: Eduar Ramírez · Desarrollo: Codex (OpenAI) y Claude (Anthropic).

export const organs={
 brain:{name:'Encéfalo',x:170,y:66,side:'left',text:'El cerebro detecta necesidades, interpreta el entorno y dirige la conducta. En este esquema se destacan el hipotálamo, la hipófisis y el tronco encefálico.'},
 hypo:{name:'Hipotálamo',x:187,y:90,ly:84,side:'right',text:'Centro integrador cerebro–cuerpo. Detecta el estado interno (glucosa, agua, temperatura, hormonas) y controla el sistema nervioso autónomo y la hipófisis. Incluye circuitos laterales, ventromediales y arcuatos, entre otros. Hambre y saciedad no dependen de dos centros aislados.',brain:['hypo','lh','vmh']},
 pit:{name:'Hipófisis',x:188,y:107,ly:108,side:'right',text:'«Glándula maestra». La adenohipófisis libera ACTH, TSH y las gonadotropinas (hormona luteinizante y FSH). La neurohipófisis libera oxitocina y ADH, fabricadas en el hipotálamo.',brain:['pit']},
 stem:{name:'Tronco encefálico',x:192,y:128,side:'left',text:'Contiene la formación reticular (SARA), que regula la alerta y la vigilia, y recibe señales del cuerpo por el nervio vago.',brain:['sara']},
 thyroid:{name:'Tiroides',x:180,y:160,side:'left',text:'Glándula del cuello. Bajo control de la TSH (eje HPT) libera hormonas tiroideas que regulan el ritmo metabólico basal.'},
 heart:{name:'Corazón y vasos',x:197,y:236,side:'right',text:'El torrente sanguíneo transporta las hormonas. Los barorreceptores de los grandes vasos detectan la pérdida de volumen de sangre (sed volumétrica).'},
 liver:{name:'Hígado',x:146,y:298,side:'left',text:'Monitoriza la glucosa. Cuando cae, envía señales que contribuyen a iniciar el hambre (hipótesis glucostática, Mayer, 1952).'},
 stomach:{name:'Estómago',x:212,y:298,side:'right',text:'Vacío, produce ghrelina (señal de hambre). Lleno, su distensión envía una señal de saciedad por el nervio vago.'},
 adrenal:{name:'Glándulas suprarrenales',label:'Suprarrenales',x:210,y:338,side:'right',text:'Sobre los riñones. La corteza suprarrenal libera cortisol (eje HPA). La médula suprarrenal libera adrenalina y noradrenalina cuando se activa el sistema nervioso simpático.'},
 kidney:{name:'Riñones',x:150,y:360,side:'left',text:'Diana de la ADH: reabsorben agua y producen menos orina. Ante la pérdida de volumen liberan renina, que da lugar a la angiotensina II.'},
 gut:{name:'Intestino delgado',x:180,y:410,side:'right',text:'Al llegar la comida, sobre todo grasas y proteínas, libera colecistocinina (CCK), una señal de saciedad a corto plazo.'},
 fat:{name:'Tejido adiposo',x:122,y:442,side:'left',text:'Almacena energía y libera leptina en proporción a las reservas de grasa: informa al cerebro a largo plazo (hipótesis lipostática, punto fijo).'},
 gonads:{name:'Gónadas',x:180,y:480,side:'right',text:'Testículos u ovarios. Bajo el eje HPG producen hormonas sexuales, entre ellas testosterona (presente en todas las personas, en distinta cantidad).'}
};

const P={hypo:[187,90],pit:[188,107],neck:[180,150],stem:[190,132]};
const up=(o)=>[[organs[o].x,organs[o].y],[180,organs[o].y],P.neck,P.hypo];
const down=(o)=>[P.pit,P.neck,[180,organs[o].y],[organs[o].x,organs[o].y]];

export const hormones={
 ghrelin:{name:'Ghrelina',group:'Hambre y saciedad',color:'#ffb37a',kind:'Hormona peptídica',source:'stomach',route:up('stomach'),brain:['lh','hypo','insula'],
  chain:[['Se dispara','Con el estómago vacío y el paso de las horas sin comer.'],['Se forma en','Sobre todo en el estómago (también en el intestino).'],['Viaja por','La sangre, hasta el hipotálamo.'],['Actúa sobre','Circuitos hipotalámicos, incluidas neuronas AgRP/NPY del núcleo arcuato, que interactúan con otras áreas como el LH.'],['Efecto motivacional','Aparece la pulsión de hambre: la necesidad se vuelve una tensión consciente que dirige la atención hacia la comida.'],['Se frena','Al comer, sus niveles bajan.']],
  example:'Llevas toda la mañana sin comer y a las dos todo te recuerda a comida: «el que hambre tiene, con pan sueña».',week:'Semana 4 · 1.1 y 2.2'},
 leptin:{name:'Leptina',group:'Hambre y saciedad',color:'#ffe08a',kind:'Hormona peptídica',source:'fat',route:up('fat'),brain:['vmh','hypo'],
  chain:[['Se dispara','De forma continua, en proporción a la grasa almacenada.'],['Se forma en','El tejido adiposo.'],['Viaja por','La sangre, hasta el hipotálamo.'],['Actúa sobre','Varias poblaciones hipotalámicas, incluido el núcleo arcuato; contribuye a regular ingesta y gasto energético.'],['Efecto motivacional','Informa de que las reservas están cubiertas a largo plazo: saciedad lipostática y defensa del punto fijo.'],['Se frena','Si las reservas bajan (por ejemplo, con una dieta), baja la leptina y aumenta el hambre.']],
  example:'Tras semanas de dieta estricta, el hambre aumenta: el cuerpo defiende su «termostato de grasa».',week:'Semana 4 · 1.1 y 2.2'},
 cck:{name:'Colecistocinina (CCK)',group:'Hambre y saciedad',color:'#9be7c4',kind:'Hormona peptídica intestinal',source:'gut',route:[[organs.gut.x,organs.gut.y],[205,300],P.stem,P.hypo],brain:['vmh'],
  chain:[['Se dispara','Cuando llega comida al intestino, sobre todo grasas y proteínas.'],['Se forma en','El intestino delgado.'],['Viaja por','La sangre y, sobre todo, activando el nervio vago hacia el tronco encefálico.'],['Actúa sobre','Aferencias vagales y circuitos de saciación del tronco encefálico, en interacción con el hipotálamo.'],['Efecto motivacional','Contribuye a detener la comida antes de que los nutrientes lleguen a las células: saciedad anticipada.'],['Se frena','Su efecto es breve: señal de corto plazo.']],
  example:'Dejas de tener hambre a mitad del plato, mucho antes de haber absorbido los nutrientes.',week:'Semana 4 · 1.3 y 1.4'},
 orexin:{name:'Orexinas',group:'Hambre y saciedad',color:'#ffc3a0',kind:'Neuropéptido (actúa dentro del cerebro)',source:'hypo',route:[P.hypo,P.stem,[188,140]],brain:['lh','sara','vta'],
  chain:[['Se dispara','Cuando la ghrelina estimula el hipotálamo lateral, y durante la vigilia.'],['Se forma en','Neuronas del hipotálamo lateral (LH).'],['Viaja por','Axones dentro del encéfalo, no por la sangre.'],['Actúa sobre','Tronco encefálico (SARA), mesencéfalo y corteza.'],['Efecto motivacional','Doble papel: estimulan el apetito y mantienen la vigilia. Por eso con hambre cuesta dormir.'],['Se frena','Disminuyen con la saciedad y durante el sueño.']],
  example:'Con el estómago vacío a medianoche, te cuesta conciliar el sueño.',week:'Semana 4 · 1.2 y 3.2'},
 adh:{name:'ADH (vasopresina)',group:'Sed',color:'#7fc8ff',kind:'Hormona peptídica (neurohipófisis)',source:'pit',route:down('kidney'),brain:['hypo','pit'],
  chain:[['Se dispara','Cuando los osmorreceptores del hipotálamo detectan que las células pierden agua (sed osmométrica).'],['Se forma en','El hipotálamo; se almacena y libera en la neurohipófisis.'],['Viaja por','La sangre, hasta los riñones.'],['Actúa sobre','Los riñones: reabsorben agua y producen menos orina.'],['Efecto motivacional','A la vez, el hipotálamo envía una señal a la corteza que genera el deseo consciente de beber.'],['Se frena','Al corregirse la osmolalidad y el volumen circulante disminuye su liberación. Las señales orales y digestivas pueden reducir la sed antes de esa corrección.']],
  example:'Tras comer algo muy salado, tienes sed y orinas menos.',week:'Semana 4 · 2.1'},
 angio:{name:'Angiotensina II',group:'Sed',color:'#a0b4ff',kind:'Hormona peptídica (sistema renina–angiotensina)',source:'kidney',route:up('kidney'),brain:['hypo'],
  chain:[['Se dispara','Cuando baja el volumen de sangre (hipovolemia): sudor intenso, hemorragia o vómitos.'],['Se forma en','Una cascada: la renina renal escinde el angiotensinógeno hepático a angiotensina I; la enzima convertidora genera angiotensina II.'],['Viaja por','La sangre, hasta el cerebro.'],['Actúa sobre','Regiones del hipotálamo y próximas a él.'],['Efecto motivacional','Genera sed volumétrica, que se suma a la osmométrica: dos caminos hacia la sed (modelo de doble depleción, Epstein, 1973).'],['Se frena','Al recuperarse el volumen de sangre, lo que detectan los barorreceptores.']],
  example:'Después de correr una hora en verano sientes una sed intensa.',week:'Semana 4 · 2.1'},
 cortisol:{name:'Cortisol',group:'Estrés y activación',color:'#ff8f8f',kind:'Hormona esteroidea (glucocorticoide)',source:'adrenal',route:[P.hypo,P.pit,P.neck,[180,338],[organs.adrenal.x,organs.adrenal.y]],feedback:up('adrenal'),brain:['hypo','pit','amyg','hipp'],
  chain:[['Se dispara','Ante amenazas o estresores, y cada mañana antes de despertar (anticipación alostática).'],['Se forma en','Corteza suprarrenal, al final del eje HPA: hipotálamo (CRH) → hipófisis (ACTH) → suprarrenal.'],['Viaja por','La sangre; atraviesa la barrera hematoencefálica.'],['Actúa sobre','Casi todo el cuerpo y el cerebro (hipocampo, amígdala, corteza prefrontal).'],['Efecto motivacional','Moviliza energía (glucosa) para afrontar la demanda. Elevado de forma crónica, puede dañar la memoria declarativa y la salud.'],['Se frena','Retroalimentación negativa: el propio cortisol frena el hipotálamo y la hipófisis.']],
  example:'Antes de exponer un trabajo notas más energía; semanas de estrés continuo dejan cansancio y peor memoria (carga alostática).',week:'Semana 3 · 5.3; Semana 4 · 3.2 y 6'},
 catechol:{name:'Adrenalina y noradrenalina',group:'Estrés y activación',color:'#ff6b6b',kind:'Catecolaminas (hormona y neurotransmisor)',source:'adrenal',route:[P.stem,P.neck,[180,338],[organs.adrenal.x,organs.adrenal.y],[180,338],[180,236],[organs.heart.x,organs.heart.y]],brain:['amyg','hypo','sara'],
  chain:[['Se dispara','En segundos, ante una emergencia, al activarse el sistema nervioso simpático.'],['Se forma en','La médula suprarrenal (como hormonas) y neuronas (como neurotransmisores).'],['Viaja por','Nervios simpáticos hasta la suprarrenal y después la sangre.'],['Actúa sobre','Corazón, pulmones, músculos e hígado.'],['Efecto motivacional','Acelera el pulso y la respiración y libera glucosa: prepara la lucha o la huida.'],['Se frena','Con rapidez al pasar la emergencia; el sistema parasimpático recupera el equilibrio.']],
  example:'Un coche frena de golpe a tu lado: el corazón se dispara antes de que pienses nada.',week:'Semana 3 · 5.3'},
 oxytocin:{name:'Oxitocina',group:'Afiliación y competición',color:'#f7a8d8',kind:'Neurohormona peptídica (neurohipófisis)',source:'pit',route:[P.hypo,P.pit,P.neck,[180,236],[organs.heart.x,organs.heart.y]],brain:['hypo','pit','amyg','nacc'],
  chain:[['Se dispara','Con el contacto social, el apoyo, el parto y la lactancia.'],['Se forma en','El hipotálamo; se libera en la neurohipófisis y también dentro del cerebro.'],['Viaja por','La sangre y vías cerebrales.'],['Actúa sobre','Circuitos de afiliación, recompensa social y respuesta de estrés.'],['Efecto motivacional','Puede modular respuestas sociales y afiliación según la persona y el contexto. No produce automáticamente confianza ni determina la estrategia de «cuidar y entablar amistad».'],['Se frena','Depende del contexto; su efecto no es igual en todas las personas ni en todas las situaciones.']],
  example:'Tras un mal día llamas a una amiga en lugar de aislarte.',week:'Semana 3 · 5.3'},
 testo:{name:'Testosterona',group:'Afiliación y competición',color:'#c3a6ff',kind:'Hormona esteroidea (andrógeno)',source:'gonads',route:[P.hypo,P.pit,P.neck,[180,480],[organs.gonads.x,organs.gonads.y]],feedback:up('gonads'),brain:['hypo','pit','amyg'],
  chain:[['Se dispara','Bajo el eje HPG: hipotálamo (GnRH) → hipófisis (hormona luteinizante y FSH) → gónadas.'],['Se forma en','Testículos y ovarios (y en pequeña cantidad en las suprarrenales). Está presente en todas las personas.'],['Viaja por','La sangre.'],['Actúa sobre','Músculo y cerebro, incluidos amígdala e hipotálamo.'],['Efecto motivacional','Se asocia con la motivación de dominancia, la búsqueda de estatus competitivo y el deseo sexual.'],['Se frena','Retroalimentación negativa sobre hipotálamo e hipófisis.']],
  example:'Antes de una final, la motivación por ganar y mostrar competencia es alta.',week:'Semana 3 · 5.3'},
 thyroid:{name:'Hormonas tiroideas',group:'Metabolismo',color:'#8ee3d5',kind:'Hormonas yodadas (T3 y T4)',source:'thyroid',route:[P.hypo,P.pit,P.neck,[organs.thyroid.x,organs.thyroid.y]],feedback:[[organs.thyroid.x,organs.thyroid.y],P.neck,P.hypo],brain:['hypo','pit'],
  chain:[['Se dispara','Bajo el eje HPT: hipotálamo (TRH) → hipófisis (TSH) → tiroides.'],['Se forma en','La glándula tiroides.'],['Viaja por','La sangre.'],['Actúa sobre','Prácticamente todas las células.'],['Efecto motivacional','Regulan el ritmo metabólico basal, que influye en la energía disponible para actuar.'],['Se frena','Retroalimentación negativa sobre hipotálamo e hipófisis.']],
  example:'El nivel general de energía a lo largo del día depende, en parte, del ritmo metabólico.',week:'Semana 3 · 5.2'}
};

export const bodyCases={
 hunger:{icon:'🍽️',label:'Seis horas sin comer',concept:'Hambre a corto plazo: glucostática y retroalimentación negativa',steps:[
  {title:'1. Déficit: la necesidad aún no se siente',text:'Baja la glucosa en sangre. El hígado lo detecta. Es una necesidad fisiológica: un déficit biológico todavía inconsciente.',organs:['liver'],flows:[],brain:['hypo']},
  {title:'2. El estómago avisa: ghrelina',text:'El estómago libera ghrelina, cuyos niveles suelen aumentar antes de comer. Actúa sobre circuitos hipotalámicos, incluido el núcleo arcuato, conectado con el LH.',organs:['stomach','hypo'],flows:['ghrelin'],brain:['lh']},
  {title:'3. Pulsión: la necesidad se vuelve tensión consciente',text:'El LH libera orexinas y la ínsula registra la «sensación de vacío en la tripa». La pulsión (drive) dirige la atención hacia la comida y aporta energía para actuar.',organs:['hypo'],flows:['orexin'],brain:['lh','insula']},
  {title:'4. Conducta motivada',text:'Buscas comida y comes. El circuito VTA–accumbens aporta el esfuerzo para buscarla (fase apetitiva); después llega la fase consumatoria.',organs:['stomach'],flows:[],brain:['vta','nacc']},
  {title:'5. El freno: saciedad anticipada',text:'La distensión gástrica y señales intestinales como la CCK contribuyen a terminar la comida mediante vías vagales, troncoencefálicas e hipotalámicas. No todo converge directamente en el VMH ni es necesario completar la absorción.',organs:['stomach','gut'],flows:['cck'],brain:['vmh']}],
  question:'¿Por qué dejas de comer antes de que los nutrientes lleguen a las células?',options:['Porque el sistema nervioso anticipa: la distensión, la CCK y los bocados predicen la reposición.','Porque la glucosa de las células ya se ha normalizado.'],right:0,feedback:'La realimentación negativa señala la saciedad de forma prospectiva, mucho antes de que termine la absorción.'},
 setpoint:{icon:'⚖️',label:'Reservas a largo plazo',concept:'Hipótesis lipostática y punto fijo',steps:[
  {title:'1. La grasa informa',text:'El tejido adiposo libera leptina en proporción a las reservas de energía.',organs:['fat'],flows:['leptin'],brain:['hypo']},
  {title:'2. Saciedad a largo plazo',text:'La leptina informa a circuitos hipotalámicos, incluido el núcleo arcuato, sobre la disponibilidad energética. Su efecto depende también de la sensibilidad a esta señal.',organs:['fat','hypo'],flows:['leptin'],brain:['vmh']},
  {title:'3. Una dieta estricta',text:'Si la grasa disminuye, baja la leptina y sube la ghrelina: el cuerpo defiende su punto fijo (set-point) y aumenta el hambre.',organs:['fat','stomach'],flows:['ghrelin'],brain:['lh']},
  {title:'4. Los incentivos también cuentan',text:'La apariencia, el olor y la variedad de la comida activan la OFC y el circuito VTA–accumbens, y pueden motivar la ingesta aunque la leptina indique saciedad.',organs:[],flows:[],brain:['ofc','vta','nacc']}],
  question:'Tras semanas de dieta estricta, ¿por qué aumenta el hambre?',options:['Porque el cuerpo defiende su punto fijo: baja la leptina y sube la ghrelina.','Porque falta fuerza de voluntad.'],right:0,feedback:'La regulación lipostática actúa a largo plazo y corrige desviaciones del punto fijo, al alza o a la baja.'},
 thirst:{icon:'💧',label:'Sed después de correr',concept:'Doble depleción: sed osmométrica y volumétrica',steps:[
  {title:'1. Dos déficits a la vez',text:'Al sudar pierdes volumen de sangre (déficit extracelular) y aumenta la concentración de sales, con lo que las células pierden agua (déficit intracelular).',organs:['heart'],flows:[],brain:['hypo']},
  {title:'2. Vía osmométrica: ADH',text:'Los osmorreceptores del hipotálamo detectan la deshidratación celular. La neurohipófisis libera ADH y los riñones retienen agua.',organs:['hypo','pit','kidney'],flows:['adh'],brain:['hypo','pit']},
  {title:'3. Vía volumétrica: angiotensina II',text:'Cambios de presión y perfusión renal favorecen la liberación de renina. Esta inicia una cascada que produce angiotensina II y contribuye a estimular la sed.',organs:['heart','kidney'],flows:['angio'],brain:['hypo']},
  {title:'4. Pulsión de beber',text:'Las señales convergen en el hipotálamo. La ínsula aporta la sensación de boca seca: aparece la sed consciente.',organs:['hypo'],flows:[],brain:['hypo','insula']},
  {title:'5. Frenos en cadena',text:'Las señales orales y digestivas pueden reducir la sed antes de absorber el agua. Después, la osmolalidad y el volumen circulante permiten ajustar esa predicción; no hay un único freno celular.',organs:['stomach','kidney'],flows:[],brain:['hypo']}],
  question:'Bebes un vaso y la sed baja en segundos. ¿Se han rehidratado ya las células?',options:['Sí, el agua llega enseguida a las células.','No: los tragos y la distensión son frenos anticipatorios; la rehidratación celular tarda más.'],right:1,feedback:'La sed integra señales anticipatorias y del estado hídrico. La disminución inmediata al beber no demuestra que ya se haya corregido el déficit.'},
 allnighter:{icon:'🌙',label:'Trasnochar antes del examen',concept:'Interacción cortical–subcortical descendente',steps:[
  {title:'1. La señal de cansancio',text:'La vigilia prolongada aumenta la presión homeostática de sueño, con participación de adenosina y señales circadianas. No se explica solo por una disminución del SARA.',organs:['stem'],flows:[],brain:['sara']},
  {title:'2. La meta manda (top-down)',text:'Redes prefrontales ayudan a mantener la meta de estudiar y valorar costes y beneficios. Descansar no es una función exclusiva de la vmPFC, ni el control elimina la necesidad de sueño.',organs:['brain'],flows:[],brain:['pfc','vmpfc','sara']},
  {title:'3. El cuerpo recluta ayuda',text:'Los sistemas de alerta y las orexinas participan en sostener la vigilia. Si hay estrés pueden intervenir el eje HPA y las catecolaminas; no es una respuesta idéntica en toda persona que trasnocha.',organs:['hypo','pit','adrenal'],flows:['cortisol','catechol','orexin'],brain:['hypo','lh']},
  {title:'4. El coste',text:'La falta de sueño puede deteriorar atención, memoria y rendimiento. No se explica únicamente por exceso de activación ni por una U invertida universal.',organs:['adrenal'],flows:['cortisol'],brain:['pfc','hipp']}],
  question:'¿Qué tienen en común trasnochar y comer sin hambre?',options:['Nada: uno es sueño y el otro alimentación.','Una meta o incentivo puede competir con señales fisiológicas; intervienen varias redes y el resultado depende del contexto.'],right:1,feedback:'Es la misma estructura: la ruptura de la homeostasis por incentivos o metas (Semana 4, apartado 3).'},
 stress:{icon:'🔥',label:'Estrés crónico y alostasis',concept:'Homeostasis reactiva frente a alostasis proactiva',steps:[
  {title:'1. Anticiparse al día',text:'Antes de despertar, el cerebro eleva cortisol y glucosa para preparar el esfuerzo del día. Es alostasis: estabilidad a través del cambio.',organs:['adrenal'],flows:['cortisol'],brain:['hypo']},
  {title:'2. Un estresor agudo',text:'Una amenaza activa el eje HPA y el sistema simpático: cortisol y catecolaminas movilizan energía.',organs:['hypo','pit','adrenal'],flows:['cortisol','catechol'],brain:['amyg','hypo']},
  {title:'3. El freno del sistema',text:'El cortisol frena el hipotálamo y la hipófisis por retroalimentación negativa, y la respuesta vuelve a su nivel.',organs:['hypo','pit'],flows:['cortisol'],brain:['hypo','pit','hipp']},
  {title:'4. Cuando no se apaga',text:'Si la demanda es continua durante semanas o meses, el coste se acumula: carga alostática, con efectos sobre la memoria, la inmunidad y el sistema cardiovascular.',organs:['adrenal','heart'],flows:['cortisol'],brain:['hipp','amyg']},
  {title:'5. La valoración importa',text:'Ante el mismo estresor, valorar «amenaza» o «desafío» cambia la respuesta. Las redes prefrontales participan en esa valoración.',organs:['brain'],flows:[],brain:['pfc','vmpfc','amyg']}],
  question:'¿Qué diferencia la alostasis de la homeostasis clásica?',options:['La alostasis anticipa la demanda y ajusta la fisiología antes del desequilibrio.','La alostasis solo actúa después de que aparezca el déficit.'],right:0,feedback:'La homeostasis es reactiva; la alostasis añade un control predictivo con puntos de ajuste flexibles.'},
 bond:{icon:'🤝',label:'Buscar apoyo tras un mal día',concept:'Oxitocina y estrategia tend-and-befriend',steps:[
  {title:'1. Un día estresante',text:'Una discusión en el trabajo activa el eje HPA y se eleva el cortisol.',organs:['adrenal'],flows:['cortisol'],brain:['amyg','hypo']},
  {title:'2. Se libera oxitocina',text:'El hipotálamo produce oxitocina, que la neurohipófisis libera a la sangre y que también actúa dentro del cerebro.',organs:['hypo','pit'],flows:['oxytocin'],brain:['hypo','pit']},
  {title:'3. Cuidar y entablar amistad',text:'En lugar de luchar o huir, buscas contacto: llamas a alguien de confianza (Taylor et al., 2000).',organs:['brain'],flows:['oxytocin'],brain:['nacc','amyg']},
  {title:'4. El contacto modula el estrés',text:'El apoyo social puede atenuar la respuesta de estrés. Su efecto depende de la persona, la relación y el contexto.',organs:['adrenal'],flows:[],brain:['vmpfc','amyg']}],
  question:'¿La oxitocina es «la hormona del amor»?',options:['Sí: produce amor en cualquier situación.','No: favorece la afiliación y la confianza según el contexto, también participa en el parto y la lactancia, y no actúa sola.'],right:1,feedback:'Etiquetar una molécula con una emoción es un neuromito parecido a «dopamina = placer».'},
 compete:{icon:'🏆',label:'Una competición',concept:'Catecolaminas, eje HPG y motivación de logro',steps:[
  {title:'1. Antes de empezar',text:'La anticipación activa el sistema simpático: adrenalina y noradrenalina aceleran el pulso.',organs:['adrenal','heart'],flows:['catechol'],brain:['amyg','sara']},
  {title:'2. El eje HPG',text:'Hipotálamo (GnRH) → hipófisis (hormona luteinizante) → gónadas: testosterona.',organs:['hypo','pit','gonads'],flows:['testo'],brain:['hypo','pit']},
  {title:'3. Dominancia y estatus',text:'La testosterona se asocia con la búsqueda de estatus competitivo. La meta y la valoración de la situación siguen siendo decisivas.',organs:['brain'],flows:['testo'],brain:['amyg','pfc']},
  {title:'4. Después del resultado',text:'Algunos estudios observan cambios hormonales tras ganar o perder, con resultados variables. No es una relación mecánica.',organs:['gonads'],flows:[],brain:['nacc','ofc']}],
  question:'¿La testosterona explica por sí sola la competitividad?',options:['Sí, a más testosterona, más competitividad.','No: interactúa con metas, valoración, cultura y contexto.'],right:1,feedback:'Ninguna hormona determina por sí sola una conducta: biología, cognición y ambiente interactúan.'}
};

const pathD=pts=>'M'+pts.map(p=>p.join(',')).join(' L');

export function bodySVG(st){
 const c=st.tab==='cases'?bodyCases[st.bcase]:null,step=c?c.steps[st.bstep]:null;
 const flows=c?step.flows:[st.hormone];
 const lit=new Set(c?step.organs:[hormones[st.hormone].source,...(st.organ?[st.organ]:[])]);
 const flowSVG=flows.map(id=>{const h=hormones[id],d=pathD(h.route);const fb=h.feedback?`<path d="${pathD(h.feedback)}" class="flow-feedback" stroke="${h.color}"/>`:'';return `${fb}<path d="${d}" class="flow-path" stroke="${h.color}"/>${[0,1,2].map(i=>`<circle r="4.5" fill="${h.color}" class="flow-dot" opacity="0"><set attributeName="opacity" to="1" begin="${i*1.05}s"/><animateMotion dur="3.2s" begin="${i*1.05}s" repeatCount="indefinite" path="${d}"/></circle>`).join('')}`;}).join('');
 const organSVG=Object.entries(organs).map(([id,o])=>{const on=lit.has(id);const L=o.side==='left',tx=L?-8:368,lx=L?-2:362,anchor=L?'end':'start',ly=o.ly||o.y;return `<g class="organ-hit ${on?'on':''}" data-organ="${id}" tabindex="0" role="button" aria-label="${o.name}"><polyline points="${o.x},${o.y} ${L?Math.min(o.x-14,60):Math.max(o.x+14,300)},${ly} ${lx},${ly}" class="leader"/><circle cx="${o.x}" cy="${o.y}" r="${on?7:4.5}" class="dot"/><text x="${tx}" y="${ly+4.5}" text-anchor="${anchor}">${o.label||o.name}</text></g>`;}).join('');
 return `<defs><radialGradient id="skin" cx="50%" cy="35%" r="70%"><stop offset="0" stop-color="#20364d"/><stop offset="1" stop-color="#132536"/></radialGradient></defs>
 <g class="silhouette">
  <circle cx="180" cy="80" r="54"/>
  <path d="M162,130 L198,130 L200,172 L160,172 Z"/>
  <path d="M108,180 Q180,160 252,180 Q272,190 276,230 L290,380 Q292,400 280,404 L270,404 L258,300 L256,300 Q262,380 246,462 Q180,500 114,462 Q98,380 104,300 L102,300 L90,404 L80,404 Q68,400 70,380 L84,230 Q88,190 108,180 Z"/>
  <path d="M122,468 Q150,486 176,490 L172,742 L140,742 Z"/><path d="M238,468 Q210,486 184,490 L188,742 L220,742 Z"/>
 </g>
 <ellipse cx="180" cy="72" rx="42" ry="31" class="brain-shape"/>
 <path d="M190,98 Q192,118 186,140" class="stem-shape"/>
 <path d="M180,150 L180,480" class="vessel"/><path d="M180,236 L${organs.heart.x},${organs.heart.y}" class="vessel"/>
 <path d="M205,292 Q200,220 190,140" class="vagus"/>
 <path d="M${organs.heart.x-10},${organs.heart.y-9} q10,-10 20,0 q0,14 -10,22 q-10,-8 -10,-22z" class="organ heart"/>
 <path d="M122,290 q30,-16 50,2 q-6,20 -40,22 q-14,-6 -10,-24z" class="organ liver"/>
 <path d="M200,282 q26,-6 30,16 q2,24 -26,22 q-10,-4 -4,-14 q-8,-8 0,-24z" class="organ stomach"/>
 <ellipse cx="150" cy="362" rx="11" ry="17" class="organ kidney"/><ellipse cx="210" cy="362" rx="11" ry="17" class="organ kidney"/>
 <path d="M141,346 q9,-10 18,0z" class="organ adrenal"/><path d="M201,346 q9,-10 18,0z" class="organ adrenal"/>
 <rect x="150" y="392" width="60" height="40" rx="18" class="organ gut"/><path d="M160,402 q10,10 20,0 t20,0 M160,420 q10,-8 20,0 t20,0" class="gut-coil"/>
 <ellipse cx="122" cy="442" rx="20" ry="14" class="organ fat"/><ellipse cx="238" cy="442" rx="20" ry="14" class="organ fat"/>
 <circle cx="172" cy="480" r="6" class="organ gonad"/><circle cx="188" cy="480" r="6" class="organ gonad"/>
 <path d="M172,160 q8,-8 8,0 q0,-8 8,0 q0,10 -8,8 q-8,2 -8,-8z" class="organ thyroid"/>
 <circle cx="187" cy="90" r="5" class="organ hypo-dot"/><circle cx="188" cy="107" r="4" class="organ pit-dot"/>
 ${flowSVG}${organSVG}
 `;
}

const chip=(regions,id)=>`<button class="chip" style="--region-color:#${regions[id].color.toString(16).padStart(6,'0')}" data-select="${id}">${regions[id].short}</button>`;

export function bodyPanelHTML(st,regions){
 const tabs=`<div class="segmented process-tabs" role="tablist"><button role="tab" data-btab="hormones" class="${st.tab==='hormones'?'active':''}" aria-selected="${st.tab==='hormones'}">🧪 Hormonas</button><button role="tab" data-btab="cases" class="${st.tab==='cases'?'active':''}" aria-selected="${st.tab==='cases'}">🧭 Casos · Semana 4</button></div>`;
 if(st.tab==='cases'){
  const c=bodyCases[st.bcase],s=c.steps[st.bstep],last=st.bstep===c.steps.length-1,ans=st.answers[st.bcase];
  return tabs+`<p class="eyebrow">CASOS DE NECESIDADES FISIOLÓGICAS</p><div class="journey-cards">${Object.entries(bodyCases).map(([id,x])=>`<button data-bcase="${id}" class="${id===st.bcase?'active':''}" aria-pressed="${id===st.bcase}"><span class="case-icon" aria-hidden="true">${x.icon}</span><span>${x.label}</span></button>`).join('')}</div>
  <h2>${c.icon} ${c.label}</h2><p class="small-note">${c.concept}</p>
  <div class="journey-nav">${c.steps.map((x,i)=>`<button data-bstep="${i}" aria-current="${i===st.bstep?'step':'false'}">${i+1}</button>`).join('')}<span>Paso ${st.bstep+1} de ${c.steps.length}</span></div>
  <div class="journey-detail" aria-live="polite"><h3>${s.title}</h3><p>${s.text}</p>${s.flows.length?`<p class="small-note">Mensajeros activos: ${s.flows.map(f=>`<button class="hormone-link" data-hormone="${f}" style="--h:${hormones[f].color}">${hormones[f].name}</button>`).join(' ')}</p>`:''}<p class="small-note">En el cerebro 3D:</p><div class="region-chips">${s.brain.map(id=>chip(regions,id)).join('')}</div></div>
  <div class="journey-controls"><button data-bstep="${Math.max(0,st.bstep-1)}" ${st.bstep===0?'disabled':''}>← Anterior</button><button data-bstep="${Math.min(c.steps.length-1,st.bstep+1)}" ${last?'disabled':''}>Siguiente →</button></div>
  ${last?`<div class="question"><h3>Comprueba tu explicación</h3><p>${c.question}</p>${c.options.map((x,i)=>`<button data-banswer="${i}" aria-pressed="${ans===i}">${x}</button>`).join('')}${ans!==undefined?`<p role="status"><b>${ans===c.right?'Bien razonado.':'Revisa la explicación.'}</b> ${c.feedback}</p>`:''}</div>`:''}`;
 }
 const h=hormones[st.hormone],groups=[...new Set(Object.values(hormones).map(x=>x.group))];
 const organCard=st.organ?`<div class="organ-card"><p class="eyebrow">ÓRGANO SELECCIONADO</p><h3>${organs[st.organ].name}</h3><p>${organs[st.organ].text}</p>${Object.entries(hormones).filter(([,x])=>x.source===st.organ).length?`<p class="small-note">Mensajeros que salen de aquí: ${Object.entries(hormones).filter(([,x])=>x.source===st.organ).map(([id,x])=>`<button class="hormone-link" data-hormone="${id}" style="--h:${x.color}">${x.name}</button>`).join(' ')}</p>`:''}${organs[st.organ].brain?`<div class="region-chips">${organs[st.organ].brain.map(id=>chip(regions,id)).join('')}</div>`:''}</div>`:'';
 return tabs+`<p class="eyebrow">ELIGE UN MENSAJERO QUÍMICO</p><div class="hormone-groups">${groups.map(g=>`<div><span class="small-note">${g}</span><div class="hormone-list">${Object.entries(hormones).filter(([,x])=>x.group===g).map(([id,x])=>`<button data-hormone="${id}" class="${id===st.hormone?'active':''}" aria-pressed="${id===st.hormone}" style="--h:${x.color}"><i></i>${x.name}</button>`).join('')}</div></div>`).join('')}</div>
 ${organCard}
 <h2><i class="h-swatch" style="background:${h.color}"></i>${h.name}</h2><p class="small-note">${h.kind} · ${h.week}</p>
 <ol class="hormone-chain">${h.chain.map(([k,v])=>`<li><b>${k}</b><span>${v}</span></li>`).join('')}</ol>
 <div class="insight"><p class="eyebrow">EJEMPLO DE CLASE</p><p>${h.example}</p></div>
 <p class="small-note">En el cerebro 3D:</p><div class="region-chips">${h.brain.map(id=>chip(regions,id)).join('')}</div>
 <p class="small-note">Hormonas y neurotransmisores: los neurotransmisores se liberan desde neuronas y pueden actuar en sinapsis o de forma más difusa; las hormonas se liberan a la circulación. La rapidez y duración varían: no constituyen una distinción absoluta. Una molécula puede cumplir ambos papeles según dónde se libere.</p>`;
}
