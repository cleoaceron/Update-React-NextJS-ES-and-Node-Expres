import React, { Component } from 'react'
import {
	MultiList
} from '@appbaseio/reactivesearch'

class Filter extends Component {
	render() {
		return (
			<div className='col-sm-5' style={{ border: '1px solid grey' }}>
				<MultiList
					componentId="searchMusic"
					dataField="artistName.keyword"
					title="Artists"
				/>

			</div>
		)
	}
}

export default Filter