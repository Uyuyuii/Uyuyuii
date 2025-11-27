// Configuración de categorías con sus cantidades e iconos Font Awesome
const categoriesConfig = {
    'boligrafos': { name: 'Bolígrafos', icon: 'fas fa-pen', count: 20 },
    'micropuntas': { name: 'Micropuntas', icon: 'fa-solid fa-pen-nib', count: 24 },
    'lapices': { name: 'Lápices', icon: 'fas fa-pencil', count: 43 },
    'colores': { name: 'Colores', icon: 'fas fa-window-maximize', count: 15 },
    'resaltadores': { name: 'Resaltadores', icon: 'fas fa-highlighter', count: 17 },
    'marcadores': { name: 'Marcadores', icon: 'fas fa-wand-magic', count: 30 },
    'plastilina-crayones': { name: 'Plastilina y Crayones', icon: 'fas fa-paint-brush', count: 7 },
    'portaminas-repuestos': { name: 'Portaminas y Repuestos', icon: 'fas fa-pen-fancy', count: 16 },
    'correctores': { name: 'Correctores', icon: 'fas fa-tape', count: 9 },
    'pegamentos': { name: 'Pegamentos', icon: 'fas fa-eye-dropper', count: 9 },
    'gomas': { name: 'Gomas', icon: 'fas fa-eraser', count: 10 },
    'pinturas-pinceles': { name: 'Pinturas y Pinceles', icon: 'fas fa-palette', count: 27 },
    'tajadores': { name: 'Tajadores', icon: 'fas fa-ring', count: 15 },
    'reglas': { name: 'Reglas', icon: 'fas fa-ruler', count: 11 },
    'tijeras-compas': { name: 'Tijeras y Compás', icon: 'fas fa-cut', count: 12 },
    'notas-adhesivas': { name: 'Notas Adhesivas', icon: 'fas fa-sticky-note', count: 21 },
    'tiralineas': { name: 'Tiralíneas', icon: 'fas fa-ruler-combined', count: 11 },
    'papeleria': { name: 'Papelería', icon: 'fas fa-folder', count: 5 },
    'otros': { name: 'Otros', icon: 'fas fa-stapler', count: 0 }
};

// Generar productos dinámicamente
let products = [];
let productIdCounter = 1;

// Nombres de productos por categoría
const productNames = {
    'boligrafos': ['Bolígrafo Trio+', 'Bolígrafo Retec', 'Bolígrafo Hexa', 'Bolígrafo Gel', 'Bolígrafo Retráctil', 'Bolígrafo Fineline', 'Bolígrafo Roller', 'Bolígrafo Multicolor'],
    'micropuntas': ['Micropunta 0.3mm', 'Micropunta 0.5mm', 'Micropunta 0.7mm', 'Micropunta 0.9mm', 'Micropunta Fineline', 'Micropunta Retráctil'],
    'lapices': ['Lápiz HB', 'Lápiz 2B', 'Lápiz 4B', 'Lápiz 6B', 'Lápiz Mecánico', 'Lápiz de Grafito', 'Lápiz Triangular', 'Lápiz Ecológico'],
    'colores': ['Lápices de Colores 12', 'Lápices de Colores 24', 'Lápices de Colores 36', 'Lápices de Colores 48', 'Lápices Acuarelables'],
    'resaltadores': ['Resaltador Amarillo', 'Resaltador Verde', 'Resaltador Rosa', 'Resaltador Azul', 'Resaltador Naranja', 'Resaltador Pack 4', 'Resaltador Pack 6'],
    'marcadores': ['Marcador Permanente', 'Marcador Acrílico', 'Marcador de Pizarra', 'Marcador de Tela', 'Marcador Fineline', 'Marcador Brush'],
    'plastilina-crayones': ['Plastilina 6 Colores', 'Plastilina 12 Colores', 'Crayones 12', 'Crayones 24', 'Crayones 48', 'Crayones Ecológicos'],
    'portaminas-repuestos': ['Portaminas 0.5mm', 'Portaminas 0.7mm', 'Portaminas 0.9mm', 'Repuestos 0.5mm', 'Repuestos 0.7mm', 'Repuestos 0.9mm'],
    'correctores': ['Corrector Líquido', 'Corrector Cinta', 'Corrector Roller', 'Corrector Tipp-Ex', 'Corrector Blanco'],
    'pegamentos': ['Pegamento Barra', 'Pegamento Líquido', 'Pegamento en Spray', 'Pegamento Escolar', 'Pegamento Transparente'],
    'gomas': ['Goma de Borrar', 'Goma Moldeable', 'Goma Tinta', 'Goma Lápiz', 'Goma Artística'],
    'pinturas-pinceles': ['Acuarelas 12', 'Acuarelas 24', 'Témperas 6', 'Témperas 12', 'Pincel Redondo', 'Pincel Plano', 'Pincel Detalle'],
    'tajadores': ['Tajador Simple', 'Tajador Doble', 'Tajador Metálico', 'Tajador Plástico', 'Tajador con Contenedor'],
    'reglas': ['Regla 15cm', 'Regla 30cm', 'Regla 50cm', 'Escuadra', 'Cartabón', 'Transportador'],
    'tijeras-compas': ['Tijeras Escolares', 'Tijeras Punta Redonda', 'Tijeras Zigzag', 'Compás Escolar', 'Compás Profesional'],
    'notas-adhesivas': ['Notas Adhesivas 3x3', 'Notas Adhesivas 5x5', 'Notas Adhesivas Colores', 'Notas Adhesivas Pack 5', 'Notas Adhesivas Pack 10'],
    'tiralineas': ['Tiralíneas Escolar', 'Tiralíneas Profesional', 'Tiralíneas con Tinta', 'Tiralíneas Metálico'],
    'papeleria': ['Carpeta A4', 'Carpeta A5', 'Separadores', 'Fichas', 'Sobres']
};

// Descripciones personalizadas por producto
// Puedes editar estas descripciones para cada producto individualmente
const productDescriptions = {
    'boligrafos': {
        'Bolígrafo Trio+': 'Bolígrafo de alta calidad con tres colores en uno. Perfecto para tomar notas y resaltar información importante.',
        'Bolígrafo Retec': 'Bolígrafo retráctil con punta fina. Ideal para escritura precisa y cómoda.',
        'Bolígrafo Hexa': 'Bolígrafo de tinta roja, perfecto para correcciones y anotaciones destacadas.',
        'Bolígrafo Gel': 'Bolígrafo con tinta gel de secado rápido. Escritura suave y sin manchas.',
        'Bolígrafo Retráctil': 'Bolígrafo con mecanismo retráctil. Práctico y fácil de usar.',
        'Bolígrafo Fineline': 'Bolígrafo de punta fina para escritura detallada y precisa.',
        'Bolígrafo Roller': 'Bolígrafo roller con flujo de tinta constante. Escritura fluida y profesional.',
        'Bolígrafo Multicolor': 'Bolígrafo con múltiples colores intercambiables. Versátil y funcional.'
    },
    'micropuntas': {
        'Micropunta 0.3mm': 'Micropunta ultra fina de 0.3mm. Ideal para dibujo técnico y escritura detallada.',
        'Micropunta 0.5mm': 'Micropunta de 0.5mm. Perfecto balance entre precisión y durabilidad.',
        'Micropunta 0.7mm': 'Micropunta de 0.7mm. Versátil para escritura y dibujo.',
        'Micropunta 0.9mm': 'Micropunta de 0.9mm. Punta más gruesa para escritura cómoda.',
        'Micropunta Fineline': 'Micropunta de línea fina. Excelente para trabajos que requieren precisión.',
        'Micropunta Retráctil': 'Micropunta con mecanismo retráctil. Protege la punta cuando no se usa.'
    },
    'lapices': {
        'Lápiz HB': 'Lápiz de dureza media (HB). Versátil para escritura y dibujo general.',
        'Lápiz 2B': 'Lápiz suave (2B). Ideal para dibujo artístico y sombreado.',
        'Lápiz 4B': 'Lápiz muy suave (4B). Perfecto para dibujo artístico y técnicas de sombreado.',
        'Lápiz 6B': 'Lápiz extra suave (6B). Excelente para dibujo artístico y efectos oscuros.',
        'Lápiz Mecánico': 'Lápiz mecánico con minas intercambiables. Práctico y preciso.',
        'Lápiz de Grafito': 'Lápiz de grafito puro. Alta calidad para dibujo profesional.',
        'Lápiz Triangular': 'Lápiz con forma triangular. Ergonómico y cómodo para escribir.',
        'Lápiz Ecológico': 'Lápiz ecológico hecho con materiales reciclados. Cuidado del medio ambiente.'
    },
    'colores': {
        'Lápices de Colores 12': 'Set de 12 lápices de colores. Perfecto para niños y uso escolar básico.',
        'Lápices de Colores 24': 'Set de 24 lápices de colores. Amplia gama de colores para proyectos creativos.',
        'Lápices de Colores 36': 'Set de 36 lápices de colores. Ideal para artistas y estudiantes avanzados.',
        'Lápices de Colores 48': 'Set de 48 lápices de colores. Colección completa para profesionales.',
        'Lápices Acuarelables': 'Lápices de colores acuarelables. Se pueden mezclar con agua para efectos artísticos.'
    },
    'resaltadores': {
        'Resaltador Amarillo': 'Resaltador amarillo clásico. Ideal para marcar información importante.',
        'Resaltador Verde': 'Resaltador verde. Perfecto para organizar y categorizar información.',
        'Resaltador Rosa': 'Resaltador rosa. Color suave para resaltar sin ser intrusivo.',
        'Resaltador Azul': 'Resaltador azul. Excelente para diferenciar secciones de texto.',
        'Resaltador Naranja': 'Resaltador naranja. Color vibrante para destacar información clave.',
        'Resaltador Pack 4': 'Pack de 4 resaltadores de colores variados. Ideal para organización.',
        'Resaltador Pack 6': 'Pack de 6 resaltadores. Amplia gama de colores para diferentes categorías.'
    },
    'marcadores': {
        'Marcador Permanente': 'Marcador permanente de tinta indeleble. Resistente al agua y al desgaste.',
        'Marcador Acrílico': 'Marcador acrílico. Perfecto para superficies no porosas y proyectos artísticos.',
        'Marcador de Pizarra': 'Marcador para pizarras blancas. Se borra fácilmente con borrador.',
        'Marcador de Tela': 'Marcador especial para tela. No se desvanece con el lavado.',
        'Marcador Fineline': 'Marcador de punta fina. Ideal para detalles y escritura precisa.',
        'Marcador Brush': 'Marcador con punta de pincel. Perfecto para caligrafía y arte.'
    },
    'plastilina-crayones': {
        'Plastilina 6 Colores': 'Plastilina de 6 colores básicos. Perfecta para modelado creativo.',
        'Plastilina 12 Colores': 'Plastilina de 12 colores. Amplia gama para proyectos artísticos.',
        'Crayones 12': 'Caja de 12 crayones. Ideal para niños pequeños y uso escolar.',
        'Crayones 24': 'Caja de 24 crayones. Más colores para mayor creatividad.',
        'Crayones 48': 'Caja de 48 crayones. Colección completa para artistas jóvenes.',
        'Crayones Ecológicos': 'Crayones ecológicos no tóxicos. Seguros para niños y medio ambiente.'
    },
    'portaminas-repuestos': {
        'Portaminas 0.5mm': 'Portaminas de 0.5mm. Precisión y comodidad para escritura técnica.',
        'Portaminas 0.7mm': 'Portaminas de 0.7mm. Balance perfecto entre precisión y resistencia.',
        'Portaminas 0.9mm': 'Portaminas de 0.9mm. Punta más gruesa para escritura cómoda.',
        'Repuestos 0.5mm': 'Minas de repuesto 0.5mm. Compatibles con portaminas estándar.',
        'Repuestos 0.7mm': 'Minas de repuesto 0.7mm. Alta calidad y durabilidad.',
        'Repuestos 0.9mm': 'Minas de repuesto 0.9mm. Para portaminas de punta gruesa.'
    },
    'correctores': {
        'Corrector Líquido': 'Corrector líquido de secado rápido. Cubre errores de forma eficiente.',
        'Corrector Cinta': 'Corrector en cinta. Aplicación limpia y precisa sin manchas.',
        'Corrector Roller': 'Corrector en formato roller. Fácil de usar y controlar.',
        'Corrector Tipp-Ex': 'Corrector Tipp-Ex de reconocida calidad. Cubrimiento perfecto.',
        'Corrector Blanco': 'Corrector blanco estándar. Esencial para cualquier escritorio.'
    },
    'pegamentos': {
        'Pegamento Barra': 'Pegamento en barra. Aplicación limpia y sin desorden.',
        'Pegamento Líquido': 'Pegamento líquido de secado rápido. Fuerte adherencia.',
        'Pegamento en Spray': 'Pegamento en aerosol. Ideal para proyectos grandes y superficies extensas.',
        'Pegamento Escolar': 'Pegamento escolar no tóxico. Seguro para uso de niños.',
        'Pegamento Transparente': 'Pegamento transparente. No deja marcas visibles al secar.'
    },
    'gomas': {
        'Goma de Borrar': 'Goma de borrar estándar. Efectiva para lápiz y grafito.',
        'Goma Moldeable': 'Goma moldeable. Se adapta a la forma que necesites.',
        'Goma Tinta': 'Goma especial para tinta. Borra errores en bolígrafos.',
        'Goma Lápiz': 'Goma integrada en lápiz. Práctica y siempre disponible.',
        'Goma Artística': 'Goma artística de alta calidad. Para trabajos profesionales.'
    },
    'pinturas-pinceles': {
        'Acuarelas 12': 'Set de acuarelas de 12 colores. Perfecto para iniciarse en la pintura.',
        'Acuarelas 24': 'Set de acuarelas de 24 colores. Amplia gama para artistas.',
        'Témperas 6': 'Set de témperas de 6 colores básicos. Ideal para niños.',
        'Témperas 12': 'Set de témperas de 12 colores. Más opciones para proyectos creativos.',
        'Pincel Redondo': 'Pincel de punta redonda. Versátil para diferentes técnicas.',
        'Pincel Plano': 'Pincel plano. Ideal para cubrir áreas grandes y detalles.',
        'Pincel Detalle': 'Pincel de detalle. Perfecto para trabajos finos y precisos.'
    },
    'tajadores': {
        'Tajador Simple': 'Tajador simple y práctico. Esencial para mantener lápices afilados.',
        'Tajador Doble': 'Tajador con dos orificios. Para lápices de diferentes tamaños.',
        'Tajador Metálico': 'Tajador metálico resistente. Duradero y de alta calidad.',
        'Tajador Plástico': 'Tajador plástico ligero. Práctico y económico.',
        'Tajador con Contenedor': 'Tajador con contenedor integrado. Mantiene el área limpia.'
    },
    'reglas': {
        'Regla 15cm': 'Regla de 15 centímetros. Compacta y práctica para uso diario.',
        'Regla 30cm': 'Regla de 30 centímetros. Tamaño estándar para la mayoría de trabajos.',
        'Regla 50cm': 'Regla de 50 centímetros. Ideal para proyectos grandes.',
        'Escuadra': 'Escuadra para ángulos rectos. Esencial para dibujo técnico.',
        'Cartabón': 'Cartabón para medir y trazar. Herramienta profesional de precisión.',
        'Transportador': 'Transportador de ángulos. Perfecto para medir y dibujar ángulos.'
    },
    'tijeras-compas': {
        'Tijeras Escolares': 'Tijeras escolares seguras. Punta redonda para uso de niños.',
        'Tijeras Punta Redonda': 'Tijeras con punta redonda. Seguras y fáciles de usar.',
        'Tijeras Zigzag': 'Tijeras de corte zigzag. Para bordes decorativos y creativos.',
        'Compás Escolar': 'Compás escolar básico. Ideal para dibujar círculos y arcos.',
        'Compás Profesional': 'Compás profesional de precisión. Para trabajos técnicos avanzados.'
    },
    'notas-adhesivas': {
        'Notas Adhesivas 3x3': 'Notas adhesivas de 3x3 pulgadas. Tamaño estándar para recordatorios.',
        'Notas Adhesivas 5x5': 'Notas adhesivas de 5x5 pulgadas. Más espacio para anotaciones.',
        'Notas Adhesivas Colores': 'Notas adhesivas de colores variados. Organización visual.',
        'Notas Adhesivas Pack 5': 'Pack de 5 bloques de notas. Variedad de colores.',
        'Notas Adhesivas Pack 10': 'Pack de 10 bloques. Suministro completo para oficina o estudio.'
    },
    'tiralineas': {
        'Tiralíneas Escolar': 'Tiralíneas escolar básico. Ideal para estudiantes.',
        'Tiralíneas Profesional': 'Tiralíneas profesional de alta precisión. Para trabajos técnicos.',
        'Tiralíneas con Tinta': 'Tiralíneas con sistema de tinta integrado. Líneas perfectas.',
        'Tiralíneas Metálico': 'Tiralíneas metálico resistente. Duradero y preciso.'
    },
    'papeleria': {
        'Carpeta A4': 'Carpeta tamaño A4. Organización y protección de documentos.',
        'Carpeta A5': 'Carpeta tamaño A5. Compacta y práctica.',
        'Separadores': 'Separadores de colores. Organiza tus documentos por categorías.',
        'Fichas': 'Fichas para estudio. Perfectas para tomar notas y repasar.',
        'Sobres': 'Sobres de diferentes tamaños. Para correspondencia y documentos.'
    }
};

// Imágenes personalizadas por producto
// Puedes editar estas rutas de imagen para cada producto individualmente
// Formato: 'Nombre del Producto': 'ruta/de/la/imagen.jpg'
const productImages = {
    'boligrafos': {
        'Bolígrafo Trio+': 'img/boligrafos/boligrafo-trio-plus.jpg',
        'Bolígrafo Retec': 'img/boligrafos/boligrafo-retec.jpg',
        'Bolígrafo Hexa': 'img/boligrafos/boligrafo-hexa.jpg',
        'Bolígrafo Gel': 'img/boligrafos/boligrafo-gel.jpg',
        'Bolígrafo Retráctil': 'img/boligrafos/boligrafo-retractil.jpg',
        'Bolígrafo Fineline': 'img/boligrafos/boligrafo-fineline.jpg',
        'Bolígrafo Roller': 'img/boligrafos/boligrafo-roller.jpg',
        'Bolígrafo Multicolor': 'img/boligrafos/boligrafo-multicolor.jpg'
    },
    'micropuntas': {
        'Micropunta 0.3mm': 'img/micropuntas/micropunta-0.3mm.jpg',
        'Micropunta 0.5mm': 'img/micropuntas/micropunta-0.5mm.jpg',
        'Micropunta 0.7mm': 'img/micropuntas/micropunta-0.7mm.jpg',
        'Micropunta 0.9mm': 'img/micropuntas/micropunta-0.9mm.jpg',
        'Micropunta Fineline': 'img/micropuntas/micropunta-fineline.jpg',
        'Micropunta Retráctil': 'img/micropuntas/micropunta-retractil.jpg'
    },
    'lapices': {
        'Lápiz HB': 'img/lapices/lapiz-hb.jpg',
        'Lápiz 2B': 'img/lapices/lapiz-2b.jpg',
        'Lápiz 4B': 'img/lapices/lapiz-4b.jpg',
        'Lápiz 6B': 'img/lapices/lapiz-6b.jpg',
        'Lápiz Mecánico': 'img/lapices/lapiz-mecanico.jpg',
        'Lápiz de Grafito': 'img/lapices/lapiz-grafito.jpg',
        'Lápiz Triangular': 'img/lapices/lapiz-triangular.jpg',
        'Lápiz Ecológico': 'img/lapices/lapiz-ecologico.jpg'
    },
    'colores': {
        'Lápices de Colores 12': 'img/colores/lapices-colores-12.jpg',
        'Lápices de Colores 24': 'img/colores/lapices-colores-24.jpg',
        'Lápices de Colores 36': 'img/colores/lapices-colores-36.jpg',
        'Lápices de Colores 48': 'img/colores/lapices-colores-48.jpg',
        'Lápices Acuarelables': 'img/colores/lapices-acuarelables.jpg'
    },
    'resaltadores': {
        'Resaltador Amarillo': 'img/resaltadores/resaltador-amarillo.jpg',
        'Resaltador Verde': 'img/resaltadores/resaltador-verde.jpg',
        'Resaltador Rosa': 'img/resaltadores/resaltador-rosa.jpg',
        'Resaltador Azul': 'img/resaltadores/resaltador-azul.jpg',
        'Resaltador Naranja': 'img/resaltadores/resaltador-naranja.jpg',
        'Resaltador Pack 4': 'img/resaltadores/resaltador-pack-4.jpg',
        'Resaltador Pack 6': 'img/resaltadores/resaltador-pack-6.jpg'
    },
    'marcadores': {
        'Marcador Permanente': 'img/marcadores/marcador-permanente.jpg',
        'Marcador Acrílico': 'img/marcadores/marcador-acrilico.jpg',
        'Marcador de Pizarra': 'img/marcadores/marcador-pizarra.jpg',
        'Marcador de Tela': 'img/marcadores/marcador-tela.jpg',
        'Marcador Fineline': 'img/marcadores/marcador-fineline.jpg',
        'Marcador Brush': 'img/marcadores/marcador-brush.jpg'
    },
    'plastilina-crayones': {
        'Plastilina 6 Colores': 'img/plastilina-crayones/plastilina-6.jpg',
        'Plastilina 12 Colores': 'img/plastilina-crayones/plastilina-12.jpg',
        'Crayones 12': 'img/plastilina-crayones/crayones-12.jpg',
        'Crayones 24': 'img/plastilina-crayones/crayones-24.jpg',
        'Crayones 48': 'img/plastilina-crayones/crayones-48.jpg',
        'Crayones Ecológicos': 'img/plastilina-crayones/crayones-ecologicos.jpg'
    },
    'portaminas-repuestos': {
        'Portaminas 0.5mm': 'img/portaminas-repuestos/portaminas-0.5mm.jpg',
        'Portaminas 0.7mm': 'img/portaminas-repuestos/portaminas-0.7mm.jpg',
        'Portaminas 0.9mm': 'img/portaminas-repuestos/portaminas-0.9mm.jpg',
        'Repuestos 0.5mm': 'img/portaminas-repuestos/repuestos-0.5mm.jpg',
        'Repuestos 0.7mm': 'img/portaminas-repuestos/repuestos-0.7mm.jpg',
        'Repuestos 0.9mm': 'img/portaminas-repuestos/repuestos-0.9mm.jpg'
    },
    'correctores': {
        'Corrector Líquido': 'img/correctores/corrector-liquido.jpg',
        'Corrector Cinta': 'img/correctores/corrector-cinta.jpg',
        'Corrector Roller': 'img/correctores/corrector-roller.jpg',
        'Corrector Tipp-Ex': 'img/correctores/corrector-tippex.jpg',
        'Corrector Blanco': 'img/correctores/corrector-blanco.jpg'
    },
    'pegamentos': {
        'Pegamento Barra': 'img/pegamentos/pegamento-barra.jpg',
        'Pegamento Líquido': 'img/pegamentos/pegamento-liquido.jpg',
        'Pegamento en Spray': 'img/pegamentos/pegamento-spray.jpg',
        'Pegamento Escolar': 'img/pegamentos/pegamento-escolar.jpg',
        'Pegamento Transparente': 'img/pegamentos/pegamento-transparente.jpg'
    },
    'gomas': {
        'Goma de Borrar': 'img/gomas/goma-borrar.jpg',
        'Goma Moldeable': 'img/gomas/goma-moldeable.jpg',
        'Goma Tinta': 'img/gomas/goma-tinta.jpg',
        'Goma Lápiz': 'img/gomas/goma-lapiz.jpg',
        'Goma Artística': 'img/gomas/goma-artistica.jpg'
    },
    'pinturas-pinceles': {
        'Acuarelas 12': 'img/pinturas-pinceles/acuarelas-12.jpg',
        'Acuarelas 24': 'img/pinturas-pinceles/acuarelas-24.jpg',
        'Témperas 6': 'img/pinturas-pinceles/temperas-6.jpg',
        'Témperas 12': 'img/pinturas-pinceles/temperas-12.jpg',
        'Pincel Redondo': 'img/pinturas-pinceles/pincel-redondo.jpg',
        'Pincel Plano': 'img/pinturas-pinceles/pincel-plano.jpg',
        'Pincel Detalle': 'img/pinturas-pinceles/pincel-detalle.jpg'
    },
    'tajadores': {
        'Tajador Simple': 'img/tajadores/tajador-simple.jpg',
        'Tajador Doble': 'img/tajadores/tajador-doble.jpg',
        'Tajador Metálico': 'img/tajadores/tajador-metalico.jpg',
        'Tajador Plástico': 'img/tajadores/tajador-plastico.jpg',
        'Tajador con Contenedor': 'img/tajadores/tajador-contenedor.jpg'
    },
    'reglas': {
        'Regla 15cm': 'img/reglas/regla-15cm.jpg',
        'Regla 30cm': 'img/reglas/regla-30cm.jpg',
        'Regla 50cm': 'img/reglas/regla-50cm.jpg',
        'Escuadra': 'img/reglas/escuadra.jpg',
        'Cartabón': 'img/reglas/cartabon.jpg',
        'Transportador': 'img/reglas/transportador.jpg'
    },
    'tijeras-compas': {
        'Tijeras Escolares': 'img/tijeras-compas/tijeras-escolares.jpg',
        'Tijeras Punta Redonda': 'img/tijeras-compas/tijeras-punta-redonda.jpg',
        'Tijeras Zigzag': 'img/tijeras-compas/tijeras-zigzag.jpg',
        'Compás Escolar': 'img/tijeras-compas/compas-escolar.jpg',
        'Compás Profesional': 'img/tijeras-compas/compas-profesional.jpg'
    },
    'notas-adhesivas': {
        'Notas Adhesivas 3x3': 'img/notas-adhesivas/notas-3x3.jpg',
        'Notas Adhesivas 5x5': 'img/notas-adhesivas/notas-5x5.jpg',
        'Notas Adhesivas Colores': 'img/notas-adhesivas/notas-colores.jpg',
        'Notas Adhesivas Pack 5': 'img/notas-adhesivas/notas-pack-5.jpg',
        'Notas Adhesivas Pack 10': 'img/notas-adhesivas/notas-pack-10.jpg'
    },
    'tiralineas': {
        'Tiralíneas Escolar': 'img/tiralineas/tiralineas-escolar.jpg',
        'Tiralíneas Profesional': 'img/tiralineas/tiralineas-profesional.jpg',
        'Tiralíneas con Tinta': 'img/tiralineas/tiralineas-tinta.jpg',
        'Tiralíneas Metálico': 'img/tiralineas/tiralineas-metalico.jpg'
    },
    'papeleria': {
        'Carpeta A4': 'img/papeleria/carpeta-a4.jpg',
        'Carpeta A5': 'img/papeleria/carpeta-a5.jpg',
        'Separadores': 'img/papeleria/separadores.jpg',
        'Fichas': 'img/papeleria/fichas.jpg',
        'Sobres': 'img/papeleria/sobres.jpg'
    }
};

// Marcas disponibles
const brands = ['Sabonis', 'Mango', 'Alkalá', 'Otro'];

// Tamanos disponibles por categoria
const sizesByCategory = {
    'boligrafos': ['0.5mm', '0.7mm', '1.0mm'],
    'micropuntas': ['0.3mm', '0.5mm', '0.7mm', '0.9mm'],
    'lapices': ['HB', '2B', '4B', '6B'],
    'colores': ['12 unidades', '24 unidades', '36 unidades', '48 unidades'],
    'resaltadores': ['Fino', 'Medio', 'Grueso'],
    'marcadores': ['Fino', 'Medio', 'Grueso'],
    'plastilina-crayones': ['6 colores', '12 colores', '24 colores', '48 colores'],
    'portaminas-repuestos': ['0.5mm', '0.7mm', '0.9mm'],
    'correctores': ['12ml', '20ml', '30ml'],
    'pegamentos': ['20g', '40g', '60g'],
    'gomas': ['Pequeña', 'Mediana', 'Grande'],
    'pinturas-pinceles': ['12 colores', '24 colores', 'Set completo'],
    'tajadores': ['Simple', 'Doble', 'Con contenedor'],
    'reglas': ['15cm', '30cm', '50cm'],
    'tijeras-compas': ['Escolar', 'Profesional'],
    'notas-adhesivas': ['3x3', '5x5', 'Pack 5', 'Pack 10'],
    'tiralineas': ['Escolar', 'Profesional'],
    'papeleria': ['A4', 'A5', 'Oficio']
};

