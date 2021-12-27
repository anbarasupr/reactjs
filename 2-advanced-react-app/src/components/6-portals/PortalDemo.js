import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
	return ReactDOM.createPortal(
		<h1>Portals Demo</h1>,
		document.getElementById('portal-root')
	)
}

export default PortalDemo

/**
 * React Portals provide a way to render children into a dom node that exist outside of dom hierarchy of parent component.
 * In the dom tree, every component falls under the roo dom node.
 * Portals ahve the ability to break the dom hierarchy and render a children outside of the root dom.
 * Why ? - used for models, popup * 
 */
