import CategoryDirectory from '../../components/category-directory/category-directory';

const Home = () => {
	const categories = [
		{
			id: 1,
			title: 'Hats',
			imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		},
		{
			id: 2,
			title: 'Jackets',
			imageUrl: 'https://i.ibb.co/px2t6zj/jackets.png',
		},
		{
			id: 3,
			title: 'Sneakers',
			imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		},
		{
			id: 4,
			title: 'Womens',
			imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		},
		{
			id: 5,
			title: 'Mens',
			imageUrl: 'https://i.ibb.co/R70vnyl/bags.png',
		},
	];
	return <CategoryDirectory categories={categories} />;
};

export default Home;
