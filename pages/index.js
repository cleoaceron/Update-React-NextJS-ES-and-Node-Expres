import React, { useReducer, useContext } from 'react'
import { NextAuth } from 'next-auth/client'

import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import Header from '../components/Header'
// import SearchInput from '../components/SearchInput'
import AllResult from '../components/AllResult'
import AllImage from '../components/AllImage'
import AllVideo from '../components/AllVideo'
import TabHeader from './TabHeader'


import {
	ReactiveBase,
	ReactiveList,
	SelectedFilters,
	DataSearch,
	MultiList,
	MultiDataList,
	RatingsFilter
} from '@appbaseio/reactivesearch'
import initReactivesearch from '@appbaseio/reactivesearch/lib/server';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip'
import Link from 'next/link'
import Router from 'next/router'

// import { urlObjectKeys } from 'next-server/dist/lib/utils';
// import { get } from 'https';

const components = {
	settings: {
		app: 'artists,products,downloads,videos,learn,artist,news,customer,brand',
		url: 'https://elastic.musictribe.com',
		theme: {
			typography: {
				fontFamily: 'Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif',
			},
		},

		// app: 'artists,products,downloads,videos,learn,artist,news',
		// url: 'https://elastic.musictribe.com/',
		// ie11: true,
		// type: 'product',
		// transformRequest: props => ({ ...props, url: props.url.replace('_msearch', '_search') }),
		// url: 'http://localhost:9200'
	},
	datasearch: {
		componentId: 'searchSensor',
		dataField: ["artistName", "name", "productName", "productId", "code", "title", "brand", "subject"],
		highlight: true,
		fuzziness: 1,
		// noInitialQuery: true,
		placeholder: 'Search',
		iconPosition: 'right',
		// icon: <img onClick={(value) => Router.push(`/?searchSensor="a"`)} src="/static/search-icon.svg" style={{ display: 'flex' }} />,
		className: 'global-search__input col-sm-10',
		innerClass: {
			input: 'global-input'

		},
		// onValueSelected: '{(value)=> Router.push(`searchSensor=${value}`)}',
		onValueSelected: (value, cause, source) => {
			console.log(cause)
			console.log(cause)
			Router.push(`/?searchSensor="${value}"`)
			// if (!value) {
			// 	return document.location.href = `/`
			// } else {
			// 	return document.location.href = `/?searchSensor="${value}"`
			// }
		},
		URLParams: true,
		renderNoSuggestion: () => (
			<div>
				No suggestion found
		</div>
		),
		defaultQuery: (value) => ({
			"query": {
				"multi_match": {
					"query": `"${value}"`,
					"fields": ["artistName", "name", "productName", "productId", "code", "title", "brand", "subject"]
				}
			}
		}),
		// customHighlight: (props, value) => ({
		// 	// "query": {
		// 	// 	"multi_match": {
		// 	// 		"query": `"${value}"`,
		// 	// 		"fields": ["name", "code", "title", "brand"]
		// 	// 	}
		// 	// },
		// 	highlight: {
		// 		pre_tags: ['<mark>'],
		// 		post_tags: ['</mark>'],
		// 		"type": "unified",
		// 		"number_of_fragments": 3,
		// 		"fields": {
		// 			"body": {},
		// 			// "code": {},	
		// 			// "title": {},
		// 			// "brand": {},
		// 		},
		// 	},
		// }),
		render: ({
			loading,
			error,
			data,
			value,
			downshiftProps: {
				isOpen,
				getItemProps,
			}
		}) => {
			// console.log(data)
			if (loading) {
				return <div className="suggested__container">Fetching Suggestions.</div>
			}
			if (error) {
				return (
					<div>
						Something went wrong! Error details {JSON.stringify(error)}
					</div>
				)
			}
			// console.log(data)
			return (isOpen && Boolean(value.length)) ? (
				<div className='suggested__container'>
					{data.slice(0, 10).map((suggestion, index) => (
						<div className='suggested__value'
							key={suggestion.value}
							{...getItemProps({ item: suggestion })}
						>
							<span dangerouslySetInnerHTML={{ __html: suggestion.value.replace(/<[^>]+>/g, '') }}></span>
							{/* {suggestion.value} */}
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
		}
	},
	// resultvideo: {
	// 	componentId: "allVideo",
	// 	dataField: ["code", "title"],
	// 	size: 3,
	// 	defaultQuery: () => ({
	// 		query: {
	// 			terms: {
	// 				_index: ["videos"],
	// 			},
	// 		},
	// 	}),
	// 	pagination: false,
	// 	URLParams: true,
	// 	react: {
	// 		and: ["searchSensor", "artistFilter", "productFilter", "downloadFilter", "ratingsSensor", "websiteFilter"],
	// 		or: ["exactSensor", "withSensor"],
	// 		not: ["withoutSensor"]
	// 	},
	// 	render: ({
	// 		loading,
	// 		error,
	// 		data,
	// 	}) => {
	// 		// console.log(rawData)
	// 		const video = <div className='all-video__container'>{data.map(item => (
	// 			<AllVideo key={item._id} {...item} />
	// 		))}</div>
	// 		if (loading) {
	// 			return <div></div>
	// 		}
	// 		if (error) {
	// 			return (
	// 				<div>
	// 					Something went wrong! Error details {JSON.stringify(error)}
	// 				</div>
	// 			)
	// 		}
	// 		return [video]

	// 	},
	// },
	resultcard: {
		componentId: "allResult",
		dataField: ["artistName", "name", "productName", "productId", "title", "code", "brand", "subject", "search_snippet", "body", "categories.name"],
		// size: 10,
		defaultQuery: () => ({
			"query": {
				"terms": {
					"_index": ["artists", "products", "downloads", "news", "videos", "learn", "artist", "customer", "brand"],
				}
			},
		}),
		pagination: true,
		URLParams: true,
		paginationAt: 'bottom',
		pages: 5,
		size: 10,
		showEndPage: true,
		react: {
			and: ["searchSensor", "artistFilter", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "ratingsSensor", "websiteFilter"],
			or: ["exactSensor", "withSensor"],
			not: ["withoutSensor"]
		},
		renderResultStats: (stats) => (
			<div className='result-stats__container'>
				<p>{`( Showing page ${stats.currentPage + 1} of ${stats.numberOfPages} ) displayed result of ${stats.displayedResults} total of ${stats.numberOfResults} results in ( ${stats.time} ms )`}</p>
			</div>
		),
		renderPagination: (pages, totalPages, currentPage, setPage, fragmentName) => {
			/* 			new Array(pages.pages).fill(pages.currentPage).map((item, i) => 
							console.log((item + 1)+ ' ' + i + ' : ' + parseInt(i + (item + 1)))
						)
			 */
			let innerPages, innerTotalPages, subPages

			innerTotalPages = pages.totalPages - pages.currentPage
			if (innerTotalPages < pages.pages) {
				subPages = innerTotalPages
			} else {
				subPages = pages.pages
			}

			const selectPage = Number.isFinite(pages.totalPages) && (
				<div className="result-paginate__container">
					<a
						className={``}
						tabindex={`0`}
						onClick={e => (!pages.currentPage) ? null : pages.setPage(parseInt((pages.currentPage - 1), 10))}
						alt={`Page 1`}
						rel={`prev`}
						style={((pages.currentPage + 1) > 1) ? { display: 'inline' } : { display: 'none' }}
					>
						{`<`}
					</a>

					<a
						className={``}
						tabindex={`0`}
						onClick={e => (!pages.currentPage) ? null : pages.setPage(null)}
						rel={`next`}
						alt={`Page 3`}
						style={((pages.currentPage + 1) > 1) ? { display: 'inline' } : { display: 'none' }}
					>
						{`1`}
					</a>

					<a
						className={``}
						tabindex={`0`}
						onClick={e => (pages.currentPage < pages.pages) ? null : pages.setPage(parseInt((pages.currentPage - 5), 10))}
						rel={`next`}
						alt={`Page 3`}
						style={(pages.currentPage < pages.pages) ? { display: 'none' } : { display: 'inline' }}
					>
						{`...`}
					</a>


					{new Array(subPages).fill(pages.currentPage).map((item, i) =>

						<a
							className={(pages.currentPage + 1) == parseInt(i + (item + 1)) ? 'active' : ''}
							tabindex={`0`}
							onClick={(pages.currentPage >= pages.totalPages) ? null : e => pages.setPage(parseInt((i + item), 10))}
							alt={`Page 1`}
							key={`${i}-${pages.fragmentName}`}
						>
							{i + (item + 1)}
						</a>
					)}

					<a
						className={``}
						tabindex={`0`}
						onClick={e => ((pages.currentPage + pages.pages) >= pages.totalPages) ? null : pages.setPage(parseInt((pages.currentPage + 5), 10))}
						rel={`next`}
						alt={`Page 3`}
						style={((pages.currentPage + 1) > pages.pages) ? { display: 'inline' } : { display: 'none' }}
					>
						{`...`}
					</a>


					<a
						className={``}
						tabindex={`0`}
						onClick={e => ((pages.currentPage + 1) >= pages.totalPages) ? null : pages.setPage(pages.totalPages - 1, 10)}
						rel={`next`}
						alt={`Page 3`}
						style={((pages.currentPage + 1) > pages.pages) ? { display: 'inline' } : { display: 'none' }}
					>
						{pages.totalPages}
					</a>

					<a
						className={``}
						tabindex={`0`}
						onClick={e => ((pages.currentPage + 1) >= pages.totalPages) ? null : pages.setPage(parseInt((pages.currentPage + 1), 10))}
						rel={`next`}
						alt={`Page 3`}
						style={((pages.currentPage + 1) > pages.pages) ? { display: 'inline' } : { display: 'none' }}
					>
						{`>`}
					</a>
				</div>
			)

			return selectPage
		},
		render: ({
			loading,
			error,
			data,
			rawData,
			resultStats
		}) => {
			const image = <div className='row'>{data.slice(0, 5).map(item => (
				<AllImage key={item._id} {...item} />
			))}</div>
			const all = data.filter(item => item._type !== "video").map(item => (
				<AllResult key={item._id} {...item} />
			))
			const video = <div className='all-video__container'>{data.filter(item => item._type === "video").map(item => (
				<AllVideo key={item._id} {...item} />
			))}</div>

			if (loading) {
				return <div className='loader__container'>
					<img src='/static/loader.gif' />
				</div>
			}
			if (error) {
				return (
					<div>
						Something went wrong! Error details {JSON.stringify(error)}
					</div>
				)
			}
			return [image, all, video]
		},
		URLParams: true,
		react: {
			and: ["searchSensor", "artistFilter", "productFilter", "productSubFilter", "downloadSubFilter", "downloadFilter", "ratingsSensor", "websiteFilter", "discussionFilter"],
			or: ["exactSensor", "withSensor"],
			not: ["withoutSensor"]
		},
		innerClass: {
			sortOptions: 'sort-options'
		},
	},
	// imagecard: {
	// 	componentId: 'allImage',
	// 	dataField: ["artistName", "name", "productName"],
	// 	size: 1,
	// 	showResultStats: false,
	// 	defaultQuery: () => ({
	// 		query: {
	// 			terms: {
	// 				_index: ['products', 'artists', 'downloads'],
	// 			},
	// 		},
	// 	}),
	// 	render: ({
	// 		loading,
	// 		error,
	// 		data,
	// 	}) => {
	// 		if (loading) {
	// 			return <div>Fetching Results.</div>
	// 		}
	// 		if (error) {
	// 			return (
	// 				<div>
	// 					Something went wrong! Error details {JSON.stringify(error)}
	// 				</div>
	// 			)
	// 		}
	// 		return (
	// 			data.map(item => (
	// 				<AllImage key={item._id} {...item} />
	// 			))
	// 		)
	// 	},
	// 	pagination: true,
	// 	URLParams: true,
	// 	react: {
	// 		and: ["searchSensor", "artistFilter", "productFilter", "downloadFilter", "ratingsSensor", "websiteFilter"],
	// 		or: ["exactSensor", "withSensor"],
	// 		not: ["withoutSensor"]
	// 	},
	// 	sortOptions: [
	// 		{
	// 			label: "Relevance",
	// 			dataField: "_score",
	// 			sortBy: "asc"
	// 		},
	// 		{
	// 			label: "Type",
	// 			dataField: "_type",
	// 			sortBy: "asc"
	// 		}
	// 	],

	// },
	exactphrase: {
		componentId: 'exactSensor',
		dataField: ["artistName", "name", "productName", "productId", "code", "title", "subject", "brand", "body"],
		title: '',
		className: 'advance-search__container',
		autosuggest: false,
		// noInitialQuery: true,
		category: true,
		searchOperators: true,
		// highlight: true,
		placeholder: '',
		showIcon: false,
		// onValueSelected: '{(value) => Router.push(`searchSensor=${value}`)}',
		// onValueSelected: (value, cause, source) => {
		// 	document.location.href = `/?searchSensor=${value}`
		// },
		URLParams: false,
		renderNoSuggestion: () => (
			<div>
				No suggestion found
		</div>
		),
		// customQuery: (value, props) => ({
		// 	query: {
		// 		// term: {
		// 		// 	artistName: value,
		// 		// 	// name: value,
		// 		// 	// productName: value
		// 		// }
		// 		bool: {
		// 			filter: [
		// 				{
		// 					match: {
		// 						artistName: value
		// 					}
		// 				}
		// 			]
		// 		}

		// 	}
		// }),
		/* customQuery: (value) => ({
				// "query": {
				// 	"bool": {
				// 		"must": [{
				// 			"match_phrase": {
				// 				"_index": {
				// 					"query": `"${value}"`
				// 				}
				// 			}
				// 		}]
				// 	}
				// }
				"query": {
					"match": {
						"artistName": {
							"query": `"${value}"`
						}
					}
				}
		}), */
	},
	withphrase: {
		componentId: 'withSensor',
		dataField: ["artistName", "name", "productName", "productId", "code", "title", "subject", "brand", "body"],
		title: '',
		className: 'advance-search__container',
		autosuggest: false,
		// noInitialQuery: true,
		category: 'advanceSearch',
		highlight: true,
		placeholder: '',
		showIcon: false,
		// onValueSelected: '{(value) => Router.push(`searchSensor=${value}`)}',
		// onValueSelected: (value, cause, source) => {
		// 	document.location.href = `/?searchSensor=${value}`
		// },
		URLParams: false,
		renderNoSuggestion: () => (
			<div>
				No suggestion found
		</div>
		),
		/* customQuery: async (value, props) => (
			await {
				"query": {
					"bool": {
						"should": [{
							"match_phrase": {
								"_index": {
									"query": value
								}
							}
						}]
					}
				}
			}
		), */
	},
	withoutphrase: {
		componentId: 'withoutSensor',
		dataField:
			[
				"artistName",
				"name",
				"subHeadText",
				"productName",
				"productId",
				"code",
				"title",
				"subject",
				"brand",
				"body"
			],
		title: '',
		className: 'advance-search__container',
		autosuggest: false,
		// noInitialQuery: true,
		category: 'advanceSearch',
		highlight: true,
		placeholder: '',
		showIcon: false,
		/* customQuery: async (value, props) => (
			await {
				"query": {
					"bool": {
						"must_not": [{
							"match_phrase": {
								"_all": {
									"query": value
								}
							}
						}]
					}
				}
			}
		), */
		// react: {
		// 	and: ["allResult"],
		// },
		// onValueSelected: '{(value)=> Router.push(`searchSensor=${value}`)}',
		// onValueSelected: (value, cause, source) => {
		// 	document.location.href = `/?searchSensor=${value}`
		// },
		URLParams: false,
		renderNoSuggestion: () => (
			<div>
				No suggestion found
		</div>
		),
	},
	websitefilter: {
		componentId: 'websiteFilter',
		dataField: 'brand',
		title: 'Website',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		showFilter: true,
		showCount: false,
		// defaultValue: ['behringer'],
		react: {
			and: ["searchSensor"],
		},
	},
	artistfilter: {
		componentId: 'artistFilter',
		// dataField: 'typesOfArtist.keyword',
		dataField: 'typesOfArtist.keyword',
		data: [
			{
				label: "Guitar",
				value: "Guitar",
			},
			{
				label: "Bass",
				value: "Bass",
			},
			{
				label: "Studio Pros",
				value: "Production",
			},
			{
				label: "Broadcast",
				value: "Broadcast",
			}
		],
		title: 'Artists',
		className: 'filter__container',
		showSearch: false,
		showFilter: true,
		showCount: true,
		URLParams: true,
		// selectAllLabel: 'all',
		// showLoadMore: true,
		defaultQuery: () => ({
			query: {
				terms: {
					_index: ['artists'],
				},
			},
		}),
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor", "resultCard", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "discussionFilter"],
			and: ["websiteFilter"]
		},
	},
	productfilter: {
		componentId: 'productFilter',
		dataField: 'brand.keyword',
		data: [
			{
				label: "Behringer",
				value: "behringer",
			},
			{
				label: "Tannoy",
				value: "tannoy",
			},
			{
				label: "Turbosound",
				value: "turbosound",
			},
			{
				label: "TC Electronic",
				value: "tcelectronic",
			},
			{
				label: "Midas",
				value: "midas",
			},
			{
				label: "Klarkteknik",
				value: "klarkteknik",
			},
			{
				label: "Bugera",
				value: "bugera",
			},
			{
				label: "Eurocom",
				value: "eurocom",
			},
			{
				label: "TC Helicon",
				value: "tchelicon",
			},
			{
				label: "Labgruppen",
				value: "labgruppen",
			},
			{
				label: "Auratone",
				value: "auratone",
			},
			{
				label: "Lake",
				value: "lake",
			}
		],
		title: 'Products Categories',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		showFilter: true,
		showCount: true,
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productFilter", "artistFilter", "discussionFilter"],
			and: ["websiteFilter"]
		},
	},
	productsubfilter: {
		componentId: 'productSubFilter',
		dataField: 'categories.name.keyword',
		title: 'Products Sub Categories',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		showFilter: true,
		showCount: true,
		// showLoadMore: true,
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productFilter", "artistFilter", "discussionFilter"],
			and: ["websiteFilter"]
		},
	},
	downloadfilter: {
		componentId: 'downloadFilter',
		dataField: 'group.keyword',
		title: 'Download Type',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		defaultQuery: () => ({
			query: {
				terms: {
					_index: ['downloads'],
				},
			},
		}),
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor"],
			and: ["websiteFilter", "downloadSubFilter"]
		},
	},
	downloadsubfilter: {
		componentId: 'downloadSubFilter',
		dataField: 'subGroup.keyword',
		title: 'Download Sub Type',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		// showLoadMore: true,
		defaultQuery: () => ({
			query: {
				terms: {
					_index: ['downloads'],
				},
			},
		}),
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor"],
			and: ["downloadFilter"]
		},
	},
	discussionfilter: {
		componentId: 'discussionFilter',
		dataField: 'board.root_category.keyword',
		data: [
			{
				label: "Learn",
				value: "academy",
			},
			{
				label: "Brands Tribe",
				value: "brands",
			},
			{
				label: "Customer Tribe",
				value: "tribe",
			},
			{
				label: "Artist",
				value: "stories",
			},
			{
				label: "News",
				value: "",
			},
		],
		title: 'Discussion',
		className: 'filter__container',
		showSearch: false,
		URLParams: true,
		size: 10,
		showCount: true,
		// showLoadMore: true,
		queryFormat: 'or',
		defaultQuery: () => ({
			query: {
				terms: {
					_index: ['learn', 'news', 'artist', 'customer', 'brand'],
				},
			},
		}),
		renderItem: (label, count, isSelected) => (
			<div>
				{label}
				<span style={{
					marginLeft: 5
				}}>
					{'('+count+')'}
				</span>
			</div>
		),
		react: {
			or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productSubFilter", "productFilter", "artistFilter"],
			and: ["websiteFilter", "artistFilter"]
		},
	}
}


