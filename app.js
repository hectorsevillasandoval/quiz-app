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
				buttonNext: 7
			},
			{
				id: 7,
				question: 'El bacon se aprovecha mejor cuando se usa para?',
				picture_url: 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/pork-medallions-wrapped-in-bacon.jpg',
				options: ['Cocinar','Acompañante(Guarnición)', 'Enrollado en cualquier cosa', 'Tostado en pedacitos encima de la comida para agregar textura'],
				chosen: '',
				buttonNext: 0
			}

		]
	}
});
