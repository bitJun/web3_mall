<template>
    <el-dialog
        v-model="visible"
        :title="title"
        :width="width"
        :destroy-on-close="destroyOnClose"
        :before-close="handleBeforeClose"
        v-bind="$attrs"
    >
        <slot>
            <div>1</div>
        </slot>
        <template #footer>
            <slot name="footer">
                <el-button @click="handleCancel">{{ cancelText }}</el-button>
                <el-button type="primary" @click="handleOk">{{ okText }}</el-button>
            </slot>
        </template>
    </el-dialog>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: '提示',
  },
  width: {
    type: String,
    default: '50%',
  },
  destroyOnClose: {
    type: Boolean,
    default: true,
  },
  cancelText: {
    type: String,
    default: '取消',
  },
  okText: {
    type: String,
    default: '确定',
  },
});

const emit = defineEmits(['update:modelValue', 'ok', 'cancel']);

const visible = ref(props.modelValue);

// 同步props和visible
watch(
  () => props.modelValue,
  (val) => {
    visible.value = val;
  }
);

// 打开弹窗
const open = () => {
  visible.value = true;
};

// 关闭弹窗
const close = () => {
  visible.value = false;
};

// 点击确定
const handleOk = () => {
  emit('ok');
  emit('update:modelValue', false);
};

// 点击取消
const handleCancel = () => {
  emit('cancel');
  emit('update:modelValue', false);
};

// 关闭前回调
const handleBeforeClose = (done) => {
  emit('before-close', done);
};

defineExpose({ open, close });
</script>

<style scoped>
/* 可自定义样式 */
</style>