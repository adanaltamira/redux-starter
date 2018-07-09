import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author Selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for use in dropdown', () => {
      const authors = [
        {id: 'cor-ho', firstName: 'cor', lastName: 'hou'},
        {id: 'sco-al', firstName: 'sco', lastName: 'al'}
      ];

      const expected = [
        {value: 'cor-ho', text: 'cor hou'},
        {value: 'sco-al', text: 'sco al'}
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
