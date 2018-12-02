/*
 * @Author: lf
 * @Date: 2018-12-02 18:27:08
 * @Last Modified by: lf
 * @Last Modified time: 2018-12-02 19:07:00
 * @文件说明: 首页页面
 */
 <template>
    <div>
        <img :src="$route.query.avatar" alt="头像" class="avatar">
        <div>尊敬的 {{$route.query.name}} </div>
    </div>
</template>
 <script>
    export default {
        data() {
            return {}
        }
    }
</script>
<style>
    .avatar {
        width: 20px;
    }
</style>
