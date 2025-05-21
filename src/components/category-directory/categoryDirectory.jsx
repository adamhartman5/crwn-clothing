import './categoryDirectory.scss';
import CategoryItem from '../category-item/categoryItem';

const CategoryDirectory = ({ categories }) => {
	return (
		<div className='categories-container'>
			{categories.map(({ title, imageUrl }) => (
				<CategoryItem key={title} category={{ title, imageUrl }} />
			))}
		</div>
	);
};

export default CategoryDirectory;
