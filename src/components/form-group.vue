<!--
Copyright 2020 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/getodk/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <label class="form-group" :class="{ 'has-error': hasError }">
    <slot name="before"></slot>
    <input ref="input" v-bind="$attrs" class="form-control" :value="value"
      :placeholder="`${placeholder}${star}`" :required="required"
      :autocomplete="autocomplete" @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)">
    <span class="form-label">{{ placeholder }}{{ star }}</span>
    <password v-if="strengthmeter" v-model="value" :strength-meter-only="true"
      strength-meter-class="Password__strength-meter password-strength"/>
    <slot name="after"></slot>
  </label>
</template>

<script>
import { loadAsync } from '../util/async-components';

export default {
  name: 'FormGroup',
  components: { Password: loadAsync('Password') },
  inheritAttrs: false,
  props: {
    value: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    hasError: {
      type: Boolean,
      default: false
    },
    autocomplete: {
      type: String,
      required: true
    },
    strengthmeter: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    star() {
      return this.required ? ' *' : '';
    }
  },
  methods: {
    focus() {
      this.$refs.input.focus();
    }
  }
};
</script>
