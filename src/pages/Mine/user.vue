<template>
    <div class="user_box">
        <h4 class="user_box_title">个人信息</h4>
        <h4 class="user_box_line"></h4>
        <div class="user_box_main">
            <img
                src="@assets/avator.png"
                class="user_box_main_avator"
            />
            <div class="user_box_main_form">
                <el-upload
                    v-model:file-list="fileList"
                    class="upload-demo"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                    :show-file-list="false"
                    :on-success="handleAvatarSuccess"
                    :before-upload="beforeAvatarUpload"
                >
                    <div class="user_box_main_form_upload">
                        {{ t('center.upload') }}
                        <img
                            src="@assets/upload.png"
                            class="user_box_main_form_upload_icon"
                        />
                    </div>
                </el-upload>
                <p class="user_box_main_form_tip">{{ t('center.tip') }}</p>
                <div class="user_box_main_form_control">
                    <input
                        class="user_box_main_form_control_val"
                    />
                </div>
                <div class="user_box_main_form_control">
                    <input
                        class="user_box_main_form_control_val"
                    />
                </div>
                <div class="user_box_main_form_btn">{{t('center.submit')}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    import { ElMessage } from 'element-plus';
    import { useRouter } from 'vue-router';
    import { useI18n } from 'vue-i18n';
    const { t, locale } = useI18n();
    const router = useRouter();

    const imageUrl = ref('');

    const formInline = reactive({
        nickname: '',
        email: ''
    })

    const onSubmit = () => {
        console.log('submit!')
    }

    const handleAvatarSuccess = (
        response,
        uploadFile
    ) => {
        // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    }

    const beforeAvatarUpload = (rawFile) => {
        if (rawFile.type !== 'image/jpeg') {
            ElMessage.error('Avatar picture must be JPG format!')
            return false
        } else if (rawFile.size / 1024 / 1024 > 2) {
            ElMessage.error('Avatar picture size can not exceed 2MB!')
            return false
        }
        return true
    }
    
</script>
<style lang="scss" scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
@import url('./user.scss');
</style>
<style>
    .avatar-uploader .el-upload {
        border: 1px dashed var(--el-border-color);
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        transition: var(--el-transition-duration-fast);
        background: #ffffff;
    }

    .avatar-uploader .el-upload:hover {
        border-color: var(--el-color-primary);
    }

    .el-icon.avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 120px;
        height: 120px;
        text-align: center;
    }
</style>