// Función para normalizar texto (quitar tildes para búsqueda)
function normalizeText(text) {
    return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

// Función para normalizar códigos (eliminar signos especiales y convertir a minúsculas)
function normalizeCode(code) {
    if (!code) return '';
    return code.toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Eliminar acentos
        .replace(/[^a-zA-Z0-9]/g, '') // Eliminar todos los signos especiales, dejar solo letras y números
        .toLowerCase();
}

// Función para generar productos de una categoría
function generateProductsForCategory(category, count) {
    const categoryInfo = categoriesConfig[category];
    if (!categoryInfo) return [];
    
    const products = [];
    const names = productNames[category] || [`${categoryInfo.name}`];
    const basePrice = Math.random() * 10 + 1;
    const availableSizes = sizesByCategory[category] || ['Estándar'];
    
    for (let i = 1; i <= count; i++) {
        const nameIndex = (i - 1) % names.length;
        const variant = Math.floor((i - 1) / names.length) + 1;
        let productName = names[nameIndex];
        
        // Generar stock ficticio aleatorio entre 10 y 200 unidades
        const stock = Math.floor(Math.random() * 190) + 10;
        
        if (variant > 1) {
            productName = `${productName} - Variante ${variant}`;
        }
        
        // Asignar marca aleatoria
        const brand = brands[Math.floor(Math.random() * brands.length)];
        
        // Asignar tamaño aleatorio
        const size = availableSizes[Math.floor(Math.random() * availableSizes.length)];
        
        // Obtener descripción personalizada o usar una genérica
        const categoryDescriptions = productDescriptions[category] || {};
        const description = categoryDescriptions[productName] || 
            `Pertenece a la categoría ${categoryInfo.name}. Producto de calidad para uso escolar y profesional.`;
        
        // Obtener imagen personalizada o usar una genérica
        const categoryImages = productImages[category] || {};
        const image = categoryImages[productName] || `img/${category}/${category}_${i}.jpg`;
        
        products.push({
            id: productIdCounter++,
            name: productName,
            category: category,
            brand: brand,
            description: description,
            size: size,
            price: parseFloat((basePrice + Math.random() * 5).toFixed(2)),
            icon: categoryInfo.icon,
            image: image,
            stock: stock, // Stock inicial ficticio
            // Guardar versión normalizada para búsqueda
            nameNormalized: normalizeText(productName)
        });
    }
    
    return products;
}

// Función para recalcular todos los IDs de forma secuencial sin huecos
function recalcularTodosLosIDs() {
    loadProducts();
    if (products.length === 0) return;
    
    // Ordenar productos por ID actual para mantener algún orden
    products.sort((a, b) => (a.id || 0) - (b.id || 0));
    
    // Reasignar IDs de forma secuencial empezando desde 1
    products.forEach((product, index) => {
        product.id = index + 1;
    });
    
    // Actualizar productIdCounter al ID más alto + 1
    productIdCounter = products.length + 1;
    
    // Guardar cambios
    saveProducts();
    
    console.log('IDs recalculados correctamente. Total de productos:', products.length);
}

// Generar todos los productos (solo si no hay productos guardados)
function initializeProducts() {
    loadProducts();
    if (products.length === 0) {
        // Si no hay productos guardados, generarlos
        Object.keys(categoriesConfig).forEach(category => {
            const count = categoriesConfig[category].count;
            if (count > 0) {
                const categoryProducts = generateProductsForCategory(category, count);
                products = products.concat(categoryProducts);
            }
        });
        saveProducts(); // Guardar productos generados
    } else {
        // Si hay productos, recalcular IDs para eliminar huecos
        recalcularTodosLosIDs();
    }
    // Actualizar productIdCounter al ID más alto + 1 para mantener IDs autoincrementales
    if (products.length > 0) {
        productIdCounter = Math.max(...products.map(p => p.id)) + 1;
    }
}

// Inicializar productos
initializeProducts();

// Recalcular todos los IDs para eliminar huecos (se ejecuta automáticamente al cargar)
// Esta función se ejecuta dentro de initializeProducts() si hay productos existentes

// Estado del carrito y vista
let cart = [];
let currentCategoryProducts = [];
let displayedProductsCount = 10;
let displayedCategoriesCount = 10;

// Sistema de usuarios
let currentUser = null;
let users = [];

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    loadUsers();
    loadCart();
    loadProducts(); // Cargar productos guardados
    checkUserSession();
    renderCategories();
    renderNewProducts();
    setupEventListeners();
    
    // Actualizar UI cuando cambia el tamaño de la ventana
    window.addEventListener('resize', () => {
        updateUserUI();
    });
});

// Event Listeners
function setupEventListeners() {
    // Menú móvil
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.getElementById('menuOverlay');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
            if (menuOverlay) {
                menuOverlay.classList.toggle('active');
            }
        });
    }

    // Cerrar menú al hacer clic fuera del cubito (en móvil) o en enlaces de navegación
    // Este listener debe ejecutarse DESPUÉS de los listeners específicos, por eso no usamos capture
    document.addEventListener('click', (e) => {
        // NO interferir con clicks en elementos de navegación principales
        if (e.target.closest('a[href="#inicio"]') || 
            e.target.closest('a[href="#contacto"]') ||
            e.target.closest('#productsLink') ||
            e.target.closest('#cartIcon') ||
            e.target.closest('#loginLink') ||
            e.target.closest('.nav-menu') ||
            e.target.closest('.nav')) {
            // Solo cerrar el menú de usuario/admin, pero no prevenir el comportamiento del botón
            closeUserMenu();
            return; // Salir temprano para no interferir
        }
        
        const isMobile = window.innerWidth <= 768;
        const navMenu = document.querySelector('.nav-menu');
        const menuToggle = document.getElementById('menuToggle');
        const userMenu = document.getElementById('userMenu');
        const loginLink = document.getElementById('loginLink');
        const loginLinkContainer = document.getElementById('loginLinkContainer');
        
        if (isMobile) {
            if (navMenu && menuToggle) {
                const isClickInsideMenu = navMenu.contains(e.target);
                const isClickOnToggle = menuToggle.contains(e.target);
                
                // No cerrar si se hace clic en el menú de usuario o en el loginLink
                if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                }
            }
            
            // Cerrar menú de usuario/admin al hacer clic fuera
            const adminMenu = document.getElementById('adminMenu');
            if (userMenu && loginLinkContainer) {
                const isClickOnUserMenu = userMenu.contains(e.target);
                const isClickOnLoginLink = loginLink && loginLink.contains(e.target);
                const isClickOnContainer = loginLinkContainer.contains(e.target);
                
                if (!isClickOnUserMenu && !isClickOnLoginLink && !isClickOnContainer && userMenu.classList.contains('active')) {
                    userMenu.classList.remove('active');
                }
            }
            if (adminMenu && loginLinkContainer) {
                const isClickOnAdminMenu = adminMenu.contains(e.target);
                const isClickOnLoginLink = loginLink && loginLink.contains(e.target);
                const isClickOnContainer = loginLinkContainer.contains(e.target);
                
                if (!isClickOnAdminMenu && !isClickOnLoginLink && !isClickOnContainer && adminMenu.classList.contains('active')) {
                    adminMenu.classList.remove('active');
                }
            }
        } else {
            // En desktop, cerrar menú de usuario/admin al hacer clic fuera
            const adminMenu = document.getElementById('adminMenu');
            if (userMenu && loginLinkContainer) {
                const isClickOnUserMenu = userMenu.contains(e.target);
                const isClickOnLoginLink = loginLink && loginLink.contains(e.target);
                const isClickOnContainer = loginLinkContainer.contains(e.target);
                
                if (!isClickOnUserMenu && !isClickOnLoginLink && !isClickOnContainer && userMenu.style.display === 'block') {
                    closeUserMenu();
                }
            }
            if (adminMenu && loginLinkContainer) {
                const isClickOnAdminMenu = adminMenu.contains(e.target);
                const isClickOnLoginLink = loginLink && loginLink.contains(e.target);
                const isClickOnContainer = loginLinkContainer.contains(e.target);
                
                if (!isClickOnAdminMenu && !isClickOnLoginLink && !isClickOnContainer && adminMenu.style.display === 'block') {
                    closeUserMenu();
                }
            }
        }
    }, false); // Usar bubble phase (false) para que se ejecute DESPUÉS de los listeners específicos

    // Cerrar menú al hacer clic en un enlace del menú principal (en móvil)
    // Pero NO cerrar si se hace clic en el loginLink o en el menú de usuario
    if (navMenu) {
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            // Excluir el loginLink y los enlaces del user-menu
            const isLoginLink = link.id === 'loginLink';
            const isUserMenuLink = link.closest('.user-menu') !== null;
            
            if (!isLoginLink && !isUserMenuLink) {
                link.addEventListener('click', () => {
                    if (window.innerWidth <= 768) {
                        navMenu.classList.remove('active');
                    }
                });
            }
        });
    }

    // Carrito
    const cartIcon = document.getElementById('cartIcon');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const checkoutBtn = document.getElementById('checkoutBtn');

    if (cartIcon) {
        // Usar fase de captura (true) para que se ejecute ANTES de otros listeners
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('✅ Click en carrito - ejecutando openCart()');
            openCart();
        }, true); // Fase de captura
    }

    if (closeCart) {
        closeCart.addEventListener('click', closeCartSidebar);
    }

    if (cartOverlay) {
        cartOverlay.addEventListener('click', closeCartSidebar);
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', handleCheckout);
    }

    // Botón volver
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', hideCategoryProducts);
    }

    // Botón ver más productos
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreProducts);
    }

    // Botón ver más categorías
    const loadMoreCategoriesBtn = document.getElementById('loadMoreCategoriesBtn');
    if (loadMoreCategoriesBtn) {
        loadMoreCategoriesBtn.addEventListener('click', loadMoreCategories);
    }

    // Botón ver más ofertas
    const seeMoreOffersBtn = document.getElementById('seeMoreOffersBtn');
    if (seeMoreOffersBtn) {
        seeMoreOffersBtn.addEventListener('click', showMoreOffers);
    }

    // Botón ver más productos nuevos
    const seeMoreNewProductsBtn = document.getElementById('seeMoreNewProductsBtn');
    if (seeMoreNewProductsBtn) {
        seeMoreNewProductsBtn.addEventListener('click', showMoreNewProducts);
    }

    // Botones volver
    const backFromOffersBtn = document.getElementById('backFromOffersBtn');
    if (backFromOffersBtn) {
        backFromOffersBtn.addEventListener('click', hideMoreOffers);
    }

    const backFromNewProductsBtn = document.getElementById('backFromNewProductsBtn');
    if (backFromNewProductsBtn) {
        backFromNewProductsBtn.addEventListener('click', hideMoreNewProducts);
    }

    // Enlace de productos en el menú
    // Usar fase de captura (true) para que se ejecute ANTES de otros listeners
    const productsLink = document.getElementById('productsLink');
    if (productsLink) {
        productsLink.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('✅ Click en enlace Productos - ejecutando showProductsSearch()');
            closeUserMenu();
            showProductsSearch();
        }, true); // Fase de captura
    }

    // Enlace de iniciar sesión en el menú - agregar listener inicial como fallback
    // Este listener solo se ejecutará si no hay usuario logueado y si updateUserUI() no agregó un listener
    // Si hay usuario logueado, updateUserUI() manejará el click
    const loginLink = document.getElementById('loginLink');
    if (loginLink) {
        loginLink.addEventListener('click', function(e) {
            // Solo mostrar modal si NO hay usuario logueado
            if (!currentUser) {
                console.log('LoginLink clickeado (listener inicial fallback) - sin usuario');
                e.preventDefault();
                e.stopPropagation();
                showLoginModal();
            } else {
                // Si hay usuario logueado, dejar que updateUserUI() maneje el toggle del menú
                console.log('LoginLink clickeado (listener inicial) - usuario logueado, ignorando');
                e.preventDefault();
                e.stopPropagation();
            }
        }, false); // NO usar capture phase aquí, dejar que updateUserUI() tenga prioridad con capture phase
    }

    // Botón volver de búsqueda
    const backFromSearchBtn = document.getElementById('backFromSearchBtn');
    if (backFromSearchBtn) {
        backFromSearchBtn.addEventListener('click', hideProductsSearch);
    }

    // Búsqueda de productos
    const productSearchInput = document.getElementById('productSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    if (productSearchInput) {
        productSearchInput.addEventListener('input', handleProductSearch);
    }

    if (clearSearchBtn) {
        clearSearchBtn.addEventListener('click', clearSearch);
    }

    // Filtros
    const priceRange = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    const sortSelect = document.getElementById('sortSelect');
    const resetFiltersBtn = document.getElementById('resetFiltersBtn');

    if (priceRange && maxPriceDisplay) {
        priceRange.addEventListener('input', (e) => {
            maxPriceDisplay.textContent = e.target.value;
            handleProductSearch();
        });
    }

    if (sortSelect) {
        sortSelect.addEventListener('change', handleProductSearch);
    }

    if (resetFiltersBtn) {
        resetFiltersBtn.addEventListener('click', resetFilters);
    }

    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Enlace de inicio - volver al inicio y cerrar todas las secciones
    // Usar fase de captura (true) para que se ejecute ANTES de otros listeners
    const inicioLinks = document.querySelectorAll('a[href="#inicio"]');
    inicioLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('✅ Click en enlace Inicio - ejecutando goToInicio()');
            goToInicio();
        }, true); // Fase de captura
    });
    
    // Enlaces de contacto
    // Usar fase de captura (true) para que se ejecute ANTES de otros listeners
    const contactoLinks = document.querySelectorAll('a[href="#contacto"]');
    contactoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('✅ Click en enlace Contacto - haciendo scroll');
            closeUserMenu();
            hideUserSections();
            hideAdminSections();
            // Scroll suave al footer de contacto
            const contactoSection = document.getElementById('contacto');
            if (contactoSection) {
                contactoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, true); // Fase de captura
    });

    // Cerrar paneles de cantidad al hacer clic fuera
    document.addEventListener('click', (e) => {
        // No cerrar si se hace clic en el panel, en botones del panel, o en el botón de añadir al carrito
        if (!e.target.closest('.quantity-panel') && 
            !e.target.closest('.add-to-cart') && 
            !e.target.closest('.qty-btn') &&
            !e.target.closest('.btn-cancel-small') &&
            !e.target.closest('.btn-confirm-small')) {
            document.querySelectorAll('.quantity-panel').forEach(panel => {
                panel.style.display = 'none';
            });
        }
    });

    // Event listeners para autenticación
    const loginModal = document.getElementById('loginModal');
    const closeLoginModalBtn = document.getElementById('closeLoginModal');
    const loginToggleBtn = document.getElementById('loginToggleBtn');
    const registerToggleBtn = document.getElementById('registerToggleBtn');
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');

    if (closeLoginModalBtn) {
        closeLoginModalBtn.addEventListener('click', () => {
            if (loginModal) loginModal.style.display = 'none';
        });
    }

    if (loginModal) {
        loginModal.addEventListener('click', (e) => {
            if (e.target === loginModal) {
                loginModal.style.display = 'none';
            }
        });
    }

    if (loginToggleBtn) {
        loginToggleBtn.addEventListener('click', () => {
            showLoginForm();
        });
    }

    if (registerToggleBtn) {
        registerToggleBtn.addEventListener('click', () => {
            showRegisterForm();
        });
    }

    if (loginForm) {
        // Agregar listener al formulario
        loginForm.addEventListener('submit', handleLogin);
        
        // También agregar listener al botón por si acaso
        const loginSubmitBtn = loginForm.querySelector('button[type="submit"]');
        if (loginSubmitBtn) {
            loginSubmitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handleLogin(e);
            });
        }
    }

    if (registerForm) {
        registerForm.addEventListener('submit', handleRegister);
        
        // También agregar listener al botón por si acaso
        const registerSubmitBtn = registerForm.querySelector('button[type="submit"]');
        if (registerSubmitBtn) {
            registerSubmitBtn.addEventListener('click', (e) => {
                e.preventDefault();
                handleRegister(e);
            });
        }
    }

    // Event listeners para el menú de usuario
    const menuMiCuenta = document.getElementById('menuMiCuenta');
    const menuVerPedidos = document.getElementById('menuVerPedidos');
    const menuFavoritos = document.getElementById('menuFavoritos');
    const menuNotificaciones = document.getElementById('menuNotificaciones');
    const menuCentroAyuda = document.getElementById('menuCentroAyuda');
    const menuCerrarSesion = document.getElementById('menuCerrarSesion');

    if (menuMiCuenta) {
        menuMiCuenta.addEventListener('click', (e) => {
            e.preventDefault();
            showMiCuenta();
        });
    }

    if (menuVerPedidos) {
        menuVerPedidos.addEventListener('click', (e) => {
            e.preventDefault();
            showVerPedidos();
        });
    }

    if (menuFavoritos) {
        menuFavoritos.addEventListener('click', (e) => {
            e.preventDefault();
            showFavoritos();
        });
    }

    if (menuNotificaciones) {
        menuNotificaciones.addEventListener('click', (e) => {
            e.preventDefault();
            showNotificaciones();
        });
    }

    if (menuCentroAyuda) {
        menuCentroAyuda.addEventListener('click', (e) => {
            e.preventDefault();
            showCentroAyuda();
        });
    }

    if (menuCerrarSesion) {
        menuCerrarSesion.addEventListener('click', (e) => {
            e.preventDefault();
            logout();
        });
    }

    // Event listeners para el menú de administrador
    const menuUsuarios = document.getElementById('menuUsuarios');
    const menuPedidosAdmin = document.getElementById('menuPedidosAdmin');
    const menuInventario = document.getElementById('menuInventario');
    const menuProductosMasVendidos = document.getElementById('menuProductosMasVendidos');

    if (menuUsuarios) {
        menuUsuarios.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Click en menuUsuarios');
            closeUserMenu(); // Cerrar el menú antes de mostrar la sección
            showUsuarios();
        });
    }

    if (menuPedidosAdmin) {
        menuPedidosAdmin.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Click en menuPedidosAdmin');
            closeUserMenu(); // Cerrar el menú antes de mostrar la sección
            showPedidosAdmin();
        });
    }

    if (menuInventario) {
        menuInventario.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Click en menuInventario');
            closeUserMenu(); // Cerrar el menú antes de mostrar la sección
            showInventario();
        });
    }

    const menuEditarItems = document.getElementById('menuEditarItems');
    if (menuEditarItems) {
        menuEditarItems.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Click en menuEditarItems');
            closeUserMenu(); // Cerrar el menú antes de mostrar la sección
            showEditarItems();
        });
    }

    if (menuProductosMasVendidos) {
        menuProductosMasVendidos.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('Click en menuProductosMasVendidos');
            closeUserMenu(); // Cerrar el menú antes de mostrar la sección
            showProductosMasVendidos();
        });
    }

    // Este listener ya no es necesario, la lógica está en el listener anterior

    // Event listeners para botones de volver
    const backFromMiCuentaBtn = document.getElementById('backFromMiCuentaBtn');
    const backFromPedidosBtn = document.getElementById('backFromPedidosBtn');
    const backFromFavoritosBtn = document.getElementById('backFromFavoritosBtn');
    const backFromNotificacionesBtn = document.getElementById('backFromNotificacionesBtn');
    const backFromAyudaBtn = document.getElementById('backFromAyudaBtn');

    if (backFromMiCuentaBtn) {
        backFromMiCuentaBtn.addEventListener('click', hideAllUserSections);
    }
    if (backFromPedidosBtn) {
        backFromPedidosBtn.addEventListener('click', hideAllUserSections);
    }
    if (backFromFavoritosBtn) {
        backFromFavoritosBtn.addEventListener('click', hideAllUserSections);
    }
    if (backFromNotificacionesBtn) {
        backFromNotificacionesBtn.addEventListener('click', hideAllUserSections);
    }
    if (backFromAyudaBtn) {
        backFromAyudaBtn.addEventListener('click', hideAllUserSections);
    }

    // Botones volver de secciones de administrador
    const backFromUsuariosBtn = document.getElementById('backFromUsuariosBtn');
    const backFromPedidosAdminBtn = document.getElementById('backFromPedidosAdminBtn');
    const backFromInventarioBtn = document.getElementById('backFromInventarioBtn');
    const backFromEditarItemsBtn = document.getElementById('backFromEditarItemsBtn');
    const backFromProductosMasVendidosBtn = document.getElementById('backFromProductosMasVendidosBtn');
    const backFromEstadisticasBtn = document.getElementById('backFromEstadisticasBtn');

    if (backFromUsuariosBtn) {
        backFromUsuariosBtn.addEventListener('click', hideAllAdminSections);
    }
    if (backFromPedidosAdminBtn) {
        backFromPedidosAdminBtn.addEventListener('click', hideAllAdminSections);
    }
    if (backFromInventarioBtn) {
        backFromInventarioBtn.addEventListener('click', hideAllAdminSections);
    }
    if (backFromEditarItemsBtn) {
        backFromEditarItemsBtn.addEventListener('click', hideAllAdminSections);
    }
    if (backFromProductosMasVendidosBtn) {
        backFromProductosMasVendidosBtn.addEventListener('click', hideAllAdminSections);
    }

    // Event listener para formulario de cuenta
    const accountForm = document.getElementById('accountForm');
    if (accountForm) {
        accountForm.addEventListener('submit', handleUpdateAccount);
    }

    // Event listener para formulario de ayuda
    const helpForm = document.getElementById('helpForm');
    if (helpForm) {
        helpForm.addEventListener('submit', handleHelpSubmit);
    }
}

// Renderizar categorías
function renderCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const loadMoreCategoriesContainer = document.getElementById('loadMoreCategoriesContainer');
    if (!categoriesGrid) {
        console.error('No se encontró el elemento categoriesGrid');
        return;
    }

    const allCategories = Object.keys(categoriesConfig);
    if (allCategories.length === 0) {
        console.warn('No hay categorías configuradas');
        categoriesGrid.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No hay categorías disponibles</p>';
        return;
    }
    
    displayedCategoriesCount = 10;
    
    // Mostrar solo las primeras 10 categorías
    const categoriesToShow = allCategories.slice(0, displayedCategoriesCount);
    
    categoriesGrid.innerHTML = categoriesToShow.map(category => {
        const categoryInfo = categoriesConfig[category];
        return `
            <div class="category-card" data-category="${category}">
                <div class="category-icon">
                    <i class="${categoryInfo.icon}"></i>
                </div>
                <h4>${categoryInfo.name}</h4>
                <p class="category-count">${categoryInfo.count} items</p>
            </div>
        `;
    }).join('');

    // Mostrar botón "Ver más categorías" si hay más de 10
    if (loadMoreCategoriesContainer) {
        loadMoreCategoriesContainer.style.display = allCategories.length > 10 ? 'block' : 'none';
    }

    // Añadir event listeners a las categorías
    attachCategoryListeners();
}

// Añadir event listeners a las categorías
function attachCategoryListeners() {
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        // Remover listeners anteriores si existen
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener('click', () => {
            const category = newCard.dataset.category;
            showCategoryProducts(category);
        });
    });
}

// Cargar más categorías
function loadMoreCategories() {
    const categoriesGrid = document.getElementById('categoriesGrid');
    const loadMoreCategoriesContainer = document.getElementById('loadMoreCategoriesContainer');
    if (!categoriesGrid) return;

    const allCategories = Object.keys(categoriesConfig);
    displayedCategoriesCount += 9;
    
    // Mostrar todas las categorías hasta displayedCategoriesCount
    const categoriesToShow = allCategories.slice(0, displayedCategoriesCount);
    
    categoriesGrid.innerHTML = categoriesToShow.map(category => {
        const categoryInfo = categoriesConfig[category];
        return `
            <div class="category-card" data-category="${category}">
                <div class="category-icon">
                    <i class="${categoryInfo.icon}"></i>
                </div>
                <h4>${categoryInfo.name}</h4>
                <p class="category-count">${categoryInfo.count} items</p>
            </div>
        `;
    }).join('');

    // Ocultar botón si ya se mostraron todas las categorías
    if (loadMoreCategoriesContainer) {
        loadMoreCategoriesContainer.style.display = displayedCategoriesCount >= allCategories.length ? 'none' : 'block';
    }

    // Añadir event listeners a las nuevas categorías
    attachCategoryListeners();
}

