import React from 'react';
import './Questions.css';

const Questions = () => {
    return (
        <div className='questions'>
            <div>
                <h4>How does React work ?</h4>
                <p>
                A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML.React uses a declarative paradigm that makes it easier to reason about the application and aims to be both efficient and flexible. It designs simple views for each state in the application, and React will efficiently update and render just the right component when the data changes.
                </p>
            </div>
            <div>
                <h4>What are the differences between prop and state ?</h4>
                <p>
                Props are used to pass data to child components.
                Props are immutable which lets React do fast reference checks. Props are used to pass data down from your view-controller. Props have better performance.
                </p>
                <p>
                    On the other hand, states should not be accessed from child components, they need to be passed down with props instead. State is mutable. State hould be managed in your view-controller. State has worse performance than props. 
                </p>
            </div>
            <div>
                <h4>
                What other functions does useEffect have apart from loading data using API ? 
                </h4>
                <p>
                    It can be used to run a side effect depending on a state value.  For example, we may have a side effect to prepare a greeting message based on a spoken language(English, Spanish, Hindi, Tamil, etc.). Here the spoken language value is stored in a state variable.Every time we select a spoken language, the state gets updated.
                </p>
                <p>
                    We can also use props as a dependency to run the side effect. In this case, the side effect will run every time there is a change to the props passed as a dependency.
                </p>
                <p>
                    We can also run the side effect every time a combination of state and props change. This use case may occur when our side effect depends on the state and props values. In this case, we need to pass both the state and props variables as dependencies.
                </p>
            </div>
        </div>
    );
};

export default Questions;