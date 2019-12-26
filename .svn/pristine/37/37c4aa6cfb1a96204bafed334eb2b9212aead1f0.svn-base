import React, { Component } from 'react'
import {
	DataSearch
} from '@appbaseio/reactivesearch'

class SearchInput extends Component {



	// parseSuggestion = (suggestion) => ({
	// 	description: suggestion.source.artistDescription,
	// 	label: (
	// 		this.renderSuggestion(suggestion)
	// 	),
	// 	source: suggestion.source
	// })

	// getValue = (suggestion) => {
	// 	return [suggestion.source.artistName, suggestion.source.name]
	// }

	// renderSuggestion = (suggestion) => {
	// 	if (suggestion.source._type === 'artist') {
	// 		return <div>
	// 			<img src={suggestion.source.artistImage} height="50" width="60" style={{ marginRight: 10 }} />
	// 			{suggestion.source.artistName} in
	// 	 			<span style={{ color: 'dodgerblue', marginLeft: 5 }}>
	// 				{suggestion.source._type}
	// 			</span>
	// 		</div>
	// 	}

	// 	return <div>
	// 		<img src={suggestion.source.featurePicture.url} height="50" width="60" style={{ marginRight: 10 }} />
	// 		{suggestion.source.name} {suggestion.source.name} in
	// 		 <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
	// 			{suggestion.source._type}
	// 		</span>
	// 	</div>
	// }


	render() {
		return (
			<div className='col-sm-20'>
				<DataSearch

					componentId="searchSensor"
					dataField={['artistName', 'name']}
					noInitialQuery={true}
					placeholder="Search"
					// react={{
					// 	and: ['artistName', 'name']
					// }}
					// URLParams={true}
					URLParams
					autosuggest={true}
					style={{
						padding: '5px',
						marginTop: '10px'
					}}
					showIcon={false}
					renderNoSuggestion={() => (
						<div>
							No suggestions found
        				</div>
					)}
					onValueChange={(value) => {
						if (value === '') {
							this.setState({ searchText: null })
						}

					}}
					onValueSelected={(value, cause, source) => {
						this.setState({ searchText: value.value })
					}
					}
					// customQuery={(value, props, suggestion, data) => {
					// 	return {
					// 		"query": {
					// 			"match": {
					// 				"message": "tring out Elasticsearch"
					// 			}
					// 		},
					// 		"suggest": {
					// 			"my-suggestion": {
					// 				"text": "tring out Elasticsearch",
					// 				"term": {
					// 					"field": "message"
					// 				}
					// 			}
					// 		}
					// 	}
					// }}
					// onValueChange={
					// 	function (value, suggestion, props, data) {
					// 		console.log("current value: ", value)
					// 		// set the state
					// 		// use the value with other js code
					// 	}
					// }
					// parseSuggestion={this.parseSuggestion}
					// value={this.state.value}

					// parseSuggestion={(suggestion) => ({
					// 	label: (
					// 		<div>
					// 			{suggestion.source.artistName} {suggestion.source.name} by
					// 			<span style={{ color: 'dodgerblue', marginLeft: 5 }}>
					// 				{suggestion.source._type}
					// 			</span>
					// 		</div>
					// 	)
					// })}
					render={({
						loading,
						error,
						data,
						value,
						downshiftProps: {
							isOpen,
							getItemProps,
						}
					}) => {
						if (loading) {
							return <div>Fetching Suggestions.</div>
						}
						if (error) {
							return (
								<div>
									Something went wrong! Error details {JSON.stringify(error)}
								</div>
							)
						}
						return (isOpen && Boolean(value.length)) ? (
							<div>
								{data.slice(0, 5).map((suggestion, index) => (
									<div
										key={suggestion.value}
										{...getItemProps({ item: suggestion })}
									>
										{suggestion.value}
										{/* {console.log(suggestion.source)} */}
									</div>
								))}
								{Boolean(value.length) && (
									<div {...getItemProps({ item: { label: value, value: value } })}>
										Show all results for "{value}"
								</div>
								)}
								{/* {console.log(data)} */}
							</div>
						) : null
					}}
				/>
			</div>
		)
	}
}

export default SearchInput
