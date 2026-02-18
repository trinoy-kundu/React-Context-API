import React from 'react'
import Counter from './Components/Counter'
import ClickCounter from './Components/ClickCounter'
import Section from './Components/section';
import ThemeContext from './Contexts.jsx/themeContext';

export default class App extends React.Component {
  state = {
    theme: 'dark',
  };

  render() {
    const {theme} = this.state;
    return(
      <div>
        <Counter>
            {(count, incrementCount) => (
              <ClickCounter count={count} incrementCount={incrementCount}/>
            )}
        </Counter>
        <ThemeContext.Provider value={{theme}}>
          <Section />
        </ThemeContext.Provider>
      </div>
    )
  }
}
