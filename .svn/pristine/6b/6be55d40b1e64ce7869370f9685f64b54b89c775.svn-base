import React, { useState, useRef, useEffect, useContext } from 'react';
// import { useStateValue } from '../components/StateProvider'
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const ImageContent = (data) => {
	const [width, setWidth] = useState(0);
	const [cols, setCols] = useState(0)
	const [currentWidth, setCurrentWidth] = useState(ref)
	// const [{ size }, dispatch] = useStateValue()
	const ref = useRef(null);
	console.log(ref)
	useEffect(() => {
		const currentWidth = ref.current ? ref.current.offsetWidth : 0;
		setWidth(currentWidth)
		if (currentWidth > 640) {
			setCols(2)
			// dispatch({
			// 	type: 'getCol',
			// 	colSize: { newSize: cols }
			// })
		} else {
			setCols(1)
			// dispatch({
			// 	type: 'getCol',
			// 	colSize: { newSize: cols }
			// })
		}

	}, [ref.current]);



	return (
		<div>
			<span>{width}</span>
			<span>{cols}</span>
			<img
				ref={ref}
				src={`${data.artistImage}` !== `null` ? `${data.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
				alt={data.artistName}
			/>
		</div>

	)



}


ImageContent.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default ImageContent;