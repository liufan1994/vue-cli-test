/*
 * @Author: lf
 * @Date: 2018-12-02 16:27:22
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-02 19:05:08
 * @文件说明: 登录页面
 */
<template>
    <div class="index">
        <div>
            <input type="text" v-model="phone" placeholder="请输入手机号">
        </div>
        <div>
            <input type="text" v-model="code" placeholder="请输入验证码">
        </div>
        <div @click="loginFun">登录</div>
    </div>
</template>
<script>
    import axios from 'axios'
    // axios.defaults.headers['X-APPID'] = 'toBPJhUqos'
    export default {
        data() {
            return {
                phone: '13402318457',
                code: '12345'
            }
        },
        methods: {
            loginFun() {
                console.log(this.phone)
                console.log(this.code)
                axios
                    .post(
                        'https://open-api.beone.app/web/analyst/login',
                        {
                            phone: this.phone,
                            code: this.code
                        },
                        {
                            headers: {
                                'X-APPID': 'toBPJhUqos'
                            }
                        }
                    )
                    .then(res => {
                        console.log(res.data)
                        this.$router.push({
                            path: '/index',
                            query: {
                                name: res.data.data.user.name,
                                avatar: res.data.data.user.avatar
                            }
                        })
                    })
                    .catch(err => {
                        alert('网络错误')
                    })
            }
        }
    }
</script>