// Renderizar nuevos productos
function renderNewProducts() {
    const newProductsList = document.getElementById('newProductsList');
    if (!newProductsList) {
        console.error('No se encontró el elemento newProductsList');
        return;
    }

    // Verificar que hay productos
    if (!products || products.length === 0) {
        console.warn('No hay productos disponibles para mostrar');
        loadProducts(); // Intentar cargar productos
        if (products.length === 0) {
            newProductsList.innerHTML = '<p style="text-align: center; padding: 2rem; color: #666;">No hay productos nuevos disponibles</p>';
            return;
        }
    }

    // Mostrar los últimos 3 productos como nuevos
    const newProducts = products.slice(-3).reverse();

    newProductsList.innerHTML = newProducts.map(product => {
        const categoryInfo = categoriesConfig[product.category];
        const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
        return `
        <div class="new-product-item" id="newProductCard-${product.id}">
            <div class="new-product-icon" style="background-image: url('${product.image}');">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none';">
                <i class="${icon}" style="display: none;"></i>
            </div>
            <div class="new-product-info">
                <div class="new-product-name">${product.name}</div>
                <div class="new-product-brand">Marca: ${product.brand || 'N/A'}</div>
                <div class="new-product-description">${product.description || ''}</div>
                <div class="new-product-price">Bs. ${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="showQuantityPanel(${product.id})" style="margin-top: 0.5rem;">
                    <i class="fas fa-cart-plus"></i> Anadir al Carrito
                </button>
                <div class="quantity-panel" id="quantityPanel-${product.id}" style="display: none;">
                    ${generateQuantityPanelHTML(product.id, product)}
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Mostrar más ofertas
function showMoreOffers() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const moreOffersSection = document.getElementById('moreOffersSection');
    const moreOffersGrid = document.getElementById('moreOffersGrid');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');

    if (!moreOffersSection || !moreOffersGrid) return;

    // Aquí puedes agregar más ofertas
    const allOffers = [
        {
            id: 'offer1',
            image: 'img/ofertas/pack-completo.jpg',
            badge: '-20%',
            title: 'Pack Completo',
            description: 'Todo lo necesario para empezar el curso',
            price: 'Bs. 29.99'
        },
        {
            id: 'offer2',
            image: 'img/ofertas/mochila-premium.jpg',
            badge: '-15%',
            title: 'Mochila Premium',
            description: 'Mochila resistente y cómoda',
            price: 'Bs. 24.99'
        },
        {
            id: 'offer3',
            image: 'img/ofertas/set-escritura.jpg',
            badge: '-30%',
            title: 'Set de Escritura',
            description: 'Lápices, bolígrafos y más',
            price: 'Bs. 12.99'
        },
        {
            id: 'offer4',
            image: 'img/ofertas/cuadernos-pack.jpg',
            badge: '-25%',
            title: 'Pack de Cuadernos',
            description: 'Set completo de cuadernos para todo el año',
            price: 'Bs. 19.99'
        },
        {
            id: 'offer5',
            image: 'img/ofertas/estuche-completo.jpg',
            badge: '-18%',
            title: 'Estuche Completo',
            description: 'Todo el material de escritura organizado',
            price: 'Bs. 15.99'
        },
        {
            id: 'offer6',
            image: 'img/ofertas/mochila-deportiva.jpg',
            badge: '-22%',
            title: 'Mochila Deportiva',
            description: 'Perfecta para el gimnasio y el colegio',
            price: 'Bs. 27.99'
        }
    ];

    moreOffersGrid.innerHTML = allOffers.map(offer => `
        <div class="offer-item">
            <div class="offer-image" style="background-image: url('${offer.image}'); background-size: cover; background-position: center; background-color: #f0f0f0;">
                <div class="offer-overlay"></div>
            </div>
            <div class="offer-badge">${offer.badge}</div>
            <div class="offer-content">
                <h4>${offer.title}</h4>
                <p>${offer.description}</p>
                <span class="offer-price">${offer.price}</span>
            </div>
        </div>
    `).join('');
    
    // Manejar errores de carga de imágenes en ofertas (evitar errores 404 en consola)
    moreOffersGrid.querySelectorAll('.offer-image').forEach((imgDiv, index) => {
        const img = new Image();
        img.onerror = function() {
            // Si la imagen falla, usar un color de fondo en lugar de la imagen
            imgDiv.style.backgroundImage = 'none';
            imgDiv.style.backgroundColor = '#e0e0e0';
        };
        img.src = allOffers[index].image;
    });

    // Ocultar secciones principales
    if (offersSection) offersSection.style.display = 'none';
    if (newProductsSection) newProductsSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsSection) newsSection.style.display = 'none';
    
    // Mostrar sección de más ofertas
    moreOffersSection.style.display = 'block';
    moreOffersSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Ocultar más ofertas
function hideMoreOffers() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const moreOffersSection = document.getElementById('moreOffersSection');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');

    if (moreOffersSection) moreOffersSection.style.display = 'none';
    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';

    offersSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mostrar más productos nuevos
function showMoreNewProducts() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const moreNewProductsSection = document.getElementById('moreNewProductsSection');
    const moreNewProductsGrid = document.getElementById('moreNewProductsGrid');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');

    if (!moreNewProductsSection || !moreNewProductsGrid) return;

    // Mostrar más productos nuevos (los últimos 12)
    const moreNewProducts = products.slice(-12).reverse();

    moreNewProductsGrid.innerHTML = moreNewProducts.map(product => {
        const categoryInfo = categoriesConfig[product.category];
        const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
        return `
        <div class="new-product-item" id="newProductCard-${product.id}">
            <div class="new-product-icon" style="background-image: url('${product.image}');">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.style.display='none';">
                <i class="${icon}" style="display: none;"></i>
            </div>
            <div class="new-product-info">
                <div class="new-product-name">${product.name}</div>
                <div class="new-product-brand">Marca: ${product.brand || 'N/A'}</div>
                <div class="new-product-description">${product.description || ''}</div>
                <div class="new-product-price">Bs. ${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="showQuantityPanel(${product.id})" style="margin-top: 0.5rem;">
                    <i class="fas fa-cart-plus"></i> Anadir al Carrito
                </button>
                <div class="quantity-panel" id="quantityPanel-${product.id}" style="display: none;">
                    ${generateQuantityPanelHTML(product.id, product)}
                </div>
            </div>
        </div>
    `;
    }).join('');
    
    // Ocultar secciones principales
    if (offersSection) offersSection.style.display = 'none';
    if (newProductsSection) newProductsSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsSection) newsSection.style.display = 'none';
    
    // Mostrar sección de más productos nuevos
    moreNewProductsSection.style.display = 'block';
    moreNewProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Ocultar más productos nuevos
function hideMoreNewProducts() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const moreNewProductsSection = document.getElementById('moreNewProductsSection');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');

    if (moreNewProductsSection) moreNewProductsSection.style.display = 'none';
    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';

    newProductsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Mostrar página de búsqueda de productos
function showProductsSearch() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const productsSearchSection = document.getElementById('productsSearchSection');
    const productsSection = document.querySelector('.products');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');
    const moreOffersSection = document.getElementById('moreOffersSection');
    const moreNewProductsSection = document.getElementById('moreNewProductsSection');
    const categoryProductsSection = document.getElementById('categoryProductsSection');

    if (!productsSearchSection) {
        return;
    }

    // Ocultar otras secciones dentro de productos
    if (offersSection) offersSection.style.display = 'none';
    if (newProductsSection) newProductsSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (newsSection) newsSection.style.display = 'none';
    if (moreOffersSection) moreOffersSection.style.display = 'none';
    if (moreNewProductsSection) moreNewProductsSection.style.display = 'none';
    if (categoryProductsSection) categoryProductsSection.style.display = 'none';

    // Renderizar filtros de categorías
    renderCategoryFilters();
    
    // Renderizar todos los productos
    renderAllProducts(products);
    
    // Mostrar sección de búsqueda
    productsSearchSection.style.display = 'block';
    
    // Scroll suave a la sección de productos
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Ir al inicio - cerrar todas las secciones y mostrar las principales
function goToInicio() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    // Ocultar panel de administración si está visible
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Ocultar todas las secciones especiales
    const productsSearchSection = document.getElementById('productsSearchSection');
    const categoryProductsSection = document.getElementById('categoryProductsSection');
    const moreOffersSection = document.getElementById('moreOffersSection');
    const moreNewProductsSection = document.getElementById('moreNewProductsSection');
    
    // Ocultar secciones especiales
    if (productsSearchSection) productsSearchSection.style.display = 'none';
    if (categoryProductsSection) categoryProductsSection.style.display = 'none';
    if (moreOffersSection) moreOffersSection.style.display = 'none';
    if (moreNewProductsSection) moreNewProductsSection.style.display = 'none';
    
    // Mostrar secciones principales
    const heroSection = document.querySelector('.hero');
    const productsSection = document.querySelector('.products');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');
    
    if (heroSection) heroSection.style.display = 'block';
    if (productsSection) productsSection.style.display = 'block';
    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';
    
    // Renderizar productos y categorías para asegurar que se muestren
    renderNewProducts();
    renderCategories();
    
    // Cerrar todos los paneles de cantidad
    document.querySelectorAll('.quantity-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    
    // Scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Ocultar página de búsqueda
function hideProductsSearch() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const productsSearchSection = document.getElementById('productsSearchSection');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');

    if (!productsSearchSection) return;

    // Ocultar sección de búsqueda
    productsSearchSection.style.display = 'none';

    // Mostrar secciones principales
    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';

    // Limpiar búsqueda
    const productSearchInput = document.getElementById('productSearchInput');
    if (productSearchInput) productSearchInput.value = '';
    clearSearch();
}

// Renderizar filtros de categorías
function renderCategoryFilters() {
    const categoryFilters = document.getElementById('categoryFilters');
    if (!categoryFilters) return;

    const categories = Object.keys(categoriesConfig).filter(cat => categoriesConfig[cat].count > 0);
    
    categoryFilters.innerHTML = categories.map(category => {
        const categoryInfo = categoriesConfig[category];
        return `
            <div class="filter-option">
                <input type="checkbox" id="filter-${category}" value="${category}" class="category-filter-checkbox">
                <label for="filter-${category}">${categoryInfo.name} (${categoryInfo.count})</label>
            </div>
        `;
    }).join('');

    // Añadir event listeners a los checkboxes
    const checkboxes = document.querySelectorAll('.category-filter-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', handleProductSearch);
    });
}

// Renderizar todos los productos
function renderAllProducts(productsToRender) {
    const allProductsGrid = document.getElementById('allProductsGrid');
    const resultsCount = document.getElementById('resultsCount');
    
    if (!allProductsGrid) return;

    if (productsToRender.length === 0) {
        allProductsGrid.innerHTML = '<p style="text-align: center; padding: 3rem; color: #999;">No se encontraron productos</p>';
        if (resultsCount) resultsCount.textContent = 'No se encontraron productos';
        return;
    }

    allProductsGrid.innerHTML = productsToRender.map(product => {
        const categoryInfo = categoriesConfig[product.category];
        const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
        return `
        <div class="product-card" id="productCard-${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.innerHTML='<i class=\\'${icon}\\'></i>'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center';">
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-brand">Marca: ${product.brand || 'N/A'}</div>
                <div class="product-description">${product.description || ''}</div>
                <div class="product-price">Bs. ${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="showQuantityPanel(${product.id})">
                    <i class="fas fa-cart-plus"></i> Anadir al Carrito
                </button>
                <div class="quantity-panel" id="quantityPanel-${product.id}" style="display: none;">
                    ${generateQuantityPanelHTML(product.id, product)}
                </div>
            </div>
        </div>
    `;
    }).join('');

    if (resultsCount) {
        resultsCount.textContent = `Mostrando ${productsToRender.length} producto${productsToRender.length !== 1 ? 's' : ''}`;
    }
}

// Manejar búsqueda y filtrado
function handleProductSearch() {
    const searchInput = document.getElementById('productSearchInput');
    const priceRange = document.getElementById('priceRange');
    const sortSelect = document.getElementById('sortSelect');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    const searchTerm = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const maxPrice = priceRange ? parseFloat(priceRange.value) : 50;
    const sortBy = sortSelect ? sortSelect.value : 'name-asc';

    // Mostrar/ocultar botón de limpiar
    if (clearSearchBtn) {
        clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
    }

    // Obtener categorias seleccionadas
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter-checkbox:checked'))
        .map(cb => cb.value);
    
    // Obtener marcas seleccionadas
    const selectedBrands = Array.from(document.querySelectorAll('.brand-checkbox:checked'))
        .map(cb => cb.value);

    // Filtrar productos
    let filteredProducts = products.filter(product => {
        // Filtro por búsqueda (insensible a tildes)
        const normalizedSearchTerm = normalizeText(searchTerm);
        const matchesSearch = !searchTerm || 
            (product.nameNormalized && product.nameNormalized.includes(normalizedSearchTerm)) ||
            normalizeText(product.name).includes(normalizedSearchTerm);
        
        // Filtro por categoria
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        
        // Filtro por marca
        const matchesBrand = selectedBrands.length === 0 || (product.brand && selectedBrands.includes(product.brand));
        
        // Filtro por precio
        const matchesPrice = product.price <= maxPrice;

        return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    // Ordenar productos
    filteredProducts.sort((a, b) => {
        switch(sortBy) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-asc':
                return a.price - b.price;
            case 'price-desc':
                return b.price - a.price;
            default:
                return 0;
        }
    });

    // Renderizar productos filtrados
    renderAllProducts(filteredProducts);
}

// Limpiar búsqueda
function clearSearch() {
    const productSearchInput = document.getElementById('productSearchInput');
    const clearSearchBtn = document.getElementById('clearSearchBtn');
    
    if (productSearchInput) productSearchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.style.display = 'none';
    
    handleProductSearch();
}

// Resetear filtros
function resetFilters() {
    // Limpiar busqueda
    clearSearch();
    
    // Resetear checkboxes de categoria
    const checkboxes = document.querySelectorAll('.category-filter-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Resetear checkboxes de marca
    const brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    brandCheckboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Resetear precio
    const priceRange = document.getElementById('priceRange');
    const maxPriceDisplay = document.getElementById('maxPriceDisplay');
    if (priceRange) {
        priceRange.value = 50;
        if (maxPriceDisplay) maxPriceDisplay.textContent = '50';
    }
    
    // Resetear orden
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) sortSelect.value = 'name-asc';
    
    // Aplicar filtros
    handleProductSearch();
}

// Mostrar productos por categoría
function showCategoryProducts(category) {
    // Cerrar menú de usuario si está abierto y ocultar secciones de usuario
    closeUserMenu();
    hideUserSections();
    
    const categoryProductsSection = document.getElementById('categoryProductsSection');
    const categoryProductsGrid = document.getElementById('categoryProductsGrid');
    const categoryTitle = document.getElementById('categoryTitle');
    const categoriesSection = document.querySelector('.categories-section');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const newsSection = document.querySelector('.news-section');
    const productsSearchSection = document.getElementById('productsSearchSection');
    const loadMoreContainer = document.getElementById('loadMoreContainer');

    if (!categoryProductsSection || !categoryProductsGrid) return;

    currentCategoryProducts = products.filter(p => p.category === category);
    displayedProductsCount = 10;
    
    if (currentCategoryProducts.length === 0) {
        categoryProductsGrid.innerHTML = '<p style="text-align: center; padding: 2rem;">No hay productos en esta categoría</p>';
        if (loadMoreContainer) loadMoreContainer.style.display = 'none';
    } else {
        renderCategoryProducts();
        
        // Mostrar botón "ver más" si hay más de 10 productos
        if (loadMoreContainer) {
            loadMoreContainer.style.display = currentCategoryProducts.length > 10 ? 'block' : 'none';
        }
    }

    const categoryInfo = categoriesConfig[category];
    categoryTitle.textContent = categoryInfo ? categoryInfo.name : category;
    
    // Ocultar secciones principales y mostrar productos de categoría
    if (categoriesSection) categoriesSection.style.display = 'none';
    if (offersSection) offersSection.style.display = 'none';
    if (newProductsSection) newProductsSection.style.display = 'none';
    if (newsSection) newsSection.style.display = 'none';
    if (productsSearchSection) productsSearchSection.style.display = 'none';
    categoryProductsSection.style.display = 'block';

    // Scroll suave a la sección
    categoryProductsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Renderizar productos de categoría (solo los primeros N)
function renderCategoryProducts() {
    const categoryProductsGrid = document.getElementById('categoryProductsGrid');
    if (!categoryProductsGrid) return;

    const productsToShow = currentCategoryProducts.slice(0, displayedProductsCount);
    
    categoryProductsGrid.innerHTML = productsToShow.map(product => {
        const categoryInfo = categoriesConfig[product.category];
        const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
        return `
        <div class="product-card" id="productCard-${product.id}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.innerHTML='<i class=\\'${icon}\\'></i>'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center';">
            </div>
            <div class="product-info">
                <div class="product-category">${getCategoryName(product.category)}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-brand">Marca: ${product.brand || 'N/A'}</div>
                <div class="product-description">${product.description || ''}</div>
                <div class="product-price">Bs. ${product.price.toFixed(2)}</div>
                <button class="add-to-cart" onclick="showQuantityPanel(${product.id})">
                    <i class="fas fa-cart-plus"></i> Anadir al Carrito
                </button>
                <div class="quantity-panel" id="quantityPanel-${product.id}" style="display: none;">
                    ${generateQuantityPanelHTML(product.id, product)}
                </div>
            </div>
        </div>
    `;
    }).join('');
}

// Cargar más productos
function loadMoreProducts() {
    displayedProductsCount += 9;
    renderCategoryProducts();
    
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    if (loadMoreContainer) {
        // Ocultar botón si ya se mostraron todos los productos
        if (displayedProductsCount >= currentCategoryProducts.length) {
            loadMoreContainer.style.display = 'none';
        }
    }
}

// Ocultar productos por categoría
function hideCategoryProducts() {
    // Cerrar menú de usuario/admin si está abierto y ocultar secciones
    closeUserMenu();
    hideUserSections();
    hideAdminSections();
    
    const categoryProductsSection = document.getElementById('categoryProductsSection');
    const categoriesSection = document.querySelector('.categories-section');
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const newsSection = document.querySelector('.news-section');

    if (categoryProductsSection) categoryProductsSection.style.display = 'none';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';

    // Resetear contador
    displayedProductsCount = 10;
    currentCategoryProducts = [];

    // Scroll suave a las categorías
    categoriesSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Obtener nombre de categoría
function getCategoryName(category) {
    const categoryInfo = categoriesConfig[category];
    return categoryInfo ? categoryInfo.name : category;
}

// Añadir al carrito
// Almacenar cantidades por producto
const productQuantities = {};
const productColorQuantities = {}; // Almacenar cantidades por color para cada producto

// Función para convertir unidades a docenas y unidades restantes
function convertToDozensAndUnits(totalUnits) {
    const dozens = Math.floor(totalUnits / 12);
    const units = totalUnits % 12;
    return { dozens, units };
}

// Función para formatear cantidad en docenas y unidades
function formatQuantity(quantity) {
    if (quantity === 0) return '0 unidades';
    
    const { dozens, units } = convertToDozensAndUnits(quantity);
    let result = [];
    
    if (dozens > 0) {
        if (dozens === 1) {
            result.push('1 docena');
        } else {
            result.push(`${dozens} docenas`);
        }
    }
    
    if (units > 0) {
        if (units === 1) {
            result.push('1 unidad');
        } else if (units === 6) {
            result.push('media docena');
        } else if (units > 6) {
            // Si hay más de 6 unidades, mostrar media docena + unidades restantes
            result.push('media docena');
            const remaining = units - 6;
            if (remaining > 0) {
                if (remaining === 1) {
                    result.push('1 unidad');
                } else {
                    result.push(`${remaining} unidades`);
                }
            }
        } else {
            result.push(`${units} unidades`);
        }
    }
    
    return result.join(' y ') || '0 unidades';
}

// Función para formatear unidades
function formatUnits(units) {
    if (units === 0) return '0 unidades';
    if (units === 1) return '1 unidad';
    return `${units} unidades`;
}

// Función para formatear docenas
function formatDozens(dozens) {
    if (dozens === 0) return '0 docenas';
    if (dozens === 1) return '1 docena';
    return `${dozens} docenas`;
}

// Función para generar HTML del panel de cantidad (con o sin colores)
function generateQuantityPanelHTML(productId, product) {
    const hasColors = product.color && product.color.trim() !== '' && product.color.trim() !== '-';
    const colores = hasColors ? product.color.split(',').map(c => c.trim()).filter(c => c && c !== '-') : [];
    const stockPorColor = product.stockByColor || {};
    
    let content = '';
    
    if (hasColors && colores.length > 0) {
        // Si tiene colores, solo mostrar opciones de colores
        content = `
            <div class="quantity-section">
                <div class="quantity-label" style="margin-bottom: 1rem;">
                    <i class="fas fa-palette" style="color: var(--primary-color); margin-right: 5px;"></i>
                    Seleccionar Colores y Cantidades:
                </div>
                <div id="colorQuantities-${productId}" style="display: flex; flex-direction: column; gap: 0.75rem;">
                    ${colores.map(color => {
                        const stockColor = stockPorColor[color] || 0;
                        return `
                            <div style="display: flex; align-items: center; gap: 1rem; padding: 0.75rem; background: #f8f9fa; border-radius: 5px;">
                                <div style="flex: 1; font-weight: 600; color: var(--dark-color); text-transform: capitalize;">
                                    ${color.charAt(0).toUpperCase() + color.slice(1)}
                                    ${stockColor > 0 ? `<span style="font-size: 0.85rem; color: #666; font-weight: normal;">(Stock: ${stockColor})</span>` : ''}
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <input type="number" 
                                           id="colorQty-${productId}-${color}" 
                                           value="0" 
                                           min="0" 
                                           max="${stockColor > 0 ? stockColor : ''}"
                                           style="width: 60px; text-align: center; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-weight: 600;"
                                           onchange="updateColorQuantityDisplay(${productId}, '${color}')">
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
        `;
    } else {
        // Si NO tiene colores, mostrar unidades y docenas (solo inputs, sin botones)
        content = `
            <div class="quantity-section">
                <div class="quantity-label" style="margin-bottom: 0.5rem;">Unidades</div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="number" 
                           id="unitsInput-${productId}" 
                           value="0" 
                           min="0" 
                           style="width: 100px; text-align: center; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-weight: 600;"
                           onchange="updateUnitsDisplay(${productId})">
                    <span style="font-weight: 600; color: var(--dark-color);">unidades</span>
                </div>
            </div>
            <div class="quantity-section">
                <div class="quantity-label" style="margin-bottom: 0.5rem;">Docenas</div>
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <input type="number" 
                           id="dozensInput-${productId}" 
                           value="0" 
                           min="0" 
                           style="width: 100px; text-align: center; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-weight: 600;"
                           onchange="updateDozensDisplay(${productId})">
                    <span style="font-weight: 600; color: var(--dark-color);">docenas</span>
                </div>
                <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="number" 
                           id="dozenUnitsInput-${productId}" 
                           value="0" 
                           min="0" 
                           max="11"
                           style="width: 100px; text-align: center; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-weight: 600;"
                           onchange="updateDozenUnitsDisplay(${productId})">
                    <span style="font-weight: 600; color: var(--dark-color);">unidades</span>
                </div>
            </div>
        `;
    }
    
    return `
        ${content}
        <div class="quantity-panel-actions">
            <button class="btn-cancel-small" onclick="hideQuantityPanel(${productId})">Cancelar</button>
            <button class="btn-confirm-small" onclick="confirmAddToCartFromPanel(${productId})">Añadir</button>
        </div>
    `;
}

// Cambiar cantidad por color
function changeColorQuantity(productId, color, change) {
    // Convertir productId a número si es string
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    
    if (!productColorQuantities[numericProductId]) {
        productColorQuantities[numericProductId] = {};
    }
    if (!productColorQuantities[numericProductId][color]) {
        productColorQuantities[numericProductId][color] = 0;
    }
    
    const currentValue = productColorQuantities[numericProductId][color] || 0;
    const newValue = Math.max(0, currentValue + change);
    const product = products.find(p => p.id === numericProductId);
    const stockPorColor = product?.stockByColor || {};
    const maxStock = stockPorColor[color] || 0;
    
    if (maxStock > 0 && newValue > maxStock) {
        alert(`No hay suficiente stock. Disponible: ${maxStock} unidades de ${color}`);
        return;
    }
    
    productColorQuantities[numericProductId][color] = newValue;
    
    // Actualizar el input directamente e inmediatamente
    const input = document.getElementById(`colorQty-${numericProductId}-${color}`);
    if (input) {
        input.value = newValue;
    }
    
    // También llamar a la función de actualización por si acaso
    updateColorQuantityDisplay(numericProductId, color);
}

// Actualizar display de cantidad por color
function updateColorQuantityDisplay(productId, color) {
    // Convertir productId a número si es string
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    
    const input = document.getElementById(`colorQty-${numericProductId}-${color}`);
    if (input) {
        // Leer el valor del input y actualizar productColorQuantities
        const inputValue = parseInt(input.value, 10) || 0;
        if (!productColorQuantities[numericProductId]) {
            productColorQuantities[numericProductId] = {};
        }
        productColorQuantities[numericProductId][color] = inputValue;
    }
}

// Actualizar display de unidades
function updateUnitsDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`unitsInput-${numericProductId}`);
    if (input) {
        const value = parseInt(input.value, 10) || 0;
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].units = value;
    }
}

// Actualizar display de docenas
function updateDozensDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`dozensInput-${numericProductId}`);
    if (input) {
        const value = parseInt(input.value, 10) || 0;
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].dozens = value;
    }
}

// Actualizar display de unidades de docenas
function updateDozenUnitsDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`dozenUnitsInput-${numericProductId}`);
    if (input) {
        let value = parseInt(input.value, 10) || 0;
        // Limitar a máximo 11 unidades
        if (value > 11) {
            value = 11;
            input.value = 11;
        }
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].dozenUnits = value;
    }
}

// Actualizar display de unidades
function updateUnitsDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`unitsInput-${numericProductId}`);
    if (input) {
        const value = parseInt(input.value, 10) || 0;
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].units = value;
    }
}

// Actualizar display de docenas
function updateDozensDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`dozensInput-${numericProductId}`);
    if (input) {
        const value = parseInt(input.value, 10) || 0;
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].dozens = value;
    }
}

// Actualizar display de unidades de docenas
function updateDozenUnitsDisplay(productId) {
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    const input = document.getElementById(`dozenUnitsInput-${numericProductId}`);
    if (input) {
        let value = parseInt(input.value, 10) || 0;
        // Limitar a máximo 11 unidades
        if (value > 11) {
            value = 11;
            input.value = 11;
        }
        if (!productQuantities[numericProductId]) {
            productQuantities[numericProductId] = { units: 0, dozens: 0, dozenUnits: 0 };
        }
        productQuantities[numericProductId].dozenUnits = value;
    }
}

// Mostrar panel de cantidad como modal
function showQuantityPanel(productId) {
    console.log('showQuantityPanel llamado con productId:', productId);
    
    // Ocultar todos los modales y paneles abiertos
    const existingModal = document.getElementById('quantityModalOverlay');
    if (existingModal) {
        existingModal.remove();
    }
    document.querySelectorAll('.quantity-panel').forEach(panel => {
        panel.style.display = 'none';
    });
    
    // Inicializar cantidades si no existen
    if (!productQuantities[productId]) {
        productQuantities[productId] = {
            units: 0,
            dozens: 0,
            dozenUnits: 0
        };
    }
    
    // Inicializar cantidades por color si no existen
    if (!productColorQuantities[productId]) {
        productColorQuantities[productId] = {};
    }
    
    const product = products.find(p => p.id === productId);
    if (!product) {
        alert('Error: Producto no encontrado.');
        return;
    }
    
    // Crear modal overlay
    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'quantityModalOverlay';
    modalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(5px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        animation: fadeIn 0.3s ease;
    `;
    
    // Crear contenido del modal
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
        background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
        border-radius: 20px;
        padding: 2rem;
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        position: relative;
        animation: slideUp 0.3s ease;
    `;
    
    // Header del modal
    const modalHeader = document.createElement('div');
    modalHeader.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1rem;
        border-bottom: 3px solid var(--primary-color);
    `;
    
    const modalTitle = document.createElement('h3');
    modalTitle.textContent = product.name;
    modalTitle.style.cssText = `
        margin: 0;
        color: var(--dark-color);
        font-size: 1.5rem;
        font-weight: 700;
    `;
    
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        background: transparent;
        border: none;
        font-size: 2rem;
        color: #999;
        cursor: pointer;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s;
    `;
    closeBtn.onmouseover = () => {
        closeBtn.style.background = '#f0f0f0';
        closeBtn.style.color = 'var(--dark-color)';
    };
    closeBtn.onmouseout = () => {
        closeBtn.style.background = 'transparent';
        closeBtn.style.color = '#999';
    };
    closeBtn.onclick = () => hideQuantityPanel(productId);
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeBtn);
    
    // Body del modal con el panel de cantidad
    const modalBody = document.createElement('div');
    modalBody.className = 'quantity-panel';
    modalBody.innerHTML = generateQuantityPanelHTML(productId, product);
    
    // Agregar event listeners directamente a los botones después de crear el HTML
    setTimeout(() => {
        // Botones de unidades
        const unitsMinus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'units', -1)"]`);
        const unitsPlus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'units', 1)"]`);
        if (unitsMinus) unitsMinus.onclick = () => changeQuantity(productId, 'units', -1);
        if (unitsPlus) unitsPlus.onclick = () => changeQuantity(productId, 'units', 1);
        
        // Botones de docenas
        const dozensMinus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'dozens', -1)"]`);
        const dozensPlus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'dozens', 1)"]`);
        if (dozensMinus) dozensMinus.onclick = () => changeQuantity(productId, 'dozens', -1);
        if (dozensPlus) dozensPlus.onclick = () => changeQuantity(productId, 'dozens', 1);
        
        // Botones de unidades de docenas
        const dozenUnitsMinus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'dozenUnits', -1)"]`);
        const dozenUnitsPlus = modalBody.querySelector(`button[onclick*="changeQuantity(${productId}, 'dozenUnits', 1)"]`);
        if (dozenUnitsMinus) dozenUnitsMinus.onclick = () => changeQuantity(productId, 'dozenUnits', -1);
        if (dozenUnitsPlus) dozenUnitsPlus.onclick = () => changeQuantity(productId, 'dozenUnits', 1);
        
        // Los botones de colores han sido eliminados, solo queda el input
    }, 50);
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalOverlay.appendChild(modalContent);
    
    // Cerrar al hacer clic fuera del modal
    modalOverlay.onclick = (e) => {
        if (e.target === modalOverlay) {
            hideQuantityPanel(productId);
        }
    };
    
    document.body.appendChild(modalOverlay);
    
    // Esperar a que el DOM se actualice antes de actualizar displays
    setTimeout(() => {
        // Solo actualizar displays de unidades/docenas si el producto NO tiene colores
        const hasColors = product.color && product.color.trim() !== '' && product.color.trim() !== '-';
        if (!hasColors) {
            updateQuantityDisplays(productId);
        }
        
        // Actualizar inputs de colores si existen
        if (productColorQuantities[productId]) {
            Object.keys(productColorQuantities[productId]).forEach(color => {
                const input = document.getElementById(`colorQty-${productId}-${color}`);
                if (input) {
                    input.value = productColorQuantities[productId][color] || 0;
                }
            });
        }
    }, 100);
    
    // Agregar estilos de animación si no existen
    if (!document.getElementById('quantityModalStyles')) {
        const style = document.createElement('style');
        style.id = 'quantityModalStyles';
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// Ocultar panel de cantidad
function hideQuantityPanel(productId) {
    // Ocultar modal si existe
    const modalOverlay = document.getElementById('quantityModalOverlay');
    if (modalOverlay) {
        modalOverlay.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            modalOverlay.remove();
        }, 300);
    }
    
    // También ocultar paneles antiguos si existen
    const panel = document.getElementById(`quantityPanel-${productId}`);
    if (panel) {
        panel.style.display = 'none';
    }
}

