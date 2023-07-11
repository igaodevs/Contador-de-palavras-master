import Index from './index.js';

describe('Renderizacao inicial', () => {
  it('Renderiza sem quebrar', () => {
    expect(
      JSON.stringify(
        Object.assign({}, Index, { _reactInternalInstance: 'testingAppRender' }),
      ),
    ).toMatchSnapshot();
})})