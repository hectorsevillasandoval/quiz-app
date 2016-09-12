var vm = new Vue({
	el: 'body',
	data: {
		questions: [
			{
				id: 1,
				question: 'Has cocinado bacon en el microondas?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Si','No'],
				chosen: '',
				buttonNext: 2
			},
			{
				id: 2,
				question: 'Crees que bacon y dulce hacen una buena combinación?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Si','No', 'Nunca lo he probado'],
				chosen: '',
				buttonNext: 3
			},
			{
				id: 3,
				question: 'Hasta la comida mas corriente la he mejorado con Bacon?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Verdadero','Falso'],
				chosen: '',
				buttonNext: 4
			},
			{
				id: 4,
				question: 'He comido Bacon enrollado en dátiles y esparragos?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Si','No'],
				chosen: '',
				buttonNext: 5
			},
			{
				id: 5,
				question: 'La mejor hora para comer bacon es en la mañana acompañado de huevos a tu gusto. ?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Verdadero','Falso'],
				chosen: '',
				buttonNext: 6
			},
			{
				id: 6,
				question: 'Mi forma favorita de cocinar Bacon es:',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['En el horno','Microondas', 'Sartén'],
				chosen: '',
				buttonNext: 7,
				imageOptions: ['https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg','https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg','https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg']
			},
			{
				id: 7,
				question: 'El bacon se aprovecha mejor cuando se usa para?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Cocinar','Acompañante(Guarnición)', 'Enrollado en cualquier cosa', 'Tostado en pedacitos encima de la comida para agregar textura'],
				chosen: '',
				buttonNext: 0,
				imageOptions: ['https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg','https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg','https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg','https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg']
			}

		],
		testResult: "resultado",
		heroe: 0,
		vanguardista: 0,
		toper: 0,
		tradicional: 0,
		gourmet: 0,
		tocinero: 0
	},
	methods:{
		resultados: function(){

			var resultado = [], eres;

			resultado.push(this.heroe);
			resultado.push(this.vanguardista);
			resultado.push(this.toper);
			resultado.push(this.tradicional);
			resultado.push(this.gourmet);
			resultado.push(this.tocinero);

			eres = Math.max.apply(null, resultado)

			if(eres === this.heroe){
				this.testResult = "Heroe";
			}else if(eres === this.vanguardista){
				this.testResult = "Vanguardista";
			}else if(eres === this.toper){
				this.testResult = "Toper";
			}else if(eres === this.tradicional){
				this.testResult = "Tradicional";
			}else if(eres === this.gourmet){
				this.testResult = "Gourmet";
			}else{
				this.testResult = "Tocinero";
			}

		},
		addElement: function(question){
			if(question.id === 1){
				if(question.chosen.toLowerCase() === 'si'){
					this.heroe != -1 ? this.heroe += 1 : -1;
					this.vanguardista != -1 ? this.vanguardista += 5: -1;
					this.toper != -1 ? this.toper += 1: -1;
					this.tradicional = -1;
				}else{
					this.tradicional != -1 ? this.tradicional += 1: -1;
					this.vanguardista != -1 ? this.vanguardista += 1: -1;

				}

			}else if(question.id === 2){
				if(question.chosen.toLowerCase() === 'si'){
					this.vanguardista != -1 ? this.vanguardista += 5: -1;
					this.gourmet != -1 ? this.gourmet += 3: -1;
					this.tradicional = -1;
				}else if(question.chosen.toLowerCase() === 'no'){
					this.tradicional != -1 ? this.tradicional += 1: -1;
					this.vanguardista = -1;

				}else{
					this.tradicional != -1 ? this.tradicional += 1: -1;
				}


			}else if(question.id === 3){
				if(question.chosen.toLowerCase() === 'verdadero'){
					this.heroe != -1 ? this.heroe += 5 : -1;
					this.toper != -1 ? this.toper += 5: -1;
				} // falso no hay opciones

			}else if(question.id === 4){
				if(question.chosen.toLowerCase() === 'si'){
					this.gourmet != -1 ? this.gourmet += 5 : -1;
					this.vanguardista != -1 ? this.vanguardista += 5: -1;
					this.tradicional = -1;
				}else{
					this.gourmet = -1;
				}
			}else if(question.id === 5){
				if(question.chosen.toLowerCase() === 'verdadero'){
					this.tradicional != -1 ? this.tradicional += 5 : -1;
					this.vanguardista = -1;
				}// No hay opciones
			}else if(question.id === 6){
				if(question.chosen.toLowerCase() === 'en el horno'){
					this.gourmet != -1 ? this.gourmet += 4 : -1;
					this.vanguardista != -1 ? this.vanguardista += 3 : -1;
				}else if(question.chosen.toLowerCase() === 'microondas'){
					this.toper != -1 ? this.toper += 2 : -1;
					this.heroe != -1 ? this.heroe += 4 : -1;
					this.vanguardista != -1 ? this.vanguardista += 5 : -1;

				}else{
					this.tocinero != -1 ? this.tocinero += 5 : -1;
					this.tradicional != -1 ? this.tradicional += 5 : -1;

				}
			}
		}
	}
});