// Cambiar cantidad
function changeQuantity(productId, type, change) {
    console.log('=== changeQuantity INICIADO ===');
    console.log('Parámetros:', { productId, type, change });
    
    // Convertir productId a número si es string
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    
    if (!productQuantities[numericProductId]) {
        productQuantities[numericProductId] = {
            units: 0,
            dozens: 0,
            dozenUnits: 0
        };
    }
    
    const qty = productQuantities[numericProductId];
    console.log('Cantidades ANTES:', { ...qty });
    
    if (type === 'units') {
        qty.units = Math.max(1, qty.units + change);
        // Si se cambia unidades, resetear docenas
        qty.dozens = 0;
        qty.dozenUnits = 0;
    } else if (type === 'dozens') {
        qty.dozens = Math.max(0, qty.dozens + change);
        // Si se cambia docenas, resetear unidades
        qty.units = 0;
    } else if (type === 'dozenUnits') {
        // Si se incrementa y pasa de 11, convertir a docenas
        if (change > 0) {
            qty.dozenUnits += change;
            // Si pasa de 11, convertir a docenas
            while (qty.dozenUnits >= 12) {
                qty.dozens += 1;
                qty.dozenUnits -= 12;
            }
        } else {
            // Si se decrementa, solo bajar hasta 0
            qty.dozenUnits = Math.max(0, qty.dozenUnits + change);
        }
        // Si se cambia unidades de docenas, resetear unidades simples
        qty.units = 0;
    }
    
    console.log('Cantidades DESPUÉS:', { ...qty });
    console.log('Llamando updateQuantityDisplays con:', numericProductId);
    updateQuantityDisplays(numericProductId);
    console.log('=== changeQuantity COMPLETADO ===');
}

// Actualizar displays de cantidad
function updateQuantityDisplays(productId) {
    const qty = productQuantities[productId];
    if (!qty) {
        return;
    }
    
    // Verificar si el producto tiene colores - si los tiene, no buscar displays de unidades/docenas
    const product = products.find(p => p.id === productId);
    const hasColors = product && product.color && product.color.trim() !== '' && product.color.trim() !== '-';
    
    if (hasColors) {
        // Si tiene colores, no hay displays de unidades/docenas, solo retornar
        return;
    }
    
    // Buscar elementos en todo el documento (incluyendo el modal)
    const unitsDisplay = document.getElementById(`unitsDisplay-${productId}`);
    const dozensDisplay = document.getElementById(`dozensDisplay-${productId}`);
    const dozenUnitsDisplay = document.getElementById(`dozenUnitsDisplay-${productId}`);
    
    if (unitsDisplay) {
        unitsDisplay.textContent = formatUnits(qty.units);
    }
    
    if (dozensDisplay) {
        dozensDisplay.textContent = formatDozens(qty.dozens);
    }
    
    if (dozenUnitsDisplay) {
        dozenUnitsDisplay.textContent = formatUnits(qty.dozenUnits);
    }
}

// Confirmar y añadir al carrito desde el panel
// NOTA: Esta función permite agregar productos al carrito SIN necesidad de tener una cuenta.
// Solo se requiere cuenta al finalizar la compra (handleCheckout).
function confirmAddToCartFromPanel(productId) {
    console.log('=== confirmAddToCartFromPanel INICIADO ===');
    console.log('productId recibido:', productId);
    console.log('Tipo de productId:', typeof productId);
    console.log('Carrito antes de agregar:', cart);
    console.log('Cantidad de productos disponibles:', products.length);
    
    // Asegurar que cart esté inicializado
    if (!cart || !Array.isArray(cart)) {
        console.warn('Carrito no inicializado, inicializando...');
        cart = [];
    }
    
    // Convertir productId a número si es string
    const numericProductId = typeof productId === 'string' ? parseInt(productId, 10) : productId;
    console.log('productId numérico:', numericProductId);
    
    const product = products.find(p => p.id === numericProductId);
    if (!product) {
        console.error('Producto no encontrado con ID:', numericProductId);
        console.log('Primeros 5 productos disponibles:', products.slice(0, 5).map(p => ({ id: p.id, name: p.name })));
        alert('Error: Producto no encontrado. Por favor, recarga la página.');
        return;
    }
    
    console.log('Producto encontrado:', product);
    
    // Asegurar que las cantidades estén inicializadas
    if (!productQuantities[numericProductId]) {
        productQuantities[numericProductId] = {
            units: 0,
            dozens: 0,
            dozenUnits: 0
        };
    }
    
    const qty = productQuantities[numericProductId];
    console.log('Cantidades actuales:', qty);
    
    // Verificar si el producto tiene colores
    const hasColors = product.color && product.color.trim() !== '' && product.color.trim() !== '-';
    const colores = hasColors ? product.color.split(',').map(c => c.trim()).filter(c => c && c !== '-') : [];
    const colorQuantities = productColorQuantities[numericProductId] || {};
    
    let totalUnits = 0;
    let colorsSelected = {};
    
    if (hasColors && colores.length > 0) {
        // Si tiene colores, leer directamente de los inputs
        let totalColorUnits = 0;
        
        // Buscar el modal primero
        const modal = document.getElementById('quantityModalOverlay');
        const searchContainer = modal || document; // Buscar en el modal si existe, sino en todo el documento
        
        for (const color of colores) {
            // Leer directamente del input, buscando en el modal primero
            const inputId = `colorQty-${numericProductId}-${color}`;
            let input = searchContainer.querySelector(`#${inputId}`);
            
            // Si no se encuentra, intentar buscar en todo el documento
            if (!input) {
                input = document.getElementById(inputId);
            }
            
            let colorQty = 0;
            
            if (input) {
                colorQty = parseInt(input.value, 10) || 0;
                // Actualizar también productColorQuantities para mantener sincronización
                if (!productColorQuantities[numericProductId]) {
                    productColorQuantities[numericProductId] = {};
                }
                productColorQuantities[numericProductId][color] = colorQty;
            } else {
                // Si no se encuentra el input, usar el valor de productColorQuantities como respaldo
                colorQty = colorQuantities[color] || 0;
            }
            
            if (colorQty > 0) {
                colorsSelected[color] = colorQty;
                totalColorUnits += colorQty;
            }
        }
        
        if (totalColorUnits <= 0) {
            alert('Por favor, selecciona al menos una cantidad mayor a 0 para algún color');
            return;
        }
        
        totalUnits = totalColorUnits;
    } else {
        // Si no tiene colores, leer directamente de los inputs
        const modal = document.getElementById('quantityModalOverlay');
        const searchContainer = modal || document;
        
        const unitsInput = searchContainer.querySelector(`#unitsInput-${numericProductId}`);
        const dozensInput = searchContainer.querySelector(`#dozensInput-${numericProductId}`);
        const dozenUnitsInput = searchContainer.querySelector(`#dozenUnitsInput-${numericProductId}`);
        
        let units = 0;
        let dozens = 0;
        let dozenUnits = 0;
        
        if (unitsInput) {
            units = parseInt(unitsInput.value, 10) || 0;
        }
        if (dozensInput) {
            dozens = parseInt(dozensInput.value, 10) || 0;
        }
        if (dozenUnitsInput) {
            dozenUnits = parseInt(dozenUnitsInput.value, 10) || 0;
        }
        
        // Calcular total: sumar unidades simples + (docenas * 12) + unidades de docenas
        totalUnits = units + (dozens * 12) + dozenUnits;
        
        if (totalUnits <= 0) {
            alert('Por favor, selecciona una cantidad mayor a 0');
            return;
        }
    }
    
    console.log('Total de unidades calculadas:', totalUnits);
    console.log('Colores seleccionados:', colorsSelected);
    
    // Buscar si ya existe el mismo producto con los mismos colores
    const existingItem = cart.find(item => {
        if (item.id !== numericProductId) return false;
        
        if (hasColors) {
            // Comparar colores seleccionados
            const itemColors = item.selectedColors || {};
            const itemColorsStr = JSON.stringify(itemColors);
            const newColorsStr = JSON.stringify(colorsSelected);
            return itemColorsStr === newColorsStr;
        } else {
            // Sin colores, comparar normalmente
            return true;
        }
    });
    
    if (existingItem) {
        existingItem.quantity += totalUnits;
        console.log('Producto existente actualizado. Nueva cantidad:', existingItem.quantity);
    } else {
        const newItem = {
            ...product,
            quantity: totalUnits
        };
        
        // Agregar información de colores si los hay
        if (hasColors && Object.keys(colorsSelected).length > 0) {
            newItem.selectedColors = colorsSelected;
        }
        
        cart.push(newItem);
        console.log('Nuevo producto añadido al carrito:', newItem);
    }
    
    console.log('Carrito después de agregar:', cart);
    console.log('Cantidad de items en carrito:', cart.length);
    
    // Guardar y actualizar
    saveCart();
    updateCartUI();
    hideQuantityPanel(numericProductId);
    showNotification(`Producto añadido al carrito: ${formatQuantity(totalUnits)}`);
    
    // Resetear cantidades
    productQuantities[numericProductId] = {
        units: 1,
        dozens: 0,
        dozenUnits: 0
    };
    
    // Resetear cantidades por color
    if (productColorQuantities[numericProductId]) {
        productColorQuantities[numericProductId] = {};
    }
    
    // Resetear inputs de colores
    if (hasColors && colores.length > 0) {
        colores.forEach(color => {
            const input = document.getElementById(`colorQty-${numericProductId}-${color}`);
            if (input) {
                input.value = 0;
            }
        });
    }
    
    console.log('=== confirmAddToCartFromPanel COMPLETADO ===');
}

function addToCart(productId) {
    showQuantityPanel(productId);
}

// Las funciones ya están disponibles globalmente por defecto en JavaScript
// No es necesario asignarlas a window explícitamente

// Eliminar del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('Producto eliminado del carrito');
}

// Actualizar cantidad
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        updateCartUI();
    }
}

// Actualizar UI del carrito
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        } else {
            cartItems.innerHTML = cart.map(item => {
                const categoryInfo = categoriesConfig[item.category];
                const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
                return `
                <div class="cart-item">
                    <div class="cart-item-image">
                        <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.outerHTML='<i class=\\'${icon}\\'></i>';">
                    </div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${item.name}</div>
                        ${item.selectedColors && Object.keys(item.selectedColors).length > 0 ? `
                            <div style="font-size: 0.85rem; color: #666; margin-top: 0.25rem;">
                                ${Object.entries(item.selectedColors).map(([color, qty]) => 
                                    `${color.charAt(0).toUpperCase() + color.slice(1)}: ${qty}`
                                ).join(', ')}
                            </div>
                        ` : ''}
                        <div class="cart-item-quantity">${formatQuantity(item.quantity)}</div>
                        <div class="cart-item-price">Bs. ${item.price.toFixed(2)}</div>
                    </div>
                    <div class="cart-item-actions">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">
                            <i class="fas fa-trash"></i>
                        </button>
                    </div>
                </div>
            `;
            }).join('');
        }
    }

    if (cartTotal) {
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        cartTotal.textContent = `Bs. ${total.toFixed(2)}`;
    }
}

// Abrir carrito
function openCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.add('open');
    if (cartOverlay) cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Cerrar carrito
function closeCartSidebar() {
    const cartSidebar = document.getElementById('cartSidebar');
    const cartOverlay = document.getElementById('cartOverlay');
    
    if (cartSidebar) cartSidebar.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// Finalizar compra
// NOTA: Los usuarios pueden agregar productos al carrito sin cuenta.
// Solo se requiere cuenta al finalizar la compra.
function handleCheckout() {
    if (cart.length === 0) {
        alert('Tu carrito está vacío');
        return;
    }

    // Verificar si el usuario está logueado
    // Los usuarios pueden agregar productos al carrito sin cuenta,
    // pero necesitan una cuenta para finalizar la compra
    if (!currentUser) {
        // Si no está logueado, mostrar modal de login/registro
        showLoginModal();
        showRegisterForm(); // Mostrar formulario de registro ya que es obligatorio
        alert('Debes crear una cuenta o iniciar sesión para finalizar la compra. Puedes seguir agregando productos al carrito sin cuenta.');
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Descontar stock de los productos
    loadProducts(); // Asegurar que tenemos los productos más recientes
    cart.forEach(cartItem => {
        const product = products.find(p => p.id === cartItem.id);
        if (product) {
            // Si el producto no tiene stock, asignarle uno por defecto
            if (product.stock === undefined || product.stock === null) {
                product.stock = Math.floor(Math.random() * 190) + 10;
            }
            // Descontar la cantidad comprada
            product.stock = Math.max(0, product.stock - cartItem.quantity);
        }
    });
    saveProducts(); // Guardar los cambios en el stock
    
    // Guardar pedido
    const userOrders = JSON.parse(localStorage.getItem(`orders_${currentUser.id}`) || '[]');
    const newOrder = {
        id: Date.now(),
        userId: currentUser.id,
        items: [...cart],
        total: total,
        date: new Date().toISOString(),
        status: 'pendiente'
    };
    userOrders.push(newOrder);
    localStorage.setItem(`orders_${currentUser.id}`, JSON.stringify(userOrders));

    // Crear notificación
    const userNotifications = JSON.parse(localStorage.getItem(`notifications_${currentUser.id}`) || '[]');
    userNotifications.unshift({
        id: Date.now(),
        title: 'Pedido Realizado',
        message: `Tu pedido #${newOrder.id} ha sido realizado por un total de Bs. ${total.toFixed(2)}`,
        date: new Date().toISOString(),
        read: false
    });
    localStorage.setItem(`notifications_${currentUser.id}`, JSON.stringify(userNotifications));
    
    const message = `Gracias por tu compra, ${currentUser.firstName}!\n\nTotal: Bs. ${total.toFixed(2)}\n\nEn una aplicacion real, esto procesaria el pago.`;
    
    alert(message);
    
    cart = [];
    saveCart();
    updateCartUI();
    closeCartSidebar();
}

// ==================== SISTEMA DE USUARIOS ====================

// Cargar usuarios desde localStorage
function loadUsers() {
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    } else {
        // Crear usuario administrador por defecto
        users = [{
            id: 1,
            firstName: 'Admin',
            lastName: 'Sistema',
            phone: '70156746',
            email: 'admin@sabonis.com',
            password: 'admin123', // En producción, esto debería estar hasheado
            role: 'admin',
            createdAt: new Date().toISOString()
        }];
        saveUsers();
    }
}

// Guardar usuarios en localStorage
function saveUsers() {
    localStorage.setItem('users', JSON.stringify(users));
}

// Verificar sesión de usuario
function checkUserSession() {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
        currentUser = JSON.parse(storedUser);
        updateUserUI();
    }
}

// Guardar sesión de usuario
function saveUserSession() {
    if (currentUser) {
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
        localStorage.removeItem('currentUser');
    }
}

// Mostrar modal de login
function showLoginModal() {
    console.log('showLoginModal llamado');
    const loginModal = document.getElementById('loginModal');
    console.log('loginModal encontrado:', loginModal);
    if (loginModal) {
        loginModal.style.display = 'flex';
        console.log('Modal mostrado');
        showLoginForm();
        
        // Re-agregar event listeners por si se perdieron
        const loginForm = document.getElementById('loginForm');
        if (loginForm) {
            // Remover listeners anteriores
            const newForm = loginForm.cloneNode(true);
            loginForm.parentNode.replaceChild(newForm, loginForm);
            
            // Agregar nuevos listeners
            const updatedLoginForm = document.getElementById('loginForm');
            if (updatedLoginForm) {
                updatedLoginForm.addEventListener('submit', handleLogin);
                const loginSubmitBtn = updatedLoginForm.querySelector('button[type="submit"]');
                if (loginSubmitBtn) {
                    loginSubmitBtn.addEventListener('click', (e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Botón de login clickeado');
                        handleLogin(e);
                    });
                }
            }
        }
    } else {
        console.error('No se encontró el modal de login');
    }
}

// Ocultar modal de login
function hideLoginModal() {
    const loginModal = document.getElementById('loginModal');
    if (loginModal) {
        loginModal.style.display = 'none';
        // Limpiar formularios
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        if (loginForm) loginForm.reset();
        if (registerForm) registerForm.reset();
    }
}

// Mostrar formulario de login
function showLoginForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginToggleBtn = document.getElementById('loginToggleBtn');
    const registerToggleBtn = document.getElementById('registerToggleBtn');
    
    if (loginForm) loginForm.style.display = 'block';
    if (registerForm) registerForm.style.display = 'none';
    if (loginToggleBtn) loginToggleBtn.classList.add('active');
    if (registerToggleBtn) registerToggleBtn.classList.remove('active');
    
    // Limpiar y prevenir autocompletar
    if (loginForm) {
        loginForm.reset();
        // Forzar limpieza de campos para prevenir autocompletar
        const inputs = loginForm.querySelectorAll('input[type="text"], input[type="password"]');
        inputs.forEach(input => {
            input.value = '';
            input.setAttribute('autocomplete', 'nope');
            // Prevenir que el navegador muestre sugerencias
            input.blur();
            setTimeout(() => {
                input.focus();
                input.blur();
            }, 10);
        });
    }
}

// Mostrar formulario de registro
function showRegisterForm() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const loginToggleBtn = document.getElementById('loginToggleBtn');
    const registerToggleBtn = document.getElementById('registerToggleBtn');
    
    if (loginForm) loginForm.style.display = 'none';
    if (registerForm) registerForm.style.display = 'block';
    if (loginToggleBtn) loginToggleBtn.classList.remove('active');
    if (registerToggleBtn) registerToggleBtn.classList.add('active');
    
    // Limpiar y prevenir autocompletar
    if (registerForm) {
        registerForm.reset();
        // Forzar limpieza de campos para prevenir autocompletar
        const inputs = registerForm.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"]');
        inputs.forEach(input => {
            input.value = '';
            input.setAttribute('autocomplete', 'nope');
            // Prevenir que el navegador muestre sugerencias
            input.blur();
            setTimeout(() => {
                input.focus();
                input.blur();
            }, 10);
        });
    }
}

