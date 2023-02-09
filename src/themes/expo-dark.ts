import { palette } from '@expo/styleguide-native/dist/styles/palette';
import { darkTheme } from '@expo/styleguide-native/dist/styles/themes';

import { makeTheme } from '../blueprint';

export default makeTheme({
  colors: {
    'activityBar.background': darkTheme.background.subtle,
    'editor.background': darkTheme.background.default,
    'editorGroupHeader.tabsBackground': darkTheme.background.subtle,
    'sideBar.background': darkTheme.background.screen,
    'tab.inactiveBackground': darkTheme.background.element,
  },
  tokenColors: {
    'comment.line': darkTheme.text.tertiary,
    'comment.block': darkTheme.text.tertiary,

    'constant.numeric': darkTheme.text.warning,
    'constant.language': palette.dark.pink10,
    'constant.other.variable': palette.dark.green10,

    'editorBracketMatch.border': darkTheme.text.quaternary,

    'entity.name.tag': palette.dark.orange10,
    'entity.name.function': palette.dark.purple11,
    'entity.name.type': palette.dark.green10,
    'entity.other': palette.dark.blue11,
    'entity.scope.name': palette.dark.blue10,

    'keyword.control': palette.dark.pink10,
    'keyword.control.new': palette.dark.orange10,
    'keyword.other': palette.dark.pink10,
    'keyword.operator': palette.dark.red10,
    'keyword.operator.assignment': darkTheme.text.quaternary,
    'keyword.operator.new': palette.dark.orange10,
    'keyword.operator.rest': darkTheme.text.quaternary,
    'keyword.operator.spread': darkTheme.text.quaternary,
    'keyword.operator.type.annotation': darkTheme.text.quaternary,
    'keyword.operator.ternary': palette.dark.red10,

    'meta.brace': darkTheme.text.quaternary,
    'meta.definition.variable': darkTheme.text.default,
    'meta.function-call': palette.dark.purple11,
    'meta.import': darkTheme.text.default,
    'meta.object-literal.key': darkTheme.text.secondary,

    'punctuation.accessor': darkTheme.text.quaternary,
    'punctuation.bracket': darkTheme.text.quaternary,
    'punctuation.definition': darkTheme.text.quaternary,
    'punctuation.definition.annotation': darkTheme.text.warning,
    'punctuation.definition.block': darkTheme.text.quaternary,
    'punctuation.definition.parameters': darkTheme.text.quaternary,
    'punctuation.definition.string': darkTheme.text.quaternary,
    'punctuation.section': darkTheme.text.quaternary,
    'punctuation.separator': darkTheme.text.quaternary,
    'punctuation.separator.dot-access': darkTheme.text.quaternary,
    'punctuation.terminator.statement': darkTheme.text.quaternary,

    'storage.modifier': palette.dark.orange10,
    'storage.modifier.import': darkTheme.text.secondary,
    'storage.type': palette.dark.pink10,
    'storage.type.annotation': darkTheme.text.warning,
    'storage.type.generic': palette.dark.blue10,
    'storage.type.function.arrow': darkTheme.text.quaternary,

    'string.quoted': darkTheme.text.warning,
    'string.template': palette.dark.yellow11,

    'support.type.primitive': palette.dark.orange10,
    'support.type.builtin': palette.dark.pink10,

    'variable.object.property': darkTheme.text.secondary,
    'variable.other': darkTheme.text.default,
    'variable.other.constant': palette.dark.blue11,
    'variable.other.macro.argument': palette.dark.pink10,
    'variable.parameter.probably': palette.dark.blue11,
    'variable.language': darkTheme.text.warning,

    // Language-specific overwrites

    'source.ignore': {},

    'source.java': {},

    'source.js,source.jsx': {},

    'source.json': {},

    'source.kotlin': {},

    'source.objc': {},

    'source.ruby': {},

    'source.swift': {},

    'source.tsx,source.ts': {},

    'text.xml': {},

    'source.yaml': {},
  },
});
