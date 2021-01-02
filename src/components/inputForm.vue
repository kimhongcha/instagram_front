<template>
    <div class="input-form">
        <input :type="inputType" :id="inputId" :placeholder="inputPlaceHolder">
    </div>
</template>

<script>
export default {
    name: 'InputForm',
    props: [
            'inputType', 
            'inputId', 
            'inputPlaceHolder'
        ]
}
</script>

<style>

.input-form > input {
  width: 100%;
  background: 0 0;
  background: #f9f9f9;
  border: 1px solid #ebebeb;
  border-radius: 3px;
  box-sizing: border-box;
  color: #444444;
  font-size: 13px;
  padding: 7px 8px 7px;
}

</style>