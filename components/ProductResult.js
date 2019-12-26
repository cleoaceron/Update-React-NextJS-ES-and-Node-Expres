import PropTypes from 'prop-types';

const ProductResult = data => {

	return (
		<div className='product-result__container' key={data._id}>
			{
				data._type === 'product' ?
					<div>

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
					null
			}
		</div>
	)

}


ProductResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default ProductResult;