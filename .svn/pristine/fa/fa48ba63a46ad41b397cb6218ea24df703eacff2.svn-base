import React from 'react';
import PropTypes from 'prop-types';

const DownloadResult = (data) => {
	let date = new Date(data.publicationDate)
	return (
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
			null

	)
}

DownloadResult.propTypes = {
	data: PropTypes.any, // eslint-disable-line
};

export default DownloadResult;