// Manejar login
function handleLogin(e) {
    if (e) {
        e.preventDefault();
        e.stopPropagation();
    }
    
    console.log('handleLogin llamado');
    
    const identifierInput = document.getElementById('loginIdentifier');
    const passwordInput = document.getElementById('loginPassword');
    
    if (!identifierInput || !passwordInput) {
        console.error('No se encontraron los campos de login');
        alert('Error: No se encontraron los campos del formulario. Por favor, recarga la página.');
        return;
    }
    
    const identifier = identifierInput.value.trim();
    const password = passwordInput.value;
    
    console.log('Intentando iniciar sesión con:', identifier ? 'identificador proporcionado' : 'sin identificador', password ? 'contraseña proporcionada' : 'sin contraseña');
    
    if (!identifier || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    // Buscar usuario por email o teléfono
    const user = users.find(u => 
        (u.email === identifier || u.phone === identifier) && 
        u.password === password
    );
    
    if (user) {
        console.log('Usuario encontrado:', user.firstName);
        currentUser = {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone,
            role: user.role
        };
        saveUserSession();
        updateUserUI();
        hideLoginModal();
        showNotification(`Bienvenido, ${user.firstName}!`);
    } else {
        console.log('Credenciales incorrectas');
        alert('Credenciales incorrectas. Por favor, verifica tu número/correo y contraseña.');
    }
}

// Manejar registro
function handleRegister(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('registerFirstName').value.trim();
    const lastName = document.getElementById('registerLastName').value.trim();
    const phone = document.getElementById('registerPhone').value.trim();
    const email = document.getElementById('registerEmail').value.trim();
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    
    // Validaciones
    if (!firstName || !lastName || !phone || !email || !password) {
        alert('Por favor, completa todos los campos');
        return;
    }
    
    if (password !== passwordConfirm) {
        alert('Las contraseñas no coinciden');
        return;
    }
    
    if (password.length < 6) {
        alert('La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    // Verificar si el email o teléfono ya existen
    const existingUser = users.find(u => u.email === email || u.phone === phone);
    if (existingUser) {
        alert('Ya existe una cuenta con este correo o número de teléfono');
        return;
    }
    
    // Crear nuevo usuario
    const newUser = {
        id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        email: email,
        password: password, // En producción, esto debería estar hasheado
        role: 'client', // Por defecto es cliente
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    saveUsers();
    
    // Iniciar sesión automáticamente
    currentUser = {
        id: newUser.id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role
    };
    saveUserSession();
    updateUserUI();
    hideLoginModal();
    showNotification(`¡Cuenta creada exitosamente! Bienvenido, ${firstName}!`);
}

// Cerrar sesión
function logout() {
    // Cerrar menú de usuario/admin PRIMERO, antes de cualquier otra cosa
    closeUserMenu();
    
    // Ocultar explícitamente el panel de administración antes de limpiar currentUser
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Ocultar todas las secciones de usuario y admin
    hideAllUserSections();
    hideAllAdminSections();
    
    // Limpiar usuario actual
    currentUser = null;
    saveUserSession();
    
    // Ocultar indicador de modo administrador y restaurar menú hamburguesa
    const adminModeIndicator = document.getElementById('adminModeIndicator');
    const menuToggle = document.getElementById('menuToggle');
    if (adminModeIndicator) {
        adminModeIndicator.style.display = 'none';
    }
    if (menuToggle) {
        menuToggle.style.display = '';
    }
    
    // Cerrar menú de usuario/admin OTRA VEZ después de limpiar currentUser
    closeUserMenu();
    
    // Actualizar UI primero (esto mostrará el contenido del frontend nuevamente)
    updateUserUI();
    
    // Cerrar menú de usuario/admin UNA VEZ MÁS después de actualizar UI
    closeUserMenu();
    
    // Ir al inicio para mostrar todo el contenido y renderizar productos
    goToInicio();
    
    showNotification('Sesión cerrada');
}

// Actualizar UI según el estado del usuario
function updateUserUI() {
    console.log('updateUserUI llamado, currentUser:', currentUser);
    const loginLink = document.getElementById('loginLink');
    const loginLinkContainer = document.getElementById('loginLinkContainer');
    const userMenu = document.getElementById('userMenu');
    const isMobile = window.innerWidth <= 768;
    
    // Agregar o quitar clase para menú móvil separado y mover el elemento
    if (isMobile && loginLinkContainer) {
        loginLinkContainer.classList.add('mobile-user-menu');
        // Mover el loginLinkContainer fuera del nav-menu y al nav si no está ahí
        const nav = document.querySelector('.nav');
        const navMenu = document.querySelector('.nav-menu');
        if (nav && navMenu && navMenu.contains(loginLinkContainer)) {
            // Moverlo antes del cart-icon
            const cartIcon = document.querySelector('.cart-icon');
            if (cartIcon) {
                nav.insertBefore(loginLinkContainer, cartIcon);
            } else {
                nav.appendChild(loginLinkContainer);
            }
        }
    } else if (loginLinkContainer) {
        loginLinkContainer.classList.remove('mobile-user-menu');
        // Mover el loginLinkContainer de vuelta al nav-menu si no está ahí
        const navMenu = document.querySelector('.nav-menu');
        const nav = document.querySelector('.nav');
        if (navMenu && nav && nav.contains(loginLinkContainer) && !navMenu.contains(loginLinkContainer)) {
            // Buscar la posición correcta (después de Productos, antes de Contacto)
            const productsLink = document.getElementById('productsLink');
            if (productsLink && productsLink.parentElement) {
                productsLink.parentElement.insertAdjacentElement('afterend', loginLinkContainer);
            } else {
                navMenu.appendChild(loginLinkContainer);
            }
        }
    }
    
    const adminMenu = document.getElementById('adminMenu');
    
    if (currentUser && currentUser.role === 'client') {
        console.log('Usuario es cliente, mostrando menú. currentUser:', currentUser);
        
        // MOSTRAR CONTENIDO DEL FRONTEND (para clientes)
        const heroSection = document.querySelector('.hero');
        const productsSection = document.querySelector('.products');
        const offersSection = document.querySelector('.offers-section-full');
        const newProductsSection = document.querySelector('.new-products-section-full');
        const categoriesSection = document.querySelector('.categories-section');
        const newsSection = document.querySelector('.news-section');
        const cartIcon = document.getElementById('cartIcon');
        const productsLink = document.getElementById('productsLink');
        const inicioLinks = document.querySelectorAll('a[href="#inicio"]');
        const contactoLinks = document.querySelectorAll('a[href="#contacto"]');
        const adminDashboard = document.getElementById('adminDashboard');
        
        // Ocultar panel de administrador
        if (adminDashboard) {
            adminDashboard.style.display = 'none';
        }
        
        // Mostrar secciones principales
        if (heroSection) heroSection.style.display = 'block';
        if (productsSection) productsSection.style.display = 'block';
        if (offersSection) offersSection.style.display = 'block';
        if (newProductsSection) newProductsSection.style.display = 'block';
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (newsSection) newsSection.style.display = 'block';
        
        // Mostrar carrito
        if (cartIcon) cartIcon.style.display = 'flex';
        
        // Mostrar enlaces de navegación principales
        if (productsLink && productsLink.parentElement) {
            productsLink.parentElement.style.display = 'list-item';
        }
        inicioLinks.forEach(link => {
            if (link.parentElement) {
                link.parentElement.style.display = 'list-item';
            }
        });
        contactoLinks.forEach(link => {
            if (link.parentElement && link.closest('.nav-menu')) {
                link.parentElement.style.display = 'list-item';
            }
        });
        
        // Ocultar menú de admin si existe
        if (adminMenu) {
            adminMenu.style.display = 'none';
            adminMenu.classList.remove('active');
        }
        
        // Mostrar menú hamburguesa y ocultar indicador de modo administrador
        const menuToggle = document.getElementById('menuToggle');
        const adminModeIndicator = document.getElementById('adminModeIndicator');
        if (menuToggle) {
            // Restaurar display según media query (se maneja en CSS)
            menuToggle.style.display = '';
        }
        if (adminModeIndicator) {
            adminModeIndicator.style.display = 'none';
        }
        
        // Si hay usuario logueado y es cliente, mostrar menú desplegable
        if (loginLink) {
            loginLink.innerHTML = `<i class="fas fa-user"></i> ${currentUser.firstName}`;
            loginLink.href = '#';
            // Reemplazar el elemento para remover todos los event listeners
            const newLoginLink = loginLink.cloneNode(true);
            loginLink.parentNode.replaceChild(newLoginLink, loginLink);
            
            // Agregar nuevo event listener al nuevo elemento
            const updatedLoginLink = document.getElementById('loginLink');
            if (updatedLoginLink) {
                // Remover cualquier listener anterior que pueda estar causando conflictos
                const newLink = updatedLoginLink.cloneNode(true);
                updatedLoginLink.parentNode.replaceChild(newLink, updatedLoginLink);
                
                const finalLoginLink = document.getElementById('loginLink');
                if (finalLoginLink) {
                    finalLoginLink.addEventListener('click', function(e) {
                        e.preventDefault();
                        e.stopPropagation();
                        e.stopImmediatePropagation(); // Prevenir que otros listeners se ejecuten
                        console.log('Click en loginLink (cliente)');
                        
                        // Cerrar modal de login si está abierto
                        const loginModal = document.getElementById('loginModal');
                        if (loginModal && loginModal.style.display === 'flex') {
                            hideLoginModal();
                        }
                        
                        // Toggle del menú - verificar si es móvil en el momento del clic
                        const currentUserMenu = document.getElementById('userMenu');
                        const currentIsMobile = window.innerWidth <= 768;
                        console.log('userMenu encontrado:', currentUserMenu, 'isMobile:', currentIsMobile);
                        
                        if (currentUserMenu) {
                            if (currentIsMobile) {
                                // En móvil, usar clase active
                                currentUserMenu.classList.toggle('active');
                                console.log('Menú móvil toggle, active:', currentUserMenu.classList.contains('active'));
                            } else {
                                // En desktop, usar display
                                const isVisible = currentUserMenu.style.display === 'block';
                                currentUserMenu.style.display = isVisible ? 'none' : 'block';
                                console.log('Menú desktop, display:', currentUserMenu.style.display);
                            }
                        } else {
                            console.error('userMenu no encontrado!');
                        }
                    }, true); // Usar capture phase para que se ejecute primero
                }
            }
        }
        if (userMenu) {
            if (isMobile) {
                userMenu.classList.remove('active');
                // Asegurar que el userMenu esté visible para que funcione el toggle
                userMenu.style.display = 'block';
            } else {
                userMenu.style.display = 'none';
                userMenu.classList.remove('active');
            }
        }
    } else if (currentUser && currentUser.role === 'admin') {
        console.log('Usuario es administrador, mostrando menú admin. currentUser:', currentUser);
        // Ocultar menú de cliente si existe
        if (userMenu) {
            userMenu.style.display = 'none';
            userMenu.classList.remove('active');
        }
        
        // OCULTAR CONTENIDO DEL FRONTEND PARA ADMINISTRADOR
        const heroSection = document.querySelector('.hero');
        const productsSection = document.querySelector('.products');
        const offersSection = document.querySelector('.offers-section-full');
        const newProductsSection = document.querySelector('.new-products-section-full');
        const categoriesSection = document.querySelector('.categories-section');
        const newsSection = document.querySelector('.news-section');
        const cartIcon = document.getElementById('cartIcon');
        const productsLink = document.getElementById('productsLink');
        const inicioLinks = document.querySelectorAll('a[href="#inicio"]');
        const contactoLinks = document.querySelectorAll('a[href="#contacto"]');
        const adminDashboard = document.getElementById('adminDashboard');
        
        // Ocultar secciones principales
        if (heroSection) heroSection.style.display = 'none';
        if (productsSection) productsSection.style.display = 'none';
        if (offersSection) offersSection.style.display = 'none';
        if (newProductsSection) newProductsSection.style.display = 'none';
        if (categoriesSection) categoriesSection.style.display = 'none';
        if (newsSection) newsSection.style.display = 'none';
        
        // Mostrar panel de administrador
        if (adminDashboard) {
            adminDashboard.style.display = 'block';
        }
        
        // Ocultar carrito
        if (cartIcon) cartIcon.style.display = 'none';
        
        // Ocultar enlaces de navegación principales
        if (productsLink && productsLink.parentElement) {
            productsLink.parentElement.style.display = 'none';
        }
        inicioLinks.forEach(link => {
            if (link.parentElement) {
                link.parentElement.style.display = 'none';
            }
        });
        contactoLinks.forEach(link => {
            if (link.parentElement && link.closest('.nav-menu')) {
                link.parentElement.style.display = 'none';
            }
        });
        
        // Ocultar todas las secciones de búsqueda y categorías
        hideAllUserSections();
        hideAdminSections();
        const productsSearchSection = document.getElementById('productsSearchSection');
        const categoryProductsSection = document.getElementById('categoryProductsSection');
        const moreOffersSection = document.getElementById('moreOffersSection');
        const moreNewProductsSection = document.getElementById('moreNewProductsSection');
        if (productsSearchSection) productsSearchSection.style.display = 'none';
        if (categoryProductsSection) categoryProductsSection.style.display = 'none';
        if (moreOffersSection) moreOffersSection.style.display = 'none';
        if (moreNewProductsSection) moreNewProductsSection.style.display = 'none';
        
        // OCULTAR MENÚ DESPLEGABLE DE ADMINISTRADOR
        if (adminMenu) {
            adminMenu.style.display = 'none';
            adminMenu.classList.remove('active');
        }
        
        // Si hay usuario logueado y es admin, mostrar solo el nombre como texto (sin funcionalidad de menú)
        if (loginLink) {
            loginLink.innerHTML = `<i class="fas fa-user-shield"></i> ${currentUser.firstName} (Admin)`;
            loginLink.href = 'javascript:void(0);';
            // Reemplazar el elemento para remover todos los event listeners
            const newLoginLink = loginLink.cloneNode(true);
            loginLink.parentNode.replaceChild(newLoginLink, loginLink);
            // Aplicar estilos al nuevo elemento para que sea solo texto
            const finalLoginLink = document.getElementById('loginLink');
            if (finalLoginLink) {
                finalLoginLink.style.cursor = 'default';
                finalLoginLink.style.pointerEvents = 'none'; // Deshabilitar cualquier interacción
                finalLoginLink.classList.add('admin-text-only'); // Clase para CSS adicional si es necesario
            }
            // No agregar ningún event listener - solo texto
        }
        
        // Asegurar que el loginLinkContainer no tenga comportamiento de menú en móvil
        if (loginLinkContainer && isMobile) {
            loginLinkContainer.classList.remove('mobile-user-menu');
            // Mover el loginLinkContainer de vuelta al nav-menu si está en nav
            const nav = document.querySelector('.nav');
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && nav && nav.contains(loginLinkContainer) && !navMenu.contains(loginLinkContainer)) {
                // Buscar la posición correcta (después de Productos, antes de Contacto)
                const productsLink = document.getElementById('productsLink');
                if (productsLink && productsLink.parentElement) {
                    productsLink.parentElement.insertAdjacentElement('afterend', loginLinkContainer);
                } else {
                    navMenu.appendChild(loginLinkContainer);
                }
            }
        }
        
        // Ocultar menú hamburguesa y mostrar indicador de modo administrador en móvil
        const menuToggle = document.getElementById('menuToggle');
        const adminModeIndicator = document.getElementById('adminModeIndicator');
        if (menuToggle) {
            menuToggle.style.display = 'none';
        }
        if (adminModeIndicator) {
            if (isMobile) {
                adminModeIndicator.style.display = 'flex';
            } else {
                adminModeIndicator.style.display = 'none';
            }
        }
    } else {
        console.log('Usuario no es cliente o no está logueado. currentUser:', currentUser);
        
        // MOSTRAR CONTENIDO DEL FRONTEND (cuando no hay admin logueado)
        const heroSection = document.querySelector('.hero');
        const productsSection = document.querySelector('.products');
        const offersSection = document.querySelector('.offers-section-full');
        const newProductsSection = document.querySelector('.new-products-section-full');
        const categoriesSection = document.querySelector('.categories-section');
        const newsSection = document.querySelector('.news-section');
        const cartIcon = document.getElementById('cartIcon');
        const productsLink = document.getElementById('productsLink');
        const inicioLinks = document.querySelectorAll('a[href="#inicio"]');
        const contactoLinks = document.querySelectorAll('a[href="#contacto"]');
        
        // Mostrar secciones principales
        if (heroSection) heroSection.style.display = 'block';
        if (productsSection) productsSection.style.display = 'block';
        if (offersSection) offersSection.style.display = 'block';
        if (newProductsSection) newProductsSection.style.display = 'block';
        if (categoriesSection) categoriesSection.style.display = 'block';
        if (newsSection) newsSection.style.display = 'block';
        
        // Renderizar productos y categorías para asegurar que se muestren
        renderNewProducts();
        renderCategories();
        
        // Mostrar carrito
        if (cartIcon) cartIcon.style.display = 'flex';
        
        // Mostrar enlaces de navegación principales
        if (productsLink && productsLink.parentElement) {
            productsLink.parentElement.style.display = 'list-item';
        }
        inicioLinks.forEach(link => {
            if (link.parentElement) {
                link.parentElement.style.display = 'list-item';
            }
        });
        contactoLinks.forEach(link => {
            if (link.parentElement && link.closest('.nav-menu')) {
                link.parentElement.style.display = 'list-item';
            }
        });
        
        // Mostrar menú hamburguesa y ocultar indicador de modo administrador
        const menuToggleNoUser = document.getElementById('menuToggle');
        const adminModeIndicatorNoUser = document.getElementById('adminModeIndicator');
        if (menuToggleNoUser) {
            // Restaurar display según media query (se maneja en CSS)
            menuToggleNoUser.style.display = '';
        }
        if (adminModeIndicatorNoUser) {
            adminModeIndicatorNoUser.style.display = 'none';
        }
        
        // Si no hay usuario, mostrar "Iniciar Sesión"
        if (loginLink) {
            // Reemplazar el elemento para eliminar cualquier listener anterior (del menú de usuario o admin)
            const newLoginLink = loginLink.cloneNode(true);
            loginLink.parentNode.replaceChild(newLoginLink, loginLink);
            
            // Actualizar el contenido del nuevo elemento
            const updatedLoginLink = document.getElementById('loginLink');
            if (updatedLoginLink) {
                updatedLoginLink.innerHTML = '<i class="fas fa-sign-in-alt"></i> Iniciar Sesión';
                updatedLoginLink.href = '#';
                
                // Remover cualquier estilo que pueda haber quedado del modo admin
                updatedLoginLink.style.cursor = 'pointer';
                updatedLoginLink.style.pointerEvents = 'auto';
                updatedLoginLink.classList.remove('admin-text-only');
                
                // Agregar el listener correcto para mostrar el modal de login
                // Usar múltiples métodos para asegurar que funcione
                updatedLoginLink.onclick = function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log('LoginLink clickeado (onclick) - mostrando modal de login');
                    showLoginModal();
                    return false;
                };
                
                updatedLoginLink.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    e.stopImmediatePropagation();
                    console.log('LoginLink clickeado (addEventListener) - mostrando modal de login');
                    showLoginModal();
                }, true); // Usar capture phase para prioridad
                
                console.log('✅ LoginLink actualizado y listeners agregados para "Iniciar Sesión"');
            }
        }
        
        // OCULTAR el menú de usuario cuando no hay usuario logueado
        if (userMenu) {
            userMenu.style.display = 'none';
            userMenu.classList.remove('active');
            console.log('Menú de usuario ocultado - no hay usuario logueado');
        }
        
        // OCULTAR el menú de admin cuando no hay usuario logueado
        if (adminMenu) {
            adminMenu.style.display = 'none';
            adminMenu.classList.remove('active');
            console.log('Menú de admin ocultado - no hay usuario logueado');
        }
    }
}

// Funciones para mostrar secciones del menú de usuario
function hideAllUserSections() {
    const sections = [
        'miCuentaSection',
        'verPedidosSection',
        'favoritosSection',
        'notificacionesSection',
        'centroAyudaSection'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'none';
    });

    // Ocultar otras secciones principales
    const offersSection = document.querySelector('.offers-section-full');
    const newProductsSection = document.querySelector('.new-products-section-full');
    const categoriesSection = document.querySelector('.categories-section');
    const newsSection = document.querySelector('.news-section');
    const productsSearchSection = document.getElementById('productsSearchSection');
    const categoryProductsSection = document.getElementById('categoryProductsSection');
    const moreOffersSection = document.getElementById('moreOffersSection');
    const moreNewProductsSection = document.getElementById('moreNewProductsSection');

    if (offersSection) offersSection.style.display = 'block';
    if (newProductsSection) newProductsSection.style.display = 'block';
    if (categoriesSection) categoriesSection.style.display = 'block';
    if (newsSection) newsSection.style.display = 'block';
    if (productsSearchSection) productsSearchSection.style.display = 'none';
    if (categoryProductsSection) categoryProductsSection.style.display = 'none';
    if (moreOffersSection) moreOffersSection.style.display = 'none';
    if (moreNewProductsSection) moreNewProductsSection.style.display = 'none';

    // Cerrar menú desplegable
    closeUserMenu();

    // Scroll al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Función para cerrar el menú de usuario
function closeUserMenu() {
    const userMenu = document.getElementById('userMenu');
    const adminMenu = document.getElementById('adminMenu');
    const isMobile = window.innerWidth <= 768;
    
    if (userMenu) {
        if (isMobile) {
            // En móvil, quitar clase active y asegurar display
            userMenu.classList.remove('active');
            userMenu.style.display = 'block'; // Necesario para que funcione el toggle
        } else {
            // En desktop, ocultar con display
            userMenu.style.display = 'none';
        }
        // Asegurar que no tenga clase active en ningún caso
        userMenu.classList.remove('active');
    }
    
    if (adminMenu) {
        if (isMobile) {
            // En móvil, quitar clase active
            adminMenu.classList.remove('active');
        } else {
            // En desktop, ocultar con display
            adminMenu.style.display = 'none';
        }
    }
}

// Función para ocultar todas las secciones de usuario
function hideUserSections() {
    const sections = [
        'miCuentaSection',
        'verPedidosSection',
        'favoritosSection',
        'notificacionesSection',
        'centroAyudaSection'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
}

// Función para ocultar todas las secciones de administrador
function hideAdminSections() {
    const sections = [
        'usuariosSection',
        'pedidosAdminSection',
        'inventarioSection',
        'productosMasVendidosSection'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    });
}

