import React, { useState, useRef, useEffect } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';



const sizeResult = [
	{ label: "10", value: 10 },
	{ label: "20", value: 20 },
	{ label: "30", value: 30 },
	{ label: "40", value: 40 },
	{ label: "50", value: 50 },
];

const SizeResult = () => {
	const [size, setSize] = useState(sizeResult)
	return (
		<div className="app">
			<div className="container">
				<Select options={size}
					onChange={size => console.log(size.label, size.value)}
				/>
			</div>
		</div>
	)
}

SizeResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default SizeResult