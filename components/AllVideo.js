import React from 'react';
import PropTypes from 'prop-types';

const AllVideo = data => {
	// console.log(data),
	return (
		data._type === 'video' ?
			<div key={data._id}>

				<div className='all-video__body'>
					<div className='all-video__body--thumbnail'>

						{/* <img
							src={`${data.artistImage}` !== `null` ? `${data.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png'}
							alt={data.artistName}
						/> */}
						{/* <video width="470" height="255" poster="https://image-placeholder.com/images/actual-size/100x75.png" controls>
							<object>
								<source src={data.url} type="video/mp4" />
								<source src={data.url} type="video/ogg" />
								<source src={data.url} type="video/webm" />
								<object data={data.url} width="470" height="255" />
								<embed src={data.url} width="470" height="255" />
							</object>
						</video> */}

						<iframe controls
							src={data.url}>
						</iframe>

						{/* <object width="240" height="125"
							data={data.url}>
						</object> */}


					</div>

					<div className='all-video__body--description'>
						<a href={data.url} target='_blank'>
							{/* <p><span dangerouslySetInnerHTML={{ __html: data.title }}></span></p> */}
						</a>
					</div>

				</div>

			</div>

			:
			null
	)
}


AllVideo.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default AllVideo;