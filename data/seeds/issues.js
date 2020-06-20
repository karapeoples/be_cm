
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('issues').truncate()
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
								name: 'Beach Litter',
								desc: 'I want to start a cleanup day',
								state: 'Florida',
								zip: 53621,
								image:
									'https://i.guim.co.uk/img/media/492c6ec861b677bc710371b9fe1c1dfc82ee421a/0_69_4698_2820/master/4698.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=c239038bea5e28bc9b6ef7d49656d9d3',
								vote: 0,
							},
							{
								id: 3,
								name: 'Desecrated Graveyard',
								desc: 'After the Riots',
								state: 'Chicago',
								zip: 69695,
								image:
									'https://cdn.cnn.com/cnnnext/dam/assets/170226215055-philadelphia-cemetery-vandalism-vstop-ewoh-orig-00000000-exlarge-169.jpg',
								vote: 0,
							},
						])
    });
};
