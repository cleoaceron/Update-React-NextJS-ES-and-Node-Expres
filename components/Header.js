import React, { useState } from 'react';
import '../scss/style.scss'
import {
	DataSearch,
} from '@appbaseio/reactivesearch'

const parseSuggestion = (suggestion) => ({
	// description: suggestion.source.artistDescription,
	label: (
		renderSuggestion(suggestion)
	),
	source: suggestion.source
})

const getValue = (suggestion) => {
	return [suggestion.source.artistName, suggestion.source.name]
}

Array.prototype.groupBy = (prop) => {
	return this.reduce(function (groups, item) {
		const val = item[prop]
		groups[val] = groups[val] || []
		groups[val].push(item)
		return groups
	}, {})
}

const test = (suggestion) => { suggestion.map(suggestions => console.log(suggestions.label)) }

const renderSuggestion = (suggestion) => {

	// suggestion.map(key, index) => ({
	// 	console.log(key)
	// })
	if (suggestion.source._type === 'artist') {
		return <div>
			<img src={suggestion.source.artistImage} height="50" width="60" style={{ marginRight: 10 }} />
			{suggestion.source.artistName} in
		 			<span style={{ color: 'dodgerblue', marginLeft: 5 }}>
				{suggestion.source._type}
			</span>
		</div>
	} else if (suggestion.source._type === 'product') {
		return <div>
			<img src={suggestion.source.featurePicture.url} height="50" width="60" style={{ marginRight: 10 }} />
			{suggestion.source.name} in
				 <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
				{suggestion.source._type}
			</span>
		</div>
	} else if (suggestion.source._type === 'download') {
		return <div>
			<img src='https://via.placeholder.com/150' height="50" width="60" style={{ marginRight: 10 }} />
			{suggestion.source.title} in
				 <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
				{suggestion.source._type}
			</span>
		</div>
	}

	return <div>
		<img src={suggestion.source.featurePicture} height="50" width="60" style={{ marginRight: 10 }} />
		{suggestion.source.name} {suggestion.source.name} in
			 <span style={{ color: 'dodgerblue', marginLeft: 5 }}>
			{suggestion.source._type}
		</span>
	</div>
}

const Layout = props => {
	const [isActive, setActive] = useState('');



	return (<header className="header-con">
		<div className="header js-header header--sub">
			<div className="header__container">
				<div className="header__menu js-header-menu">
					<span></span>
					<span></span>
					<span></span>
				</div>

				<div className="header__logo">
					<a href="#">
						<img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/logo_musictribe.svg" />
					</a>
				</div>

				<ul class="header__links">
					<li class="header__links-item">
						<a href="#">Crazy Deals</a>
					</li><li class="header__links-item">
						<a href="#">Best Sellers</a>
					</li><li class="header__links-item">
						<a href="#">Blowouts</a>
					</li><li class="header__links-item mr-0">
						<a href="#">New Products</a>
					</li><li class="header__links-item header__links-item--sub">
						<a href="#">Categories</a>
						<span class="indicator collapsed" data-target="#dropdown3" data-toggle="collapse"></span>
					</li>
				</ul>

				<div class="header__user js-header-user">
					<img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_login-outline.svg" alt="" />

					<div class="header__user-container">
						<div class="header__user-container-header">
							<img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_login-outline.svg" alt="" />
							<div class="details">
								<h3>Jeremy Espinosa</h3>
								<p>Triber</p>
							</div>
						</div>
						<div class="header__user-dropdown">
							<ul class="list">
								<li><a href="#">Sign In</a></li>
								<li><a href="#">Register</a></li>
							</ul>
						</div>
					</div>
				</div>

				<ul class="header__menu-icon js-header-menu-icon">
					<li className={`search-icon js-search test ${isActive}`} onClick={() => { setActive('active') }} style={{ display: isActive === '' ? 'block' : 'none' }}>
						<img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_search.svg" alt="" />
						<span class="close-icon"></span>
					</li>
					<li className={`search-icon js-search ${isActive}`} onClick={() => { setActive('') }}>
						<img src="https://testsite.musictri.be/unified/styleguide/public/images/icons/icon_search.svg" alt="" />
						<span class="close-icon"></span>
					</li>
				</ul>

				<div className={`header__search js-header-search ${isActive}`}>
					{/* <div class="header__search-wrapper"> */}
					{/* <input type="search" placeholder="Search" class="form-control" />
						<a href="#" class="search-icon"><img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_search.png" /></a> */}
					<DataSearch
						componentId='searchSensor'
						dataField={["artistName", "name", "productName", "productId", "code", "title", "subject", "brand"]}
						// autosuggest={true}
						highlight={false}
						placeholder='Search'
						iconPosition='right'
						className='elasticsearch-input'
						innerClass={{
							list: 'search-list'
						}}
						icon={<img src="https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_search.png" />}
						onValueSelected={(value, cause, source) => {
							if (!value) {
								return document.location.href = `/`
							} else {
								return document.location.href = `/?searchSensor="${value}"`
							}
						}}
						URLParams={true}
						renderNoSuggestion={() => (
							<div >
								No suggestion found
						</div>
						)}
						// parseSuggestion={parseSuggestion}
						// value={this.state.value}

						// parseSuggestion={(suggestion) => ({
						// 	label: (
						// 		<div>
						// 			{suggestion.source.artistName} {suggestion.source.name} by
						// 		<span style={{ color: 'dodgerblue', marginLeft: 5 }}>
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
							rawData,
							downshiftProps: {
								isOpen,
								getItemProps,
							}
						}) => {
							// console.log(data.slice(0, 10))
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
								<div style={{ position: 'absolute' }}>
									{data.slice(0, 5).map((suggestion, index) => (
										<div
											key={suggestion.value}
											{...getItemProps({ item: suggestion })}
										>
											{suggestion.value}
											{/* {console.log(suggestion)} */}
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
							// return <div {...getItemProps({ item: { value: suggestions } })}></div>
							// console.log({ ...getItemProps({ item: { value: rawSuggestions } }) })
						}}
					/>
					{/* </div> */}

					{/* <div class="header__search-title">Recommended Results</div>
					<ul class="header__search-list">
						<li>
							<a href="#">
								<p class="title">AMS 5DC</p>
								<p class="description">5" Dual Concentric Surface-Mount Loudspeaker for Installation Application</p>
							</a>
						</li>
					</ul> */}
				</div>

				{props.children}
			</div>
		</div>
	</header >)
}

export default Layout
