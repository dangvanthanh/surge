<template>
  <div>
    Inline Math
    <!-- <inline-math :expression="inlinemathExpr" /> -->
  </div>
</template>

<script>
// import { InlineMath } from 'vue-a11y-katex';

export default {
  // components: { InlineMath },
  data() {
    return {
      inlinemathExpr: 'c = \\pm\\sqrt{a^2 + b^2}'
    };
  }
};
</script>
