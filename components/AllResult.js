import React from 'react';
import PropTypes from 'prop-types';

const AllResult = data => {
	let date = new Date(data.publicationDate)
	return (
		// data._type === 'artist' ?
		// 	<div></div>
		// 	// <div>{data.artistName.slice(0, 5).map((item) => (item))}</div>
		// 	:
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
			data._type === 'product' ?
				<div className='product-result__container' key={data._id}>
					<div className='product-result__header'>
						<a href={data.url} target='_blank'>
							<p><span dangerouslySetInnerHTML={{ __html: data.name }}></span> | <span dangerouslySetInnerHTML={{ __html: data.brand }}></span></p>
							<p>{data.url}</p>
						</a>
					</div>

					<div className='product-result__body'>
						<div className='product-result__body--description'>
							<div className="rating-stars rating-stars--sm">
								{
									data.averageRating !== 0 ?
										<div className="rating-stars__container">
											<div className="rating-stars__percentage" style={{ width: `${Math.round((data.averageRating / 5) * 100).toFixed(2) + '%'}` }}></div>
										</div>
										:
										''
								}
								<div className="rating-stars__count">{`${data.numberOfReviews}` !== `0` ? `(${(data.numberOfReviews)})` : ''}</div>
							</div>
							{/* <p>{`${"★".repeat(data.averageRating)}`} {`${data.numberOfReviews}` !== `0` ? `(${(data.numberOfReviews)})` : `no ratings`}</p> */}
							<p>{data.subHeadText}</p>
						</div>
					</div>
				</div>
				:
				data._type === 'download' ?
					<div className='all-result__container' key={data._id}>
						<div className='all-result__header'>
							<a href={data.downloadPageUrl} target='_blank'>
								<p><span dangerouslySetInnerHTML={{ __html: data.productName }} /></p>
								<p>{data.downloadPageUrl}</p>
							</a>
						</div>
						<div className='all-result__body'>
							<div className='all-result__body--description'>
								{
									data.productName !== null ?
										<p><strong>Model:</strong> <span dangerouslySetInnerHTML={{ __html: data.productName }} /></p> : ''
								}
								{
									data.group !== null ?
										<p><strong>Type:</strong> <span dangerouslySetInnerHTML={{ __html: data.group }} /></p> : ''
								}
								{
									data.productName !== null ?
										<p><strong>Description:</strong> <span dangerouslySetInnerHTML={{ __html: data.title }} /></p> : ''
								}
								{
									data.version !== null ?
										<p><strong>Notes:</strong> <span dangerouslySetInnerHTML={{ __html: data.version }} /></p> : ''
								}
								{
									data.publicationDate !== null ?
										<p><strong>Date: </strong><span dangerouslySetInnerHTML={{ __html: date.toDateString() }} /></p> : ''
								}
							</div>
						</div>
					</div>
					:
					data._type === 'discussion' ?
						<div className='discussion-result__container' key={data._id}>
							<div>
								<div className='discussion-result__header'>
									<a href={'https://community.musictribe.com' + data.view_href} target='_blank'>
										<p><span dangerouslySetInnerHTML={{ __html: data.subject }}></span></p>
										<p>{'https://community.musictribe.com' + data.view_href}</p>
									</a>
								</div>

								<div className='discussion-result__body'>
									<div className='discussion-result__body--description'>
										{/* <p dangerouslySetInnerHTML={{ __html: data.body }}></p> */}
										<p>by <span dangerouslySetInnerHTML={{ __html: data.author.login }} /></p>
										<p dangerouslySetInnerHTML={{
											__html: data.body.length > 250 ?
												data.body.replace(/(?!<mark[^>]*>|<\/\mark[^>]*>)<[^>]+>/g, '').substring(0, 230) + '...' : data.body.replace(/(?!<mark[^>]*>|<\/\mark[^>]*>)<[^>]+>/g, '')
										}} />
									</div>
								</div>
							</div>
						</div>
						// :
						// data._type === 'discussion' ?
						// 	<div>
						// 		<div className='product-result__header'>
						// 			<a href={'https://community.musictribe.com' + data.view_href} target='_blank'>
						// 				<p>{data.subject}</p>
						// 				<p>{'https://community.musictribe.com' + data.view_href}</p>
						// 			</a>
						// 		</div>

						// 		<div className='product-result__body'>
						// 			<div className='product-result__body--description'>
						// 				{/* <p dangerouslySetInnerHTML={{ __html: data.body }}></p> */}
						// 				<p dangerouslySetInnerHTML={{ __html: data.body.replace(/<[^>]+>/g, '').substring(0, 250) }} />
						// 			</div>
						// 		</div>
						// 	</div>					// :
						// data._type === 'video' ?
						// <div className='all-result__container' key={data._id}>
						// 	<a href={data.url} target='blank'>
						// 		<div className='all-result__header'>
						// 			<p>{data.title}</p>
						// 		</div>
						// 	</a>
						// 	{/* <div className='all-result__body'>
						// 		<div className='all-result__body--img'>
						// 			<iframe width="420" height="315"
						// 				src={data.url}>
						// 			</iframe>
						// 		</div>
						// 		<div className='all-result__body--description'>
						// 			{`${data.artistBand}` !== `null` && '' ? <p><strong>Band:</strong> {data.artistBand}</p> : ''}
						// 		</div>
						// 	</div> */}
						// </div>


						:
						null
	)
}

AllResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default AllResult;