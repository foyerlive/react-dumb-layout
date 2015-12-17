import React from 'react';

class ReactDumbLayout extends React.Component
{
  static propTypes = {
    nodes: React.PropTypes.object.isRequired,
    structure: React.PropTypes.object.isRequired,
    raw: React.PropTypes.bool
  };

  renderNodes( structure )
  {
    const { nodes } = this.props;
    return structure.children.map((child, idx) => {

      // Support node rendering
      if (nodes.hasOwnProperty(child))
        return React.cloneElement(nodes[child],{key:idx});

      // RAW JSX Support too...
      if (typeof child == 'object' && child['_owner'])
        return <div key={idx}>{child}</div>;

      // Support objects where it just gives it all the nodes and the remaining structure...
      if (typeof child == 'object')
      {
        // If an actual node is specified in the child, we'll also try to render that with the rest of the structure...
        if( child.hasOwnProperty( 'node' ) && nodes.hasOwnProperty( child.node ) )
        {
          return React.cloneElement(nodes[child.node],{key:idx},this.renderNodes(child));
        }
        return <ReactDumbLayout key={idx} nodes={nodes} structure={child}/>;
      }

      // RAW HTML Support too...
      if (typeof child == 'string')
        return <div key={idx} dangerouslySetInnerHTML={{__html: child}}></div>

    });
  }

  render() {
    const { nodes, structure } = this.props;

    // Can override styles via the structure provided...
    let providedStyle = structure.style || {};
    let style = {...this.props.style, ...providedStyle};

    // Can override styles via the structure provided...
    let providedClassname = structure.className || "";
    let className = ( this.props.className || "" ) + " " + providedClassname;

    let renderNodes = this.renderNodes( structure );
    return (
        <div style={style} className={className}>{renderNodes}</div>
    )
  }
}

export default ReactDumbLayout
