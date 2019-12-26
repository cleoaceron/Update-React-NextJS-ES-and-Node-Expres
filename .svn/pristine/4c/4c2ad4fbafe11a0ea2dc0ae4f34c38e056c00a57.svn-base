import React from 'react';
import PropTypes from 'prop-types';

const ArtistResult = data => {
	return (
		data._type === 'artist' ?
			<div className='artist-result__container' key={data._id}>
				<div className='artist-result__header'>
					<a href={data.urlExtension} target='_blank'>
						<p><span dangerouslySetInnerHTML={{ __html: data.artistName }}></span> | {data.artistBrand}</p>
						<p>{data.urlExtension}</p>
					</a>
				</div>

				<div className='artist-result__body'>
					{
						data.typesOfArtist ?
							<ul className='artist-result__body--artist-type'>
								{
									data.typesOfArtist.map(item =>
										<li>{item}</li>
									)
								}
							</ul>
							: ''
					}
					{
						data.artistBand === null || data.artistBand === "" ?
							'' : <p><strong>Band: </strong><span dangerouslySetInnerHTML={{ __html: data.artistBand.replace(/<[^>]+>/g, '') }}></span></p>
					}
				</div>
			</div>
			:

			null
	)
}

ArtistResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default ArtistResult;