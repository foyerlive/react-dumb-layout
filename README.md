# react-dumb-layout
A react 'container' renderer for managing the rendering of the 'dumb components' made available by your container via a JS Object 'structure'.

### Why?
Basically the only reason I created this little component is so I can control the order/structure things are rendered without using a bunch of IF statements... I need to render different components made available by a container slightly differently in certain circumstances and the functionality provided by CSS order wasn't enough for me.  Using this component I can completely remove certain elements, re-order them, re-nest them etc, easily by only adjusting a parent configuration (structure) object.

## Example
````javascript
import RDL from 'react-dumb-layout';

render()
{
  let nodes = {
    name: this.renderName(),
    gallery: this.renderGallery(),
    
  }
  
  let structure = {
    style: {
      border: '2px solid green'
    },
    children: [
      "name",
      "gallery"
      "<H1>Dangerously supports RAW HTML</H1>",
      <h2>Supports RAW JSX</h2>,
      {
        style: {
          border: '2px solid red'
        },
        children: [
          "name", // Can render the same node multiple times...
          <div>Seriously, I am sure you understand where the name came from...</div>
        ]
      }
    ]
  }
  return <RDL nodes={nodes} structure={structure}/>
}

```
