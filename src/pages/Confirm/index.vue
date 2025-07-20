<template>
    <div class="cart_view">
        <p class="cart_view_title">{{t('cart.title')}}</p>
        <div class="cart_view_step">
            <div 
                :class="['cart_view_step_item', step <= 3 ? 'active' : '']"
            >
                <img
                    v-if="step > 1"
                    src="@assets/checked.png"
                    class="cart_view_step_item_img"
                />
                <div
                    v-if="step == 1"
                    class="cart_view_step_item_dot"
                >
                    1
                </div>
                {{t('cart.cart')}}
            </div>
            <div :class="['cart_view_step_line', step <= 2 ? 'active' : '']"></div>
            <div 
                :class="['cart_view_step_item', step == 2 ? 'active' : '']"
            >
                <img
                    v-if="step > 2"
                    src="@assets/checked.png"
                    class="cart_view_step_item_img"
                />
                <div
                    v-else
                    :class="['cart_view_step_item_dot', step !== 2 ? 'disable' : '']"
                >
                    2
                </div>
                {{t('cart.confirm')}}
            </div>
            <div :class="['cart_view_step_line', step == 3 ? 'active' : '']"></div>
            <div 
                :class="['cart_view_step_item', step == 3 ? 'active' : '']"
            >
                 <div
                    :class="['cart_view_step_item_dot', step !== 3 ? 'disable' : '']"
                >
                    3
                </div>
                {{t('cart.pay')}}
            </div>
        </div>
        <div class="cart_view_pay" v-if="step == 3">
            <img
                src="@assets/payIcon.png"
                class="cart_view_pay_img"
            />
            <div class="cart_view_pay_main">
                <p class="cart_view_pay_main_title">{{t('cart.tip')}}</p>
                <div class="cart_view_pay_main_info">
                    <div class="cart_view_pay_main_info_item mb8">
                        {{t('cart.orderNo')}}：
                        <span>2025071916364</span>
                    </div>
                    <div class="cart_view_pay_main_info_item mb15">
                        {{t('cart.payAmount')}}：
                        <span class="red">$334.80</span>
                    </div>
                    <div class="cart_view_pay_main_info_item">
                        {{t('cart.payType')}}：
                        <img
                            src="@assets/paypal.png"
                        />
                    </div>
                </div>
                <div class="cart_view_pay_main_action">
                    <div class="cart_view_pay_main_action_item">
                        {{t('cart.toPay')}}
                        <img
                            src="@assets/check.png"
                        />
                    </div>
                    <div class="cart_view_pay_main_action_item">
                        {{t('cart.credit')}}
                        <img
                            src="@assets/credit.png"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="cart_view_box" v-else>
            <div class="cart_view_box_cartList" v-if="step == 1">
                <div class="cart_view_box_title">{{ t('cart.subtitle') }}</div>
                <div class="cart_view_box_thead">
                    <div class="cart_view_box_thead_th w117">
                        <el-checkbox 
                            v-model="chooseAll"
                            class="check"
                        >
                            {{t('cart.chooseAll')}}
                        </el-checkbox>
                    </div>
                    <div class="cart_view_box_thead_th w377">{{t('cart.subtitle')}}</div>
                    <div class="cart_view_box_thead_th w114">{{t('cart.num')}}</div>
                    <div class="cart_view_box_thead_th w147">{{t('cart.fee')}}</div>
                    <div class="cart_view_box_thead_th w1">{{t('cart.operate')}}</div>
                </div>
                <div
                    class="cart_view_box_tr"
                    v-for="item in list"
                    :key="item"
                >
                    <div class="cart_view_box_tr_td w117">
                        <el-checkbox></el-checkbox>
                    </div>
                    <div class="cart_view_box_tr_td w377">
                        <img
                            src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                        />
                        Ledger Flex
                    </div>
                    <div class="cart_view_box_tr_td w114">x 1</div>
                    <div class="cart_view_box_tr_td w147">$ 288.00</div>
                    <div class="cart_view_box_tr_td w1">
                        <div class="cart_view_box_tr_td_action">{{t('cart.del')}}</div>
                    </div>
                </div>
            </div>
            <div class="cart_view_box_container" v-else>
                <div class="cart_view_box_title">{{ t('cart.address') }}</div>
                <div class="cart_view_box_address">
                    <div class="cart_view_box_address_user">王立东&nbsp;&nbsp;19816239876&nbsp;&nbsp;<span>{{t('cart.default')}}</span></div>
                    <div class="cart_view_box_address_detail">中国北京市朝阳区盛和街道方大楼街道198号晟和园小区10栋1单元901室</div>
                    <div class="cart_view_box_address_action">
                        <img
                            src="@assets/edit.png"
                            class="cart_view_box_address_action_icon"
                        />
                        <img
                            src="@assets/trash.png"
                            class="cart_view_box_address_action_icon"
                        />
                    </div>
                </div>
                <div class="cart_view_box_add">
                    <img
                        src="@assets/add.png"
                        class="cart_view_box_add_img"
                    />
                    {{t('cart.add')}}
                </div>
                <div class="cart_view_box_title">{{ t('cart.paymentType') }}</div>
                <div class="cart_view_box_paymentType">{{ t('cart.paymentType') }}</div>
                <div class="cart_view_box_title">{{ t('cart.deliver') }}</div>
                <div class="cart_view_box_deliver">
                    <img
                        src="@assets/icon.png"
                        class="cart_view_box_deliver_icon"
                    />
                    <div class="cart_view_box_deliver_main">
                        <div class="cart_view_box_deliver_main_tip1">{{ t('cart.tip1') }}</div>
                        <div class="cart_view_box_deliver_main_tip2">{{ t('cart.tip2') }}</div>
                    </div>
                </div>
                <div class="cart_view_box_title">{{ t('cart.note') }}</div>
                
                <textarea
                    class="cart_view_box_textarea"
                    :placeholder="t('cart.noteplaceholder')"
                />
            </div>
            <div class="cart_view_box_list">
                <div class="cart_view_box_titles">
                    {{step == 1 ? t('cart.total') : t('cart.tips')}}
                    <span class="cart_view_box_titles_num">2</span>
                </div>
                <div class="cart_view_box_line"></div>
                <div v-if="step == 2">
                    <div 
                        class="cart_view_box_list_item"
                        v-for="item in [1,2,3]"
                        :key="item"
                    >
                        <img
                            src="https://p0.ssl.img.360kuai.com/dmfd/158_88_75/t11508c75c8423c35fb6c06b871.webp?size=1024x819"
                            class="cart_view_box_list_item_img"
                        />
                        <div class="cart_view_box_list_item_main">
                            <p class="cart_view_box_list_item_main_name">Ledger Flex</p>
                            <p class="cart_view_box_list_item_main_info">
                                $ 288.00
                                <span>x 1</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="cart_view_box_info">
                    <span>{{t('cart.all')}}</span>
                    3
                </div>
                <div class="cart_view_box_info">
                    <span>{{t('cart.choose')}}</span>
                    1
                </div>
                <div class="cart_view_box_lines"></div>
                <div class="cart_view_box_all">
                    {{t('cart.total')}}
                    <span>$334.80</span>
                </div>
                <div class="cart_view_box_btn">
                    {{step == 1 ? t('cart.toPayment') : t('cart.submit')}}
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n';
const { t, locale } = useI18n();

const step = ref(2);
const list = ref([1,2,3,4,5]);
const chooseAll = ref(false);

</script>
<style lang="scss" scoped>
@import url('./index.scss');
</style>