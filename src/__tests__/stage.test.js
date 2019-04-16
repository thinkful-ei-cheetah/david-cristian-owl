import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Stage from '../stage/stage';

describe('Stage component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Stage name="Joe" onStage="true" avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders ui correctly', () => {
    const tree = renderer
      .create(<Stage name="Joe" onStage="true" avatar='https://robohash.org/doloredolorescupiditate.jpg?size=200x200&set=set1' />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
