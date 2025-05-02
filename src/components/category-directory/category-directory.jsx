import './category-directory.scss';
import CategoryItem from '../category-item/category-item';

const CategoryDirectory = ({categories}) => {
	
	return (
		<div className='categories-container'>
			{categories.map(({ title, imageUrl }) => (
				<CategoryItem key={title} category={{ title, imageUrl }} />
			))}
		</div>
	);
};

export default CategoryDirectory;
