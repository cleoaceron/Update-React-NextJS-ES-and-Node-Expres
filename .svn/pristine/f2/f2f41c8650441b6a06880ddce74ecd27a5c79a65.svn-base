import { withRouter } from 'next/router'

// typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({ children, router, href, asPath, as }) => {

	const handleClick = e => {
		e.preventDefault()
		router.push(href, as)
	}
	// console.log(children)
	// console.log(href)
	// console.log(router)
	// console.log(router.asPath)
	// console.log(router.asPath)
	// console.log(children)
	// console.log(router.query)
	// console.log(href)
	// console.log(as)

	return (
		<a href={href} onClick={handleClick} as={as} className={router.asPath === href ? 'text-sm-left nav-link active' : 'text-sm-left nav-link'} >
			{children}
		</a>
	)
}

export default withRouter(ActiveLink)