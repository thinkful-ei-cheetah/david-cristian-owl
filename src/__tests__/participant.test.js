import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Participant from '../participant/participant';

describe('Participant component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant name="Joe" inSession="true" onStage="false" avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders ui correctly', () => {
    const tree = renderer
    .create(<Participant name="Joe" inSession="true" onStage="false" avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1'/>)
    .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
