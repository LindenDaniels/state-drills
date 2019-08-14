import React from "react";

class Tabs extends React.Component {
        static defaultProps = { 
            tabs: [],
         };
    
    
    
  render() {
      const buttons = this.props.tab.map((tab, index) => (
          <button key={index}>
              {tab.name}
          </button>
      ))
      const currentTab = this.props.tabs[0]
    return (
    <div>
     {buttons}
     <div className = 'content'>
         {currentTab.content}
     </div>
    </div>
    )}
}

export default Tabs;