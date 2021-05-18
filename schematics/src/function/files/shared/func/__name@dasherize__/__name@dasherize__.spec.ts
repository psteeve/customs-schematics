import { <%= camelize(name)%> } from './<%= dasherize(name)%>';

describe('<%=camelize(name)%>', () => {
  describe('when input is TODO', () => {
    it('returns TODO', () => {
      expect(<%=camelize(name)%>('TODO')).toBe('TODO');
    });
  });
});
