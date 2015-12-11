import React from 'react';

class ReactDumbLayout extends React.Component
{
  static propTypes = {
    style: React.PropTypes.object,
    nodes: React.PropTypes.object.isRequired,
    structure: React.PropTypes.object.isRequired
  };

  render() {
    const { style, nodes, structure } = this.props;

    let renderNodes = structure.children.map((child, idx) => {

      // Support node rendering
      if (nodes.hasOwnProperty(child))
        return <div key={idx}>{nodes[child]}</div>;

      // RAW JSX Support too...
      if (typeof child == 'object' && child['_owner'])
        return <div key={idx}>{child}</div>;

      // Support objects...
      if (typeof child == 'object')
        return <ReactDumbLayout key={idx} nodes={nodes} structure={child}/>;

      // RAW HTML Support too...
      if (typeof child == 'string')
        return <div key={idx} dangerouslySetInnerHTML={{__html: child}}></div>

    });

    return (
      <div style={style}>{renderNodes}</div>
    )
  }
}

export default ReactDumbLayout
