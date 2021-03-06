import React, { useState, useRef, useEffect } from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import GridListTile from '@material-ui/core/GridListTile';
import Grid from '@material-ui/core/Grid';

const getInfo = (data) => {
	if (data._type === 'artist') {
		return (
			// <div>{data.artistName}</div>
			console.log(data.artistName)
		)
	} else {
		return (
			// <div>{data.name}</div>
			console.log(data.name)
		)
	}
}

const ImageResult = data => {
	const [width, setWidth] = useState(0);
	const [heigth, setHeigth] = useState(0);
	const [datas, setDatas] = useState(data)
	const ref = useRef(null);

	// console.log(ref)
	// useEffect(() => {
	// 	setTest(data.style.width)
	// }, [])
	const colRef = useRef(datas.style.width)
	useEffect(() => {
		const currentWidth = ref.current ? ref.current.naturalWidth : 0;
		setWidth(currentWidth)
		const currentHeigth = ref.current ? ref.current.naturalHeight : 0;

		const getHeigth = currentHeigth + (currentHeigth / 2)
		setHeigth(getHeigth)
		// console.log(currentWidth)
	}, [ref.current]);
	// console.log(width)
	if (width > heigth) {
		colRef.current = "40%"
		// colRef.current =
		// colRef.current = test
		// console.log(colRef.current)

		// console.log(colRef.current)
	} else {
		colRef.current
	}
	// console.log(colRef.current)
	// console.log(test)
	// console.log(width)
	// console.log(colRef.current)
	const newData = update(datas, { style: { width: { $apply: function (x) { return colRef.current } } } })
	// const newData = update(datas,  { $merge: {col:colRef.current} })
	// const getCol = newData.col
	// console.log(getCol)
	// console.log(newData.col)
	// console.log(test.style.width)

	return (
		// <div className='image-result__body' key={data._id}>
		<React.Fragment>
			<GridListTile key={data._id} {...newData} onClick={() => getInfo(data)}>
				<div className='image-result__body' key={data._id}>
					{data._type === 'product' ?
						<div className='image-result__body--container'>
							<div className='image-result__body--img'>
								<img
									ref={ref}
									src={`${data.featurePicture.url}` !== `null` ? `${data.featurePicture.url}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
									alt={data.name}
								/>
							</div>
							<div className='image-result__body--description'>
								<a href={data.url} target='_blank'>
									{/* <p style={{ maxWidth: width }}> <span dangerouslySetInnerHTML={{ __html: data.name }}></span></p>
							<p style={{ maxWidth: width }}>{data.subHeadText}</p> */}
									<p> <span dangerouslySetInnerHTML={{ __html: data.name }}></span></p>
									<p>{data.subHeadText}</p>
								</a>
								{/* <p>{`The component has been re-rendered ${colRef.current} times`}</p> */}
							</div>
							
						</div>
						
						:
						data._type === 'artist' ?
							<div className='image-result__body--container'>
								<div className='image-result__body--img'>
									<img
										ref={ref}
										src={`${data.artistImage}` !== `null` ? `${data.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
										alt={data.artistName}
									/>
								</div>
								<div className='image-result__body--description'>
									<a href={data.urlExtension} target='_blank'>
										{/* <p style={{ maxWidth: width }}><span dangerouslySetInnerHTML={{ __html: data.artistName }}></span> | {data.artistBrand}</p>
								<p style={{ maxWidth: width }}><span dangerouslySetInnerHTML={{ __html: data.artistBio.replace(/<[^>]+>/g, '').substring(0, 300) }} /></p> */}
										<p><span dangerouslySetInnerHTML={{ __html: data.artistName }}></span> | {data.artistBrand}</p>
										<p><span dangerouslySetInnerHTML={{ __html: data.artistBio.replace(/<[^>]+>/g, '').substring(0, 300) }} /></p>
										{/* <span>{width}</span> */}
										{/* <p>{colRef}</p> */}
									</a>
								</div>
							</div>

							:
							null}
					{/* </div> */}
				</div>
			</GridListTile>
		</React.Fragment>
	)

}

ImageResult.muiName = 'GridListTile'
ImageResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default ImageResult;