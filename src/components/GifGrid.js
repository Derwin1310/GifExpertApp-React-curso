import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs';
import {GifGridItem} from './GifGridItem';

export const GifGrid = ({category}) => {
	const {data: imgs, loading} = useFetchGifs(category);

	return (
		<>
			<h3 className='card animate__animated animate__bounceInRight animate__delay-5s'>
				{category}
			</h3>
			{loading && <h4 className='animate__animated animate__flash'>Loading...</h4>}
			<div className='card-grid'>
				{imgs.map(img => (
					<GifGridItem key={img.id} {...img} />
				))}
			</div>
		</>
	);
};
