import { palette } from '@expo/styleguide-native/dist/styles/palette';

import { makeTheme } from '../blueprint';

/* eslint-disable prettier/prettier */
export default makeTheme({
  colors: {
    'editor.background': palette.dark.gray2,
  },
  tokenColors: {
    // Color everything as gray10 by default
    'source': palette.dark.gray10,

    // prev javascript
    'meta.var.expr': palette.dark.gray12,
    'meta.var.expr meta.array.literal': palette.dark.gray10,
    'meta.var.expr meta.brace': palette.dark.gray10,
    'meta.import': palette.dark.gray12,
    'storage.type': palette.dark.pink10,
    'storage.type.function.arrow': palette.dark.gray10,
    'keyword.operator.assignment': palette.dark.gray10,
    'string': palette.dark.yellow11,
    'string meta.template.expression': palette.dark.gray12,
    'string punctuation.definition.template-expression': palette.dark.gray10,
    'meta.function-call': palette.dark.purple11,
    'meta.function-call variable.other.object': palette.dark.gray12,
    'support.type.object.module': palette.dark.purple11,
    'variable.parameter': palette.dark.gray12,
    'keyword.control': palette.dark.pink10,
    'keyword.operator': palette.dark.pink10,
    'storage.modifier.async': palette.dark.pink10,
    'constant.language.boolean': palette.dark.red11,
    'meta.object.member': palette.dark.gray12,
    'meta.object.member meta.array': palette.dark.gray10,
    'meta.object.member meta.brace': palette.dark.gray10,
    'meta.object.member punctuation.separator': palette.dark.gray10,
    'punctuation.accessor': palette.dark.gray10,
    'variable.other.object': palette.dark.gray12,
    'variable.other.property': palette.dark.gray12,
    'entity.name.function': palette.dark.purple11,

    'source.ignore': {

    },

    'source.java': {

    },

    'source.js': {

    },

    'source.json': {
      'punctuation.separator': palette.dark.gray10,
      'punctuation.definition': palette.dark.gray10,
      'punctuation.support': palette.dark.gray10,
      'meta.structure.dictionary': palette.dark.purple11,
      'support.type.property-name': palette.dark.purple11,
      'constant.language': palette.dark.yellow11,
      'constant.numeric': palette.dark.yellow11,
    },

    'source.kotlin': {
      'keyword.other': palette.dark.pink10,
      'entity.name.package': palette.dark.gray12,
      'storage.modifier.import': palette.dark.gray12,
      'storage.modifier': palette.dark.pink10,
      'support.class': palette.dark.green10,
      'entity.name.class': palette.dark.gray12,
      'entity.other.inherited-class': palette.dark.green10,
      'meta.block': palette.dark.gray12,
      'entity.name.type.class': palette.dark.purple11,
      'meta.class entity.name.type.class': palette.dark.green10,
      'storage.type.annotation': palette.dark.red11,
      'punctuation.section': palette.dark.gray10,
      'keyword.operator': palette.dark.gray10,
    },

    'source.objc': {

    },

    'source.ruby': {

    },

    'source.swift': {

    },

    // typescript
    'support.type.primitive': palette.dark.green10,
    'keyword.operator.type.annotation': palette.dark.gray10,
    // Not sure if this works 🤷‍♀️
    'source.tsx,source.ts': {

    },


    'text.xml': {

    },

    'source.yaml': {

    },
  },
});
