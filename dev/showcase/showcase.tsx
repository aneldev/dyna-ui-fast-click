import * as React from 'react';
import {DynaFastClick, IDynaFastClickProps} from "../../src";

import {faIcon, IShowcase} from "dyna-showcase";
import {Logo} from "../logo";

import "./showcase.less";

let myButton1: HTMLButtonElement;

export default {
	logo: <Logo/>,
	views: [
		{
			slug: 'intro',
			faIconName: 'circle-o-notch',
			title: 'Introduction',
			center: true,
			component: (
				<div>
					<h3>dyna-ui-fast-click</h3>
					<p>Control in react way the click behavior</p>
					<p><strong>Note that in mobile emulators of desktops, it looks not to work properly but on devices it works as well.</strong></p>
				</div>
			),
		},
		{
			hide: false,
			slug: 'component',
			faIconName: 'flask',
			title: 'DynaFastClick component',
			center: true,
			component: (
				<DynaFastClick
					onClick={() => {
						console.log('button pressed');
						myButton1.style.backgroundColor = "orange";
						setTimeout(() => {
							myButton1.style.backgroundColor = "white";
						}, 50);
					}}
				>
					<button
						ref={(el) => myButton1 = el}
						style={{width: "300px", height: "200px", backgroundColor: "white", "userSelect": "none"}}
					>my button
					</button>
				</DynaFastClick>
			),
			wrapperStyle: {},
		},
		{
			slug: 'the-end',
			title: 'the end',
			description: 'Thank you',
			center: true,
			component: (
				<div style={{textAlign: 'center'}}>
					<h1>The end</h1>
					<div style={{fontSize: '20px'}}>
						<p><a href="https://github.com/aneldev/dyna-ui-fast-click">{faIcon('github')} Github</a></p>
						<p><a href="https://www.npmjs.com/package/dyna-ui-fast-click">{faIcon('square')} npm</a></p>
					</div>
				</div>
			),
		},
	]
}as IShowcase;
