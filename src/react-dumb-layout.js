import React from 'react';

class ReactDumbLayout extends React.Component
{
  static propTypes = {
    nodes: React.PropTypes.object.isRequired,
    structure: React.PropTypes.object.isRequired
  };

  render() {
    const { nodes, structure } = this.props;

    // Can override styles via the structure provided...
    let providedStyle = structure.style || {};
    let style = {...this.props.style, ...providedStyle};

    // Can override styles via the structure provided...
    let providedClassname = structure.className || "";
    let className = ( this.props.className || "" ) + " " + providedClassname;

    let renderNodes = structure.children.map((child, idx) => {

      // Support node rendering
      if (nodes.hasOwnProperty(child))
        return <div key={idx}>{nodes[child]}</div>;

      // RAW JSX Support too...
      if (typeof child == 'object' && child['_owner'])
        return <div key={idx}>{child}</div>;

      // Support objects where it just gives it all the ndoes and the remaining structure...
      if (typeof child == 'object')
        return <ReactDumbLayout key={idx} nodes={nodes} structure={child}/>;

      // RAW HTML Support too...
      if (typeof child == 'string')
        return <div key={idx} dangerouslySetInnerHTML={{__html: child}}></div>

    });

    return (
      <div style={style} className={className}>{renderNodes}</div>
    )
  }
}

export default ReactDumbLayout
