exports.seed = function (knex) {
	// Deletes ALL existing entries
	return knex('issues')
		.truncate()
		.then(function () {
			// Inserts seed entries
			return knex('issues').insert([
				{
					id: 1,
					name: 'Pot Hole',
					desc: 'I nearly ruined a tire. The roads are getting bad',
					state: 'Oklahoma',
					zip: 74462,
					image:
						'https://ichef.bbci.co.uk/news/410/cpsprodpb/129DB/production/_104615267_9faf0b8c-02ef-4634-81b8-0d2d847439d0.jpg',
					vote: 0,
				},
				{
					id: 2,
					name: 'Beach Litter at Lake',
					desc: 'I want to start a cleanup day',
					state: 'Oklahoma',
					zip: 53621,
					image:
						'https://i.guim.co.uk/img/media/492c6ec861b677bc710371b9fe1c1dfc82ee421a/0_69_4698_2820/master/4698.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c239038bea5e28bc9b6ef7d49656d9d3',
					vote: 0,
				},
				{
					id: 3,
					name: 'Desecrated Graveyard',
					desc: 'After the Riots',
					state: 'Illinois',
					zip: 69695,
					image:
						'https://cdn.cnn.com/cnnnext/dam/assets/170226215055-philadelphia-cemetery-vandalism-vstop-ewoh-orig-00000000-exlarge-169.jpg',
					vote: 0,
				},
				{
					id: 4,
					name: 'Flooded Area',
					desc: 'The roads between Checotah and Muskogee have floods',
					image:
						'https://bloximages.chicago2.vip.townnews.com/wcfcourier.com/content/tncms/assets/v3/editorial/3/1c/31c11e3b-56a7-5133-b997-52ff3e27910d/5ef0f68f8c11e.image.jpg?resize=1200%2C854',
					state: 'Oklahoma',
					zip: '74447',
					vote: 0,
				},
				{
					id: 5,
					name: 'Tree Blocking Road',
					desc: 'Tree fell near my property in the road',
					state: 'Illinois',
					image:
						'https://www.thoughtco.com/thmb/0eQ-A1fxDyf9t_295wpN7Ha_Zfw=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-157481087-4646556b72624a6b9829ebec27861a0c.jpg',
					zip: '325964',
					vote: 0,
				},
				{
					id: 6,
					name: 'Graffiti',
					desc: 'Real Eye-Sore',
					state: 'Illinois',
					image: 'https://images.pexels.com/photos/4547590/pexels-photo-4547590.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
					zip: '91254',
					vote: 0,
				},
			])
		})
}
