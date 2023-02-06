import { palette } from '@expo/styleguide-native/dist/styles/palette';
import { darkTheme } from '@expo/styleguide-native/dist/styles/themes';

import { makeTheme } from '../blueprint';

export default makeTheme({
  colors: {
    'editor.background': darkTheme.background.subtle, // slate2
  },
  tokenColors: {
    'comment.line': darkTheme.text.tertiary, // slate10
    'constant.numeric': darkTheme.text.warning, // yellow11
    'keyword.control': palette.dark.pink10,
    'keyword.operator': darkTheme.text.tertiary, // slate9
    'meta.definition.variable': darkTheme.text.default, // slate12
    'meta.function-call': palette.dark.purple11,
    'meta.import': darkTheme.text.default, // slate12
    'punctuation.definition.string': darkTheme.text.warning, // yellow11
    'punctuation.definition': darkTheme.text.quaternary, // slate8
    'storage.type': palette.dark.pink10,
    'string.quoted': darkTheme.text.warning, // yellow11
    'variable.other': darkTheme.text.default, // slate12
  },
});
