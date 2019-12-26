import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import ImageContent from './ImageContent'

const Newimage = (data) => {
	const [width, setWidth] = useState(0);
	const [cols, setCols] = useState(0);

	let items = Object.values(data)
	// let test = items.map(item => {
	// 	console.log(item)
	// })



	// let datas = items.map(item => {
	// 	const { artistName, artistImage } = item
	// 	return artistImage
	// })
	// console.log(datas)


	// console.log(ref)

	const ref = useRef(null);

	// console.log(ref)
	useEffect(() => {
		console.log(ref.current)
		// ref.current.offsetWidth
		// const currentWidth = ref.current ? ref.current.offsetWidth : 0;
		// setWidth(currentWidth)
		// if (currentWidth > 640) {
		// 	setCols(2)
		// } else {
		// 	setCols(1)
		// }

	}, [ref]);
	// console.log(cols)

	// let items = Object.keys(data).map((key, index) => {
	// 	return data[key]
	// })	



	return (
		<div className='image-result__body--container'>

			<GridList cellHeight={160} cols={6}>
				{items.map(item =>
					item._type === 'artist' ?
						<GridListTile key={item.img} style={{ border: '1px solid red' }} cols={1}>
							<span>{width} - </span>
							<span>{cols}</span>
							<img
								ref={ref}
								src={`${item.artistImage}` !== `null` ? `${item.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
								alt={item.artistName}
							/>
						</GridListTile>
						: null
				)}
			</GridList>
		</div>
	)



}


Newimage.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default Newimage;