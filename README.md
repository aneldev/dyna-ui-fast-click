# About

Wrapper to get faster the click on mobiles and tablets.

Global utils like **fastclick** are not working always and is not the cleanest solution.

Some controls need the pure events, global solutions produce problems is some cases.

So, the `DynaFastClick` applies the fast click solution only for what is wrapped.

Wrap it, listen the `onClick` event of the `DynaFastClick` _and not of the content_.

On desktop nothing is changing, the click event is the same one.

Written in TS runs everywhere.

# Under the hood

_The magic recipe_

On mobiles, the `onClick` is called on `touchend`swallowing the `click` event. 

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
	children: any;          // the content
	onClick?: () => void;   // the click event, triggered as fast as possible
}
```