function showMiCuenta() {
    hideAllUserSections();
    const section = document.getElementById('miCuentaSection');
    if (section && currentUser) {
        section.style.display = 'block';
        
        // Cargar datos del usuario
        const firstNameInput = document.getElementById('accountFirstName');
        const lastNameInput = document.getElementById('accountLastName');
        const phoneInput = document.getElementById('accountPhone');
        const emailInput = document.getElementById('accountEmail');
        
        if (firstNameInput) firstNameInput.value = currentUser.firstName || '';
        if (lastNameInput) lastNameInput.value = currentUser.lastName || '';
        if (phoneInput) phoneInput.value = currentUser.phone || '';
        if (emailInput) emailInput.value = currentUser.email || '';
        
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showVerPedidos() {
    hideAllUserSections();
    const section = document.getElementById('verPedidosSection');
    if (section) {
        section.style.display = 'block';
        renderPedidos();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showFavoritos() {
    hideAllUserSections();
    const section = document.getElementById('favoritosSection');
    if (section) {
        section.style.display = 'block';
        renderFavoritos();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showNotificaciones() {
    hideAllUserSections();
    const section = document.getElementById('notificacionesSection');
    if (section) {
        section.style.display = 'block';
        renderNotificaciones();
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

function showCentroAyuda() {
    hideAllUserSections();
    const section = document.getElementById('centroAyudaSection');
    if (section) {
        section.style.display = 'block';
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Renderizar pedidos
function renderPedidos() {
    const ordersList = document.getElementById('ordersList');
    if (!ordersList || !currentUser) return;

    // Cargar pedidos del usuario desde localStorage
    const userOrders = JSON.parse(localStorage.getItem(`orders_${currentUser.id}`) || '[]');

    if (userOrders.length === 0) {
        ordersList.innerHTML = '<p class="empty-message">No tienes pedidos aún</p>';
        return;
    }

    ordersList.innerHTML = userOrders.map((order, index) => {
        const orderDate = new Date(order.date).toLocaleDateString('es-ES');
        return `
            <div class="order-card" style="background: white; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                    <h3>Pedido #${order.id}</h3>
                    <span style="color: #666;">${orderDate}</span>
                </div>
                <div style="margin-bottom: 1rem;">
                    <p><strong>Total:</strong> Bs. ${order.total.toFixed(2)}</p>
                    <p><strong>Estado:</strong> <span style="color: ${order.status === 'completado' ? 'green' : 'orange'}">${order.status}</span></p>
                </div>
                <div>
                    <h4>Productos:</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${order.items.map(item => `
                            <li style="padding: 0.5rem 0; border-bottom: 1px solid #f0f0f0;">
                                ${item.name} - Cantidad: ${item.quantity} - Bs. ${item.price.toFixed(2)}
                            </li>
                        `).join('')}
                    </ul>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar favoritos
function renderFavoritos() {
    const favoritesGrid = document.getElementById('favoritesGrid');
    if (!favoritesGrid || !currentUser) return;

    // Cargar favoritos del usuario desde localStorage
    const userFavorites = JSON.parse(localStorage.getItem(`favorites_${currentUser.id}`) || '[]');

    if (userFavorites.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">No tienes productos favoritos aún</p>';
        return;
    }

    const favoriteProducts = products.filter(p => userFavorites.includes(p.id));
    
    if (favoriteProducts.length === 0) {
        favoritesGrid.innerHTML = '<p class="empty-message">No tienes productos favoritos aún</p>';
        return;
    }

    favoritesGrid.innerHTML = favoriteProducts.map(product => {
        const categoryInfo = categoriesConfig[product.category];
        const icon = categoryInfo ? categoryInfo.icon : 'fas fa-box';
        return `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.innerHTML='<i class=\\'${icon}\\'></i>'; this.style.display='flex'; this.style.alignItems='center'; this.style.justifyContent='center';">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-price">Bs. ${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="showQuantityPanel(${product.id})">
                        <i class="fas fa-cart-plus"></i> Añadir al Carrito
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Renderizar notificaciones
function renderNotificaciones() {
    const notificationsList = document.getElementById('notificationsList');
    if (!notificationsList || !currentUser) return;

    // Cargar notificaciones del usuario desde localStorage
    const userNotifications = JSON.parse(localStorage.getItem(`notifications_${currentUser.id}`) || '[]');

    if (userNotifications.length === 0) {
        notificationsList.innerHTML = '<p class="empty-message">No tienes notificaciones</p>';
        return;
    }

    notificationsList.innerHTML = userNotifications.map(notif => {
        return `
            <div class="notification-card" style="background: white; padding: 1.5rem; border-radius: 10px; margin-bottom: 1rem; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <div style="display: flex; justify-content: space-between; align-items: start;">
                    <div>
                        <h4 style="margin: 0 0 0.5rem 0;">${notif.title}</h4>
                        <p style="margin: 0; color: #666;">${notif.message}</p>
                        <small style="color: #999;">${new Date(notif.date).toLocaleString('es-ES')}</small>
                    </div>
                    ${notif.read ? '' : '<span style="background: var(--primary-color); color: white; padding: 0.25rem 0.5rem; border-radius: 3px; font-size: 0.8rem;">Nuevo</span>'}
                </div>
            </div>
        `;
    }).join('');
}

// Manejar actualización de cuenta
function handleUpdateAccount(e) {
    e.preventDefault();
    if (!currentUser) return;

    const firstName = document.getElementById('accountFirstName').value;
    const lastName = document.getElementById('accountLastName').value;
    const phone = document.getElementById('accountPhone').value;
    const email = document.getElementById('accountEmail').value;
    const password = document.getElementById('accountPassword').value;

    // Actualizar usuario en el array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex].firstName = firstName;
        users[userIndex].lastName = lastName;
        users[userIndex].phone = phone;
        users[userIndex].email = email;
        if (password) {
            users[userIndex].password = password;
        }
        saveUsers();
    }

    // Actualizar sesión actual
    currentUser.firstName = firstName;
    currentUser.lastName = lastName;
    currentUser.phone = phone;
    currentUser.email = email;
    saveUserSession();
    updateUserUI();

    showNotification('Datos actualizados correctamente');
    hideAllUserSections();
}

// Funciones para mostrar secciones de administrador
function hideAllAdminSections() {
    const sections = [
        'usuariosSection',
        'pedidosAdminSection',
        'inventarioSection',
        'editarItemsSection',
        'productosMasVendidosSection'
    ];
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) section.style.display = 'none';
    });

    // Si el usuario es admin, mostrar el panel de administrador
    if (currentUser && currentUser.role === 'admin') {
        const adminDashboard = document.getElementById('adminDashboard');
        if (adminDashboard) {
            adminDashboard.style.display = 'block';
        }
    }

    // Cerrar menú desplegable
    closeUserMenu();

    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Asegurar que el panel de administrador esté visible y en la parte superior
    setTimeout(() => {
        const adminDashboard = document.getElementById('adminDashboard');
        if (adminDashboard && currentUser && currentUser.role === 'admin') {
            adminDashboard.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}

function showUsuarios() {
    // Ocultar panel de administrador primero
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Ocultar otras secciones de admin manualmente (NO usar hideAllAdminSections porque oculta usuariosSection)
    const pedidosSection = document.getElementById('pedidosAdminSection');
    const inventarioSection = document.getElementById('inventarioSection');
    const editarItemsSection = document.getElementById('editarItemsSection');
    const productosMasVendidosSection = document.getElementById('productosMasVendidosSection');
    
    if (pedidosSection) pedidosSection.style.display = 'none';
    if (inventarioSection) inventarioSection.style.display = 'none';
    if (editarItemsSection) editarItemsSection.style.display = 'none';
    if (productosMasVendidosSection) productosMasVendidosSection.style.display = 'none';
    
    // Ocultar secciones de usuario
    hideAllUserSections();
    
    // Primero hacer scroll instantáneo al inicio para evitar que se muestre desde abajo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Ahora mostrar la sección de usuarios
    const section = document.getElementById('usuariosSection');
    if (section) {
        section.style.display = 'block';
        // Renderizar después de un pequeño delay para que el scroll se complete
        setTimeout(() => {
            renderUsuarios();
            // Hacer scroll suave a la sección después de renderizar
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }, 10);
    } else {
        console.error('No se encontró el elemento usuariosSection');
    }
}

function showPedidosAdmin() {
    hideAllAdminSections();
    hideAllUserSections();
    // Ocultar panel de administrador
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Primero hacer scroll instantáneo al inicio para evitar que se muestre desde abajo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    const section = document.getElementById('pedidosAdminSection');
    if (section) {
        section.style.display = 'block';
        // Renderizar después de un pequeño delay para que el scroll se complete
        setTimeout(() => {
            renderPedidosAdmin();
            // Hacer scroll suave a la sección después de renderizar
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }, 10);
    }
}

function showInventario() {
    hideAllAdminSections();
    hideAllUserSections();
    // Ocultar panel de administrador
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Primero hacer scroll instantáneo al inicio para evitar que se muestre desde abajo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    const section = document.getElementById('inventarioSection');
    if (section) {
        section.style.display = 'block';
        // Renderizar después de un pequeño delay para que el scroll se complete
        setTimeout(() => {
            renderInventario();
            // Hacer scroll suave a la sección después de renderizar
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }, 10);
    }
}

function showEditarItems() {
    hideAllAdminSections();
    hideAllUserSections();
    // Ocultar panel de administrador
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Primero hacer scroll instantáneo al inicio para evitar que se muestre desde abajo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    const section = document.getElementById('editarItemsSection');
    if (section) {
        section.style.display = 'block';
        // Renderizar después de un pequeño delay para que el scroll se complete
        setTimeout(() => {
            renderEditarItems();
            // Hacer scroll suave a la sección después de renderizar
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }, 10);
    }
}

function showProductosMasVendidos() {
    hideAllAdminSections();
    hideAllUserSections();
    // Ocultar panel de administrador
    const adminDashboard = document.getElementById('adminDashboard');
    if (adminDashboard) {
        adminDashboard.style.display = 'none';
    }
    
    // Primero hacer scroll instantáneo al inicio para evitar que se muestre desde abajo
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    const section = document.getElementById('productosMasVendidosSection');
    if (section) {
        section.style.display = 'block';
        // Renderizar después de un pequeño delay para que el scroll se complete
        setTimeout(() => {
            renderProductosMasVendidos();
            // Hacer scroll suave a la sección después de renderizar
            setTimeout(() => {
                section.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 50);
        }, 10);
    }
}

// Cerrar sesión desde el panel de administrador
function logoutFromAdmin() {
    if (confirm('¿Estás seguro de que deseas cerrar sesión?')) {
        logout();
    }
}

// Renderizar usuarios (para admin) - Solo clientes
function renderUsuarios() {
    console.log('renderUsuarios() INICIADO');
    const usuariosList = document.getElementById('usuariosList');
    if (!usuariosList) {
        console.error('❌ No se encontró el elemento usuariosList');
        return;
    }
    console.log('✅ usuariosList encontrado:', usuariosList);
    
    // Cargar usuarios actualizados
    loadUsers();
    console.log('📊 Total de usuarios cargados:', users.length);
    console.log('👥 Usuarios completos:', users);
    
    // Filtrar solo clientes (no administradores)
    const clientes = users.filter(user => user.role === 'client' || !user.role);
    console.log('🔍 Clientes filtrados:', clientes.length);
    console.log('📋 Lista de clientes:', clientes);
    
    if (clientes.length === 0) {
        console.log('⚠️ No hay clientes, mostrando mensaje vacío');
        usuariosList.innerHTML = '<p class="empty-message" style="color: white; text-align: center; padding: 2rem; font-size: 1.2rem;">No hay clientes registrados aún</p>';
        return;
    }
    
    // Ordenar por fecha de creación (más recientes primero)
    // Si no tienen fecha, se consideran más antiguos
    clientes.sort((a, b) => {
        const dateA = a.createdAt ? new Date(a.createdAt) : new Date(0);
        const dateB = b.createdAt ? new Date(b.createdAt) : new Date(0);
        return dateB - dateA;
    });
    
    usuariosList.innerHTML = `
        <div style="margin-bottom: 2rem; color: white;">
            <h3 style="margin: 0; font-size: 1.5rem;">Total de Clientes: ${clientes.length}</h3>
        </div>
        <div class="products-grid" style="grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem;">
            ${clientes.map(user => {
                const fechaRegistro = user.createdAt 
                    ? new Date(user.createdAt).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    })
                    : 'Fecha no disponible';
                
                const nombreCompleto = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'Sin nombre';
                
                return `
                <div class="product-item" style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); transition: transform 0.2s;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, #50c878 0%, #45b869 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.8rem; box-shadow: 0 2px 8px rgba(80, 200, 120, 0.3);">
                            <i class="fas fa-user"></i>
                        </div>
                        <div style="flex: 1;">
                            <h4 style="margin: 0; color: var(--dark-color); font-size: 1.2rem; font-weight: 600;">${nombreCompleto}</h4>
                            <p style="margin: 0; color: #999; font-size: 0.9rem;">Cliente Registrado</p>
                        </div>
                    </div>
                    <div style="border-top: 1px solid #eee; padding-top: 1rem;">
                        <p style="margin: 0.5rem 0; color: #333;">
                            <i class="fas fa-envelope" style="color: var(--primary-color); margin-right: 8px;"></i>
                            <strong>Email:</strong> ${user.email || 'No proporcionado'}
                        </p>
                        <p style="margin: 0.5rem 0; color: #333;">
                            <i class="fas fa-phone" style="color: var(--primary-color); margin-right: 8px;"></i>
                            <strong>Teléfono:</strong> ${user.phone || 'No proporcionado'}
                        </p>
                        <p style="margin: 0.5rem 0; color: #999; font-size: 0.85rem;">
                            <i class="fas fa-calendar" style="color: #999; margin-right: 8px;"></i>
                            Registrado: ${fechaRegistro}
                        </p>
                        ${user.id ? `<p style="margin: 0.5rem 0; color: #999; font-size: 0.85rem;">
                            <i class="fas fa-id-card" style="color: #999; margin-right: 8px;"></i>
                            ID: ${user.id}
                        </p>` : ''}
                    </div>
                </div>
            `;
            }).join('')}
        </div>
    `;
    
    console.log('✅ HTML generado y asignado a usuariosList');
    console.log('📝 Contenido de usuariosList:', usuariosList.innerHTML.substring(0, 200) + '...');
}

// Renderizar pedidos (para admin) - Solo pedidos pendientes
function renderPedidosAdmin() {
    const pedidosAdminList = document.getElementById('pedidosAdminList');
    if (!pedidosAdminList) {
        console.error('No se encontró el elemento pedidosAdminList');
        return;
    }
    
    loadUsers();
    
    // Obtener todos los pedidos de todos los usuarios
    const allOrders = [];
    users.forEach(user => {
        const userOrders = JSON.parse(localStorage.getItem(`orders_${user.id}`) || '[]');
        userOrders.forEach(order => {
            allOrders.push({
                ...order,
                userId: user.id,
                userName: `${user.firstName} ${user.lastName}`,
                userEmail: user.email,
                userPhone: user.phone
            });
        });
    });
    
    // Filtrar solo pedidos pendientes
    const pedidosPendientes = allOrders.filter(order => order.status === 'pendiente');
    
    // Ordenar por fecha (más recientes primero)
    pedidosPendientes.sort((a, b) => {
        const dateA = a.date ? new Date(a.date) : new Date(0);
        const dateB = b.date ? new Date(b.date) : new Date(0);
        return dateB - dateA;
    });
    
    if (pedidosPendientes.length === 0) {
        pedidosAdminList.innerHTML = '<p class="empty-message" style="color: white; text-align: center; padding: 2rem; font-size: 1.2rem;">No hay pedidos pendientes para alistar</p>';
        return;
    }
    
    pedidosAdminList.innerHTML = `
        <div style="margin-bottom: 2rem; color: white;">
            <h3 style="margin: 0; font-size: 1.5rem;">Pedidos Pendientes: ${pedidosPendientes.length}</h3>
        </div>
        ${pedidosPendientes.map(order => {
            // Formatear fecha
            const fechaPedido = order.date 
                ? new Date(order.date).toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                })
                : 'Fecha no disponible';
            
            // Calcular total de items
            const totalItems = order.items ? order.items.reduce((sum, item) => sum + (item.quantity || 0), 0) : 0;
            
            return `
            <div class="order-card" style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 2rem; border-left: 5px solid #ffc107;">
                <!-- Header del Pedido -->
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem; padding-bottom: 1rem; border-bottom: 2px solid #f0f0f0;">
                    <div style="flex: 1;">
                        <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.5rem;">
                            <div style="width: 50px; height: 50px; border-radius: 50%; background: linear-gradient(135deg, var(--primary-color) 0%, #5a9de8 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; box-shadow: 0 2px 8px rgba(0,0,0,0.15);">
                                <i class="fas fa-shopping-bag"></i>
                            </div>
                            <div>
                                <h4 style="margin: 0; color: var(--dark-color); font-size: 1.4rem; font-weight: 700;">Pedido #${order.id}</h4>
                                <p style="margin: 0.25rem 0 0 0; color: #999; font-size: 0.9rem;">
                                    <i class="fas fa-calendar-alt" style="margin-right: 5px;"></i>
                                    ${fechaPedido}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style="text-align: right;">
                        <span style="display: inline-block; padding: 0.5rem 1rem; border-radius: 8px; background: #fff3cd; color: #856404; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">
                            <i class="fas fa-clock"></i> Pendiente
                        </span>
                        <p style="margin: 0.5rem 0 0 0; font-size: 1.5rem; font-weight: bold; color: var(--primary-color);">
                            ${typeof order.total === 'number' ? `Bs. ${order.total.toFixed(2)}` : (order.total || 'Bs. 0.00')}
                        </p>
                    </div>
                </div>
                
                <!-- Información del Cliente -->
                <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <h5 style="margin: 0 0 1rem 0; color: var(--dark-color); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-user" style="color: var(--primary-color);"></i>
                        Información del Cliente
                    </h5>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem;">
                        <div>
                            <p style="margin: 0.5rem 0; color: #666;">
                                <strong style="color: var(--dark-color);">Nombre:</strong><br>
                                <span style="color: #333;">${order.userName || 'No disponible'}</span>
                            </p>
                        </div>
                        <div>
                            <p style="margin: 0.5rem 0; color: #666;">
                                <strong style="color: var(--dark-color);">Email:</strong><br>
                                <span style="color: #333;">
                                    <i class="fas fa-envelope" style="color: var(--primary-color); margin-right: 5px;"></i>
                                    ${order.userEmail || 'No disponible'}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p style="margin: 0.5rem 0; color: #666;">
                                <strong style="color: var(--dark-color);">Teléfono:</strong><br>
                                <span style="color: #333;">
                                    <i class="fas fa-phone" style="color: var(--primary-color); margin-right: 5px;"></i>
                                    ${order.userPhone || 'No disponible'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <!-- Detalle de Productos -->
                <div style="margin-bottom: 1.5rem;">
                    <h5 style="margin: 0 0 1rem 0; color: var(--dark-color); font-size: 1.1rem; display: flex; align-items: center; gap: 0.5rem;">
                        <i class="fas fa-box" style="color: var(--primary-color);"></i>
                        Productos del Pedido (${totalItems} ${totalItems === 1 ? 'artículo' : 'artículos'})
                    </h5>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <thead>
                                <tr style="background: #f8f9fa;">
                                    <th style="padding: 1rem; text-align: left; color: var(--dark-color); font-weight: 600; border-bottom: 2px solid #dee2e6;">Producto</th>
                                    <th style="padding: 1rem; text-align: center; color: var(--dark-color); font-weight: 600; border-bottom: 2px solid #dee2e6;">Cantidad</th>
                                    <th style="padding: 1rem; text-align: right; color: var(--dark-color); font-weight: 600; border-bottom: 2px solid #dee2e6;">Precio Unit.</th>
                                    <th style="padding: 1rem; text-align: right; color: var(--dark-color); font-weight: 600; border-bottom: 2px solid #dee2e6;">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${order.items && order.items.length > 0 ? order.items.map(item => {
                                    // Manejar precio (puede ser número o string)
                                    let precioUnitario = 'Bs. 0.00';
                                    let precioNum = 0;
                                    
                                    if (typeof item.price === 'number') {
                                        precioNum = item.price;
                                        precioUnitario = `Bs. ${item.price.toFixed(2)}`;
                                    } else if (typeof item.price === 'string') {
                                        precioUnitario = item.price;
                                        precioNum = parseFloat(precioUnitario.replace('Bs. ', '').replace(',', '')) || 0;
                                    }
                                    
                                    const cantidad = item.quantity || 0;
                                    const subtotal = precioNum * cantidad;
                                    
                                    return `
                                    <tr style="border-bottom: 1px solid #f0f0f0;">
                                        <td style="padding: 1rem;">
                                            <div style="display: flex; align-items: center; gap: 0.75rem;">
                                                ${item.image ? `
                                                    <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px; border: 1px solid #e0e0e0;">
                                                ` : `
                                                    <div style="width: 50px; height: 50px; background: #f0f0f0; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #999;">
                                                        <i class="fas fa-box"></i>
                                                    </div>
                                                `}
                                                <div>
                                                    <strong style="color: var(--dark-color);">${item.name || 'Producto sin nombre'}</strong>
                                                    ${item.brand ? `<p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.85rem;">Marca: ${item.brand}</p>` : ''}
                                                </div>
                                            </div>
                                        </td>
                                        <td style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">
                                            ${cantidad} ${cantidad === 1 ? 'unidad' : 'unidades'}
                                        </td>
                                        <td style="padding: 1rem; text-align: right; color: #666;">
                                            ${precioUnitario}
                                        </td>
                                        <td style="padding: 1rem; text-align: right; color: var(--primary-color); font-weight: 600;">
                                            Bs. ${subtotal.toFixed(2)}
                                        </td>
                                    </tr>
                                    `;
                                }).join('') : `
                                    <tr>
                                        <td colspan="4" style="padding: 1rem; text-align: center; color: #999;">
                                            No hay productos en este pedido
                                        </td>
                                    </tr>
                                `}
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <!-- Resumen Total -->
                <div style="background: #f8f9fa; padding: 1.25rem; border-radius: 10px; margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center;">
                        <div>
                            <p style="margin: 0; color: #666; font-size: 0.95rem;">Total de artículos:</p>
                            <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.95rem;">Total del pedido:</p>
                        </div>
                        <div style="text-align: right;">
                            <p style="margin: 0; color: var(--dark-color); font-weight: 600; font-size: 0.95rem;">${totalItems} ${totalItems === 1 ? 'artículo' : 'artículos'}</p>
                            <p style="margin: 0.5rem 0 0 0; color: var(--primary-color); font-weight: 700; font-size: 1.3rem;">${typeof order.total === 'number' ? `Bs. ${order.total.toFixed(2)}` : (order.total || 'Bs. 0.00')}</p>
                        </div>
                    </div>
                </div>
                
                <!-- Botones de Acción -->
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                    <button onclick="marcarPedidoCompletado(${order.userId}, ${order.id})" style="flex: 1; min-width: 200px; padding: 1rem 1.5rem; background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1rem; transition: all 0.3s; box-shadow: 0 2px 8px rgba(40, 167, 69, 0.3);">
                        <i class="fas fa-check-circle"></i> Marcar como Completado
                    </button>
                    <button onclick="marcarPedidoCancelado(${order.userId}, ${order.id})" style="flex: 1; min-width: 200px; padding: 1rem 1.5rem; background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; border: none; border-radius: 10px; cursor: pointer; font-weight: 600; font-size: 1rem; transition: all 0.3s; box-shadow: 0 2px 8px rgba(220, 53, 69, 0.3);">
                        <i class="fas fa-times-circle"></i> Cancelar Pedido
                    </button>
                </div>
            </div>
            `;
        }).join('')}
    `;
}

// Marcar pedido como completado
function marcarPedidoCompletado(userId, orderId) {
    const userOrders = JSON.parse(localStorage.getItem(`orders_${userId}`) || '[]');
    const orderIndex = userOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        userOrders[orderIndex].status = 'completado';
        localStorage.setItem(`orders_${userId}`, JSON.stringify(userOrders));
        showNotification('Pedido marcado como completado');
        renderPedidosAdmin();
    }
}

// Marcar pedido como cancelado
function marcarPedidoCancelado(userId, orderId) {
    if (!confirm('¿Estás seguro de que quieres cancelar este pedido? El stock será restaurado.')) {
        return;
    }
    
    const userOrders = JSON.parse(localStorage.getItem(`orders_${userId}`) || '[]');
    const orderIndex = userOrders.findIndex(o => o.id === orderId);
    
    if (orderIndex !== -1) {
        const order = userOrders[orderIndex];
        
        // Restaurar stock de los productos
        loadProducts();
        if (order.items && order.items.length > 0) {
            order.items.forEach(item => {
                const product = products.find(p => p.id === item.id);
                if (product) {
                    // Restaurar la cantidad comprada al stock
                    product.stock = (product.stock || 0) + (item.quantity || 0);
                }
            });
            saveProducts();
        }
        
        userOrders[orderIndex].status = 'cancelado';
        localStorage.setItem(`orders_${userId}`, JSON.stringify(userOrders));
        showNotification('Pedido cancelado y stock restaurado');
        renderPedidosAdmin();
    }
}

// Guardar productos en localStorage
function saveProducts() {
    try {
        localStorage.setItem('products', JSON.stringify(products));
    } catch (error) {
        console.error('Error al guardar productos:', error);
    }
}

// Cargar productos desde localStorage
function loadProducts() {
    try {
        const savedProducts = localStorage.getItem('products');
        if (savedProducts) {
            products = JSON.parse(savedProducts);
            // Asegurar que todos los productos tengan stock (para productos antiguos sin stock)
            products.forEach(product => {
                if (product.stock === undefined || product.stock === null) {
                    product.stock = Math.floor(Math.random() * 190) + 10;
                }
            });
            saveProducts(); // Guardar si se agregó stock a productos antiguos
        }
    } catch (error) {
        console.error('Error al cargar productos:', error);
    }
}

// Variables globales para filtros de inventario
let inventarioSearchTerm = '';
let inventarioFilterCategory = 'todas';
let inventarioSearchTimeout = null;

// Variables globales para filtros de editar items
let editarItemsSearchTerm = '';
let editarItemsFilterCategory = 'todas';
let editarItemsSearchTimeout = null;

// Renderizar inventario con opción de editar
function renderInventario() {
    const inventarioList = document.getElementById('inventarioList');
    if (!inventarioList) return;
    
    // Preservar el foco del input de búsqueda si existe
    const searchInput = document.getElementById('inventarioSearchInput');
    const hadFocus = searchInput && document.activeElement === searchInput;
    const cursorPosition = searchInput ? searchInput.selectionStart : null;
    const inputValue = searchInput ? searchInput.value : '';
    
    // Cargar productos guardados si existen
    loadProducts();
    
    // Filtrar productos según búsqueda y categoría
    let productosFiltrados = products;
    
    // Filtro por búsqueda
    if (inventarioSearchTerm) {
        const searchLower = normalizeText(inventarioSearchTerm.toLowerCase());
        // Normalizar el término de búsqueda para códigos (eliminar signos y convertir a minúsculas)
        const searchCodeNormalized = normalizeCode(inventarioSearchTerm);
        productosFiltrados = productosFiltrados.filter(product => {
            const productCode = (product.code || product.id || '').toString();
            const codeMatch = normalizeCode(productCode).includes(searchCodeNormalized);
            const nameMatch = product.nameNormalized && product.nameNormalized.includes(searchLower);
            return codeMatch || nameMatch;
        });
    }
    
    // Filtro por categoría
    if (inventarioFilterCategory !== 'todas') {
        productosFiltrados = productosFiltrados.filter(product => product.category === inventarioFilterCategory);
    }
    
    // Agrupar productos por categoría
    const productosPorCategoria = {};
    productosFiltrados.forEach(product => {
        if (!productosPorCategoria[product.category]) {
            productosPorCategoria[product.category] = [];
        }
        productosPorCategoria[product.category].push(product);
    });
    
    // Calcular total de stock (de productos filtrados)
    const totalStock = productosFiltrados.reduce((sum, product) => sum + (product.stock || 0), 0);
    
    inventarioList.innerHTML = `
        <!-- Barra de búsqueda y filtros -->
        <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-search" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Buscar Producto:
                    </label>
                    <input type="text" id="inventarioSearchInput" placeholder="Buscar por código o nombre..." 
                           value="${inputValue || inventarioSearchTerm}" 
                           style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s;"
                           oninput="handleInventarioSearchInput()">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-filter" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Filtrar por Categoría:
                    </label>
                    <select id="inventarioCategoryFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleInventarioFilter()">
                        <option value="todas" ${inventarioFilterCategory === 'todas' ? 'selected' : ''}>Todas las Categorías</option>
                        ${Object.keys(categoriesConfig).map(cat => `
                            <option value="${cat}" ${inventarioFilterCategory === cat ? 'selected' : ''}>${categoriesConfig[cat].name}</option>
                        `).join('')}
                    </select>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #eee;">
                <div>
                    <button onclick="clearInventarioFilters()" style="padding: 0.5rem 1rem; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.9rem;">
                        <i class="fas fa-times"></i> Limpiar Filtros
                    </button>
                </div>
                <div style="text-align: right; color: #666;">
                    <strong>Mostrando:</strong> ${productosFiltrados.length} de ${products.length} productos
                </div>
            </div>
        </div>
        
        <!-- Resumen -->
        <div style="margin-bottom: 2rem; color: white;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem;">Total de Productos: ${productosFiltrados.length}</h3>
            <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">Stock Total: <strong>${totalStock.toLocaleString()}</strong> unidades</p>
        </div>
        ${productosFiltrados.length === 0 ? `
            <div style="background: white; padding: 3rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: var(--dark-color); margin-bottom: 0.5rem;">No se encontraron productos</h3>
                <p style="color: #666;">Intenta ajustar los filtros de búsqueda o categoría</p>
                <button onclick="clearInventarioFilters()" style="margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-times"></i> Limpiar Filtros
                </button>
            </div>
        ` : Object.keys(productosPorCategoria).map(category => {
            const categoriaInfo = categoriesConfig[category];
            return `
                <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;">
                        <i class="${categoriaInfo.icon}" style="font-size: 2rem; color: var(--primary-color);"></i>
                        <div>
                            <h4 style="margin: 0; color: var(--dark-color);">${categoriaInfo.name}</h4>
                            <p style="margin: 0; color: #999; font-size: 0.9rem;">${productosPorCategoria[category].length} productos</p>
                        </div>
                    </div>
                    <div style="overflow-x: auto;">
                        <table style="width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; min-width: 1200px;">
                            <thead>
                                <tr style="background: var(--primary-color); color: white;">
                                    <th style="padding: 0.75rem 1rem; text-align: left; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-hashtag" style="margin-right: 0.5rem;"></i>ID Producto
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: left; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-barcode" style="margin-right: 0.5rem;"></i>Código
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: left; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2);">
                                        <i class="fas fa-tag" style="margin-right: 0.5rem;"></i>Nombre
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: left; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-folder" style="margin-right: 0.5rem;"></i>Categoría
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: left; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-certificate" style="margin-right: 0.5rem;"></i>Marca
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: right; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-dollar-sign" style="margin-right: 0.5rem;"></i>Precio Unitario
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: right; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-tags" style="margin-right: 0.5rem;"></i>Precio Set
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: right; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-box" style="margin-right: 0.5rem;"></i>Precio Docena
                                    </th>
                                    <th style="padding: 0.75rem 1rem; text-align: right; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.2); white-space: nowrap;">
                                        <i class="fas fa-boxes" style="margin-right: 0.5rem;"></i>Cantidad
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                ${productosPorCategoria[category].map((product, index) => {
                                    const colores = product.color ? product.color.split(',').map(c => c.trim()).filter(c => c && c !== '-') : [];
                                    const stockPorColor = product.stockByColor || {};
                                    const stockTotal = product.stock || 0;
                                    
                                    if (colores.length > 0 && Object.keys(stockPorColor).length > 0) {
                                        // Producto con colores - mostrar una fila con lista desplegable
                                        const totalStockColores = Object.values(stockPorColor).reduce((sum, stock) => sum + (stock || 0), 0);
                                        const categoriaInfo = categoriesConfig[product.category] || { name: product.category || 'N/A' };
                                        return `
                                            <tr style="border-bottom: 1px solid #eee; transition: background 0.2s;" 
                                                onmouseover="this.style.background='#f8f9fa'" 
                                                onmouseout="this.style.background='white'">
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.id || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.code || product.id || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color);">
                                                    ${product.name}
                                                    <details style="margin-top: 0.5rem; cursor: pointer;">
                                                        <summary style="color: #666; font-size: 0.85rem; font-weight: normal; cursor: pointer; user-select: none;">
                                                            <i class="fas fa-palette" style="margin-right: 0.25rem;"></i>
                                                            Ver colores (${colores.length})
                                                        </summary>
                                                        <div style="margin-top: 0.5rem; padding: 0.5rem; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;">
                                                            ${colores.map(color => {
                                                                const stockColor = stockPorColor[color.toLowerCase()] || 0;
                                                                return `
                                                                    <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.25rem 0; border-bottom: 1px solid #e0e0e0;">
                                                                        <span style="color: var(--dark-color); font-size: 0.9rem;">
                                                                            <strong>${color.charAt(0).toUpperCase() + color.slice(1)}:</strong>
                                                                        </span>
                                                                        <span style="display: inline-block; padding: 0.2rem 0.6rem; border-radius: 15px; font-weight: 600; font-size: 0.85rem;
                                                                            background: ${stockColor < 20 ? '#fff3cd' : stockColor < 50 ? '#d1ecf1' : '#d4edda'}; 
                                                                            color: ${stockColor < 20 ? '#856404' : stockColor < 50 ? '#0c5460' : '#155724'};">
                                                                            ${stockColor} unidades
                                                                        </span>
                                                                    </div>
                                                                `;
                                                            }).join('')}
                                                            <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.5rem 0 0 0; margin-top: 0.5rem; border-top: 2px solid #ddd; font-weight: 600;">
                                                                <span style="color: var(--dark-color);">Total:</span>
                                                                <span style="color: var(--primary-color);">${totalStockColores} unidades</span>
                                                            </div>
                                                        </div>
                                                    </details>
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); white-space: nowrap;">
                                                    ${categoriaInfo.name}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.brand || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.price.toFixed(2)}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.precioSet ? product.precioSet.toFixed(2) : '-'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.precioDocena ? product.precioDocena.toFixed(2) : '-'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; white-space: nowrap;">
                                                    <span style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 20px; font-weight: 600; 
                                                        background: ${totalStockColores < 20 ? '#fff3cd' : totalStockColores < 50 ? '#d1ecf1' : '#d4edda'}; 
                                                        color: ${totalStockColores < 20 ? '#856404' : totalStockColores < 50 ? '#0c5460' : '#155724'};">
                                                        ${totalStockColores}
                                                    </span>
                                                </td>
                                            </tr>
                                        `;
                                    } else {
                                        // Sin color o sin stock por color - una sola fila
                                        const categoriaInfo = categoriesConfig[product.category] || { name: product.category || 'N/A' };
                                        return `
                                            <tr style="border-bottom: 1px solid #eee; transition: background 0.2s;" 
                                                onmouseover="this.style.background='#f8f9fa'" 
                                                onmouseout="this.style.background='white'">
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.id || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.code || product.id || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color);">
                                                    ${product.name}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); white-space: nowrap;">
                                                    ${categoriaInfo.name}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.brand || 'N/A'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); font-weight: 600; white-space: nowrap;">
                                                    ${product.price.toFixed(2)}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.precioSet ? product.precioSet.toFixed(2) : '-'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; color: var(--dark-color); white-space: nowrap;">
                                                    ${product.precioDocena ? product.precioDocena.toFixed(2) : '-'}
                                                </td>
                                                <td style="padding: 0.75rem 1rem; text-align: right; white-space: nowrap;">
                                                    <span style="display: inline-block; padding: 0.25rem 0.75rem; border-radius: 20px; font-weight: 600; 
                                                        background: ${stockTotal < 20 ? '#fff3cd' : stockTotal < 50 ? '#d1ecf1' : '#d4edda'}; 
                                                        color: ${stockTotal < 20 ? '#856404' : stockTotal < 50 ? '#0c5460' : '#155724'};">
                                                        ${stockTotal}
                                                    </span>
                                                </td>
                                            </tr>
                                        `;
                                    }
                                }).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>
            `;
        }).join('')}
    `;
    
    // Restaurar el foco del input de búsqueda si lo tenía antes
    if (hadFocus && cursorPosition !== null) {
        setTimeout(() => {
            const newSearchInput = document.getElementById('inventarioSearchInput');
            if (newSearchInput) {
                // Asegurar que el valor se mantiene
                if (newSearchInput.value !== inputValue) {
                    newSearchInput.value = inputValue;
                }
                newSearchInput.focus();
                // Restaurar posición del cursor, asegurándose de que no exceda la longitud
                const safePosition = Math.min(cursorPosition, newSearchInput.value.length);
                newSearchInput.setSelectionRange(safePosition, safePosition);
            }
        }, 10);
    }
}

// Renderizar editar items con opción de editar
function renderEditarItems() {
    const editarItemsList = document.getElementById('editarItemsList');
    if (!editarItemsList) return;
    
    // Preservar el foco del input de búsqueda si existe
    const searchInput = document.getElementById('editarItemsSearchInput');
    const hadFocus = searchInput && document.activeElement === searchInput;
    const cursorPosition = searchInput ? searchInput.selectionStart : null;
    const inputValue = searchInput ? searchInput.value : '';
    
    // Cargar productos guardados si existen
    loadProducts();
    
    // Filtrar productos según búsqueda y categoría
    let productosFiltrados = products;
    
    // Filtro por búsqueda
    if (editarItemsSearchTerm) {
        const searchLower = normalizeText(editarItemsSearchTerm.toLowerCase());
        // Normalizar el término de búsqueda para códigos (eliminar signos y convertir a minúsculas)
        const searchCodeNormalized = normalizeCode(editarItemsSearchTerm);
        productosFiltrados = productosFiltrados.filter(product => {
            const productCode = (product.code || product.id || '').toString();
            const codeMatch = normalizeCode(productCode).includes(searchCodeNormalized);
            const nameMatch = product.nameNormalized && product.nameNormalized.includes(searchLower);
            const brandMatch = product.brand && normalizeText(product.brand.toLowerCase()).includes(searchLower);
            const descMatch = product.description && normalizeText(product.description.toLowerCase()).includes(searchLower);
            return codeMatch || nameMatch || brandMatch || descMatch;
        });
    }
    
    // Filtro por categoría
    if (editarItemsFilterCategory !== 'todas') {
        productosFiltrados = productosFiltrados.filter(product => product.category === editarItemsFilterCategory);
    }
    
    // Agrupar productos por categoría
    const productosPorCategoria = {};
    productosFiltrados.forEach(product => {
        if (!productosPorCategoria[product.category]) {
            productosPorCategoria[product.category] = [];
        }
        productosPorCategoria[product.category].push(product);
    });
    
    // Calcular total de stock (de productos filtrados)
    const totalStock = productosFiltrados.reduce((sum, product) => sum + (product.stock || 0), 0);
    
    editarItemsList.innerHTML = `
        <!-- Botones de acción -->
        <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 2rem; display: flex; gap: 1rem; align-items: center;">
            <button onclick="mostrarFormularioNuevoProducto()" style="padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 8px; cursor: pointer; font-weight: 600; font-size: 1rem; display: flex; align-items: center; gap: 0.5rem; transition: background 0.3s;" onmouseover="this.style.background='#45b869'" onmouseout="this.style.background='var(--primary-color)'">
                <i class="fas fa-plus"></i> Crear Nuevo Item
            </button>
        </div>
        
        <!-- Barra de búsqueda y filtros -->
        <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-search" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Buscar Producto:
                    </label>
                    <input type="text" id="editarItemsSearchInput" placeholder="Buscar por nombre, marca o descripción..." 
                           value="${inputValue || editarItemsSearchTerm}" 
                           style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s;"
                           oninput="handleEditarItemsSearchInput()">
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-filter" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Filtrar por Categoría:
                    </label>
                    <select id="editarItemsCategoryFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleEditarItemsFilter()">
                        <option value="todas" ${editarItemsFilterCategory === 'todas' ? 'selected' : ''}>Todas las Categorías</option>
                        ${Object.keys(categoriesConfig).map(cat => `
                            <option value="${cat}" ${editarItemsFilterCategory === cat ? 'selected' : ''}>${categoriesConfig[cat].name}</option>
                        `).join('')}
                    </select>
                </div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; padding-top: 1rem; border-top: 1px solid #eee;">
                <div>
                    <button onclick="clearEditarItemsFilters()" style="padding: 0.5rem 1rem; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 0.9rem;">
                        <i class="fas fa-times"></i> Limpiar Filtros
                    </button>
                </div>
                <div style="text-align: right; color: #666;">
                    <strong>Mostrando:</strong> ${productosFiltrados.length} de ${products.length} productos
                </div>
            </div>
        </div>
        
        <!-- Resumen -->
        <div style="margin-bottom: 2rem; color: white;">
            <h3 style="margin: 0 0 0.5rem 0; font-size: 1.5rem;">Editar Productos: ${productosFiltrados.length}</h3>
            <p style="margin: 0; font-size: 1.1rem; opacity: 0.9;">Stock Total: <strong>${totalStock.toLocaleString()}</strong> unidades</p>
        </div>
        ${productosFiltrados.length === 0 ? `
            <div style="background: white; padding: 3rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
                <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                <h3 style="color: var(--dark-color); margin-bottom: 0.5rem;">No se encontraron productos</h3>
                <p style="color: #666;">Intenta ajustar los filtros de búsqueda o categoría</p>
                <button onclick="clearEditarItemsFilters()" style="margin-top: 1rem; padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                    <i class="fas fa-times"></i> Limpiar Filtros
                </button>
            </div>
        ` : Object.keys(productosPorCategoria).map(category => {
            const categoriaInfo = categoriesConfig[category];
            return `
                <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 1rem;">
                    <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                        <i class="${categoriaInfo.icon}" style="font-size: 2rem; color: var(--primary-color);"></i>
                        <div>
                            <h4 style="margin: 0; color: var(--dark-color);">${categoriaInfo.name}</h4>
                            <p style="margin: 0; color: #999; font-size: 0.9rem;">${productosPorCategoria[category].length} productos</p>
                        </div>
                    </div>
                    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
                        ${productosPorCategoria[category].map(product => `
                            <div id="product-edit-${product.id}" style="padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border: 2px solid transparent; transition: all 0.3s;">
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: bold; color: var(--dark-color);">
                                        <i class="fas fa-barcode" style="color: var(--primary-color); margin-right: 5px;"></i>
                                        Código de Producto:
                                    </label>
                                    <input type="text" id="code-edit-${product.id}" value="${product.code || product.id || ''}" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: bold; color: var(--dark-color);">Nombre:</label>
                                    <input type="text" id="name-edit-${product.id}" value="${product.name}" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: bold; color: var(--dark-color);">Precio Unitario:</label>
                                    <input type="number" id="price-edit-${product.id}" value="${product.price}" step="0.01" min="0" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                                        <i class="fas fa-tags" style="color: var(--primary-color); margin-right: 5px;"></i>
                                        Precio Set:
                                    </label>
                                    <select id="precioSet-activo-edit-${product.id}" onchange="togglePrecioSet(${product.id})" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem; cursor: pointer; margin-bottom: 0.5rem;">
                                        <option value="no" ${!product.precioSet ? 'selected' : ''}>No</option>
                                        <option value="si" ${product.precioSet ? 'selected' : ''}>Sí</option>
                                    </select>
                                    <div id="precioSet-container-edit-${product.id}" style="${product.precioSet ? '' : 'display: none;'}">
                                        <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">Precio Set (Bs.):</label>
                                        <input type="number" id="precioSet-edit-${product.id}" value="${product.precioSet || 0}" step="0.01" min="0" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                    </div>
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                                        <i class="fas fa-box" style="color: var(--primary-color); margin-right: 5px;"></i>
                                        Precio Docena:
                                    </label>
                                    <select id="precioDocena-activo-edit-${product.id}" onchange="togglePrecioDocena(${product.id})" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem; cursor: pointer; margin-bottom: 0.5rem;">
                                        <option value="no" ${!product.precioDocena ? 'selected' : ''}>No</option>
                                        <option value="si" ${product.precioDocena ? 'selected' : ''}>Sí</option>
                                    </select>
                                    <div id="precioDocena-container-edit-${product.id}" style="${product.precioDocena ? '' : 'display: none;'}">
                                        <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">Precio Docena (Bs.):</label>
                                        <input type="number" id="precioDocena-edit-${product.id}" value="${product.precioDocena || 0}" step="0.01" min="0" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                    </div>
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: bold; color: var(--dark-color);">Marca:</label>
                                    <select id="brand-edit-${product.id}" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem; cursor: pointer;">
                                        <option value="Sabonis" ${(product.brand || '') === 'Sabonis' ? 'selected' : ''}>Sabonis</option>
                                        <option value="Mango" ${(product.brand || '') === 'Mango' ? 'selected' : ''}>Mango</option>
                                        <option value="Alkalá" ${(product.brand || '') === 'Alkalá' ? 'selected' : ''}>Alkalá</option>
                                        <option value="Otro" ${(product.brand || '') === 'Otro' || !['Sabonis', 'Mango', 'Alkalá'].includes(product.brand || '') ? 'selected' : ''}>Otro</option>
                                    </select>
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                                        <i class="fas fa-palette" style="color: var(--primary-color); margin-right: 5px;"></i>
                                        Color (opcional - selecciona uno o más):
                                    </label>
                                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; padding: 0.75rem; background: #f8f9fa; border-radius: 5px; border: 1px solid #ddd;">
                                        ${(() => {
                                            const coloresProducto = product.color ? product.color.split(',').map(c => c.trim().toLowerCase()) : [];
                                            const coloresDisponibles = ['-', 'rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
                                            return coloresDisponibles.map(color => {
                                                const isChecked = color === '-' 
                                                    ? !product.color || product.color.trim() === '' || product.color.trim() === '-'
                                                    : coloresProducto.includes(color.toLowerCase());
                                                return `
                                                    <label style="display: flex; align-items: center; gap: 0.5rem; cursor: pointer; padding: 0.25rem; border-radius: 3px; transition: background 0.2s;" 
                                                           onmouseover="this.style.background='#e9ecef'" 
                                                           onmouseout="this.style.background='transparent'">
                                                        <input type="checkbox" 
                                                               id="color-${color}-edit-${product.id}" 
                                                               value="${color}"
                                                               ${isChecked ? 'checked' : ''}
                                                               onchange="manejarColorCheckbox(${product.id}, '${color}')"
                                                               style="cursor: pointer;">
                                                        <span style="font-size: 0.9rem; color: var(--dark-color);">${color === '-' ? '-' : color.charAt(0).toUpperCase() + color.slice(1)}</span>
                                                    </label>
                                                `;
                                            }).join('');
                                        })()}
                                    </div>
                                </div>
                                <div style="margin-bottom: 1rem;">
                                    <label style="display: block; margin-bottom: 0.25rem; font-weight: bold; color: var(--dark-color);">Descripción:</label>
                                    <textarea id="description-edit-${product.id}" rows="2" style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem; resize: vertical;">${product.description || ''}</textarea>
                                </div>
                                <div style="margin-bottom: 1rem;" id="stock-container-edit-${product.id}">
                                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                                        <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                                        Stock (Unidades):
                                    </label>
                                    ${(() => {
                                        const coloresProducto = product.color ? product.color.split(',').map(c => c.trim().toLowerCase()).filter(c => c && c !== '-') : [];
                                        const stockPorColor = product.stockByColor || {};
                                        
                                        if (coloresProducto.length > 0) {
                                            // Mostrar campo de stock por cada color
                                            return coloresProducto.map(color => {
                                                const stockColor = stockPorColor[color] || 0;
                                                return `
                                                    <div style="margin-bottom: 0.5rem;">
                                                        <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">
                                                            Stock ${color.charAt(0).toUpperCase() + color.slice(1)}:
                                                        </label>
                                                        <input type="number" 
                                                               id="stock-${color}-edit-${product.id}" 
                                                               value="${stockColor}" 
                                                               min="0" 
                                                               step="1" 
                                                               style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                                    </div>
                                                `;
                                            }).join('');
                                        } else {
                                            // Sin color - un solo campo de stock
                                            const stockTotal = product.stock || 0;
                                            return `
                                                <input type="number" 
                                                       id="stock-edit-${product.id}" 
                                                       value="${stockTotal}" 
                                                       min="0" 
                                                       step="1" 
                                                       style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                                                <div style="margin-top: 0.5rem; padding: 0.5rem; background: ${stockTotal < 20 ? '#fff3cd' : stockTotal < 50 ? '#d1ecf1' : '#d4edda'}; border-radius: 5px; font-size: 0.85rem; color: ${stockTotal < 20 ? '#856404' : stockTotal < 50 ? '#0c5460' : '#155724'};">
                                                    ${stockTotal < 20 ? '<i class="fas fa-exclamation-triangle"></i> Stock bajo' : stockTotal < 50 ? '<i class="fas fa-info-circle"></i> Stock medio' : '<i class="fas fa-check-circle"></i> Stock disponible'}
                                                </div>
                                            `;
                                        }
                                    })()}
                                </div>
                                <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
                                    <button onclick="guardarProductoEdit(${product.id})" style="flex: 1; padding: 0.75rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600; transition: background 0.3s;">
                                        <i class="fas fa-save"></i> Guardar
                                    </button>
                                    <button onclick="eliminarProducto(${product.id})" style="padding: 0.75rem 1rem; background: #dc3545; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600; transition: background 0.3s;" onmouseover="this.style.background='#c82333'" onmouseout="this.style.background='#dc3545'">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('')}
    `;
    
    // Restaurar el foco del input de búsqueda si lo tenía antes
    if (hadFocus && cursorPosition !== null) {
        setTimeout(() => {
            const newSearchInput = document.getElementById('editarItemsSearchInput');
            if (newSearchInput) {
                // Asegurar que el valor se mantiene
                if (newSearchInput.value !== inputValue) {
                    newSearchInput.value = inputValue;
                }
                newSearchInput.focus();
                // Restaurar posición del cursor, asegurándose de que no exceda la longitud
                const safePosition = Math.min(cursorPosition, newSearchInput.value.length);
                newSearchInput.setSelectionRange(safePosition, safePosition);
            }
        }, 10);
    }
}

// Guardar cambios de un producto desde la sección de editar items
function guardarProductoEdit(productId) {
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        alert('Producto no encontrado');
        return;
    }
    
    const codeInput = document.getElementById(`code-edit-${productId}`);
    const nameInput = document.getElementById(`name-edit-${productId}`);
    const priceInput = document.getElementById(`price-edit-${productId}`);
    const precioSetActivoInput = document.getElementById(`precioSet-activo-edit-${productId}`);
    const precioSetInput = document.getElementById(`precioSet-edit-${productId}`);
    const precioDocenaActivoInput = document.getElementById(`precioDocena-activo-edit-${productId}`);
    const precioDocenaInput = document.getElementById(`precioDocena-edit-${productId}`);
    const brandInput = document.getElementById(`brand-edit-${productId}`);
    const descriptionInput = document.getElementById(`description-edit-${productId}`);
    
    if (!nameInput || !priceInput) {
        alert('Error: No se encontraron los campos del producto');
        return;
    }
    
    // Obtener colores seleccionados
    const coloresDisponibles = ['-', 'rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    const coloresSeleccionados = coloresDisponibles.filter(color => {
        const checkbox = document.getElementById(`color-${color}-edit-${productId}`);
        return checkbox && checkbox.checked;
    });
    
    // Si está seleccionado "-" o no hay colores, no guardar color
    let newColor = '';
    if (coloresSeleccionados.length > 0 && !coloresSeleccionados.includes('-')) {
        newColor = coloresSeleccionados.join(', ');
    }
    
    // Obtener stock según si hay colores o no
    let newStock = 0;
    let newStockByColor = {};
    
    if (coloresSeleccionados.length > 0 && !coloresSeleccionados.includes('-')) {
        // Hay colores - obtener stock por color
        coloresSeleccionados.forEach(color => {
            const stockInput = document.getElementById(`stock-${color}-edit-${productId}`);
            if (stockInput) {
                const stockColor = parseInt(stockInput.value) || 0;
                newStockByColor[color] = stockColor;
                newStock += stockColor; // Stock total es la suma
            }
        });
    } else {
        // Sin color - un solo campo de stock
        const stockInput = document.getElementById(`stock-edit-${productId}`);
        newStock = stockInput ? parseInt(stockInput.value) || 0 : 0;
    }
    
    // Obtener precios set y docena
    const precioSetActivo = precioSetActivoInput ? precioSetActivoInput.value === 'si' : false;
    const newPrecioSet = precioSetActivo && precioSetInput ? parseFloat(precioSetInput.value) || 0 : null;
    const precioDocenaActivo = precioDocenaActivoInput ? precioDocenaActivoInput.value === 'si' : false;
    const newPrecioDocena = precioDocenaActivo && precioDocenaInput ? parseFloat(precioDocenaInput.value) || 0 : null;
    
    const newCode = codeInput ? codeInput.value.trim() : '';
    const newName = nameInput.value.trim();
    const newPrice = parseFloat(priceInput.value);
    const newBrand = brandInput ? brandInput.value.trim() : '';
    const newDescription = descriptionInput ? descriptionInput.value.trim() : '';
    
    if (!newName) {
        alert('El nombre del producto es obligatorio');
        return;
    }
    
    if (isNaN(newPrice) || newPrice < 0) {
        alert('El precio debe ser un número válido mayor o igual a 0');
        return;
    }
    
    // Actualizar el producto
    products[productIndex].code = newCode || productId.toString();
    products[productIndex].name = newName;
    products[productIndex].price = newPrice;
    products[productIndex].brand = newBrand;
    products[productIndex].color = newColor;
    products[productIndex].description = newDescription;
    products[productIndex].stock = newStock;
    if (Object.keys(newStockByColor).length > 0) {
        products[productIndex].stockByColor = newStockByColor;
    } else {
        delete products[productIndex].stockByColor;
    }
    // Guardar precios set y docena
    if (precioSetActivo && newPrecioSet !== null) {
        products[productIndex].precioSet = newPrecioSet;
    } else {
        delete products[productIndex].precioSet;
    }
    if (precioDocenaActivo && newPrecioDocena !== null) {
        products[productIndex].precioDocena = newPrecioDocena;
    } else {
        delete products[productIndex].precioDocena;
    }
    products[productIndex].nameNormalized = normalizeText(newName.toLowerCase());
    
    // Guardar en localStorage
    saveProducts();
    
    // Recargar la vista
    renderEditarItems();
    
    // Mostrar mensaje de éxito
    alert('Producto actualizado correctamente');
}

// Funciones para manejar búsqueda y filtros de editar items
function handleEditarItemsSearchInput() {
    const searchInput = document.getElementById('editarItemsSearchInput');
    if (!searchInput) return;
    
    clearTimeout(editarItemsSearchTimeout);
    editarItemsSearchTimeout = setTimeout(() => {
        editarItemsSearchTerm = searchInput.value.trim();
        renderEditarItems();
    }, 300);
}

function handleEditarItemsFilter() {
    const filterSelect = document.getElementById('editarItemsCategoryFilter');
    if (!filterSelect) return;
    
    editarItemsFilterCategory = filterSelect.value;
    renderEditarItems();
}

function clearEditarItemsFilters() {
    editarItemsSearchTerm = '';
    editarItemsFilterCategory = 'todas';
    const searchInput = document.getElementById('editarItemsSearchInput');
    if (searchInput) {
        searchInput.value = '';
    }
    renderEditarItems();
}

// Funciones para mostrar/ocultar campos de precio set y docena (editar producto)
function togglePrecioSet(productId) {
    const select = document.getElementById(`precioSet-activo-edit-${productId}`);
    const container = document.getElementById(`precioSet-container-edit-${productId}`);
    if (select && container) {
        if (select.value === 'si') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

function togglePrecioDocena(productId) {
    const select = document.getElementById(`precioDocena-activo-edit-${productId}`);
    const container = document.getElementById(`precioDocena-container-edit-${productId}`);
    if (select && container) {
        if (select.value === 'si') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

// Funciones para mostrar/ocultar campos de precio set y docena (nuevo producto)
function togglePrecioSetNuevo() {
    const select = document.getElementById('precioSet-activo-nuevo');
    const container = document.getElementById('precioSet-container-nuevo');
    if (select && container) {
        if (select.value === 'si') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

function togglePrecioDocenaNuevo() {
    const select = document.getElementById('precioDocena-activo-nuevo');
    const container = document.getElementById('precioDocena-container-nuevo');
    if (select && container) {
        if (select.value === 'si') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
    }
}

// Manejar selección de colores con checkboxes (editar producto)
function manejarColorCheckbox(productId, color) {
    const checkbox = document.getElementById(`color-${color}-edit-${productId}`);
    const coloresDisponibles = ['-', 'rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    
    if (color === '-') {
        // Si se selecciona "-", deseleccionar todos los demás
        if (checkbox.checked) {
            coloresDisponibles.forEach(c => {
                if (c !== '-') {
                    const otherCheckbox = document.getElementById(`color-${c}-edit-${productId}`);
                    if (otherCheckbox) {
                        otherCheckbox.checked = false;
                    }
                }
            });
        }
    } else {
        // Si se selecciona un color, deseleccionar "-"
        if (checkbox.checked) {
            const sinColorCheckbox = document.getElementById(`color---edit-${productId}`);
            if (sinColorCheckbox) {
                sinColorCheckbox.checked = false;
            }
        }
    }
    
    // Actualizar campos de stock según colores seleccionados
    actualizarCamposStock(productId);
}

// Actualizar campos de stock dinámicamente según colores seleccionados
function actualizarCamposStock(productId) {
    const coloresDisponibles = ['rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    const coloresSeleccionados = coloresDisponibles.filter(color => {
        const checkbox = document.getElementById(`color-${color}-edit-${productId}`);
        return checkbox && checkbox.checked;
    });
    
    const stockContainer = document.getElementById(`stock-container-edit-${productId}`);
    if (!stockContainer) return;
    
    // Obtener stock actual por color si existe
    const product = products.find(p => p.id === productId);
    const stockPorColor = product?.stockByColor || {};
    
    if (coloresSeleccionados.length > 0) {
        // Mostrar campo de stock por cada color seleccionado
        stockContainer.innerHTML = `
            <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                Stock (Unidades):
            </label>
            ${coloresSeleccionados.map(color => {
                const stockColor = stockPorColor[color] || 0;
                return `
                    <div style="margin-bottom: 0.5rem;">
                        <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">
                            Stock ${color.charAt(0).toUpperCase() + color.slice(1)}:
                        </label>
                        <input type="number" 
                               id="stock-${color}-edit-${productId}" 
                               value="${stockColor}" 
                               min="0" 
                               step="1" 
                               style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
                    </div>
                `;
            }).join('')}
        `;
    } else {
        // Sin color - un solo campo de stock
        const stockTotal = product?.stock || 0;
        stockContainer.innerHTML = `
            <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                Stock (Unidades):
            </label>
            <input type="number" 
                   id="stock-edit-${productId}" 
                   value="${stockTotal}" 
                   min="0" 
                   step="1" 
                   style="width: 100%; padding: 0.5rem; border: 1px solid #ddd; border-radius: 5px; font-size: 0.9rem;">
            <div style="margin-top: 0.5rem; padding: 0.5rem; background: ${stockTotal < 20 ? '#fff3cd' : stockTotal < 50 ? '#d1ecf1' : '#d4edda'}; border-radius: 5px; font-size: 0.85rem; color: ${stockTotal < 20 ? '#856404' : stockTotal < 50 ? '#0c5460' : '#155724'};">
                ${stockTotal < 20 ? '<i class="fas fa-exclamation-triangle"></i> Stock bajo' : stockTotal < 50 ? '<i class="fas fa-info-circle"></i> Stock medio' : '<i class="fas fa-check-circle"></i> Stock disponible'}
            </div>
        `;
    }
}

// Manejar selección de colores con checkboxes (nuevo producto)
function manejarColorCheckboxNuevo(color) {
    const checkbox = document.getElementById(`nuevoColor-${color}`);
    const coloresDisponibles = ['-', 'rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    
    if (color === '-') {
        // Si se selecciona "-", deseleccionar todos los demás
        if (checkbox.checked) {
            coloresDisponibles.forEach(c => {
                if (c !== '-') {
                    const otherCheckbox = document.getElementById(`nuevoColor-${c}`);
                    if (otherCheckbox) {
                        otherCheckbox.checked = false;
                    }
                }
            });
        }
    } else {
        // Si se selecciona un color, deseleccionar "-"
        if (checkbox.checked) {
            const sinColorCheckbox = document.getElementById('nuevoColor--');
            if (sinColorCheckbox) {
                sinColorCheckbox.checked = false;
            }
        }
    }
    
    // Actualizar campos de stock según colores seleccionados
    actualizarCamposStockNuevo();
}

// Actualizar campos de stock dinámicamente según colores seleccionados (nuevo producto)
function actualizarCamposStockNuevo() {
    const coloresDisponibles = ['rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    const coloresSeleccionados = coloresDisponibles.filter(color => {
        const checkbox = document.getElementById(`nuevoColor-${color}`);
        return checkbox && checkbox.checked;
    });
    
    const stockContainer = document.getElementById('stock-container-nuevo');
    if (!stockContainer) return;
    
    if (coloresSeleccionados.length > 0) {
        // Mostrar campo de stock por cada color seleccionado
        stockContainer.innerHTML = `
            <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                Stock (Unidades): *
            </label>
            ${coloresSeleccionados.map(color => `
                <div style="margin-bottom: 0.5rem;">
                    <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">
                        Stock ${color.charAt(0).toUpperCase() + color.slice(1)}: *
                    </label>
                    <input type="number" 
                           id="nuevoStock-${color}" 
                           value="0" 
                           min="0" 
                           step="1" 
                           required
                           style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                </div>
            `).join('')}
        `;
    } else {
        // Sin color - un solo campo de stock
        stockContainer.innerHTML = `
            <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                Stock (Unidades): *
            </label>
            <input type="number" id="nuevoStock" min="0" step="1" value="0" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
        `;
    }
}

// Eliminar un producto
function eliminarProducto(productId) {
    if (!confirm('¿Estás seguro de que deseas eliminar este producto? Esta acción no se puede deshacer.')) {
        return;
    }
    
    const productIndex = products.findIndex(p => p.id === productId);
    if (productIndex === -1) {
        alert('Producto no encontrado');
        return;
    }
    
    // Eliminar el producto del array
    products.splice(productIndex, 1);
    
    // Reasignar IDs de forma autoincremental sin huecos
    products.sort((a, b) => a.id - b.id); // Ordenar por ID
    products.forEach((product, index) => {
        product.id = index + 1;
    });
    
    // Actualizar productIdCounter al ID más alto + 1
    if (products.length > 0) {
        productIdCounter = Math.max(...products.map(p => p.id)) + 1;
    } else {
        productIdCounter = 1;
    }
    
    // Guardar cambios
    saveProducts();
    
    // Recargar la vista
    renderEditarItems();
    
    alert('Producto eliminado correctamente');
}

// Mostrar formulario para crear nuevo producto
function mostrarFormularioNuevoProducto() {
    // Cargar productos para obtener el siguiente ID
    loadProducts();
    const nuevoId = products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1;
    
    // Crear modal para nuevo producto
    const modalHTML = `
        <div id="modalNuevoProducto" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 10000; display: flex; align-items: center; justify-content: center;">
            <div style="background: white; padding: 2rem; border-radius: 10px; max-width: 600px; width: 90%; max-height: 90vh; overflow-y: auto; box-shadow: 0 4px 20px rgba(0,0,0,0.3);">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                    <h2 style="margin: 0; color: var(--dark-color);">Crear Nuevo Producto</h2>
                    <button onclick="cerrarModalNuevoProducto()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer; color: #999;">&times;</button>
                </div>
                <form id="formNuevoProducto" onsubmit="crearNuevoProducto(event, ${nuevoId})">
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                            <i class="fas fa-barcode" style="color: var(--primary-color); margin-right: 5px;"></i>
                            Código de Producto: *
                        </label>
                        <input type="text" id="nuevoCode" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">Nombre: *</label>
                        <input type="text" id="nuevoName" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">Precio Unitario: *</label>
                        <input type="number" id="nuevoPrice" step="0.01" min="0" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                            <i class="fas fa-tags" style="color: var(--primary-color); margin-right: 5px;"></i>
                            Precio Set:
                        </label>
                        <select id="precioSet-activo-nuevo" onchange="togglePrecioSetNuevo()" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; cursor: pointer; margin-bottom: 0.5rem;">
                            <option value="no" selected>No</option>
                            <option value="si">Sí</option>
                        </select>
                        <div id="precioSet-container-nuevo" style="display: none;">
                            <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">Precio Set (Bs.):</label>
                            <input type="number" id="nuevoPrecioSet" step="0.01" min="0" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                            <i class="fas fa-box" style="color: var(--primary-color); margin-right: 5px;"></i>
                            Precio Docena:
                        </label>
                        <select id="precioDocena-activo-nuevo" onchange="togglePrecioDocenaNuevo()" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; cursor: pointer; margin-bottom: 0.5rem;">
                            <option value="no" selected>No</option>
                            <option value="si">Sí</option>
                        </select>
                        <div id="precioDocena-container-nuevo" style="display: none;">
                            <label style="display: block; margin-bottom: 0.25rem; font-size: 0.85rem; color: #666;">Precio Docena (Bs.):</label>
                            <input type="number" id="nuevoPrecioDocena" step="0.01" min="0" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                        </div>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">Categoría: *</label>
                        <select id="nuevoCategory" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; cursor: pointer;">
                            <option value="">Selecciona una categoría</option>
                            ${Object.keys(categoriesConfig).map(cat => `
                                <option value="${cat}">${categoriesConfig[cat].name}</option>
                            `).join('')}
                        </select>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">Marca:</label>
                        <select id="nuevoBrand" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; cursor: pointer;">
                            <option value="Sabonis">Sabonis</option>
                            <option value="Mango">Mango</option>
                            <option value="Alkalá">Alkalá</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                            <i class="fas fa-palette" style="color: var(--primary-color); margin-right: 5px;"></i>
                            Color (opcional):
                        </label>
                        <select id="nuevoColor" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; cursor: pointer;">
                            <option value="">-</option>
                            <option value="rojo">Rojo</option>
                            <option value="negro">Negro</option>
                            <option value="azul">Azul</option>
                            <option value="verde">Verde</option>
                            <option value="café">Café</option>
                            <option value="amarillo">Amarillo</option>
                            <option value="naranja">Naranja</option>
                            <option value="rosa">Rosa</option>
                            <option value="lila">Lila</option>
                            <option value="celeste">Celeste</option>
                            <option value="morado">Morado</option>
                            <option value="blanco">Blanco</option>
                        </select>
                    </div>
                    <div style="margin-bottom: 1rem;">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">Descripción:</label>
                        <textarea id="nuevoDescription" rows="3" style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem; resize: vertical;"></textarea>
                    </div>
                    <div style="margin-bottom: 1.5rem;" id="stock-container-nuevo">
                        <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                            <i class="fas fa-boxes" style="color: var(--primary-color); margin-right: 5px;"></i>
                            Stock (Unidades): *
                        </label>
                        <input type="number" id="nuevoStock" min="0" step="1" value="0" required style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 5px; font-size: 1rem;">
                    </div>
                    <div style="display: flex; gap: 1rem; justify-content: flex-end;">
                        <button type="button" onclick="cerrarModalNuevoProducto()" style="padding: 0.75rem 1.5rem; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                            Cancelar
                        </button>
                        <button type="submit" style="padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600;">
                            <i class="fas fa-plus"></i> Crear Producto
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Agregar el modal al body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

// Cerrar modal de nuevo producto
function cerrarModalNuevoProducto() {
    const modal = document.getElementById('modalNuevoProducto');
    if (modal) {
        modal.remove();
    }
}

// Crear nuevo producto
function crearNuevoProducto(event, nuevoId) {
    event.preventDefault();
    
    const code = document.getElementById('nuevoCode').value.trim();
    const name = document.getElementById('nuevoName').value.trim();
    const price = parseFloat(document.getElementById('nuevoPrice').value);
    const category = document.getElementById('nuevoCategory').value;
    const brand = document.getElementById('nuevoBrand').value.trim();
    
    // Obtener precios set y docena
    const precioSetActivoSelect = document.getElementById('precioSet-activo-nuevo');
    const precioSetActivo = precioSetActivoSelect ? precioSetActivoSelect.value === 'si' : false;
    const precioSetInput = document.getElementById('nuevoPrecioSet');
    const precioSet = precioSetActivo && precioSetInput ? parseFloat(precioSetInput.value) || 0 : null;
    
    const precioDocenaActivoSelect = document.getElementById('precioDocena-activo-nuevo');
    const precioDocenaActivo = precioDocenaActivoSelect ? precioDocenaActivoSelect.value === 'si' : false;
    const precioDocenaInput = document.getElementById('nuevoPrecioDocena');
    const precioDocena = precioDocenaActivo && precioDocenaInput ? parseFloat(precioDocenaInput.value) || 0 : null;
    
    // Obtener colores seleccionados
    const coloresDisponibles = ['-', 'rojo', 'negro', 'azul', 'verde', 'café', 'amarillo', 'naranja', 'rosa', 'lila', 'celeste', 'morado', 'blanco'];
    const coloresSeleccionados = coloresDisponibles.filter(color => {
        const checkbox = document.getElementById(`nuevoColor-${color}`);
        return checkbox && checkbox.checked;
    });
    
    // Si está seleccionado "-" o no hay colores, no guardar color
    let color = '';
    if (coloresSeleccionados.length > 0 && !coloresSeleccionados.includes('-')) {
        color = coloresSeleccionados.join(', ');
    }
    
    // Obtener stock según si hay colores o no
    let stock = 0;
    let stockByColor = {};
    
    if (coloresSeleccionados.length > 0 && !coloresSeleccionados.includes('-')) {
        // Hay colores - obtener stock por color
        coloresSeleccionados.forEach(colorItem => {
            const stockInput = document.getElementById(`nuevoStock-${colorItem}`);
            if (stockInput) {
                const stockColor = parseInt(stockInput.value) || 0;
                stockByColor[colorItem] = stockColor;
                stock += stockColor; // Stock total es la suma
            }
        });
    } else {
        // Sin color - un solo campo de stock
        const stockInput = document.getElementById('nuevoStock');
        stock = stockInput ? parseInt(stockInput.value) || 0 : 0;
    }
    
    const description = document.getElementById('nuevoDescription').value.trim();
    
    // Validaciones
    if (!code) {
        alert('El código del producto es obligatorio');
        return;
    }
    
    if (!name) {
        alert('El nombre del producto es obligatorio');
        return;
    }
    
    if (isNaN(price) || price < 0) {
        alert('El precio debe ser un número válido mayor o igual a 0');
        return;
    }
    
    if (!category) {
        alert('La categoría es obligatoria');
        return;
    }
    
    // Verificar si el código ya existe
    const codigoExiste = products.some(p => normalizeCode(p.code || p.id || '') === normalizeCode(code));
    if (codigoExiste) {
        alert('Ya existe un producto con este código. Por favor, usa un código diferente.');
        return;
    }
    
    // Crear nuevo producto
    const nuevoProducto = {
        id: nuevoId,
        code: code,
        name: name,
        nameNormalized: normalizeText(name.toLowerCase()),
        price: price,
        category: category,
        brand: brand,
        color: color,
        description: description,
        stock: stock,
        image: 'img/productos/default.jpg', // Imagen por defecto
        createdAt: new Date().toISOString()
    };
    
    // Agregar stock por color si existe
    if (Object.keys(stockByColor).length > 0) {
        nuevoProducto.stockByColor = stockByColor;
    }
    
    // Agregar precios set y docena si existen
    if (precioSetActivo && precioSet !== null) {
        nuevoProducto.precioSet = precioSet;
    }
    if (precioDocenaActivo && precioDocena !== null) {
        nuevoProducto.precioDocena = precioDocena;
    }
    
    // Agregar el producto al array
    products.push(nuevoProducto);
    
    // Actualizar productIdCounter al nuevo ID para mantener IDs autoincrementales
    productIdCounter = nuevoId + 1;
    
    // Guardar productos
    saveProducts();
    
    // Cerrar modal
    cerrarModalNuevoProducto();
    
    // Recargar la vista
    renderEditarItems();
    
    alert('Producto creado correctamente');
}

// Guardar cambios de un producto
function guardarProducto(productId) {
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        alert('Producto no encontrado');
        return;
    }
    
    const nameInput = document.getElementById(`name-${productId}`);
    const priceInput = document.getElementById(`price-${productId}`);
    const brandInput = document.getElementById(`brand-${productId}`);
    const sizeInput = document.getElementById(`size-${productId}`);
    const descriptionInput = document.getElementById(`description-${productId}`);
    const stockInput = document.getElementById(`stock-${productId}`);
    
    if (!nameInput || !priceInput) {
        alert('Error: No se encontraron los campos del producto');
        return;
    }
    
    const newName = nameInput.value.trim();
    const newPrice = parseFloat(priceInput.value);
    const newBrand = brandInput ? brandInput.value.trim() : '';
    const newSize = sizeInput ? sizeInput.value.trim() : '';
    const newDescription = descriptionInput ? descriptionInput.value.trim() : '';
    const newStock = stockInput ? parseInt(stockInput.value) : (products[productIndex].stock || 0);
    
    if (!newName) {
        alert('El nombre del producto es obligatorio');
        return;
    }
    
    if (isNaN(newPrice) || newPrice < 0) {
        alert('El precio debe ser un número válido mayor o igual a 0');
        return;
    }
    
    // Guardar valores antiguos para comparar
    const oldPrice = products[productIndex].price;
    const oldName = products[productIndex].name;
    const oldBrand = products[productIndex].brand;
    
    // Actualizar producto
    products[productIndex].name = newName;
    products[productIndex].price = newPrice;
    products[productIndex].brand = newBrand;
    products[productIndex].size = newSize;
    products[productIndex].description = newDescription;
    products[productIndex].stock = newStock;
    
    // Actualizar nameNormalized para búsquedas
    products[productIndex].nameNormalized = normalizeText(newName);
    
    // Guardar productos
    saveProducts();
    
    // ACTUALIZAR CARRITO si hay cambios en precio, nombre o marca
    // Esto asegura que los productos en el carrito tengan la información más reciente
    let cartUpdated = false;
    if (cart && cart.length > 0) {
        cart.forEach(cartItem => {
            if (cartItem.id === productId) {
                // Actualizar precio, nombre y marca en el carrito
                cartItem.price = newPrice;
                cartItem.name = newName;
                cartItem.brand = newBrand;
                cartItem.size = newSize;
                cartItem.description = newDescription;
                cartUpdated = true;
            }
        });
        
        if (cartUpdated) {
            saveCart();
            updateCartUI();
        }
    }
    
    // Actualizar visualmente el precio en el input
    priceInput.value = newPrice.toFixed(2);
    
    // Mostrar confirmación visual
    const productCard = document.getElementById(`product-${productId}`);
    if (productCard) {
        productCard.style.borderColor = '#28a745';
        setTimeout(() => {
            productCard.style.borderColor = 'transparent';
        }, 2000);
    }
    
    // Mostrar mensaje de confirmación
    let message = 'Producto actualizado correctamente';
    if (cartUpdated) {
        message += '. El carrito ha sido actualizado con los nuevos datos.';
    }
    showNotification(message);
}

// Manejar búsqueda en inventario (con debounce para evitar perder el foco)
function handleInventarioSearchInput() {
    const searchInput = document.getElementById('inventarioSearchInput');
    if (searchInput) {
        // Guardar el valor actual inmediatamente (sin trim para preservar espacios mientras escribe)
        inventarioSearchTerm = searchInput.value;
        
        // Limpiar el timeout anterior si existe
        if (inventarioSearchTimeout) {
            clearTimeout(inventarioSearchTimeout);
        }
        
        // Esperar 500ms después de que el usuario deje de escribir antes de renderizar
        // Esto da más tiempo para escribir sin interrupciones
        inventarioSearchTimeout = setTimeout(() => {
            // Solo hacer trim al final para la búsqueda, pero mantener el valor original en el input
            const trimmedValue = inventarioSearchTerm.trim();
            if (trimmedValue !== inventarioSearchTerm) {
                inventarioSearchTerm = trimmedValue;
            }
            renderInventario();
        }, 500);
    }
}

// Función para búsqueda inmediata (si se quiere usar con botón)
function handleInventarioSearch() {
    const searchInput = document.getElementById('inventarioSearchInput');
    if (searchInput) {
        inventarioSearchTerm = searchInput.value.trim();
        if (inventarioSearchTimeout) {
            clearTimeout(inventarioSearchTimeout);
        }
        renderInventario();
    }
}

// Manejar filtro de categoría en inventario
function handleInventarioFilter() {
    const categoryFilter = document.getElementById('inventarioCategoryFilter');
    if (categoryFilter) {
        inventarioFilterCategory = categoryFilter.value;
        renderInventario();
    }
}

// Limpiar filtros de inventario
function clearInventarioFilters() {
    inventarioSearchTerm = '';
    inventarioFilterCategory = 'todas';
    const searchInput = document.getElementById('inventarioSearchInput');
    const categoryFilter = document.getElementById('inventarioCategoryFilter');
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'todas';
    renderInventario();
}

// Variables para filtros del dashboard
let dashboardFilterPeriod = 'todos';
let dashboardFilterCategory = 'todas';
let dashboardSortBy = 'cantidad';

// Renderizar productos más vendidos con dashboard interactivo
function renderProductosMasVendidos() {
    const productosMasVendidosList = document.getElementById('productosMasVendidosList');
    if (!productosMasVendidosList) return;
    
    loadUsers();
    loadProducts();
    
    // Obtener todos los pedidos y contar productos vendidos
    const productosVendidos = {};
    const productosPorCategoria = {};
    let totalVentas = 0;
    let totalUnidadesVendidas = 0;
    let totalPedidos = 0;
    const ventasPorMes = {};
    
    users.forEach(user => {
        const userOrders = JSON.parse(localStorage.getItem(`orders_${user.id}`) || '[]');
        userOrders.forEach(order => {
            // Filtrar por período si es necesario
            if (dashboardFilterPeriod !== 'todos') {
                const orderDate = new Date(order.date);
                const now = new Date();
                let shouldInclude = false;
                
                if (dashboardFilterPeriod === 'hoy') {
                    shouldInclude = orderDate.toDateString() === now.toDateString();
                } else if (dashboardFilterPeriod === 'semana') {
                    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                    shouldInclude = orderDate >= weekAgo;
                } else if (dashboardFilterPeriod === 'mes') {
                    const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                    shouldInclude = orderDate >= monthAgo;
                }
                
                if (!shouldInclude) return;
            }
            
            totalPedidos++;
            const orderTotal = typeof order.total === 'number' ? order.total : parseFloat(order.total.toString().replace('Bs. ', '').replace(',', '')) || 0;
            totalVentas += orderTotal;
            
            // Agrupar por mes para gráfico de tendencias
            if (order.date) {
                const orderDate = new Date(order.date);
                const monthKey = `${orderDate.getFullYear()}-${String(orderDate.getMonth() + 1).padStart(2, '0')}`;
                if (!ventasPorMes[monthKey]) {
                    ventasPorMes[monthKey] = { ventas: 0, pedidos: 0 };
                }
                ventasPorMes[monthKey].ventas += orderTotal;
                ventasPorMes[monthKey].pedidos += 1;
            }
            
            order.items.forEach(item => {
                // Obtener categoría del producto
                const product = products.find(p => p.id === item.id);
                const categoria = product ? product.category : 'otros';
                
                // Filtrar por categoría si es necesario
                if (dashboardFilterCategory !== 'todas' && categoria !== dashboardFilterCategory) {
                    return;
                }
                
                if (!productosVendidos[item.name]) {
                    productosVendidos[item.name] = {
                        name: item.name,
                        cantidad: 0,
                        total: 0,
                        categoria: categoria,
                        precioPromedio: 0,
                        vecesVendido: 0
                    };
                }
                
                const itemPrice = typeof item.price === 'number' ? item.price : parseFloat(item.price.toString().replace('Bs. ', '').replace(',', '')) || 0;
                productosVendidos[item.name].cantidad += item.quantity;
                productosVendidos[item.name].total += itemPrice * item.quantity;
                productosVendidos[item.name].vecesVendido += 1;
                totalUnidadesVendidas += item.quantity;
                
                // Agrupar por categoría
                if (!productosPorCategoria[categoria]) {
                    productosPorCategoria[categoria] = { cantidad: 0, total: 0 };
                }
                productosPorCategoria[categoria].cantidad += item.quantity;
                productosPorCategoria[categoria].total += itemPrice * item.quantity;
            });
        });
    });
    
    // Calcular precio promedio
    Object.keys(productosVendidos).forEach(name => {
        const prod = productosVendidos[name];
        prod.precioPromedio = prod.cantidad > 0 ? prod.total / prod.cantidad : 0;
    });
    
    // Ordenar productos
    let productosOrdenados = Object.values(productosVendidos);
    if (dashboardSortBy === 'cantidad') {
        productosOrdenados.sort((a, b) => b.cantidad - a.cantidad);
    } else if (dashboardSortBy === 'total') {
        productosOrdenados.sort((a, b) => b.total - a.total);
    } else if (dashboardSortBy === 'veces') {
        productosOrdenados.sort((a, b) => b.vecesVendido - a.vecesVendido);
    }
    
    // Obtener top 10
    const top10 = productosOrdenados.slice(0, 10);
    const maxCantidad = top10.length > 0 ? top10[0].cantidad : 1;
    const maxTotal = top10.length > 0 ? top10[0].total : 1;
    
    // Preparar datos para gráfico de tendencias
    const mesesOrdenados = Object.keys(ventasPorMes).sort();
    const maxVentasMes = mesesOrdenados.length > 0 ? Math.max(...mesesOrdenados.map(m => ventasPorMes[m].ventas)) : 1;
    
    // Si no hay productos, mostrar mensaje pero mantener los filtros visibles
    if (productosOrdenados.length === 0) {
        productosMasVendidosList.innerHTML = `
        <!-- Filtros del Dashboard (siempre visibles) -->
        <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-calendar" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Período:
                    </label>
                    <select id="dashboardPeriodFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardPeriodFilter()">
                        <option value="todos" ${dashboardFilterPeriod === 'todos' ? 'selected' : ''}>Todos los Tiempos</option>
                        <option value="hoy" ${dashboardFilterPeriod === 'hoy' ? 'selected' : ''}>Hoy</option>
                        <option value="semana" ${dashboardFilterPeriod === 'semana' ? 'selected' : ''}>Última Semana</option>
                        <option value="mes" ${dashboardFilterPeriod === 'mes' ? 'selected' : ''}>Último Mes</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-filter" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Categoría:
                    </label>
                    <select id="dashboardCategoryFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardCategoryFilter()">
                        <option value="todas" ${dashboardFilterCategory === 'todas' ? 'selected' : ''}>Todas las Categorías</option>
                        ${Object.keys(categoriesConfig).map(cat => `
                            <option value="${cat}" ${dashboardFilterCategory === cat ? 'selected' : ''}>${categoriesConfig[cat].name}</option>
                        `).join('')}
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-sort" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Ordenar por:
                    </label>
                    <select id="dashboardSortBy" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardSortBy()">
                        <option value="cantidad" ${dashboardSortBy === 'cantidad' ? 'selected' : ''}>Cantidad Vendida</option>
                        <option value="total" ${dashboardSortBy === 'total' ? 'selected' : ''}>Total en Ventas</option>
                        <option value="veces" ${dashboardSortBy === 'veces' ? 'selected' : ''}>Veces Vendido</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- Mensaje de no hay datos -->
        <div style="background: white; padding: 3rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); text-align: center;">
            <i class="fas fa-chart-line" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
            <h3 style="color: var(--dark-color); margin-bottom: 0.5rem;">No hay datos de ventas</h3>
            <p style="color: #666; margin-bottom: 1.5rem;">Aún no se han realizado pedidos con los filtros seleccionados</p>
            <button onclick="clearDashboardFilters()" style="padding: 0.75rem 1.5rem; background: var(--primary-color); color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: 600; font-size: 1rem;">
                <i class="fas fa-times"></i> Limpiar Filtros
            </button>
        </div>
        `;
        return;
    }
    
    productosMasVendidosList.innerHTML = `
        <!-- Filtros del Dashboard -->
        <div style="background: white; padding: 1.5rem; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 1rem;">
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-calendar" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Período:
                    </label>
                    <select id="dashboardPeriodFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardPeriodFilter()">
                        <option value="todos" ${dashboardFilterPeriod === 'todos' ? 'selected' : ''}>Todos los Tiempos</option>
                        <option value="hoy" ${dashboardFilterPeriod === 'hoy' ? 'selected' : ''}>Hoy</option>
                        <option value="semana" ${dashboardFilterPeriod === 'semana' ? 'selected' : ''}>Última Semana</option>
                        <option value="mes" ${dashboardFilterPeriod === 'mes' ? 'selected' : ''}>Último Mes</option>
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-filter" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Categoría:
                    </label>
                    <select id="dashboardCategoryFilter" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardCategoryFilter()">
                        <option value="todas" ${dashboardFilterCategory === 'todas' ? 'selected' : ''}>Todas las Categorías</option>
                        ${Object.keys(categoriesConfig).map(cat => `
                            <option value="${cat}" ${dashboardFilterCategory === cat ? 'selected' : ''}>${categoriesConfig[cat].name}</option>
                        `).join('')}
                    </select>
                </div>
                <div>
                    <label style="display: block; margin-bottom: 0.5rem; font-weight: bold; color: var(--dark-color);">
                        <i class="fas fa-sort" style="color: var(--primary-color); margin-right: 5px;"></i>
                        Ordenar por:
                    </label>
                    <select id="dashboardSortBy" 
                            style="width: 100%; padding: 0.75rem; border: 2px solid #ddd; border-radius: 8px; font-size: 1rem; cursor: pointer;"
                            onchange="handleDashboardSortBy()">
                        <option value="cantidad" ${dashboardSortBy === 'cantidad' ? 'selected' : ''}>Cantidad Vendida</option>
                        <option value="total" ${dashboardSortBy === 'total' ? 'selected' : ''}>Total en Ventas</option>
                        <option value="veces" ${dashboardSortBy === 'veces' ? 'selected' : ''}>Veces Vendido</option>
                    </select>
                </div>
            </div>
        </div>
        
        <!-- Tarjetas de Métricas -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin-bottom: 2rem;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 1.5rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <div>
                        <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Total en Ventas</p>
                        <h2 style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">Bs. ${totalVentas.toFixed(2)}</h2>
                    </div>
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; padding: 1.5rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <div>
                        <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Unidades Vendidas</p>
                        <h2 style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${totalUnidadesVendidas.toLocaleString()}</h2>
                    </div>
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
                        <i class="fas fa-box"></i>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; padding: 1.5rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <div>
                        <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Total de Pedidos</p>
                        <h2 style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${totalPedidos}</h2>
                    </div>
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                </div>
            </div>
            
            <div style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: white; padding: 1.5rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.2);">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
                    <div>
                        <p style="margin: 0; opacity: 0.9; font-size: 0.9rem;">Productos Únicos</p>
                        <h2 style="margin: 0.5rem 0 0 0; font-size: 2rem; font-weight: 700;">${productosOrdenados.length}</h2>
                    </div>
                    <div style="width: 60px; height: 60px; background: rgba(255,255,255,0.2); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 1.8rem;">
                        <i class="fas fa-tags"></i>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Gráfico de Barras - Top 10 Productos -->
        <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; color: var(--dark-color); display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-chart-bar" style="color: var(--primary-color);"></i>
                Top 10 Productos Más Vendidos (por Cantidad)
            </h3>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                ${top10.map((producto, index) => {
                    const porcentaje = (producto.cantidad / maxCantidad) * 100;
                    return `
                    <div style="display: flex; align-items: center; gap: 1rem;">
                        <div style="min-width: 40px; text-align: center;">
                            <div style="width: 35px; height: 35px; border-radius: 50%; background: ${index < 3 ? 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)' : '#f0f0f0'}; display: flex; align-items: center; justify-content: center; color: ${index < 3 ? 'white' : 'var(--dark-color)'}; font-weight: bold; font-size: 0.9rem; box-shadow: ${index < 3 ? '0 2px 8px rgba(255,215,0,0.3)' : 'none'};">
                                ${index + 1}
                            </div>
                        </div>
                        <div style="flex: 1; min-width: 0;">
                            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                                <strong style="color: var(--dark-color); font-size: 0.95rem; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${producto.name}</strong>
                                <span style="color: var(--primary-color); font-weight: 600; font-size: 0.9rem; margin-left: 1rem;">${producto.cantidad} unidades</span>
                            </div>
                            <div style="width: 100%; height: 25px; background: #f0f0f0; border-radius: 12px; overflow: hidden; position: relative;">
                                <div style="width: ${porcentaje}%; height: 100%; background: linear-gradient(90deg, var(--primary-color) 0%, #5a9de8 100%); border-radius: 12px; transition: width 0.5s ease; display: flex; align-items: center; justify-content: flex-end; padding-right: 0.5rem; color: white; font-size: 0.75rem; font-weight: 600;">
                                    ${porcentaje >= 10 ? `${Math.round(porcentaje)}%` : ''}
                                </div>
                            </div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
        
        <!-- Gráfico de Ventas por Mes -->
        ${mesesOrdenados.length > 0 ? `
        <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; color: var(--dark-color); display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-chart-line" style="color: var(--primary-color);"></i>
                Tendencia de Ventas por Mes
            </h3>
            <div style="display: flex; align-items: flex-end; gap: 1rem; height: 300px; padding: 1rem 0;">
                ${mesesOrdenados.map(mes => {
                    const mesData = ventasPorMes[mes];
                    const altura = (mesData.ventas / maxVentasMes) * 100;
                    const fecha = new Date(mes + '-01');
                    const mesNombre = fecha.toLocaleDateString('es-ES', { month: 'short', year: 'numeric' });
                    return `
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%;">
                        <div style="flex: 1; display: flex; align-items: flex-end; width: 100%; margin-bottom: 0.5rem;">
                            <div style="width: 100%; background: linear-gradient(180deg, var(--primary-color) 0%, #5a9de8 100%); border-radius: 8px 8px 0 0; height: ${altura}%; min-height: 20px; position: relative; transition: height 0.5s ease; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                                <div style="position: absolute; top: -25px; left: 50%; transform: translateX(-50%); white-space: nowrap; font-size: 0.75rem; font-weight: 600; color: var(--dark-color);">
                                    Bs. ${mesData.ventas.toFixed(0)}
                                </div>
                            </div>
                        </div>
                        <div style="text-align: center; font-size: 0.85rem; color: #666; font-weight: 600;">
                            ${mesNombre}
                        </div>
                        <div style="text-align: center; font-size: 0.75rem; color: #999; margin-top: 0.25rem;">
                            ${mesData.pedidos} pedidos
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
        ` : ''}
        
        <!-- Ventas por Categoría -->
        ${Object.keys(productosPorCategoria).length > 0 ? `
        <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1); margin-bottom: 2rem;">
            <h3 style="margin: 0 0 1.5rem 0; color: var(--dark-color); display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-pie-chart" style="color: var(--primary-color);"></i>
                Ventas por Categoría
            </h3>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                ${Object.keys(productosPorCategoria).map(cat => {
                    const catData = productosPorCategoria[cat];
                    const catInfo = categoriesConfig[cat];
                    const totalCategorias = Object.values(productosPorCategoria).reduce((sum, c) => sum + c.total, 0);
                    const porcentaje = totalCategorias > 0 ? (catData.total / totalCategorias) * 100 : 0;
                    return `
                    <div style="padding: 1.25rem; background: #f8f9fa; border-radius: 10px; border-left: 4px solid var(--primary-color);">
                        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem;">
                            <i class="${catInfo ? catInfo.icon : 'fas fa-box'}" style="font-size: 1.5rem; color: var(--primary-color);"></i>
                            <div style="flex: 1;">
                                <h4 style="margin: 0; color: var(--dark-color); font-size: 1rem;">${catInfo ? catInfo.name : cat}</h4>
                                <p style="margin: 0.25rem 0 0 0; color: #666; font-size: 0.85rem;">${catData.cantidad} unidades</p>
                            </div>
                        </div>
                        <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid #e0e0e0;">
                            <p style="margin: 0; color: var(--primary-color); font-weight: 700; font-size: 1.1rem;">Bs. ${catData.total.toFixed(2)}</p>
                            <div style="margin-top: 0.5rem; width: 100%; height: 8px; background: #e0e0e0; border-radius: 4px; overflow: hidden;">
                                <div style="width: ${porcentaje}%; height: 100%; background: linear-gradient(90deg, var(--primary-color) 0%, #5a9de8 100%); border-radius: 4px; transition: width 0.5s ease;"></div>
                            </div>
                            <p style="margin: 0.25rem 0 0 0; color: #999; font-size: 0.75rem;">${porcentaje.toFixed(1)}% del total</p>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
        </div>
        ` : ''}
        
        <!-- Tabla Detallada de Productos -->
        <div style="background: white; padding: 2rem; border-radius: 15px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 1.5rem 0; color: var(--dark-color); display: flex; align-items: center; gap: 0.5rem;">
                <i class="fas fa-table" style="color: var(--primary-color);"></i>
                Lista Completa de Productos Vendidos (${productosOrdenados.length})
            </h3>
            <div style="overflow-x: auto;">
                <table style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="background: #f8f9fa; border-bottom: 2px solid #dee2e6;">
                            <th style="padding: 1rem; text-align: left; color: var(--dark-color); font-weight: 600;">#</th>
                            <th style="padding: 1rem; text-align: left; color: var(--dark-color); font-weight: 600;">Producto</th>
                            <th style="padding: 1rem; text-align: center; color: var(--dark-color); font-weight: 600;">Categoría</th>
                            <th style="padding: 1rem; text-align: center; color: var(--dark-color); font-weight: 600;">Cantidad</th>
                            <th style="padding: 1rem; text-align: center; color: var(--dark-color); font-weight: 600;">Veces Vendido</th>
                            <th style="padding: 1rem; text-align: right; color: var(--dark-color); font-weight: 600;">Precio Promedio</th>
                            <th style="padding: 1rem; text-align: right; color: var(--dark-color); font-weight: 600;">Total Ventas</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${productosOrdenados.map((producto, index) => {
                            const catInfo = categoriesConfig[producto.categoria] || { name: 'Otros', icon: 'fas fa-box' };
                            return `
                            <tr style="border-bottom: 1px solid #f0f0f0; transition: background 0.2s;" 
                                onmouseover="this.style.background='#f8f9fa'" 
                                onmouseout="this.style.background='white'">
                                <td style="padding: 1rem; color: #666; font-weight: 600;">${index + 1}</td>
                                <td style="padding: 1rem;">
                                    <strong style="color: var(--dark-color);">${producto.name}</strong>
                                </td>
                                <td style="padding: 1rem; text-align: center;">
                                    <span style="display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.25rem 0.75rem; background: #f0f0f0; border-radius: 20px; font-size: 0.85rem; color: var(--dark-color);">
                                        <i class="${catInfo.icon}" style="color: var(--primary-color);"></i>
                                        ${catInfo.name}
                                    </span>
                                </td>
                                <td style="padding: 1rem; text-align: center; color: #333; font-weight: 600;">${producto.cantidad}</td>
                                <td style="padding: 1rem; text-align: center; color: #666;">${producto.vecesVendido}</td>
                                <td style="padding: 1rem; text-align: right; color: #666;">Bs. ${producto.precioPromedio.toFixed(2)}</td>
                                <td style="padding: 1rem; text-align: right; color: var(--primary-color); font-weight: 700;">Bs. ${producto.total.toFixed(2)}</td>
                            </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

// Manejar filtro de período en dashboard
function handleDashboardPeriodFilter() {
    const periodFilter = document.getElementById('dashboardPeriodFilter');
    if (periodFilter) {
        dashboardFilterPeriod = periodFilter.value;
        renderProductosMasVendidos();
    }
}

// Manejar filtro de categoría en dashboard
function handleDashboardCategoryFilter() {
    const categoryFilter = document.getElementById('dashboardCategoryFilter');
    if (categoryFilter) {
        dashboardFilterCategory = categoryFilter.value;
        renderProductosMasVendidos();
    }
}

// Manejar ordenamiento en dashboard
function handleDashboardSortBy() {
    const sortBy = document.getElementById('dashboardSortBy');
    if (sortBy) {
        dashboardSortBy = sortBy.value;
        renderProductosMasVendidos();
    }
}

// Limpiar filtros del dashboard
function clearDashboardFilters() {
    dashboardFilterPeriod = 'todos';
    dashboardFilterCategory = 'todas';
    dashboardSortBy = 'cantidad';
    renderProductosMasVendidos();
}


// Manejar envío de mensaje de ayuda
function handleHelpSubmit(e) {
    e.preventDefault();
    if (!currentUser) return;

    const subject = document.getElementById('helpSubject').value;
    const message = document.getElementById('helpMessage').value;

    // Guardar mensaje de ayuda (en una app real, esto se enviaría al servidor)
    const helpMessages = JSON.parse(localStorage.getItem('helpMessages') || '[]');
    helpMessages.push({
        id: Date.now(),
        userId: currentUser.id,
        userName: `${currentUser.firstName} ${currentUser.lastName}`,
        userEmail: currentUser.email,
        subject: subject,
        message: message,
        date: new Date().toISOString(),
        status: 'pendiente'
    });
    localStorage.setItem('helpMessages', JSON.stringify(helpMessages));

    showNotification('Mensaje enviado correctamente. Te responderemos pronto.');
    document.getElementById('helpForm').reset();
    hideAllUserSections();
}

// Guardar carrito en localStorage
function saveCart() {
    try {
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Carrito guardado:', cart);
    } catch (error) {
        console.error('Error al guardar el carrito:', error);
    }
}

// Cargar carrito desde localStorage
function loadCart() {
    try {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
            console.log('Carrito cargado:', cart);
            updateCartUI();
        }
    } catch (error) {
        console.error('Error al cargar el carrito:', error);
        cart = [];
    }
}

// Mostrar notificación
function showNotification(message) {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #50c878;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 2000);
}

// Añadir animaciones CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
