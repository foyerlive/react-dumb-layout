# react-dumb-layout
A react 'container' renderer for managing the rendering of the 'dumb components' made available by your container.

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
    },
    children: [
      "name",
      "gallery"
      "<H1>Dangerously supports RAW HTML</H1>",
      <h2>Supports RAW JSX</h2>,
      {
        "name", // Can render the same node multiple times...
        <div>Seriously, I'm sure you understand where the name came from...</div>
      }
    ]
  }
  return <RDL nodes={nodes} structure={structure}/>
}

```
