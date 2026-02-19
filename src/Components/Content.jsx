import Counter from './Counter';
import HoverCounter from './HoverCounter';
import ThemeContext from '../Contexts.jsx/themeContext';
import React from 'react';

export default class Content extends React.Component {

    render() {
        const {theme, switchTheme} = this.context;
        return (
        <div>
            <h1>This is a content</h1>
            <Counter>
                {(count, incrementCount) => (
                    <HoverCounter
                                count={count}
                                incrementCount={incrementCount}
                                theme={theme}
                                switchTheme={switchTheme}
                            />
                )}
            </Counter>
            
        </div>
    );
    }
}

Content.contextType = ThemeContext;