-- recipe 1
INSERT INTO `recetas`.`recetas` (`id`, `nombre`, `ingredientes`, `instucciones`) 
    VALUES ('1', 'Baleadas hondureñas', 'tortillas de harna, frijoles, huevos, mantequilla, queso.', 'Posteriormente preparar cada ingradiente por separado, para montar las baleadas. Coloca la tortilla en la mano, untándole una cucharada de la masa de frijol y doblándolas por la mitad. En este momento, se puede añadir el huevo, queso rayado o mantequilla por encima para que acabe de fundirse con el calor residual.');

-- recipe 2
INSERT INTO `recetas_db`.`recetas` (`id`, `nombre`, `ingredientes`, `instucciones`) 
    VALUES ('2', 'Sopa de Caracol', 'Caracol, leche de coco, yuca blanca, banana verde, Cebolla, Chile verde dulce, cilantro, ajos machacados, apio, Achiote al gusto, Sal al gusto, Pimienta y cominos al gusto, Agua', 'Primero: Se parte el caracol en cuadros del tamaño de 2 pulgadas se aplasta un poco para que quede más suave. Segundo: Si es coco molido se le agrega 5 vasos de agua caliente para sacar la pura leche, o si es de lata se pone a hervir la leche. Tercero: Se le agrega 3 tazas de agua y se pone a cocinar con la yuca mientras hierve se está moviendo constantemente. Cuarto: Aparte se sofríe cebolla, 2 ajos triturados, chile dulce o pimentón, cilantro o culantro, apio, una pizca de pimienta y cominos y un cuarto de cucharadita de achiote para dar color. Quinto: Cuando empiece a hervir se le agrega el sofrito. Sexto: Cuando ya le falte poco para que se ablande la yuca se le agrega el plátano o el banano partido en rebanadas. Septimo: La sazón de mariscos al gusto y cuando este todo cocinado se le agrega el caracol y se apaga la estufa.');

--recipe 3
INSERT INTO `recetas_db`.`recetas` (`id`, `nombre`, `ingredientes`, `instucciones`) 
    VALUES ('3', 'Fritas de elote', 'granos de elote, leche, harina, polvo de hornear, Huevo, Sal', 
    'Primero: licuar las 3 tazas de grano de elote, con un 1/4 de taza de leche hasta que este bien molido. 
    Segundo: colar bien para que noqueden grumos. Tercero: Agregar 4 cucharaditas de harina, polvo de hornear, 1 huevo, una pizca de sal y triturar. 
    Cuarto: Tomar un sartén y aceite para freír, colocarlo a fuego medio, poner 1/4 de taza de la mezcla y ponerlas a dorar. 
    Quinto: Hay que lograr que queden bien doraditas, las fritas de elote. Sexto: Después, colocar sobre papel absorbente para quitar el exceso de grasa.');

--recipe 4
INSERT INTO `recetas_db`.`recetas` (`id`, `nombre`, `ingredientes`, `instucciones`) 
    VALUES ('4', 'Catrachas ', 'Frijoles fritos, Tortillas de maíz, Queso rallado', 'Primero: Hacer los frijoles fritos, pueden ser licuados o machacados. Segundo: Después en un sartén se coloca el aceite para freír, y poner las tortillas de maíz. Tercero: Luego poner las tortillas en papel para absorber la grasa. Cuarto: Finalmente cubrir con el frijol frito las tortillas de maíz como si fuera una tostada, y decorarla con queso rallado al gusto.');
