<script setup>
    useHead({
      title: 'Janyu',
      bodyAttrs: {
        class: 'body_style'
      }
    })
</script>

<template>
  <div>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
    .body_style {
        position: relative;
        margin: 0;
        padding: 0;
        border: 0;
        width: 100%;
        font-size: 16px;
        font-family: var(--font);
        background-color: var(--body-bg);
        &.hidden{
            overflow: hidden;
            &:before{
                display: block;
            }
        }
        &.full_hidden{
            overflow: hidden;
            &:after{
                display: block;
            }
        }
        &:before{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 600px;
            background: var(--top-bg);
            
        }
        &:after{
            content: '';
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, .7);
            z-index: 999;
        }
    }
</style>

