import React from 'react';
import { withRouter } from 'next/router'
import PropTypes from 'prop-types';
const AllImage = (data) => {
	// console.log(data.router.query.searchSensor)
	// console.log(data)
	return (
		<div>
			{data._type === 'artist' ?
				<div className='col-sm-4' key={data._id}>
					<a href='#' target='blank'>
						<div className='all-images__body'>
							<div className='all-images__body--img'>
								<img
									src={`${data.artistImage}` !== `null` ? `${data.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
									alt={data.artistName}
								/>
							</div>
						</div>
					</a>
				</div>
				:
				data._type === 'product' ?
					<div className='col-sm-4' key={data._id}>
						<a href='#' target='blank'>
							<div className='all-images__body'>
								<div className='all-images__body--img'>
									<img
										src={`${data.featurePicture.url}` !== `null` ? `${data.featurePicture.url}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
										alt={data.name}
									/>
								</div>
							</div>
						</a>
					</div>
					:
					null}
		</div>
	)
}


AllImage.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default withRouter(AllImage)