class Main extends React.Component {
	constructor(props) {
		super(props)
		// this.triggerQuery = this.triggerQuery.bind(this)
	}
	state = {
		reactivedata: this.props,
		value: this.props.url.query.searchSensor,
		exact: this.props.url.query.exactphrase,
		exactphrase: '',
		withphrase: '',
		withoutphrase: '',
		resultSize: [
			{ label: "10", value: 10 },
			{ label: "20", value: 20 },
			{ label: "30", value: 30 },
			{ label: "40", value: 40 },
			{ label: "50", value: 50 },
		],
		size: 10,

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
					// {
					// 	resultvideo: { ...components.resultvideo },
					// 	source: ReactiveList,
					// },
					{
						imagecard: { ...components.imagecard },
						source: ReactiveList,
					},
					{
						exactphrase: { ...components.exactphrase },
						source: DataSearch,
					},
				],
				null,
				components.settings,
				query,
			)
		}
	}

	// customQuery = () => {
	// 	let obj

	// 	obj = {
	// 		"query": {
	// 			"bool": {
	// 				"filter": {
	// 					"match": {
	// 						"artistName": this.state.exactphrase
	// 					}
	// 				},
	// 				"should": {
	// 					"match": {
	// 						"artistName": this.state.withphrase
	// 					}
	// 				},
	// 				"must_not": {
	// 					"match": {
	// 						"artistName": this.state.withoutphrase
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// 	return { obj }
	// }

	onChange = (value, props) => {
		this.setState({
			value,
		});
	};
	onChangephrase = async (exactphrase) => {
		await this.setState(() => ({
			exactphrase,
		}))
	}
	onChangewithphrase = async (withphrase) => {
		await this.setState({
			withphrase
		})
	}
	onChangewithoutphrase = async (withoutphrase) => {
		await this.setState({
			withoutphrase
		})
	}
	onChangeSize = async (size) => {
		await this.setState({
			size: size.value
		})
		console.log(size.value)
	}
	submitAdvance = async (e, triggerQuery, props) => {
		await triggerQuery()
	}
	clearAdvanceSearch = (props) => {

		let valueToHold = [], index = 0
		//list of available components for advance search
		const listOffilters = ["exactSensor", "withSensor", "withoutSensor"]

		const { selectedValues, setValue } = props
		//clear all selected components
		const clearFilter = (getComponent) => {
			getComponent.forEach(item => {
				if (listOffilters.includes(item)) {
					setValue(item, null)
				}
			})
		}
		//set filtered components
		const setFilter = (getComponentObj) => {
			getComponentObj.forEach((item) => {
				if (listOffilters.includes(item.label)) {
					if (item.value === "" || item.value === null) {
						index = valueToHold.indexOf(item.label);
						if (index > -1) {
							valueToHold.splice(index, 1);
						}
					} else {
						valueToHold.push(item.label)
					}
				}
			})

			return valueToHold
		}
		//get selected components
		const getComponent = Object.keys(selectedValues).map((component) => {
			return component
		})
		//get selected component obj
		const getComponentObj = Object.keys(selectedValues).map((component) => {
			return selectedValues[component]
		})
		//hide clear button to non-selected components, show otherwise
		return (
			<button
				onClick={() => clearFilter(getComponent)}
				disabled={(Object.keys(setFilter(getComponentObj)).length > 0) ? false : true}
			>
				Clear
			</button>
		)
	}
	advanceSelected = (props) => {
		const { selectedValues, setValue } = props
		const clearFilter = (component) => {
			setValue(component, null)
			setValue('withoutSensor', null)
		}

		var idx = 2
		var key = Object.keys(selectedValues)[idx]
		var value = selectedValues[key]
		return null
	}
	filterSelected = (props) => {
		let valueToHold = [], index = 0
		const { selectedValues, setValue } = props
		//list of available components for filter search results
		const listOffilters = ["artistFilter", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "discussionFilter", "ratingsSensor"]
		const clearFilter = (toFilters) => {
			toFilters.forEach(item => {
				if (listOffilters.includes(item)) {
					setValue(item, null)
				}
			})
		}
		//set filtered components
		const setFilter = (getComponentObj) => {
			getComponentObj.forEach((item) => {
				if (listOffilters.includes(item.label)) {
					if (item.value !== null && item.value.length === 0) {
						index = valueToHold.indexOf(item.label);
						if (index > -1) {
							valueToHold.splice(index, 1);
						}
					} else {
						// for ratings filter : reason ratings cannot be set into empty array
						if (item.label === "ratingsSensor") {
							index = valueToHold.indexOf(item.label);
							if (index > -1) {
								valueToHold.splice(index, 1);
							}
						} else {
							valueToHold.push(item.label)
						}
					}
				}
			})

			return valueToHold
		}

		const toFilter = Object.keys(selectedValues).map((component) => {
			return component

		})
		//get selected component obj
		const getComponentObj = Object.keys(selectedValues).map((component) => {
			return selectedValues[component]
		})

		//hide clear button to non-selected components, show otherwise
		return (
			<button
				onClick={() => clearFilter(toFilter)}
				disabled={(Object.keys(setFilter(getComponentObj)).length > 0) ? false : true}
			>
				Clear Filters
			</button>
		)

	}
	handleTest = () => {
		console.log(document.querySelector('.test'))
	}
	render() {
		const { reactivedata } = this.props
		console.log(this.props.router.asPath)
		console.log(this.state.value)

		return (
			<div className='search-result__container'>
				<ReactiveBase
					{...components.settings} getInitialProps={reactivedata}>
					<Header />
					<Layout>

						<div className='row '>
							<div className='col-sm-20'>
								<div className='global-search__container'>
									<DataSearch
										onValueChange={(value) => {
											console.log("current value: ", value)
											this.setState({
												value,
											})
										}}
										icon={< img onClick={(value) => Router.push(`/?searchSensor="${this.state.value}"`)} src="/static/search-icon.svg" style={{ display: 'flex' }} />}
										{...components.datasearch} />
									{/* <SearchInput /> */}
								</div>
							</div>
						</div>
						<div className='row'>
							{/* <Filter /> */}
							{/* <NumberBox {...components.numberbox} /> */}
							{/* <RangeSlider {...components.rangeslider} /> */}
							<div className='col-sm-5'>
								<div className='sidebar__container'>
									{/* <form> */}
									<div className='advance-search-container'>
										<div>
											<h5>Advance Search</h5>
										</div>
										<div>
											<SelectedFilters render={this.clearAdvanceSearch} />
										</div>
									</div>
									<p>
										With the exact phrase
										<span><a href='#' className='btn btn--rounded' data-tip=' Put exact words in quotes: "Music Tribe"'><img src='/static/info.svg' style={{ width: '13px', height: '13px' }} /> </a></span>
									</p>
									<ReactTooltip place="top" type="dark" effect="float" />
									<DataSearch
										{...components.exactphrase}
										value={this.state.exactphrase}
										onChange={this.onChangephrase}
										onKeyUp={this.submitAdvance}
									// customQuery={this.customQuery}
									/>
									<p>
										With one or more words
									<span><a href='#' className='btn btn--rounded' data-tip='Type the important words "Studio Condenser Microphone"'><img src='/static/info.svg' style={{ width: '13px', height: '13px' }} /> </a></span>
									</p>
									<ReactTooltip place="top" type="dark" effect="float" />
									<DataSearch
										{...components.withphrase}
										value={this.state.withphrase}
										onChange={this.onChangewithphrase}
										onKeyUp={this.submitAdvance}
									/>
									<p>
										Without the words
									<span><a href='#' className='btn btn--rounded' data-tip='Type the words that you don’t want to appear on the result'><img src='/static/info.svg' style={{ width: '13px', height: '13px' }} /> </a></span>
									</p>
									<ReactTooltip place="top" type="dark" effect="float" />
									<DataSearch
										{...components.withoutphrase}
										value={this.state.withoutphrase}
										onChange={this.onChangewithoutphrase}
										onKeyUp={this.submitAdvance}
									// customQuery={this.customQuery}
									/>
								</div>
								<div className='sidebar__container filter'>
									{/* </form> */}
									<h5 className='filter-title'>
										<span>Filter Search Results</span>
										<span><SelectedFilters render={this.filterSelected} /></span>
									</h5>
									{/* <MultiList {...components.websitefilter} /> */}
									<MultiDataList {...components.artistfilter}
										react={{
											or: ["searchSensor", "resultCard", "productFilter"],
											// and: ["websiteFilter"],
										}}
									/>
									<MultiDataList {...components.productfilter} />
									<MultiList {...components.productsubfilter} />
									<MultiList {...components.downloadfilter} />
									<MultiList {...components.downloadsubfilter} />
									<MultiDataList {...components.discussionfilter} />
									<RatingsFilter
										componentId="ratingsSensor"
										dataField="averageRating"
										title="Ratings"
										className="filter__container"
										icon={
											<img src="/static/icon_star.svg" style={{ width: '14px' }} />
										}
										dimmedIcon={
											<img src="/static/icon_star-gray.svg" style={{ width: '14px' }} />
										}
										data={[
											{ start: 5, end: 5, label: '' },
											{ start: 4, end: 4, label: '& up' },
											{ start: 3, end: 3, label: '& up' },
											{ start: 2, end: 2, label: '& up' },
											{ start: 1, end: 1, label: '& up' },
										]}
									/>
								</div>
								<div className='sidebar__footer'>
									<SelectedFilters render={this.filterSelected} />
								</div>
							</div>
							<div className='col-sm-15'>
								<TabHeader />
								{/* <ReactiveList {...components.imagecard} /> */}
								<ReactiveList {...components.resultcard}
									size={this.state.size} />
								{/* <ReactiveList {...components.resultvideo} /> */}
								<div className='result-select__container'>
									<span>
										Show <Select options={this.state.resultSize}
											onChange={this.onChangeSize}
											className='show-select'
											placeholder={this.state.size}
											classNamePrefix='show-select'
										/>
									</span>
								</div>
							</div>
						</div>


					</Layout>
				</ReactiveBase>
			</div>
		)
	}
}
export default withRouter(Main)