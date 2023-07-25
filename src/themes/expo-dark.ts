import { darkTheme, palette } from '@expo/styleguide-base';

import { makeTheme } from '../blueprint';

export default makeTheme({
  colors: {
    'activityBar.background': darkTheme.background.screen,
    'activityBar.border': darkTheme.background.default,
    'activityBar.foreground': darkTheme.text.secondary,
    'activityBar.activeBackground': darkTheme.background.subtle,
    'activityBarBadge.background': palette.dark.blue9,
    'badge.background': darkTheme.button.primary.background,
    'breadcrumb.background': darkTheme.background.subtle,
    'button.background': darkTheme.button.primary.background,
    'editor.background': darkTheme.background.default,
    'editor.border': darkTheme.background.default,
    'editorBracketHighlight.foreground1': darkTheme.text.quaternary,
    'editorBracketHighlight.foreground2': darkTheme.text.quaternary,
    'editorBracketHighlight.foreground3': darkTheme.text.quaternary,
    'editorBracketHighlight.foreground4': darkTheme.text.quaternary,
    'editorBracketHighlight.foreground5': darkTheme.text.quaternary,
    'editorBracketHighlight.foreground6': darkTheme.text.quaternary,
    'editorBracketHighlight.unexpectedBracket.foreground': darkTheme.text.quaternary,
    'editorCodeLens.foreground': darkTheme.text.secondary,
    'editorGroup.border': darkTheme.border.secondary,
    'editorGroupHeader.tabsBackground': darkTheme.background.screen,
    'editorGutter.foldingControlForeground': darkTheme.icon.secondary,
    'editor.wordHighlightBackground': darkTheme.background.hover,
    'editorLineNumber.foreground': darkTheme.text.quaternary,
    'editor.selectionHighlightBackground': darkTheme.border.secondary,
    'editorWidget.background': darkTheme.background.default,
    'editor.selectionBackground': darkTheme.background.hover,
    focusBorder: '#00000000',
    'list.activeSelectionBackground': darkTheme.background.element,
    'list.activeSelectionBorder': '#00000000',
    'list.focusOutline': '#00000000',
    'list.focusBackground': darkTheme.background.selected,
    'list.hoverBackground': darkTheme.background.hover,
    'list.inactiveSelectionBackground': darkTheme.background.subtle,
    'input.background': darkTheme.background.subtle,
    'inputOption.activeBackground': palette.dark.blue3,
    'inputOption.activeForeground': darkTheme.text.info,
    'panel.background': darkTheme.background.screen,
    'panel.border': darkTheme.background.element,
    'panelTitle.activeBorder': darkTheme.button.tertiary.text,
    'peekView.border': darkTheme.border.default,
    'peekViewEditor.background': darkTheme.background.subtle,
    'peekViewResult.background': darkTheme.background.default,
    'peekViewResult.selectionBackground': darkTheme.background.selected,
    'peekViewResult.lineForeground': darkTheme.icon.secondary,
    'peekViewResult.matchHighlightBackground': palette.dark.blue4,
    'peekViewTitleDescription.foreground': darkTheme.text.tertiary,
    'pickerGroup.foreground': darkTheme.text.tertiary,
    'pickerGroup.border': darkTheme.border.secondary,
    'scrollbar.shadow': darkTheme.background.screen,
    'scrollbarSlider.background': darkTheme.background.element,
    'scrollbarSlider.hoverBackground': darkTheme.background.hover,
    'scrollbarSlider.activeBackground': darkTheme.background.selected,
    'sideBar.background': darkTheme.background.screen,
    'sideBar.border': darkTheme.background.element,
    'sideBarSectionHeader.background': darkTheme.background.screen,
    'sideBarSectionHeader.border': darkTheme.background.default,
    'sideBarTitle.foreground': darkTheme.text.tertiary,
    'statusBar.background': darkTheme.background.screen,
    'statusBar.border': darkTheme.background.element,
    'statusBar.debuggingBackground': palette.dark.orange8,
    'statusBar.noFolderBackground': palette.dark.purple8,
    'statusBarItem.remoteBackground': darkTheme.button.primary.background,
    'tab.border': darkTheme.background.default,
    'tab.activeBackground': darkTheme.background.subtle,
    'tab.inactiveBackground': darkTheme.background.screen,
    'titleBar.activeBackground': darkTheme.background.screen,
    'titleBar.inactiveBackground': darkTheme.background.screen,
    'titleBar.border': darkTheme.background.default,
    'tree.indentGuidesStroke': '#00000000',
  },
  tokenColors: {
    'comment.line': darkTheme.text.tertiary,
    'comment.block': darkTheme.text.tertiary,

    'constant.numeric': darkTheme.text.warning,
    'constant.language': palette.dark.pink10,
    'constant.other.variable': palette.dark.green11,

    'editorBracketMatch.border': darkTheme.text.quaternary,

    'entity.name.tag': palette.dark.orange10,
    'entity.name.type': palette.dark.green11,
    'entity.name.type.class': palette.dark.blue11,
    'entity.name.type.module': palette.dark.blue11,
    'entity.other': palette.dark.blue11,
    'entity.other.attribute-name': palette.dark.red10,
    'entity.scope.name': palette.dark.blue10,

    'keyword.control': palette.dark.purple11,
    'keyword.control.flow': palette.dark.pink10,
    'keyword.control.new': palette.dark.orange10,
    'keyword.other': palette.dark.pink10,
    'keyword.operator': darkTheme.text.tertiary,
    'keyword.operator.assignment': darkTheme.text.quaternary,
    'keyword.operator.expression': palette.dark.orange10,
    'keyword.operator.logical': darkTheme.text.tertiary,
    'keyword.operator.rest': darkTheme.text.quaternary,
    'keyword.operator.spread': darkTheme.text.quaternary,
    'keyword.operator.type.annotation': darkTheme.text.quaternary,
    'keyword.operator.ternary': darkTheme.text.tertiary,
    'keyword.operator.new': palette.dark.orange10,

    'meta.brace': darkTheme.text.quaternary,
    'meta.definition.variable': darkTheme.text.default,
    'meta.definition.function': palette.dark.blue11,
    'meta.function-call': palette.dark.purple11,
    'meta.import': darkTheme.text.default,
    'meta.object-literal.key': darkTheme.text.default,

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

    'storage.modifier': palette.dark.red10,
    'storage.modifier.import': darkTheme.text.secondary,
    'storage.type': palette.dark.pink10,
    'storage.type.annotation': darkTheme.text.warning,
    'storage.type.generic': palette.dark.blue10,
    'storage.type.function.arrow': darkTheme.text.quaternary,

    'string.quoted': palette.dark.yellow11,
    'string.template': palette.dark.yellow11,

    'support.type.primitive': palette.dark.orange10,
    'support.type.property-name': palette.dark.orange10,
    'support.type.builtin': palette.dark.pink10,

    'variable.object.property': darkTheme.text.default,
    'variable.other': darkTheme.text.default,
    'variable.other.constant': palette.dark.blue11,
    'variable.other.macro.argument': palette.dark.pink10,
    'variable.parameter.probably': palette.dark.blue11,
    'variable.language': palette.dark.pink10,

    // Language-specific overwrites

    'source.ignore': {},

    'source.java': {
      'keyword.control.new': palette.dark.red10,
      'storage.modifier': palette.dark.orange11,
      'storage.modifier.extends': palette.dark.pink10,
      'storage.modifier.implements': palette.dark.pink10,
      'storage.type': palette.dark.green11,
      'storage.type.primitive': palette.dark.pink10,
    },

    'source.js': {},

    'source.jsx': {},

    'source.json': {},

    'source.kotlin': {
      'keyword.control.new': palette.dark.red10,
      'storage.modifier': palette.dark.orange11,
      'storage.type': palette.dark.green11,
    },

    'text.html.markdown': {
      'fenced_code.block.language': palette.dark.purple11,
      'markup.bold': palette.dark.orange11,
      'markup.inline.raw.string': palette.dark.yellow11,
      'markup.underline.link': palette.dark.blue11,
      'meta.paragraph': darkTheme.text.default,
      'punctuation.definition.heading.markdown': palette.dark.red10,
      'string.other.link.title': palette.dark.green11,
    },

    'source.objc': {
      'entity.name.function': palette.dark.blue11,
      'entity.name.function.preprocessor': palette.dark.orange11,
      'keyword.other.property.attribute': palette.dark.orange11,
      'meta.bracketed': palette.dark.pink10,
      'meta.function-call': darkTheme.text.default,
      'storage.type': palette.dark.red10,
      'support.class.cocoa': palette.dark.green11,
      'support.other.protocol': palette.dark.orange11,
    },

    'source.ruby': {
      'constant.other.symbol.hashkey': palette.dark.green11,
      'entity.name.function': palette.dark.blue11,
      'support.class': palette.dark.orange11,
      'variable.parameter.function': palette.dark.green11,
    },

    'source.shell': {
      'entity.name.command': palette.dark.blue11,
      'support.function.builtin': palette.dark.pink10,
    },

    'source.swift': {
      'entity.name.type': palette.dark.blue11,
      'keyword.control.new': palette.dark.red10,
      'meta.parameter-clause': palette.dark.green11,
      'meta.function-call': palette.dark.blue11,
      'meta.definition.function.body': darkTheme.text.default,
      'meta.definition.type.body': darkTheme.text.default,
      'meta.inheritance-clause': palette.dark.orange11,
      'punctuation.definition.attribute': palette.dark.orange11,
      'storage.modifier': palette.dark.orange11,
      'support.type': palette.dark.green11,
    },

    'source.ts': {
      'punctuation.definition.block.tag.jsdoc': palette.dark.orange11,
      'storage.type.class.jsdoc': palette.dark.orange11,
    },

    'source.tsx': {
      'punctuation.definition.block.tag.jsdoc': palette.dark.orange11,
      'storage.type.class.jsdoc': palette.dark.orange11,
    },

    'text.xml': {
      'entity.other.attribute-name.localname': palette.dark.blue11,
    },

    'source.yaml': {},
  },
});
