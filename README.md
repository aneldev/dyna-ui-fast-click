# About

Wrapper to get faster the click on mobiles and tablets.

Global utils like **fastclick** are not working always and is not the cleanest solution.

Some controls need the pure events, global solutions produce problems is some cases.

So, the `DynaFastClick` applies the fast click solution only for itself. We have the full control of the fast click with the `touchTimeout` prop.

Wrap it, listen the `onClick` event of the `DynaFastClick` and not of the content.

On desktop nothing is changing, the click event is the same one.

Written in TS runs everywhere.

# Usage

```
    <DynaFastClick onClick={()=>console.log('clicked')}>
        <button>Post it</button>
    </DynaFastClick>
```

# Demo

`npm start`

# Props

All props are optional except the children.

```
IDynaFastClickProps = {
	className?: string;     // class name in order to style it
	nodeType?: string;      // default is "span" and creates <span/>, set to "div" to get <div/>
	touchTimeout?: number;  // in ms, default is 120, set to 0 for even faster response, 0 is ideal when the content is not scrollable
	children: any;          // the content
	onClick?: () => void;   // the click event, triggered as fast as possible
}
```

