<template>
    <div class="user_box">
        <h4 class="user_box_title">个人信息</h4>
        <div class="user_box_avatar">
            <el-upload
                class="avatar-uploader"
                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <p>上传JPG或PNG图片。建议300 x 300。</p>
        </div>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-form-item label="昵称">
                <el-input v-model="formInline.nickname" placeholder="nickname" clearable />
            </el-form-item>
            <el-form-item label="邮箱">
                <el-input v-model="formInline.email" placeholder="email" clearable />
            </el-form-item>
            <el-form-item>
                <el-button
                    type="primary"
                    @click="onSubmit"
                    style="background: #fd560f;border-color: #fd560f;"
                >
                    提交
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script setup>
    import { ref, reactive } from 'vue';
    import { ElMessage } from 'element-plus';
    import { useRouter } from 'vue-router';
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
