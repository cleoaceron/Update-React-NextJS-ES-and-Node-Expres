import React, { Component } from 'react';
import Link from 'next/link'
import ActiveLink from '../components/ActiveLink'
import { withRouter, Router } from 'next/router'

// export default ({ query }) => {
// 	console.log(this)
// 	return (
// 		< div >
// 			<div>Welcome to Next.js!</div>
// 			<Link route='/Artists' params={{ slug: 'hello-world' }}>
// 				<a>Hello world</a>
// 			</Link>
// 			or
// 	< Link route='/Artists/hello-world' >
// 				<a>Hello world</a>
// 			</Link >
// 		</div >
// 	)
// }

// export default class TabHeader extends Component {
// 	static getItialProps({ pathname, query }) {
// 		console.log(query)
// 		return { query }
// 	}
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			searchState: this.props.searchSensor,

// 		}
// 	}
// 	onChange = (searchState) => {
// 		Router.push({
// 			pathname: '/',
// 			query: { name: searchState }
// 		})
// 		console.log(this.props.router.query.name)
// 	}

// 	render() {
// 		// console.log(this.props.searchSensor)
// 		// console.log(searchState)
// 		console.log(this)
// 		// const Page = ({ router }) => {
// 		// 	return <p>{router.pathname}</p>
// 		// }
// 		// const PostLink = props => (
// 		// 	<li>
// 		// 		<Link href={`/post?title=${props.title}`}>
// 		// 			<a>{props.title}</a>
// 		// 		</Link>
// 		// 	</li>
// 		// )
// 		return (
// 			<nav className="tab-header__container nav flex-column flex-sm-row" >
// 				<Link href={`/?searchSensor=${this.props.searchSensor}`}><a>All{this.searchState}</a></Link>
// 				<Link href={`/products/?searchSensor=${this.props.searchSensor}`}><a>Products</a></Link>
// 				<Link href={`/artists/?searchSensor=${this.props.searchSensor}`}><a>Artists{this.props.searchSensor}</a></Link>
// 			</nav>
// 		)
// 	}
// }

// const TabHeader = ({ router }) => {
// 	// const { query } = this.props
// 	// console.log(router)
// 	// slug = router.query.searchSensor
// 	// console.log(router)
// 	// console.log(router.query)
// 	// console.log(query)
// 	// console.log(slug)
// 	// console.log(router)
// 	// console.log(slug)
// 	// console.log(query.searchSensor)
// 	// console.log(query.router.query.searchSensor)
// 	console.log(router)
// 	return (
// 		<nav className="tab-header__container nav flex-column flex-sm-row" >
// 			<ActiveLink href={`/`} prefetch={true}><span>All</span></ActiveLink>
// 			<ActiveLink href={`/products`}><span>Products</span></ActiveLink>
// 			<ActiveLink href={`/Artists`}><span>Artists</span></ActiveLink>
// 		</nav>
// 	)
// }

// class TabHeader extends React.Component {
// 	render() {
// 		const { router } = this.props
// 		console.log(router)
// 		return <div></div>
// 	}
// }

// TabHeader.getInitialProps = async ({ query }) => {
// 	console.log(await query)
// 	// console.log(query)
// 	return { query }
// }

// export default withRouter(TabHeader)


class TabHeader extends React.Component {
	// state = {
	// 	query: this.props.router.query.searchSensor,
	// }

	render() {
		const { query, asPath, } = this.props.router
		// console.log(this)
		const params = () => {
			const { query } = this.props.router
			if (Object.getOwnPropertyNames(query).length == 0) {
				return ''
			} else if (typeof query === 'object') {
				return `?searchSensor=${query.searchSensor}`
			}
		}

		// Router.push({
		// 	pathname: '/',
		// 	query: { query: 'test' }
		// })

		return (
			<nav className="tab-header__container nav flex-column flex-sm-row" >
				<ActiveLink href={`/` + params()} as={'/' + params()} className="active"><span>All</span></ActiveLink>
				<ActiveLink href={'/artists' + params()} as={'/artists' + params()}> <span>Artists</span></ActiveLink>
				<ActiveLink href={`/products` + params()} as={'/products' + params()}> <span>Products</span></ActiveLink>
				<ActiveLink href={`/images` + params()} as={'/images' + params()}> <span>Images</span></ActiveLink>
				<ActiveLink href={`/videos` + params()} as={'/videos' + params()}> <span>Videos</span></ActiveLink>
				<ActiveLink href={`/downloads` + params()} as={'/downloads' + params()}> <span>Downloads</span></ActiveLink>
				<ActiveLink href={`/discussions` + params()} as={'/discussions' + params()}> <span>Discussions</span></ActiveLink>
			</nav>
		)
	}
}

TabHeader.getInitialProps = async ({ query }) => {
	// console.log(await query)
	// console.log(query)
	return { query }
}

export default withRouter(TabHeader)
