import React, { Component } from 'react'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import TabHeader from './TabHeader'
import ArtistResult from '../components/ArtistResult'

import {
	ReactiveBase,
	ReactiveList,
	StateProvider,
	MultiList,
	DataSearch
} from '@appbaseio/reactivesearch'
import initReactivesearch from '@appbaseio/reactivesearch/lib/server';

const components = {
	settings: {
		app: 'artists',
		// url: 'http://localhost:9200',
		url: 'https://elastic.musictribe.com',
		type: 'artist'
	},
	datasearch: {
		componentId: 'searchSensor',
		dataField: ["artistName", "name"],
		autosuggest: true,
		// noInitialQuery: true,
		placeholder: 'Search',
		iconPosition: 'left',
		// onValueSelected: '{(value)=> Router.push(`searchSensor=${value}`)}',
		onValueSelected: (value, cause, source) => {
			if (!value) {
				return document.location.href = `/`
			} else {
				return document.location.href = `/?searchSensor="${value}"`
			}
		},
		// onValueSelected: (value, cause, source) => {
		// 	Router.push(`searchSensor=${value}`)
		// },
		// URLParams: true,
		// renderNoSuggestion: () => (
		// 	<div>
		// 		No suggestion found
		// </div>
		// ),
		// onValueChange: (value) => {
		// 	if (value === '') {
		// 		this.setState({ searchText: null })
		// 	}
		// },
		// onValueSelected: (value, cause, source) => {
		// 	this.setState({ searchText: value.value })
		// },
		// render: ({
		// 	loading,
		// 	error,
		// 	data,
		// 	value,
		// 	downshiftProps: {
		// 		isOpen,
		// 		getItemProps,
		// 	}
		// }) => {
		// 	if (loading) {
		// 		return <div>Fetching Suggestions.</div>
		// 	}
		// 	if (error) {
		// 		return (
		// 			<div>
		// 				Something went wrong! Error details {JSON.stringify(error)}
		// 			</div>
		// 		)
		// 	}
		// 	return (isOpen && Boolean(value.length)) ? (
		// 		<div>
		// 			{data.slice(0, 5).map((suggestion, index) => (
		// 				<div
		// 					key={suggestion.value}
		// 					{...getItemProps({ item: suggestion })}
		// 				>
		// 					{suggestion.value}
		// 					{/* {console.log(suggestion.source)} */}
		// 				</div>
		// 			))}
		// 			{Boolean(value.length) && (
		// 				<div {...getItemProps({ item: { label: value, value: value } })}>
		// 					Show all results for "{value}"
		// 		</div>
		// 			)}
		// 			{console.log(data)}
		// 		</div>
		// 	) : null
		// }
	},
	resultcard: {
		componentId: 'artistResult',
		dataField: 'artistName',
		size: 10,
		defaultQuery: () => ({
			query: {
				terms: {
					_index: ['artists'],
				},
			},
		}),
		render: ({
			loading,
			error,
			data,
		}) => {
			if (loading) {
				return <div>Fetching Results.</div>
			}
			if (error) {
				return (
					<div>
						Something went wrong! Error details {JSON.stringify(error)}
					</div>
				)
			}
			return (
				data.map(item => (
					<ArtistResult key={item._id} {...item} />
				))
			)
		},
		pagination: true,
		URLParams: true,
		react: {
			and: ["searchSensor", "artistFilter"],
		},
	},
	artistfilter: {
		componentId: 'artistFilter',
		dataField: 'typesOfArtist.keyword',
		title: 'Artists',
		showSearch: false,
		URLParams: true,
		react: {
			or: ["searchSensor"],
		},
	},

};

export default class Artists extends Component {
	state = {
		reactivedata: this.props,
		value: this.props.url.query.searchSensor
	}
	static async getInitialProps({ pathname, query }) {
		return {
			store: await initReactivesearch(
				[
					{
						datasearch: { ...components.datasearch },
						source: DataSearch,
					},
					{
						resultcard: { ...components.resultcard },
						source: ReactiveList,
					},

				],
				null,
				components.settings,
				query
			)
		}
	}
	onChange = (value, props) => {
		this.setState({
			value,
		});

	};

	render() {
		// const { reactivedata } = this.state
		// console.log(reactivedata.url.query)
		// console.log(this.props.query)
		// // console.log(components.settings)
		// // console.log(this.props.url.query.searchSensor)
		// // console.log(this.props.pathname)
		// console.log(this)
		// console.log(this.props.store)
		return (
			<Layout>
				<ReactiveBase {...components.settings} getInitialProps={this.props.store}>
					<div className='row'>
						<DataSearch {...components.datasearch} value={this.state.value} onChange={this.onChange} />
						{/* <SearchInput /> */}
					</div>
					<div className="row">
						{/* <Filter /> */}
						{/* <NumberBox {...components.numberbox} /> */}
						{/* <RangeSlider {...components.rangeslider} /> */}
						<div className='col-sm-5'>
							<div className='sidebar__container'>
								<MultiList {...components.artistfilter} />
							</div>
						</div>
						<div className='col-sm-15'>
							<TabHeader />
							<ReactiveList {...components.resultcard} />
						</div>
					</div>

				</ReactiveBase>
			</Layout>
		)
	}
}